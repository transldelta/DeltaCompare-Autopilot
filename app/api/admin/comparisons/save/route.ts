import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const form = await req.formData();
  const id = String(form.get("id") || "");
  const title = String(form.get("title") || "").trim();
  let slug = String(form.get("slug") || "").trim();
  if (!slug) slug = slugify(title);

  const faqRaw = String(form.get("faq") || "[]");
  // Validate JSON, fall back to empty array
  try {
    JSON.parse(faqRaw);
  } catch {
    return NextResponse.redirect(new URL("/admin/comparisons?error=faq_json", req.url), { status: 303 });
  }

  const data = {
    title,
    slug,
    categoryId: String(form.get("categoryId") || ""),
    seoTitle: String(form.get("seoTitle") || title),
    metaDescription: String(form.get("metaDescription") || ""),
    intro: String(form.get("intro") || ""),
    content: String(form.get("content") || ""),
    faq: faqRaw,
    offerSlugs: String(form.get("offerSlugs") || ""),
    status: String(form.get("status") || "active"),
  };

  if (!data.title || !data.slug || !data.categoryId) {
    return NextResponse.redirect(new URL("/admin/comparisons", req.url), { status: 303 });
  }

  if (id) {
    await prisma.comparisonPage.update({ where: { id }, data });
  } else {
    await prisma.comparisonPage.create({ data });
  }
  return NextResponse.redirect(new URL("/admin/comparisons", req.url), { status: 303 });
}
