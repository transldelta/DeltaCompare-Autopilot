/**
 * safe() – fängt DB- oder Netzwerk-Fehler in Server Components ab
 * und gibt einen sicheren Fallback zurück, damit die Seite nicht abstürzt.
 *
 * Loggt den Fehler ins Server-Log (sichtbar in Vercel Logs), aber wirft
 * ihn nicht weiter. So bleibt z. B. die Startseite erreichbar, auch wenn
 * die Datenbank temporär nicht antwortet (Cold Start, falsche
 * DATABASE_URL, gerade in Wartung).
 */
export async function safe<T>(fn: () => Promise<T>, fallback: T, label?: string): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    const tag = label ? `[safe:${label}]` : "[safe]";
    console.error(`${tag} DB call failed, using fallback:`, err);
    return fallback;
  }
}

/**
 * Prüft, ob die App vermutlich gar keine DB-Verbindung hat
 * (z. B. ENV fehlt, leere Tabelle, Schema fehlt).
 * Wird genutzt, um auf der Startseite einen Wartungs-Hinweis zu zeigen.
 */
export function isLikelyEmptyOrUnreachable(values: unknown[]): boolean {
  return values.every((v) => Array.isArray(v) && v.length === 0);
}
