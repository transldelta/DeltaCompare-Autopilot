# Postgres-Datenbank einrichten

SQLite ist **nur für lokale Entwicklung** vorgesehen. In Produktion solltest du PostgreSQL nutzen, weil:

- Vercel und ähnliche Hoster haben kein persistentes Dateisystem für SQLite.
- Mehrere parallele Requests können SQLite-Dateien locken.
- Backups, Point-in-Time-Recovery und Replikation gibt es nur bei Postgres.

## Anbieter-Empfehlungen

- **Vercel Postgres** – am bequemsten, wenn du auf Vercel hostest. Kostenlos im Hobby-Tarif.
- **Neon** (<https://neon.tech>) – Serverless Postgres, großzügiges Free-Tier.
- **Supabase** (<https://supabase.com>) – Postgres + Auth/Storage, ebenfalls Free-Tier.
- **Railway** (<https://railway.app>) – einfache Postgres-Instanz.

## Wechsel von SQLite auf Postgres

1. Schema austauschen:

   ```bash
   cp prisma/schema.postgres.prisma prisma/schema.prisma
   ```

   Unterschied: `provider = "postgresql"`. Datenmodell ist identisch.

2. `.env` (oder Hosting Environment) auf Postgres-URL setzen:

   ```env
   DATABASE_URL="postgresql://user:pass@host:5432/deltacompare?sslmode=require"
   ```

3. Prisma-Client neu generieren und Schema in die DB pushen:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Daten seeden:

   ```bash
   npm run db:seed
   ```

## Migrationen (empfohlen für Produktion)

`db push` ist gut für die erste Initialisierung. Für laufende Änderungen
empfehlen wir Prisma-Migrationen:

```bash
npx prisma migrate dev --name init           # einmalig lokal gegen Dev-DB
git add prisma/migrations
git commit -m "add initial migration"
# in Produktion:
npx prisma migrate deploy
```

Migrationen sind versionierte SQL-Files in `prisma/migrations/`. Sie sollten
gegen Postgres erzeugt werden, nicht gegen SQLite, weil die SQL-Syntax abweicht.

## Daten aus SQLite nach Postgres übernehmen

Nutze den eingebauten CSV-Export im Admin:

1. Lokal: `/admin/import` → „Angebote als CSV exportieren".
2. Produktion deployen, leere DB seeden.
3. `/admin/import` → CSV hochladen → Import bestätigen.

Für `Settings` und `RevenueImport` solltest du diese Werte manuell neu setzen
oder direkt per Prisma Studio kopieren.

## Backup

- **Vercel Postgres**: integrierte tägliche Backups.
- **Neon**: Branching und Point-in-Time-Recovery.
- **Supabase**: tägliche Backups im Pro-Tier.

Empfehlung: zusätzlich wöchentlich einen CSV-Export aller Angebote sichern.

## Verbindungs-Pooling

Auf Serverless-Plattformen (Vercel) brauchst du eine **gepoolte URL**:

- Vercel Postgres → `POSTGRES_PRISMA_URL` (gepoolt).
- Neon → URL mit `?pgbouncer=true&connection_limit=1`.
- Supabase → URL aus „Connection Pooling" verwenden.

Für Migrationen (`prisma migrate deploy`) brauchst du eine **direkte URL**
ohne Pooling – die ist meist als `POSTGRES_URL_NON_POOLING` oder
„Direct connection“ verfügbar.
