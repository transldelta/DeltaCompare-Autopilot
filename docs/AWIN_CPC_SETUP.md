# Awin CPC-Angebote einrichten

Awin ist eines der wenigen großen Affiliate-Netzwerke, das auch reine CPC-
Programme (Bezahlung pro Klick) im Portfolio hat. Dieser Guide zeigt, wie du sie
in DeltaCompare einbindest.

## 1. Awin-Konto

1. Anmeldung als Publisher unter <https://www.awin.com>.
2. Steuerdaten, IBAN und Webseite hinterlegen.
3. Freischaltung abwarten (kann einige Tage dauern).

## 2. CPC-Programme finden

Im Awin-Dashboard:

1. „Advertiser" → Filter „Commission Type" → **Pay per Click**.
2. Auch Programme mit gemischten Modellen (CPL + CPC-Bonus) prüfen.
3. Antrag stellen, Annahme abwarten.

Beispiele für Branchen mit CPC-Programmen:

- DSL-Vergleiche
- Stromvergleiche
- Versicherungsvergleiche
- Kreditkartenvergleiche

## 3. Deeplink generieren

1. Im Awin-Dashboard das gewünschte Programm öffnen.
2. „Links → Deep Link Generator" wählen.
3. URL der Vergleichsseite einfügen, Deeplink kopieren.
4. Optional eine SubID setzen (`clickref`), um Klicks deinen DeltaCompare-Seiten
   zuzuordnen.

## 4. CPC-Angebot in DeltaCompare anlegen

1. Im Admin `/admin/cpc-offers/new` öffnen.
2. Felder ausfüllen:
   - **Name**: z. B. „DSL-Vergleich (Awin – Anbieter X)"
   - **Slug**: kurzer, sprechender Bezeichner
   - **Kategorie**: passende Hauptkategorie
   - **Netzwerk**: „Awin"
   - **CPC-Wert in €**: realistische Annahme (z. B. 0,30 €)
   - **Ziel-URL** *oder* **Affiliate-Link**: dein Awin-Deeplink
   - **Tracking-ID / SubID**: optional, z. B. `dc-vergleich-dsl`
3. Status „aktiv" setzen.
4. Speichern.

Der CPC-Link ist nun unter `/cpc/<slug>` erreichbar. Jeder Klick wird in
`AdClick` gespeichert.

## 5. CPC-Links auf Seiten platzieren

Du kannst CPC-Angebote auf zwei Wegen einbinden:

- Direkt als Card mit `CpcLinkCard`-Komponente (z. B. innerhalb eines
  Ratgeberartikels).
- Über einen aktiven `AdPlacement` vom Typ `CPC_LINK` mit eigenem Code-Snippet.

## 6. Performance prüfen

`/admin/monetization` zeigt:

- Klicks der letzten 7 Tage je CPC-Angebot
- Geschätzte CPC-Einnahmen (CPC-Wert × Klicks)
- Demo-Links, die noch ersetzt werden müssen

## 7. Wichtige Awin-Regeln

- Nur eigenes Audience-Targeting, **keine** gekauften Klicks
- Keine Pop-ups, die Anzeigen verdecken
- Keine SubID-Manipulation
- Keine Werbung auf Seiten mit unerlaubtem Inhalt
- CPC-Klicks **dürfen nicht** zu Conversions geführt werden, die du selbst auslöst

Verstöße führen zu Sperrung. DeltaCompare hat keine Funktionen zur
Klick-Manipulation eingebaut. Bot-User-Agents werden im CPC-Redirect erkannt
und nicht gezählt.
