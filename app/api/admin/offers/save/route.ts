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
  const name = String(form.get("name") || "").trim();
  let slug = String(form.get("slug") || "").trim();
  if (!slug) slug = slugify(name);

  const data = {
    name,
    slug,
    categoryId: String(form.get("categoryId") || ""),
    network: String(form.get("network") || "Direkt"),
    affiliateLink: String(form.get("affiliateLink") || "DEMO_LINK_ERSETZEN"),
    trackingId: String(form.get("trackingId") || ""),
    commissionType: String(form.get("commissionType") || "Sale"),
    estimatedCommission: String(form.get("estimatedCommission") || ""),
    shortDescription: String(form.get("shortDescription") || ""),
    longDescription: String(form.get("longDescription") || ""),
    advantages: String(form.get("advantages") || ""),
    disadvantages: String(form.get("disadvantages") || ""),
    priceNote: String(form.get("priceNote") || ""),
    rating: Number(form.get("rating") || 4),
    logoUrl: String(form.get("logoUrl") || ""),
    buttonText: String(form.get("buttonText") || "Zum Anbieter"),
    status: String(form.get("status") || "active"),
    isFeatured: form.get("isFeatured") === "on",
  };

  if (!data.name || !data.slug || !data.categoryId) {
    return NextResponse.redirect(new URL("/admin/offers", req.url), { status: 303 });
  }

  if (id) {
    await prisma.offer.update({ where: { id }, data });
  } else {
    await prisma.offer.create({ data });
  }

  return NextResponse.redirect(new URL("/admin/offers", req.url), { status: 303 });
}
