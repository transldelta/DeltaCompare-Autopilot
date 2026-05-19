# DeltaCompare Autopilot

Vollständiges Affiliate- und Vergleichsportal für Selbstständige – Next.js 14, TypeScript, Tailwind, Prisma (SQLite lokal, PostgreSQL in Produktion).

## Schnellstart (lokal)

```bash
npm install
cp .env.example .env             # mindestens ADMIN_PASSWORD und AUTH_SECRET anpassen
npm run db:push                  # Schema in SQLite-DB pushen
npm run db:seed                  # Demo-Daten + bcrypt-Admin-User anlegen
npm run dev
```

- Frontend: <http://localhost:3000>
- Admin-Login: <http://localhost:3000/admin/login>

## Production-Build prüfen

```bash
npm run build
npm start
```

## Wichtigste neue Funktionen

- **DB-basierter Admin-Login** mit bcrypt-Passwort-Hash (Fallback auf `.env` nur in Development)
- **DSGVO-Cookie-Consent** – Tracking-Skripte (GA, GTM, Meta Pixel, TikTok Pixel) laden erst nach Einwilligung
- **Pre-Launch Audit** unter `/admin/audit` listet alle Demo-Links und SEO-Lücken auf
- **Einnahmen-Import** für CSV-Reports aus Affiliate-Netzwerken
- **Postgres-fähig** – Schema-Variante unter `prisma/schema.postgres.prisma`

## Deployment auf Vercel

Komplette Anleitung in **[`docs/DEPLOYMENT_VERCEL.md`](./docs/DEPLOYMENT_VERCEL.md)**. Kurzform:

1. Repo nach Vercel importieren
2. Postgres-DB anbinden (Vercel Postgres, Neon oder Supabase – siehe [`docs/POSTGRES_SETUP.md`](./docs/POSTGRES_SETUP.md))
3. Environment Variables setzen (mind. `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_SITE_URL`)
4. Schema-Switch: `cp prisma/schema.postgres.prisma prisma/schema.prisma && git commit -am "..."`
5. Domain verbinden, DNS setzen, deployen

## Dokumentation

**Schnelleinstieg für dich:** [`docs/NEXT_STEPS_FOR_BRAHIM.md`](./docs/NEXT_STEPS_FOR_BRAHIM.md)

### Setup und Betrieb

- [SETUP.md](./docs/SETUP.md) – Schritt-für-Schritt-Anleitung lokal
- [DEPLOYMENT_VERCEL.md](./docs/DEPLOYMENT_VERCEL.md) – Vercel-Deployment
- [POSTGRES_SETUP.md](./docs/POSTGRES_SETUP.md) – PostgreSQL-Migration
- [REPOSITORY_MIGRATION.md](./docs/REPOSITORY_MIGRATION.md) – Repo umbenennen / umziehen

### Vor dem Launch

- [LAUNCH_CHECKLIST.md](./docs/LAUNCH_CHECKLIST.md) – technische Prüfliste
- [LEGAL_TODO_BEFORE_LAUNCH.md](./docs/LEGAL_TODO_BEFORE_LAUNCH.md) – rechtliche TODOs
- [LEGAL_NOTES_DE.md](./docs/LEGAL_NOTES_DE.md) – rechtliche Hinweise im Überblick

### Monetarisierung (Display Ads, CPC, CPM, AdSense)

- [MONETIZATION_SETUP.md](./docs/MONETIZATION_SETUP.md) – Übersicht aller Einnahmequellen
- [CPC_CPM_MONETIZATION.md](./docs/CPC_CPM_MONETIZATION.md) – CPC / CPM / CPL / CPA verständlich erklärt
- [ADSENSE_SETUP.md](./docs/ADSENSE_SETUP.md) – Google AdSense aktivieren
- [AWIN_CPC_SETUP.md](./docs/AWIN_CPC_SETUP.md) – Awin CPC-Programme einbinden
- [COOKIE_CONSENT_AND_ADS.md](./docs/COOKIE_CONSENT_AND_ADS.md) – DSGVO + Tracking
- [REVENUE_SCENARIOS.md](./docs/REVENUE_SCENARIOS.md) – Modellrechnungen für 10K–250K Besucher

### Affiliate, SEO und Marketing

- [AFFILIATE_NETWORKS.md](./docs/AFFILIATE_NETWORKS.md) – Anmeldung bei Partner-Netzwerken
- [AUTOPILOT_WORKFLOW.md](./docs/AUTOPILOT_WORKFLOW.md) – täglicher / wöchentlicher Ablauf
- [MARKETING_AUTOPILOT.md](./docs/MARKETING_AUTOPILOT.md) – SEO, Social Media, Ads-Entwürfe
- [SEO_SETUP.md](./docs/SEO_SETUP.md)
- [GOOGLE_SEARCH_CONSOLE_SETUP.md](./docs/GOOGLE_SEARCH_CONSOLE_SETUP.md)
- [GOOGLE_ANALYTICS_SETUP.md](./docs/GOOGLE_ANALYTICS_SETUP.md)
- [GOOGLE_ADS_SETUP.md](./docs/GOOGLE_ADS_SETUP.md)
- [META_ADS_SETUP.md](./docs/META_ADS_SETUP.md)
- [TIKTOK_ADS_SETUP.md](./docs/TIKTOK_ADS_SETUP.md)
- [CONTENT_PLAN.md](./docs/CONTENT_PLAN.md)
