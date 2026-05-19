/**
 * Regeln für die Anzeigen-Auslieferung.
 *
 * Diese Regeln werden serverseitig und clientseitig konsultiert, um zu
 * entscheiden, ob auf einer bestimmten Seite eine Anzeige gerendert werden darf.
 * Ziel: rechtssicher, dezent, kein Klick-Druck, kein Überladen mobiler Seiten.
 */

const FORBIDDEN_PATHS = [
  "/impressum",
  "/datenschutz",
  "/affiliate-hinweis",
  "/haftungsausschluss",
  "/kontakt",
  "/admin",
  "/api",
];

const FORBIDDEN_PREFIXES = ["/admin/", "/api/"];

/** Pfad-Whitelist-Prüfung: dürfen auf dieser URL überhaupt Anzeigen gezeigt werden? */
export function isAdAllowedOnPath(pathname: string): boolean {
  if (!pathname) return false;
  for (const p of FORBIDDEN_PATHS) {
    if (pathname === p) return false;
  }
  for (const p of FORBIDDEN_PREFIXES) {
    if (pathname.startsWith(p)) return false;
  }
  return true;
}

/** Maximale Anzeigenanzahl basierend auf grober Content-Länge. */
export function maxAdsForPage(contentLengthChars: number): number {
  if (contentLengthChars < 1500) return 3;
  return 5;
}

/** Mobile soll noch weniger zeigen, damit das UX nicht leidet. */
export function maxAdsForMobile(contentLengthChars: number): number {
  return Math.max(2, Math.floor(maxAdsForPage(contentLengthChars) * 0.6));
}

/**
 * Prüfen, ob Anzeigen pauschal aktiviert sind.
 *
 * Quellen (von wichtig nach unwichtig):
 *   1. NEXT_PUBLIC_ENABLE_ADS aus der .env
 *   2. AdSense-Client-ID vorhanden (sonst wird ohnehin kein AdSense ausgespielt)
 *
 * Achtung: Die endgültige Auslieferung externer Skripte (AdSense) hängt
 * zusätzlich vom Consent-Banner ab (siehe components/AdSlot.tsx).
 */
export function adsEnabledViaEnv(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_ADS === "true";
}

export function adsenseClientIdFromEnv(): string | undefined {
  const id = process.env.GOOGLE_ADSENSE_CLIENT_ID;
  if (id && id.startsWith("ca-pub-")) return id;
  return undefined;
}

export const AD_LABEL = "Anzeige";
export const AD_DISCLOSURE = "Hinweis: Diese Position ist als Anzeige gekennzeichnet.";
