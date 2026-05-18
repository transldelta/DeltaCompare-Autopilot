# Autopilot Workflow

Diese Anleitung beschreibt, was du täglich, wöchentlich und monatlich in DeltaCompare tust. Das System unterstützt dich – aber **die finalen Entscheidungen triffst du**.

## Täglich (5–10 Minuten)

1. `/admin/dashboard` öffnen.
2. „Anbieter ohne Affiliate-Link" prüfen – falls Demo-Links vorhanden sind, mindestens einen pro Tag ersetzen.
3. „SEO-Warnungen" durchgehen.
4. `/admin/tracking` öffnen und die Klicks der letzten 24 Stunden prüfen.
5. Wenn neue Mails oder Hinweise aus Partner-Netzwerken eingehen: Konditionen oder Logos im Admin aktualisieren.

## Wöchentlich (30–60 Minuten)

1. `/admin/autopilot` öffnen – „Wochenbericht" lesen.
2. Top- und Flop-Anbieter identifizieren:
   - Top: Content rund um diese Anbieter ausbauen.
   - Flop: prüfen, ob Beschreibung, Vorteile oder Bewertung verbessert werden können.
3. **Defekte Links prüfen**: Stichproben in 3–5 `/go/<slug>`-Klicks.
4. Neue Vergleichsseite anlegen oder bestehende erweitern (z. B. 1 Vergleich pro Woche).
5. 3–5 Social-Media-Entwürfe aus `content/social-media/` aussuchen, individualisieren und manuell veröffentlichen.

## Monatlich (1–2 Stunden)

1. Affiliate-Netzwerke besuchen und Reports herunterladen.
2. Im Admin unter `/admin/import` einen CSV-Import vornehmen (optional – die Reports kannst du auch lokal pflegen).
3. SEO-Performance auf Google Search Console prüfen (siehe `GOOGLE_SEARCH_CONSOLE_SETUP.md`).
4. Conversion-Tracking-Ziele in Google Analytics bzw. Meta Pixel verfeinern.
5. Rechtstexte prüfen (Impressum, Datenschutz, Affiliate-Hinweis) – mindestens 1× pro Quartal.

## Neue Vergleichsseite anlegen

1. `/admin/comparisons/new` öffnen.
2. Titel, Slug, SEO-Titel und Meta-Description sauber pflegen.
3. Mindestens 3 Anbieter zuordnen (Komma-getrennte Slugs).
4. FAQ als JSON-Array `[ { "q": "...", "a": "..." } ]` pflegen.

## Wie defekte Links automatisch erkannt werden

- Demo-Links (`DEMO_LINK_ERSETZEN`) leiten nicht weiter, sondern zeigen einen Hinweis.
- Inaktive Angebote (Status `inactive`) werden auf der Anbieter-Detailseite blockiert.
- Im Admin-Dashboard erscheint eine Liste der betroffenen Anbieter.

## Wie neue Inhalte erzeugt werden

- Content-Ideen aus `lib/contentGenerator.ts`:
  - Im Admin-Bereich „Autopilot" werden Themenvorschläge gerendert.
  - In Skripten kannst du `generateContentIdeas({ topic, count })` aufrufen.
- Social-Media-Entwürfe regenerieren: `npx tsx scripts/generate-marketing-content.ts`.
