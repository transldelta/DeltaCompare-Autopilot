import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const form = await req.formData();
  const id = String(form.get("id") || "");
  const data = {
    name: String(form.get("name") || "").trim(),
    type: String(form.get("type") || "OTHER"),
    publisherId: String(form.get("publisherId") || ""),
    status: String(form.get("status") || "active"),
    notes: String(form.get("notes") || ""),
  };
  if (!data.name) {
    return NextResponse.redirect(new URL("/admin/ads?error=missing", req.url), { status: 303 });
  }
  if (id) {
    await prisma.adNetwork.update({ where: { id }, data });
  } else {
    await prisma.adNetwork.create({ data });
  }
  return NextResponse.redirect(new URL("/admin/ads", req.url), { status: 303 });
}
