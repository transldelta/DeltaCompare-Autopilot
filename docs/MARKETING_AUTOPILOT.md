# Marketing-Autopilot

Der Marketing-Autopilot **bereitet Inhalte vor**, **schaltet aber niemals automatisch Werbung**. Du behältst die Kontrolle.

## Was automatisch passiert

- SEO-Inhalte sind direkt online (sobald du die Domain verbindest).
- 100 TikTok-/Shorts-Skripte, 100 Instagram-Captions, 100 Pinterest-Pin-Texte, 30 Newsletter und 50 Blog-Ideen liegen unter `content/social-media/` und `content/blog-drafts/` bereit.
- Google-, Meta- und TikTok-Ads-**Entwürfe** liegen unter `content/ad-campaigns/`.

## Was du manuell machst

- Social-Media-Konten anlegen / verbinden.
- Posts manuell veröffentlichen (z. B. via Buffer / Later / direkt).
- Newsletter-Tool wählen, Liste aufbauen, Newsletter manuell versenden.
- Ads-Konten anlegen, Pixel installieren, Kampagnen manuell konfigurieren und freigeben.

## SEO

- Statische Pre-Rendering-Komponenten und JSON-LD-Struktur sind eingebaut.
- Sitemap unter `/sitemap.xml`, Robots unter `/robots.txt`.
- Achte auf interne Verlinkung von Ratgeber → Vergleichsseite → Anbieter.

## Social Media

- TikTok / YouTube Shorts: kurze Hooks aus `tiktok-scripts.json` als Stichworte, dann eigene Videos drehen.
- Instagram: Captions aus `instagram-posts.json` individualisieren, eigene Grafiken erstellen.
- Pinterest: Pins aus `pinterest-pins.json` als Briefing für Grafiker / Canva.

## Newsletter

- Vorschläge in `content/social-media/newsletter-ideas.json`.
- Vor dem Versand DOI-Prozess sicherstellen.
- Werbung kennzeichnen.

## Ads (NICHT automatisch starten)

- Entwürfe in `content/ad-campaigns/`.
- Risiken pro Plattform sind in den JSON-Dateien notiert.
- Empfohlenes Testbudget: 5–10 € pro Tag pro Plattform.
- Erst Conversion-Tracking sicherstellen, dann Kampagnen ausrollen.

## Warum keine automatische Ausspielung?

- Affiliate-Netzwerke verbieten oft autonome Bot-Klicks und automatisch generierte Anzeigen.
- Ad-Plattformen verlangen menschliche Entscheidung über Inhalt, Budget und Compliance.
- Du behältst die Kontrolle über Kosten und Marken-Kommunikation.

## Wie man kleine Testbudgets sinnvoll nutzt

1. Pro Plattform mit 5–10 € pro Tag starten.
2. Eine einzige Vergleichs-Landingpage als Ziel wählen.
3. Mindestens 7 Tage laufen lassen.
4. CPC, CTR, Conversion-Rate dokumentieren.
5. Nur Kampagnen mit positiver Marge skalieren.
