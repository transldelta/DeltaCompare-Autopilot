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
    await prisma.adClick.deleteMany({ where: { cpcOfferId: id } });
    await prisma.cpcOffer.delete({ where: { id } });
  }
  return NextResponse.redirect(new URL("/admin/cpc-offers", req.url), { status: 303 });
}
