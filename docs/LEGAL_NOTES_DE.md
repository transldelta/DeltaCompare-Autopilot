# Rechtliche Hinweise (Deutschland)

> ⚠️ **Diese Hinweise ersetzen keine Rechtsberatung.** Bitte vor Veröffentlichung von einem Anwalt prüfen lassen.

## Pflichtangaben

Eine deutsche Webseite mit gewerblicher Nutzung braucht u. a.:

- **Impressum** (§ 5 TMG, § 18 MStV) mit ladungsfähiger Anschrift, Kontakt, USt-ID falls vorhanden.
- **Datenschutz­erklärung** (Art. 13/14 DSGVO).
- **Affiliate-Hinweis** sichtbar in der Nähe der Affiliate-Links.
- **Haftungs­ausschluss** für Inhalte und externe Links.

## Werbe-Kennzeichnung

- Affiliate-Buttons tragen das Label „Werbung / Affiliate-Link".
- Buttons setzen `rel="sponsored nofollow"`.
- Auf Vergleichsseiten und Anbieter-Seiten ist der Affiliate-Hinweis sichtbar.

## Keine Beratung

Inhalte dürfen nicht als Steuer-, Finanz- oder Rechtsberatung verstanden werden. Wir formulieren konsequent in „Hinweis"-Boxen.

## Keine Markenrechtsverletzung

- Eigene Demo-Anbieter heißen „Anbieter A", „Anbieter B" usw.
- Keine fremden Logos ohne Erlaubnis hinterlegen.
- Bei echten Anbietern nur die im Affiliate-Programm freigegebenen Materialien verwenden.

## DSGVO und Tracking

- Tracking-IDs sind nur aktiv, wenn gesetzt.
- GA, GTM, Meta Pixel, TikTok Pixel erst **nach Einwilligung** des Nutzers laden.
- DeltaCompare hat einen einfachen Consent-Banner (`components/ConsentBanner.tsx`) integriert.
  Tracking-Skripte (`components/TrackingScripts.tsx`) werden erst geladen, wenn die Einwilligung
  in `localStorage` unter dem Schlüssel `dc_consent_v1` gespeichert ist.
- Für rechtssicheren Betrieb empfehlen wir trotzdem ein ausgewachsenes Consent-Tool
  (z. B. Usercentrics, CookieFirst), sobald du mit echten Trackern produktiv gehst.

## Aufbewahrungs­pflichten

- Belege und Rechnungen aus dem Affiliate-Geschäft gelten als Geschäftsunterlagen und müssen mind. 10 Jahre aufbewahrt werden.
- Steuerliche Behandlung der Provisionen mit dem Steuerberater klären.

## Vor Veröffentlichung prüfen lassen

- Impressum
- Datenschutzerklärung
- Affiliate-Hinweis
- Haftungsausschluss
- Cookie-/Consent-Banner

## Checklisten

- [ ] Anwalt geprüft Impressum/Datenschutz/AGB.
- [ ] Cookie-Banner integriert.
- [ ] DOI für Newsletter eingerichtet.
- [ ] Affiliate-Kennzeichnung an allen Buttons sichtbar.
- [ ] Verträge mit Affiliate-Netzwerken gelesen und akzeptiert.
