import { NextRequest, NextResponse } from "next/server";
import { checkCredentials, createSession, AUTH_COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = String(form.get("email") || "");
  const password = String(form.get("password") || "");
  const next = String(form.get("next") || "/admin/dashboard");

  if (!(await checkCredentials(email, password))) {
    return NextResponse.redirect(new URL(`/admin/login?error=invalid&next=${encodeURIComponent(next)}`, req.url), { status: 303 });
  }

  const token = await createSession(email);
  const res = NextResponse.redirect(new URL(next, req.url), { status: 303 });
  res.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
