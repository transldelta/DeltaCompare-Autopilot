import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "dc_admin";
const EXPIRES_SECONDS = 60 * 60 * 12; // 12 Stunden

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET || "dev-secret-bitte-aendern-mindestens-32-zeichen";
  return new TextEncoder().encode(secret);
}

export async function createSession(email: string): Promise<string> {
  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRES_SECONDS}s`)
    .sign(getSecret());
  return token;
}

export async function verifyToken(token: string): Promise<{ email: string; role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return { email: String(payload.email), role: String(payload.role) };
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string) {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: EXPIRES_SECONDS,
    secure: process.env.NODE_ENV === "production",
  });
}

export function clearSessionCookie() {
  cookies().set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
}

export async function getCurrentAdmin() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export function checkCredentials(email: string, password: string): boolean {
  const expectedEmail = process.env.ADMIN_EMAIL || "admin@deltacompare.local";
  const expectedPassword = process.env.ADMIN_PASSWORD || "change-me";
  return email.trim().toLowerCase() === expectedEmail.toLowerCase() && password === expectedPassword;
}

export const AUTH_COOKIE_NAME = COOKIE_NAME;
