# Deployment auf Vercel

Schritt-für-Schritt-Anleitung. Geeignet für Selbstständige, die nicht programmieren wollen.

## 0. Voraussetzungen

- GitHub-Account
- Vercel-Account (kostenlos starten)
- Domain (optional, kann auch über Vercel registriert werden)
- Eine Postgres-Datenbank (siehe [POSTGRES_SETUP.md](./POSTGRES_SETUP.md))

## 1. Repository nach Vercel importieren

1. Auf <https://vercel.com> einloggen.
2. „New Project“ klicken.
3. GitHub-Repo `transldelta/XAU-USD` (oder das umbenannte `transldelta/DeltaCompare`, siehe
   [REPOSITORY_MIGRATION.md](./REPOSITORY_MIGRATION.md)) auswählen.
4. **Framework Preset**: Next.js (wird automatisch erkannt).
5. **Root Directory**: leer lassen.
6. **Build Command**: `npm run build` (Standard).
7. **Output Directory**: `.next` (Standard).
8. **Install Command**: `npm install` (Standard).

## 2. Environment Variables setzen

Im Vercel-Projekt unter **Settings → Environment Variables**:

| Key | Wert | Hinweis |
| --- | --- | --- |
| `DATABASE_URL` | Postgres-URL deines Anbieters | Pflicht |
| `ADMIN_EMAIL` | deine Login-Mail | Pflicht |
| `ADMIN_PASSWORD` | starkes Passwort | Pflicht – nur einmalig zum Seeding |
| `AUTH_SECRET` | `openssl rand -base64 48` Ausgabe | Pflicht, ≥ 32 Zeichen |
| `NEXT_PUBLIC_SITE_NAME` | z. B. `DeltaCompare` | Pflicht |
| `NEXT_PUBLIC_SITE_URL` | `https://deinedomain.de` | Pflicht |
| `GOOGLE_ANALYTICS_ID` | leer oder `G-XXXX` | Optional |
| `GOOGLE_TAG_MANAGER_ID` | leer oder `GTM-XXXX` | Optional |
| `META_PIXEL_ID` | leer oder Pixel-ID | Optional |
| `TIKTOK_PIXEL_ID` | leer oder Pixel-ID | Optional |

Alle drei Vercel-Umgebungen (Production, Preview, Development) konfigurieren – am
einfachsten die gleichen Werte für alle drei setzen, außer `DATABASE_URL` und
`NEXT_PUBLIC_SITE_URL`, die je Umgebung unterschiedlich sein können.

## 3. Postgres anbinden

Optionen:

- **Vercel Postgres** (am einfachsten):
  1. Im Projekt-Dashboard auf „Storage“ → „Create Database“ → „Postgres“.
  2. Vercel setzt automatisch `POSTGRES_PRISMA_URL` und `POSTGRES_URL_NON_POOLING`.
  3. Trage `DATABASE_URL=${POSTGRES_PRISMA_URL}` als Environment Variable ein.
- **Neon, Supabase, Railway**:
  1. Dort eine Postgres-Datenbank anlegen.
  2. Connection-String kopieren.
  3. Als `DATABASE_URL` in Vercel hinterlegen.

Wechsel des Prisma-Providers (einmalig vor dem ersten Deploy):

```bash
cp prisma/schema.postgres.prisma prisma/schema.prisma
git commit -am "switch prisma provider to postgres"
git push
```

## 4. Datenbank initialisieren

Lokal mit Verbindung zur Produktions-DB (oder auf einer Vercel-Build-Hook-Stage):

```bash
DATABASE_URL="<prod-url>" npx prisma db push
DATABASE_URL="<prod-url>" ADMIN_EMAIL="<mail>" ADMIN_PASSWORD="<pw>" npm run db:seed
```

Damit werden Kategorien, Demo-Anbieter, Vergleichsseiten und der Admin-User
mit bcrypt-Hash angelegt.

## 5. Domain verbinden

1. Im Vercel-Projekt unter „Settings → Domains" deine Domain hinzufügen.
2. DNS-Einträge bei deinem Provider gemäß Vercel-Hinweis setzen
   (A-Record auf `76.76.21.21` oder CNAME auf `cname.vercel-dns.com`).
3. Nach DNS-Propagation wird automatisch SSL ausgestellt.
4. `NEXT_PUBLIC_SITE_URL` auf die finale Domain umstellen und neu deployen.

## 6. Erstes Deploy

1. Vercel deployt automatisch nach jedem Push auf `main`.
2. Build-Log prüfen (typische Probleme: fehlende `DATABASE_URL`, fehlendes `AUTH_SECRET`).
3. Login unter `https://deinedomain.de/admin/login` testen.

## 7. Nach dem Go-Live

- Pre-Launch-Audit unter `/admin/audit` prüfen.
- Demo-Links ersetzen.
- Sitemap unter `https://deinedomain.de/sitemap.xml` an Google Search Console übermitteln.
- Tracking-IDs in Vercel ergänzen und neu deployen.

## Häufige Probleme

| Problem | Lösung |
| --- | --- |
| Build bricht mit „AUTH_SECRET muss…" ab | `AUTH_SECRET` in Vercel setzen, mind. 32 Zeichen |
| 500-Fehler nach Deploy | Logs in Vercel öffnen, meist DB-URL falsch |
| Admin-Login funktioniert nicht | DB wurde nicht geseedet → `npm run db:seed` mit Prod-URL ausführen |
| Affiliate-Links zeigen Demo-Hinweis | Im Admin unter `/admin/audit` ersetzen |
