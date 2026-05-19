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

  const categoryId = String(form.get("categoryId") || "") || null;
  const data = {
    name,
    slug,
    categoryId,
    network: String(form.get("network") || "Direkt"),
    cpcRate: Number(form.get("cpcRate") || 0),
    targetUrl: String(form.get("targetUrl") || "DEMO_LINK_ERSETZEN"),
    affiliateLink: String(form.get("affiliateLink") || ""),
    trackingId: String(form.get("trackingId") || ""),
    description: String(form.get("description") || ""),
    status: String(form.get("status") || "active"),
  };

  if (!data.name || !data.slug || !data.targetUrl) {
    return NextResponse.redirect(new URL("/admin/cpc-offers?error=missing", req.url), { status: 303 });
  }

  if (id) {
    await prisma.cpcOffer.update({ where: { id }, data });
  } else {
    await prisma.cpcOffer.create({ data });
  }
  return NextResponse.redirect(new URL("/admin/cpc-offers", req.url), { status: 303 });
}
