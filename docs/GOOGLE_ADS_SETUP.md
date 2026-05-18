# Google Ads – manuell starten

> ⚠️ Werbung wird **nicht** automatisch geschaltet. Du legst die Kampagnen manuell an, prüfst und gibst sie frei.

## 1. Konto eröffnen

- <https://ads.google.com> öffnen, Google-Konto verbinden.
- Rechnungsdaten hinterlegen.

## 2. Conversion-Tracking

- Conversion-Aktion „Affiliate-Klick" erstellen (Wert optional).
- Tag via Google Tag Manager einbauen.
- Oder Conversion über den Pfad `/go/` als Ziel hinterlegen, falls dein Tracking serverseitig läuft.

## 3. Kampagnen aus den Entwürfen anlegen

Unter `content/ad-campaigns/google-ads.json` findest du pro Vergleichsseite:

- `campaignName`
- `keywords`
- `headlines`
- `descriptions`
- `targetUrl`
- `suggestedBudget`
- `riskNote`

Für jede Kampagne:

1. „Neue Kampagne" → Ziel „Webseitenzugriffe" oder „Lead".
2. Suchnetzwerk auswählen.
3. Tagesbudget aus `suggestedBudget` übernehmen (Vorschlag: 5–10 €).
4. Keywords als Phrase oder Exact Match einfügen.
5. Anzeigentitel und Beschreibungen einfügen.
6. Ziel-URL ist `https://deinedomain.de` + `targetUrl`.
7. **Erst nach Prüfung freigeben.**

## 4. Risiken

- Klick-Preise können hoch sein (Banking-/Versicherungs-Keywords oft > 5 €).
- Affiliate-Werbung mit „Werbung"-Hinweis kennzeichnen.
- Markenrechte beachten – fremde Markenwörter nur, wenn das Affiliate-Programm das erlaubt.

## 5. Monitoring

- Täglich erste 7 Tage Klicks, Kosten und Conversions prüfen.
- Wöchentlich Budget anpassen.
- Nur Kampagnen skalieren, deren Marge nach Provisionen positiv ist.
