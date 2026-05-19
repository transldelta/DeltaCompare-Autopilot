import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const COOKIE_NAME = "dc_admin";
const EXPIRES_SECONDS = 60 * 60 * 12; // 12 Stunden

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("AUTH_SECRET muss in Produktion gesetzt und mindestens 32 Zeichen lang sein");
    }
    return new TextEncoder().encode("dev-only-secret-must-be-replaced-in-production-32+");
  }
  return new TextEncoder().encode(secret);
}

export async function createSession(email: string): Promise<string> {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRES_SECONDS}s`)
    .sign(getSecret());
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

/**
 * Validiert Admin-Credentials gegen die Datenbank.
 *
 * Reihenfolge:
 *   1. DB-Lookup mit bcrypt-Vergleich.
 *   2. Dev-Fallback gegen ADMIN_EMAIL/ADMIN_PASSWORD aus .env – in Produktion deaktiviert.
 */
export async function checkCredentials(email: string, password: string): Promise<boolean> {
  const cleanEmail = email.trim().toLowerCase();

  try {
    const user = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (!user) {
      console.warn(`[auth] Login fehlgeschlagen: kein User mit email='${cleanEmail}' (Tipp: 'npm run db:seed' ausführen oder ADMIN_EMAIL prüfen)`);
    } else {
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) console.warn(`[auth] Login fehlgeschlagen: falsches Passwort für '${cleanEmail}'`);
      return ok;
    }
  } catch (err) {
    console.error("[auth] DB-Fehler im Login-Check:", err);
  }

  if (process.env.NODE_ENV !== "production") {
    const expectedEmail = (process.env.ADMIN_EMAIL || "admin@deltacompare.local").toLowerCase();
    const expectedPassword = process.env.ADMIN_PASSWORD || "change-me";
    return cleanEmail === expectedEmail && password === expectedPassword;
  }

  return false;
}

export const AUTH_COOKIE_NAME = COOKIE_NAME;
