# Cookie-Consent und Werbung

> ⚠️ Diese Datei ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung von
> einem Anwalt prüfen lassen, insbesondere DSGVO und TTDSG.

## Welche Skripte brauchen Consent?

| Dienst | Consent nötig | Warum |
| --- | --- | --- |
| Notwendige Cookies (Login, Session) | nein | Art. 6 Abs. 1 lit. f DSGVO + § 25 Abs. 2 TTDSG |
| Google Analytics 4 | ja | personenbezogene Daten in den USA |
| Google Tag Manager | ja | leitet ggf. Skripte mit Daten weiter |
| Google AdSense | ja | personenbezogene Werbe-Daten |
| Meta Pixel | ja | personenbezogene Werbe-Daten (USA) |
| TikTok Pixel | ja | personenbezogene Werbe-Daten |
| Awin / financeAds CPC | meist ja | Klick-Tracking ans Netzwerk |
| Eigenes Klick-Tracking (`/go/`, `/cpc/`) | nein (Pseudonymisiert) | nur gehashed, keine Pixel an Dritte |

## Wie DeltaCompare Consent technisch umsetzt

- Banner: `components/ConsentBanner.tsx`
- Status wird im `localStorage` als `dc_consent_v1` gespeichert (`accepted`/`declined`).
- Externe Tracking-Skripte (GA, GTM, Meta, TikTok) sind in `components/TrackingScripts.tsx` gekapselt und laden **nur**, wenn Status `accepted`.
- `components/AdSlot.tsx` prüft den Consent vor Anzeige externer Werbung (AdSense).
- Solange kein Consent vorliegt, sehen Nutzer einen neutralen „Anzeige – Platzhalter"-Bereich oder gar nichts.

## Worauf du selbst noch achten musst

- **Cookie-Tabelle** in der Datenschutzerklärung pflegen: welche Cookies (Name, Anbieter, Speicherdauer, Zweck) werden gesetzt?
- **Auftragsverarbeitung** mit Google (AdSense + Analytics) abschließen und in die Datenschutzerklärung aufnehmen.
- **Widerruf** der Einwilligung muss genauso einfach sein wie die Erteilung. Lege z. B. einen Link „Cookie-Einstellungen ändern" in den Footer.
- **Geräte-übergreifender Status**: localStorage gilt pro Browser. Wenn du es robuster brauchst, baue einen Server-Cookie als zusätzliche Quelle ein.

## Schwächen des integrierten Banners

Der eingebaute Banner ist absichtlich minimal:

- nur „Alle akzeptieren" und „Ablehnen"
- keine kategoriebasierte Auswahl (statistik vs. marketing)
- keine Cookie-Liste pro Anbieter

Für rechtssicheren Produktivbetrieb empfehlen wir ein dediziertes
Consent-Management-Tool wie:

- **Usercentrics** (kostenpflichtig, deutsche Lösung)
- **CookieFirst** (mehrsprachig)
- **Cookiebot** (international verbreitet)
- **Klaro!** (Open Source)

Die Tools liefern Listen anerkannter Anbieter (IAB TCF), Kategorien-Schalter
und Audit-Logs.

## Integration eines externen Consent-Tools

1. Den eigenen Banner deaktivieren (`components/ConsentBanner.tsx` aus dem
   Layout entfernen).
2. Das Skript des externen Tools im `<head>` einbinden.
3. In `components/TrackingScripts.tsx` und `components/AdSlot.tsx` die
   Consent-Quelle anpassen (z. B. `window.UC_UI?.getConsentStatusFor("GA")` o. ä.).
4. Datenschutzerklärung aktualisieren.

## Anzeigen-Regeln auf rechtlichen Seiten

Auf den folgenden Seiten werden **nie** Anzeigen ausgespielt
(`lib/adRules.ts → isAdAllowedOnPath`):

- `/impressum`
- `/datenschutz`
- `/affiliate-hinweis`
- `/haftungsausschluss`
- `/kontakt`
- `/admin/*` und `/api/*`

## Konsequenz bei Verstößen

Wer ohne Einwilligung Tracking-Cookies setzt, riskiert Abmahnungen und
Bußgelder bis zu 50.000 € pro Verstoß (§ 28 TTDSG). DSGVO-Bußgelder können
deutlich höher sein.
