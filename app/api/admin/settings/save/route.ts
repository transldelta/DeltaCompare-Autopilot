import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

const KEYS = [
  "site_name",
  "site_domain",
  "affiliate_disclosure",
  "google_analytics_id",
  "google_tag_manager_id",
  "meta_pixel_id",
  "tiktok_pixel_id",
];

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const form = await req.formData();
  for (const key of KEYS) {
    const value = String(form.get(key) || "");
    await prisma.settings.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
  return NextResponse.redirect(new URL("/admin/settings", req.url), { status: 303 });
}
