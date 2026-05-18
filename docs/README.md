# DeltaCompare Autopilot

Vollautomatisches Affiliate- und Vergleichsportal auf Basis von **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** und **Prisma** (SQLite lokal, optional PostgreSQL).

DeltaCompare ist KEIN Shop, KEIN Dropshipping-System und KEIN Warenkorb-Projekt.
DeltaCompare leitet Besucher über Affiliate-Links zu geprüften Anbietern weiter und finanziert sich über Provisionen aus Partner-Netzwerken wie **Awin**, **financeAds**, **CHECK24 Partnerprogramm**, **Tarifcheck**, **PartnerStack**, **impact.com** sowie direkten Software-Affiliate-Programmen.

> ⚠️ **Wichtig**: Du musst Affiliate-Konten selbst eröffnen, deine Bank-/Steuerdaten dort hinterlegen, echte Affiliate-Links einfügen, eine Domain verbinden und vor Veröffentlichung deine Rechtstexte rechtlich prüfen lassen.

---

## Installation

```bash
npm install
cp .env.example .env       # Werte anpassen
npm run db:push            # Prisma-Schema in die SQLite-DB schreiben
npm run db:seed            # Demo-Daten einspielen
npm run dev                # Entwicklungsserver auf http://localhost:3000
```

Admin-Login: `http://localhost:3000/admin/login`
- E-Mail: `ADMIN_EMAIL` aus `.env` (Standard `admin@deltacompare.local`)
- Passwort: `ADMIN_PASSWORD` aus `.env` (Standard `change-me`)

## Produktion bauen

```bash
npm run build
npm start
```

## Wichtigste Funktionen

- **Öffentlicher Bereich**: Startseite, Kategorien, 25+ Vergleichsseiten, Anbieter-Detailseiten, Ratgeber, rechtliche Seiten
- **Affiliate-Redirect**: `/go/[offerSlug]` mit internem Klick-Tracking und Fallback bei Demo-Links
- **Admin-Bereich** (`/admin`):
  - Dashboard mit KPIs, SEO-Warnungen, fehlenden Links
  - Angebote/Kategorien/Vergleichsseiten verwalten
  - CSV/JSON-Import, Demo-Importer, CSV-Export
  - Marketing-Übersicht (Social Media, Newsletter, Ads – nur Entwürfe, nichts wird automatisch ausgespielt)
  - Klick-Tracking mit CSV-Export
  - Autopilot-Hinweise und Wochenbericht
  - Einstellungen (Site, Tracking-IDs, Affiliate-Hinweis)
- **SEO**: dynamische Meta-Daten, Open Graph, Sitemap, Robots.txt, JSON-LD für FAQ, Breadcrumbs, Article
- **Tracking vorbereitet** für Google Analytics 4, Google Tag Manager, Meta Pixel, TikTok Pixel – aktiv nur bei gepflegten IDs

## Projektstruktur

```
app/            # Next.js App-Router (Public + Admin + API + Sitemap/Robots)
components/    # Wiederverwendbare UI-Komponenten
lib/           # Prisma, Auth, SEO, Tracking, Affiliate, Importer, Utilities
prisma/        # Schema + Seed
data/          # Statische Seed- und Inhalts-Daten
content/       # Marketing-Entwürfe (Social Media, Blog, Ads)
docs/          # Diese Dokumentation
public/        # Statische Assets (Logos, OG-Bild)
scripts/       # Generatoren (z. B. Marketing-Content)
```

Siehe `docs/SETUP.md` für die ausführliche Schritt-für-Schritt-Anleitung
und `docs/LAUNCH_CHECKLIST.md` für die Pre-Launch-Prüfliste.
