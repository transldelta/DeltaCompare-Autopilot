# Affiliate-Netzwerke – Anmeldung und Einrichtung

Bei diesen Netzwerken kannst du dich nach Veröffentlichung deiner Domain als Publisher bewerben. **Du musst dich selbst bei jedem Netzwerk anmelden, Bank-/Steuerdaten hinterlegen und ggf. Identitätsnachweise einreichen.** DeltaCompare erledigt das nicht automatisch.

## Awin (awin.com)

1. Konto unter `awin.com` als „Affiliate / Publisher“ erstellen.
2. Webseite hinzufügen (DeltaCompare-Domain).
3. **Mindestens** Steuernummer und IBAN hinterlegen.
4. Programme suchen (z. B. „Geschäftskonto“, „Steuersoftware“) und bewerben.
5. Nach Freischaltung den Deeplink kopieren und im Admin unter `/admin/offers` als `affiliateLink` einsetzen.

## financeAds (financeAds.net)

1. Anmeldung über `financeAds.net`.
2. Nach Freischaltung Programme im Bereich „Banking / Versicherungen“ aktivieren.
3. Tracking-Links / Deeplinks ins Tool kopieren.

## CHECK24 Partnerprogramm (partner.check24.de)

1. Anmeldung über das CHECK24-Partnerportal.
2. Häufig laufen Programme über Netzwerke wie financeAds oder direkt.
3. Tracking-Links pro Vergleichsrechner (PKV, Kfz, Strom) abgreifen.

## Tarifcheck (partnerprogramm.tarifcheck.com)

1. Direkte Anmeldung beim Tarifcheck-Partnerprogramm.
2. Deeplinks pro Produkt (Strom, Gas, DSL, Versicherungen) einsetzen.

## PartnerStack (partnerstack.com)

1. Konto erstellen, Webseite verifizieren.
2. SaaS-Programme bewerben (Notion, ClickUp, Monday u. a.).
3. Wiederkehrende Provisionen sind hier üblich.

## impact.com

1. Anmeldung als Partner unter `impact.com`.
2. Programme von Shopify, Canva, FreshBooks, GetResponse etc. bewerben.

## HubSpot Affiliate

1. Direkte Anmeldung im HubSpot Solutions Affiliate Program.
2. Wiederkehrende Provision auf HubSpot-Abos.

## Shopify Affiliate

1. Anmeldung im Shopify Affiliate Program.
2. Provision pro abgeschlossener Shopify-Subscription.

## Wie du Links in DeltaCompare einsetzt

1. Im Admin `/admin/offers` öffnen.
2. Anbieter wählen oder neu anlegen.
3. Feld **`affiliateLink`** mit deinem Deeplink füllen (statt `DEMO_LINK_ERSETZEN`).
4. Optional `trackingId` als `subid` setzen, um Reports im Netzwerk zu segmentieren.
5. Status auf `active` setzen.

## Wie Links getestet werden

- Auf der Anbieter- oder Vergleichsseite den Button klicken.
- Die `/go/<slug>`-Route zählt den Klick und leitet zum Netzwerk weiter.
- Im Affiliate-Netzwerk-Dashboard sollte der Klick (oder die Conversion) erscheinen – meist mit kurzer Verzögerung.

## Provisionen kontrollieren

- Wöchentlich im Admin-Dashboard die Klicks pro Anbieter prüfen.
- Pro Partner-Netzwerk Reports herunterladen.
- Mit dem CSV-Export aus `/admin/tracking` Klicks abgleichen.

## Wichtig

- Kein Affiliate-Konto wird automatisch eröffnet.
- Niemals fremde Affiliate-IDs verwenden.
- Wer manipuliert (z. B. Self-Clicks oder Bot-Traffic), riskiert die Sperrung des Kontos und den Verlust offener Provisionen.
