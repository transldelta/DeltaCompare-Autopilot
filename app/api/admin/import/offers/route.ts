import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { parseCsv, normalizeOfferImport } from "@/lib/importers";
import { OFFERS as DEMO_OFFERS } from "@/data/seed-offers";

export const dynamic = "force-dynamic";

async function processRows(rows: Array<Record<string, string>>, mode: "preview" | "import") {
  const errors: Array<{ row: number; message: string }> = [];
  let created = 0;
  let updated = 0;

  for (let i = 0; i < rows.length; i++) {
    const result = normalizeOfferImport(rows[i]);
    if (!result.success) {
      errors.push({ row: i + 2, message: result.error.issues.map((iss) => iss.message).join("; ") });
      continue;
    }
    if (mode === "import") {
      const v = result.data;
      const cat = await prisma.category.findUnique({ where: { slug: v.categorySlug } });
      if (!cat) {
        errors.push({ row: i + 2, message: `Kategorie nicht gefunden: ${v.categorySlug}` });
        continue;
      }
      const exists = await prisma.offer.findUnique({ where: { slug: v.slug } });
      const { categorySlug, ...rest } = v;
      const data = { ...rest, categoryId: cat.id };
      if (exists) {
        await prisma.offer.update({ where: { id: exists.id }, data });
        updated++;
      } else {
        await prisma.offer.create({ data });
        created++;
      }
    }
  }
  return { rows: rows.slice(0, 50), errors, created, updated };
}

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const form = await req.formData();
  const mode = (String(form.get("mode") || "preview") as "preview" | "import");
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "no_file" }, { status: 400 });

  const text = await file.text();
  let rows: Array<Record<string, string>> = [];
  if (file.name.toLowerCase().endsWith(".json")) {
    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) throw new Error("JSON muss ein Array sein");
      rows = parsed.map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, String(v ?? "")])));
    } catch (e: any) {
      return NextResponse.json({ rows: [], errors: [{ row: 0, message: `JSON-Fehler: ${e.message}` }] });
    }
  } else {
    rows = parseCsv(text);
  }

  const result = await processRows(rows, mode);
  return NextResponse.json(result);
}

export async function GET(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });
  const isDemo = req.nextUrl.searchParams.get("demo") === "1";
  if (!isDemo) return NextResponse.json({ error: "missing_demo_flag" }, { status: 400 });

  const result = { created: 0, updated: 0, skipped: 0 };
  for (const offer of DEMO_OFFERS) {
    const cat = await prisma.category.findUnique({ where: { slug: offer.categorySlug } });
    if (!cat) {
      result.skipped++;
      continue;
    }
    const { categorySlug, ...rest } = offer;
    const exists = await prisma.offer.findUnique({ where: { slug: offer.slug } });
    if (exists) {
      await prisma.offer.update({ where: { id: exists.id }, data: { ...rest, categoryId: cat.id } });
      result.updated++;
    } else {
      await prisma.offer.create({ data: { ...rest, categoryId: cat.id } });
      result.created++;
    }
  }
  return NextResponse.json(result);
}
