# Google AdSense einrichten

> ⚠️ AdSense lädt in DeltaCompare ausschließlich, wenn (a) eine gültige Publisher-ID
> in der `.env` gesetzt ist UND (b) der Nutzer im Consent-Banner zugestimmt hat.

## 1. Konto beantragen

1. <https://www.google.com/adsense> öffnen, Google-Konto verbinden.
2. Domain hinzufügen (musst du **vor** der Beantragung schon online haben).
3. Steuer- und Zahlungsdaten hinterlegen.
4. Antrag absenden. Prüfung dauert i. d. R. wenige Tage bis mehrere Wochen.

Hinweis: AdSense lehnt häufig ab, wenn:

- die Webseite zu wenig eigenen Inhalt hat
- Pflichtseiten fehlen (Impressum, Datenschutz)
- der Inhalt überwiegend kopiert wurde
- die Seite noch sehr neu / kaum besucht ist

## 2. Publisher-ID hinterlegen

Sobald AdSense dich freigeschaltet hat, bekommst du eine Publisher-ID im Format
`ca-pub-1234567890123456`.

Eintragen kannst du sie an zwei Stellen:

**Option A: Environment Variables (empfohlen für Produktion)**

```env
GOOGLE_ADSENSE_CLIENT_ID="ca-pub-1234567890123456"
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID="ca-pub-1234567890123456"
NEXT_PUBLIC_ENABLE_ADS="true"
```

Auf Vercel die Werte unter „Settings → Environment Variables“ setzen und neu deployen.

**Option B: Admin-Backend**

`/admin/settings` → Felder `adsense_client_id` und `ads_enabled` setzen.

## 3. AdSense-Verifizierung

AdSense erwartet ein Verifizierungs-Script im `<head>` deiner Seite. Wenn die
Publisher-ID gesetzt ist, kannst du den Verifizierungs-Code unter
`/admin/ad-placements` als neuen Platz vom Typ `HEADER` mit Code-Snippet
hinterlegen. Aktiviere ihn, sobald Consent erteilt wird.

## 4. Anzeigen-Slots erstellen

1. Im AdSense-Dashboard unter „Anzeigen → Nach Anzeigeneinheit" neue
   Anzeigeneinheit anlegen (z. B. „In-Content – Mitte").
2. AdSense liefert eine `data-ad-slot`-ID.
3. Im DeltaCompare-Admin unter `/admin/ad-placements` den passenden Platz
   bearbeiten und im Feld „Code-Snippet" den AdSense-Code einfügen, oder direkt
   den AdSlot-Code in der App mit der Slot-ID parametrisieren.

## 5. Lade-Verhalten in DeltaCompare

Die `AdSlot`-Komponente:

- prüft Consent (`dc_consent_v1=== "accepted"`)
- prüft `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID`
- fällt sonst auf neutralen Platzhalter zurück
- zeigt „Anzeige“-Label
- sendet eine Impression-Beacon an `/api/ads/impression`

## 6. AdSense-Regeln (Auswahl)

Aus dem AdSense-Programmrichtlinien-Auszug:

- Keine eigenen Klicks
- Keine Aufforderungen wie „Bitte klicken"
- Keine versteckten Anzeigen
- Anzeigen müssen klar als solche erkennbar sein
- Verboten auf Seiten mit illegalem Inhalt
- Pop-ups dürfen Anzeigen nicht überlagern

DeltaCompare hält diese Regeln durch das Design ein. Du als Betreiber bist
trotzdem verantwortlich – AGB regelmäßig prüfen.

## 7. Auszahlung

- AdSense zahlt monatlich aus, sobald 70 € erreicht sind.
- Steuerlich behandelst du AdSense-Einnahmen wie übrige Affiliate-Einnahmen.
- Achte auf Reverse-Charge bei der USt-Behandlung (AdSense Irland).
