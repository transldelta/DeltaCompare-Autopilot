# TikTok Ads – manuell starten

> ⚠️ Werbung wird nicht automatisch geschaltet.

## 1. TikTok-Business-Konto

- <https://business.tiktok.com> öffnen.
- Werbekonto erstellen.
- Rechnungsdaten und Zahlungsmittel hinterlegen.

## 2. TikTok Pixel

- Im Events Manager Pixel erzeugen.
- ID in `.env` (`TIKTOK_PIXEL_ID`) oder Admin-Einstellungen einfügen.
- Pixel erst nach DSGVO-Einwilligung laden.

## 3. Kampagnen aus den Entwürfen

In `content/ad-campaigns/tiktok-ads.json` findest du pro Vergleichsseite:

- `campaignName`
- `hook`
- `script`
- `cta`
- `targetUrl`
- `suggestedBudget`

Workflow:

1. Eigenes Video drehen (10–30 Sekunden, Hook in den ersten 2 Sekunden).
2. Untertitel auf Deutsch einfügen.
3. „Werbung / Anzeige" kennzeichnen.
4. Kampagne als „Traffic" oder „Conversion" anlegen.
5. Ziel-URL = `https://deinedomain.de` + `targetUrl`.
6. Budget je nach Vorschlag (Start: 10 € / Tag).

## 4. Risiken

- Creatives ermüden schnell – brauchen wöchentlich neue Varianten.
- Affiliate-Inhalte müssen TikToks Werberichtlinien entsprechen (kein „Get rich quick").
- Texte sachlich halten, keine garantierten Einnahmen versprechen.

## 5. Monitoring

- Pixel-Events live prüfen.
- CTR > 1 % ist ein guter Indikator.
- Kampagnen pausieren, wenn CPA unrealistisch hoch wird.
