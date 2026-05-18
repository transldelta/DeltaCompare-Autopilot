import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { parseCsv } from "@/lib/importers";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.redirect(new URL("/admin/revenue?error=no_file", req.url), { status: 303 });

  const text = await file.text();
  const rows = parseCsv(text);

  let created = 0;
  for (const row of rows) {
    const dateStr = (row.date || "").trim();
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) continue;
    await prisma.revenueImport.create({
      data: {
        network: row.network || "Unbekannt",
        date,
        clicks: Number(row.clicks || 0),
        leads: Number(row.leads || 0),
        sales: Number(row.sales || 0),
        revenue: Number(row.revenue || 0),
        csvFileName: file.name,
      },
    });
    created++;
  }

  return NextResponse.redirect(new URL(`/admin/revenue?imported=${created}`, req.url), { status: 303 });
}
