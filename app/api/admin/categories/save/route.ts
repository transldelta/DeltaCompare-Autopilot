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
    description: String(form.get("description") || ""),
    icon: String(form.get("icon") || "Tag"),
    status: String(form.get("status") || "active"),
  };

  if (!data.name || !data.slug) {
    return NextResponse.redirect(new URL("/admin/categories", req.url), { status: 303 });
  }

  if (id) {
    await prisma.category.update({ where: { id }, data });
  } else {
    await prisma.category.create({ data });
  }
  return NextResponse.redirect(new URL("/admin/categories", req.url), { status: 303 });
}
