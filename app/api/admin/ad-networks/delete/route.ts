import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.redirect(new URL("/admin/login", req.url), { status: 303 });

  const form = await req.formData();
  const id = String(form.get("id") || "");
  if (id) {
    // Plätze nicht löschen, aber Network-Bezug entfernen
    await prisma.adPlacement.updateMany({ where: { networkId: id }, data: { networkId: null } });
    await prisma.adNetwork.delete({ where: { id } });
  }
  return NextResponse.redirect(new URL("/admin/ads", req.url), { status: 303 });
}
