# Meta Ads (Facebook & Instagram) – manuell starten

> ⚠️ Werbung wird nicht automatisch geschaltet.

## 1. Business-Konto

- <https://business.facebook.com> öffnen.
- Business-Konto anlegen und mit Werbekonto verbinden.
- Rechnungs- und Steuerdaten hinterlegen.

## 2. Meta Pixel einbauen

- Im Events Manager neuen Pixel erstellen.
- ID kopieren und in `.env` (`META_PIXEL_ID`) oder im Admin-Backend `/admin/settings` einfügen.
- Hinweis: Im aktuellen Code ist die Einbindung des Pixels vorbereitet, aber nicht automatisch aktiv. Pixel-Skripte sollten erst nach DSGVO-Einwilligung laden – erweitere die Logik um deinen Consent-Banner.

## 3. Kampagnen aus den Entwürfen

In `content/ad-campaigns/meta-ads.json` findest du pro Vergleich:

- `campaignName`
- `audience`
- `creatives`
- `headlines`
- `primaryText`
- `targetUrl`
- `suggestedBudget`

Für jede Kampagne:

1. „Neue Kampagne" → Ziel „Traffic" (oder „Leads" mit Pixel-Event).
2. Budget je nach Vorschlag.
3. Zielgruppe wie in `audience` beschrieben.
4. Anzeige aus Creatives, Headlines, Primary-Text bauen.
5. Ziel-URL = `https://deinedomain.de` + `targetUrl`.
6. Vor Veröffentlichung prüfen – manuell freigeben.

## 4. Risiken

- Pixel ohne Einwilligung = Datenschutzverstoß.
- Werbung mit Geld-/Finanzthemen unterliegt strengeren Meta-Richtlinien.
- Texte dürfen keine reißerischen Versprechen enthalten.

## 5. Monitoring

- Pixel-Events live testen (Test Events).
- Frequency unter 2 halten, sonst sinkt die Performance.
- Budget täglich limitieren.
