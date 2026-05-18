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
    const count = await prisma.offer.count({ where: { categoryId: id } });
    if (count > 0) {
      return NextResponse.redirect(new URL("/admin/categories?error=in_use", req.url), { status: 303 });
    }
    await prisma.category.delete({ where: { id } });
  }
  return NextResponse.redirect(new URL("/admin/categories", req.url), { status: 303 });
}
