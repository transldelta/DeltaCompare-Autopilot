# SEO-Setup

## Sitemap

- Automatisch generiert unter `/sitemap.xml`.
- Enthält alle aktiven Kategorien, Vergleichsseiten und Anbieter.
- Wird bei jedem Request auf Basis der Datenbank dynamisch gebaut.

## robots.txt

- Automatisch generiert unter `/robots.txt`.
- Erlaubt alle öffentlichen Bereiche.
- Sperrt `/admin`, `/api` und `/go/` für Crawler.

## Meta-Daten

- Jede Seite hat `title`, `description`, `canonical` und Open Graph.
- Vergleichsseiten und Anbieter-Seiten nutzen die Daten aus der DB (`seoTitle`, `metaDescription`).
- Rechtliche Seiten haben `noIndex` gesetzt (Impressum, Datenschutz).

## Strukturierte Daten

- `Article` JSON-LD auf Ratgeber-Artikeln.
- `FAQPage` JSON-LD auf Vergleichsseiten (sobald FAQs hinterlegt sind).
- `BreadcrumbList` auf Vergleichsseiten und Anbieter-Seiten.

## Ladezeit-Optimierung

- Next.js liefert statisches HTML, wo möglich.
- Schriften via System-Stack (`Inter`, `system-ui`).
- Bilder über `next/image` (Remote-Patterns auf `**` gestellt – kannst du in `next.config.js` einschränken).

## Mobile Optimierung

- Tailwind CSS Mobile-First.
- Header mit horizontaler Mobile-Navigation.
- Touch-Targets ≥ 44 px durch `py-2` / `py-3` standardmäßig.

## Interne Verlinkung

- Footer, Header, Kategorie-Seiten, Vergleichsseiten und Anbieter-Seiten verlinken untereinander.
- Breadcrumbs auf allen Detailseiten.

## To-Do bei Veröffentlichung

1. `NEXT_PUBLIC_SITE_URL` auf deine Domain setzen.
2. Sitemap unter Google Search Console einreichen.
3. Google Analytics einrichten (`GOOGLE_ANALYTICS_ID` in `.env`).
4. Title / Meta-Description aller Top-Seiten manuell durchgehen.
5. OG-Bild unter `public/og/default.svg` mit deinem Branding versehen.
