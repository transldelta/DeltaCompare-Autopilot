# Setup – Schritt für Schritt

## 1. Voraussetzungen

- Node.js ≥ 18 (empfohlen 20+)
- npm
- Optional: SQLite-Viewer (z. B. DB Browser for SQLite)

## 2. Projekt klonen / Dateien anlegen

```bash
git clone <dieses-repo>
cd deltacompare-autopilot
```

## 3. Umgebungs­variablen

```bash
cp .env.example .env
```

In `.env` setzen:

```env
DATABASE_URL="file:./dev.db"
ADMIN_EMAIL="dein.admin@beispiel.de"
ADMIN_PASSWORD="ein-starkes-passwort"
AUTH_SECRET="zufaelliger-string-mindestens-32-zeichen"
NEXT_PUBLIC_SITE_NAME="DeltaCompare"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
GOOGLE_ANALYTICS_ID=""
GOOGLE_TAG_MANAGER_ID=""
META_PIXEL_ID=""
TIKTOK_PIXEL_ID=""
```

**Wichtig**: `AUTH_SECRET` sollte mindestens 32 zufällige Zeichen enthalten und vor Veröffentlichung ersetzt werden. `ADMIN_PASSWORD` ebenfalls.

## 4. Dependencies installieren

```bash
npm install
```

Beim Postinstall wird automatisch `prisma generate` ausgeführt.

## 5. Datenbank vorbereiten

```bash
npm run db:push       # Tabellen aus prisma/schema.prisma anlegen
npm run db:seed       # Kategorien, Demo-Angebote, 25 Vergleichsseiten anlegen
```

Bei späteren Schema-Änderungen genügt `npm run db:push` erneut. Mit
`npm run db:reset` werden alle Daten neu aufgesetzt.

## 6. Entwicklung starten

```bash
npm run dev
```

- Frontend: <http://localhost:3000>
- Admin: <http://localhost:3000/admin/login>

## 7. Marketing-Inhalte erzeugen

```bash
npx tsx scripts/generate-marketing-content.ts
```

Erzeugt unter `content/social-media/`, `content/blog-drafts/` und `content/ad-campaigns/`:

- 100 TikTok / YouTube-Shorts-Skripte
- 100 Instagram-Posts
- 100 Pinterest-Pins
- 30 Newsletter-Ideen
- 50 Blog-Ideen
- 25 Google-/Meta-/TikTok-Ads-Entwürfe

## 8. Produktion bauen

```bash
npm run build
npm start
```

## 9. Wechsel auf PostgreSQL (optional)

1. In `prisma/schema.prisma` `provider = "postgresql"` setzen.
2. `DATABASE_URL` in `.env` auf eine Postgres-Verbindung umstellen.
3. `npm run db:push` ausführen.
4. Optional: alte Daten mit dem CSV-Export sichern und importieren.

## 10. Domain verbinden / Deployment

Empfehlung: Vercel, Netlify, Railway oder eigener Server. Wichtig:

- Persistente Datenbank (PostgreSQL empfohlen, kein File-SQLite in produktiven Deployments wenn mehrere Instanzen laufen).
- Umgebungs­variablen aus `.env.example` setzen.
- Domain auf das Deployment zeigen lassen.
- `NEXT_PUBLIC_SITE_URL` auf die finale Domain ändern.
