# CPC, CPM, CPL, CPA und Recurring – verständlich erklärt

## Definitionen

- **CPC – Cost per Click**: Vergütung pro Klick. Du bekommst Geld, sobald ein Nutzer auf eine Anzeige oder einen CPC-Link klickt. Typische Werte: 0,05 € bis 1 € pro Klick, je nach Branche.

- **CPM – Cost per Mille**: Vergütung pro 1.000 Anzeigen-Einblendungen (Impressionen). „Mille“ kommt aus dem Lateinischen und bedeutet „Tausend“. Werte in Deutschland: 0,50 € bis 5 € CPM in den meisten Nischen, in Banking/Finanzen auch zweistellig.

- **eCPM – effective Cost per Mille**: Ein berechneter Wert. Auch bei CPC-Abrechnung weiß man so, was 1000 Impressionen unterm Strich brachten. Formel: `eCPM = (Einnahmen / Impressionen) × 1000`.

- **CPL – Cost per Lead**: Vergütung pro qualifizierten Lead (z. B. Formular ausgefüllt). 5 € bis 100 € pro Lead, je nach Branche.

- **CPA – Cost per Acquisition**: Vergütung pro abgeschlossenem Kauf oder Vertrag. 10 € bis mehrere hundert Euro je Sale.

- **Recurring**: Wiederkehrende Provision, z. B. monatlich, solange der Kunde Abonnent bleibt. Bei SaaS oft 20–30 % vom Monatsumsatz.

## Warum CPC meist weniger bringt als CPL/CPA

- Bei CPC bekommst du Cent-Beträge pro Klick.
- Bei CPL/CPA bekommst du Euro-Beträge pro qualifiziertem Kontakt oder Verkauf.
- Beispiel: 1.000 Besucher × 4 % Affiliate-CTR × 25 % Lead-Rate × 50 € pro Lead = 500 € vs. 1.000 Klicks × 0,30 € = 300 €.
- CPC ist daher **Zusatz-Monetarisierung**, kein Ersatz.

## Warum Display Ads viele Besucher brauchen

- CPM ist typischerweise 1–3 € pro 1.000 Impressionen.
- Bei 10.000 monatlichen Besuchern und 2 Impressionen pro Besucher = 20.000 Impressionen = **20–60 €** Display-Einnahmen.
- Erst ab 50.000+ Besuchern werden Display Ads spürbar relevant.

## Warum Fake-Klicks verboten sind

- Affiliate-Netzwerke und AdSense erkennen Fake-Traffic anhand von Heuristiken (Klick-Pattern, IP, Geräte, Conversion-Raten).
- Sperrung des Kontos ist die Standardreaktion. Offene Provisionen verfallen.
- Strafrechtlich relevant kann Computerbetrug (§ 263a StGB) sein.

DeltaCompare hat **keine** Funktionen zum Erzeugen künstlicher Klicks. Bot-Klicks werden im Tracking erkannt und ausgeschlossen (User-Agent-Filter).

## Warum man Nutzer nicht zum Klicken auffordern darf

- AdSense und Awin verbieten Aussagen wie „Bitte klicken“, „Klicke hier, um mich zu unterstützen“ oder Pfeil-Animationen zu Werbung.
- Plazierungen wie „falsche Buttons“ direkt neben Anzeigen sind verboten.
- Auch Newsletter-Aufforderungen zum Klicken auf Werbe-Mails verstoßen meist gegen die AGB.

## Wie man Anzeigen seriös einbindet

- Werbe-Kennzeichnung: „Anzeige“, „Werbung“ oder „Affiliate-Link“ klar sichtbar.
- Genug Abstand zu redaktionellem Inhalt.
- Nicht zwischen Logo und Navigation.
- Keine Anzeigen auf Rechtstexten.
- Mobile: maximal 2–3 Anzeigen pro Seite.
- Nutzer-Konsent vor dem Laden externer Skripte.

DeltaCompare setzt diese Regeln um:

- `lib/adRules.ts` definiert Pfade ohne Anzeigen (Impressum, Datenschutz, …) und obere Limits.
- `components/AdSlot.tsx` lädt nur nach Consent, mit klarer „Anzeige“-Kennzeichnung.
- `/cpc/[slug]` und `/go/[slug]` setzen `rel="sponsored nofollow"`.

## Welche Seiten eignen sich für CPC/CPM?

- Hochfrequentierte Ratgeber-Seiten mit langem Aufenthalt
- Vergleichs-Übersichten mit hohem Such-Traffic
- News-/Magazin-Inhalte

## Welche Seiten eignen sich besser für CPL/CPA?

- Kaufentscheidungs-Seiten („beste …“, „Vergleich“)
- Detailseiten zu Anbietern
- Landingpages mit klarem CTA
- Themen mit hoher Kaufbereitschaft (Banking, Versicherung, Software)

Faustregel: Wenn Nutzer **kaufen wollen**, ist CPL/CPA besser. Wenn sie nur **lesen**, ist CPM/CPC besser.
