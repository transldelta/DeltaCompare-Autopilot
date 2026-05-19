# Vercel-Runtime-Error beheben („Application error: a server-side exception")

Wenn deine Vercel-Webseite mit folgender Meldung erscheint:

> Application error: a server-side exception has occurred while loading <domain>.
> See the server logs for more information. Digest: 1395185251

dann ist die Ursache in 99 % der Fälle: **SQLite ist auf Vercel nicht erreichbar**.
Vercel hat ein read-only Filesystem, deine `dev.db`-Datei existiert dort gar nicht.

## Schritt 1: Prisma-Provider prüfen

Öffne `prisma/schema.prisma`. Die Datei muss **postgresql** als Provider haben:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Falls dort noch `provider = "sqlite"` steht, ändern und committen:

```bash
git commit -am "switch prisma to postgresql"
git push
```

Vercel deployt dann automatisch neu.

## Schritt 2: Postgres-Datenbank anlegen

Drei einfache Optionen:

### Option A – Vercel Postgres (empfohlen, kein extra Konto)
1. Im Vercel-Projekt → „Storage" → „Create Database" → „Postgres"
2. Vercel verbindet die DB automatisch mit deinem Projekt
3. Vercel setzt automatisch `POSTGRES_PRISMA_URL` und `POSTGRES_URL_NON_POOLING`

### Option B – Neon (kostenfreier Tarif großzügig)
1. <https://neon.tech> → Projekt anlegen
2. **Pooled connection URL** kopieren (endet auf `…?pgbouncer=true&connect_timeout=15`)

### Option C – Supabase
1. <https://supabase.com> → Projekt anlegen
2. Settings → Database → „Connection pooling" → URL kopieren

## Schritt 3: `DATABASE_URL` in Vercel setzen

Im Vercel-Projekt → **Settings → Environment Variables**:

| Variable | Wert |
| --- | --- |
| `DATABASE_URL` | Postgres-URL aus Schritt 2 (für Vercel Postgres: `${POSTGRES_PRISMA_URL}`) |

Wichtig: für **alle drei Environments** (Production, Preview, Development) setzen.

## Schritt 4: Tabellen anlegen (einmalig)

Lokal in deinem Terminal:

```bash
# Postgres-URL aus Vercel kopieren
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require" \
  npx prisma db push

# Demo-Daten einspielen (16 Kategorien, 27 Anbieter, 181 Vergleichsseiten, etc.)
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require" \
ADMIN_EMAIL="deine@email.de" \
ADMIN_PASSWORD="starkes-passwort" \
  npm run db:seed
```

## Schritt 5: Erneut deployen

In Vercel → Deployments → „Redeploy" auf das letzte Deployment klicken.

Nach 1–2 Minuten sollte die Webseite normal laden.

## Was tun, wenn das Problem bleibt?

1. **Vercel-Logs öffnen** (Project → Runtime Logs).
2. Nach `[safe:` Einträgen suchen — die zeigen genau, welche DB-Query fehlgeschlagen ist.
3. Häufige Ursachen:
   - `DATABASE_URL` fehlt oder ist falsch formatiert
   - DB existiert, aber Tabellen wurden nicht angelegt (`prisma db push` fehlt)
   - SSL-Pflicht fehlt in der URL (`?sslmode=require` ergänzen)
   - Verbindungs­limit der DB erschöpft → Pooler-URL verwenden

## Robustheit

Seit diesem Fix ist die App so umgebaut, dass DB-Fehler die Seite **nicht** mehr komplett crashen lassen:

- **Startseite**: zeigt einen freundlichen Hinweis, wenn keine Inhalte geladen werden konnten
- **Vergleichs-/Anbieter-/Kategorie-Detailseiten**: liefern 404 statt Crash
- **Sitemap**: enthält dann nur die statischen URLs
- **`/go/[slug]`** und **`/cpc/[slug]`**: leiten bei DB-Fehler auf die Startseite

Damit ist ein einzelner DB-Ausfall kein Komplett-Ausfall mehr.
