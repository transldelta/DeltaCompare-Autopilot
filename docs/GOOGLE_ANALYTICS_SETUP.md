# Google Analytics 4 einrichten

## 1. GA4-Property anlegen

- <https://analytics.google.com> öffnen.
- Property „GA4“ anlegen mit deiner Domain.
- Datenstream „Web“ erstellen.
- Mess-ID kopieren (z. B. `G-XXXXXXXXXX`).

## 2. ID in DeltaCompare hinterlegen

Zwei Wege:

**A) Über `.env`** (empfohlen, lädt das Script bereits beim Render):

```env
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
```

**B) Über das Admin-Backend** (für nachträgliche Änderung):

`/admin/settings` → `google_analytics_id` setzen.

## 3. Events prüfen

- Im GA4-Property „Echtzeit“ öffnen.
- Webseite mehrfach aufrufen.
- Innerhalb von 30 Sekunden sollten Events erscheinen.

## 4. Klicks auf Affiliate-Links messen

- Pro Klick wird intern ein `ClickEvent` gespeichert (DB).
- Für GA4-Tracking zusätzlich: Tag Manager nutzen oder ein eigenes `gtag('event', 'affiliate_click', ...)` im Affiliate-Button hinzufügen.

## 5. DSGVO

- GA4 erst nach Einwilligung des Nutzers laden.
- Verwende einen Cookie-Banner oder ein Consent-Tool deiner Wahl.
- Im aktuellen Setup wird das GA-Skript geladen, sobald die ID gesetzt ist. Für rechtssicheren Betrieb erweitere die Logik um Consent.
