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

  const networkId = String(form.get("networkId") || "") || null;
  const data = {
    name,
    slug,
    placementType: String(form.get("placementType") || "IN_CONTENT"),
    adType: String(form.get("adType") || "DISPLAY"),
    networkId,
    codeSnippet: String(form.get("codeSnippet") || ""),
    isActive: form.get("isActive") === "on",
    showOnMobile: form.get("showOnMobile") === "on",
    showOnDesktop: form.get("showOnDesktop") === "on",
  };

  if (!data.name || !data.slug) {
    return NextResponse.redirect(new URL("/admin/ad-placements?error=missing", req.url), { status: 303 });
  }

  if (id) {
    await prisma.adPlacement.update({ where: { id }, data });
  } else {
    await prisma.adPlacement.create({ data });
  }
  return NextResponse.redirect(new URL("/admin/ad-placements", req.url), { status: 303 });
}
