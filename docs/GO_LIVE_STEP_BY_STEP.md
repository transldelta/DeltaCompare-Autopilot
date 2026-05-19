# Go-Live Schritt für Schritt

Diese Anleitung führt dich vom fertigen Projekt zur live erreichbaren Webseite.
Plane 2–4 Stunden ein (ohne Wartezeiten bei AdSense oder DNS-Propagation).

## Schritt 1: Domain kaufen

1. Domain bei einem Anbieter deiner Wahl registrieren (z. B. INWX, IONOS, Cloudflare Registrar).
2. Domain auf deinen Account aktiv halten.
3. **Noch keine** DNS-Einträge auf Vercel ändern – das machen wir später.

## Schritt 2: Vercel verbinden

1. <https://vercel.com> aufrufen, mit GitHub einloggen.
2. „New Project" → Repository auswählen (`transldelta/deltacompare-autopilot` nach Repo-Rename, oder das aktuelle Repo).
3. Framework Preset: **Next.js** wird automatisch erkannt.
4. „Deploy" klicken — erster Build läuft. Eventuelle Build-Fehler kommen meist von fehlenden Env-Vars (siehe Schritt 3).

## Schritt 3: Environment Variables eintragen

In Vercel: Project → Settings → Environment Variables. Mindestens setzen:

| Key | Wert | Wo herkommen |
| --- | --- | --- |
| `DATABASE_URL` | Postgres-URL | aus Schritt 4 |
| `ADMIN_EMAIL` | deine E-Mail | selbst wählen |
| `ADMIN_PASSWORD` | starkes Passwort | selbst wählen |
| `AUTH_SECRET` | 48 zufällige Zeichen | `openssl rand -base64 48` |
| `NEXT_PUBLIC_SITE_NAME` | DeltaCompare | optional anpassen |
| `NEXT_PUBLIC_SITE_URL` | https://deinedomain.de | deine Produktiv-Domain |

Optional (Monetarisierung):

| Key | Wert |
| --- | --- |
| `GOOGLE_ADSENSE_CLIENT_ID` | `ca-pub-...` |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` | `ca-pub-...` (gleicher Wert) |
| `NEXT_PUBLIC_ENABLE_ADS` | `true` oder `false` |

Optional (Tracking):

| Key | Wert |
| --- | --- |
| `GOOGLE_ANALYTICS_ID` | `G-XXXXXXX` |
| `GOOGLE_TAG_MANAGER_ID` | `GTM-XXXXX` |
| `META_PIXEL_ID` | Pixel-ID |
| `TIKTOK_PIXEL_ID` | Pixel-ID |

## Schritt 4: Datenbank verbinden

Empfohlen: **Vercel Postgres** (einfachste Option) oder **Neon** (großzügiges Free-Tier).

**Vercel Postgres:**
1. Im Projekt → „Storage" → „Create Database" → „Postgres".
2. Vercel verbindet automatisch `POSTGRES_PRISMA_URL` und `POSTGRES_URL_NON_POOLING`.
3. Setze `DATABASE_URL=${POSTGRES_PRISMA_URL}` in den Environment Variables.

**Neon:**
1. Auf <https://neon.tech> Datenbank erstellen.
2. Pooled-Connection-URL kopieren.
3. Als `DATABASE_URL` in Vercel speichern (mit `?pgbouncer=true`).

## Schritt 5: Prisma-Schema umschalten und migrieren

Einmalig im Terminal lokal:

```bash
cp prisma/schema.postgres.prisma prisma/schema.prisma
git add prisma/schema.prisma
git commit -m "switch prisma provider to postgres"
git push
```

Dann lokal mit der Produktions-URL pushen + seeden:

```bash
DATABASE_URL="<prod-url>" npx prisma db push
DATABASE_URL="<prod-url>" ADMIN_EMAIL="<deine-mail>" ADMIN_PASSWORD="<starkes-pw>" npm run db:seed
```

Damit werden Kategorien, Anbieter, Vergleichsseiten, Demo-CPC-Angebote und
der bcrypt-gehashte Admin-User angelegt.

## Schritt 6: Affiliate-Links ersetzen

1. <https://deinedomain.de/admin/login> öffnen, einloggen.
2. <https://deinedomain.de/admin/audit> aufrufen.
3. Pro Anbieter „Demo-Link ersetzen" klicken, echten Affiliate-Link einsetzen.
4. Status auf „aktiv" lassen, speichern.
5. Wiederholen, bis Readiness 100 % zeigt.

## Schritt 7: AdSense / Anzeigen vorbereiten

1. AdSense beantragen (<https://www.google.com/adsense>).
2. Sobald Freigabe da: Publisher-ID in `.env` setzen und neu deployen.
3. Im Admin <https://deinedomain.de/admin/ad-placements> Plätze aktivieren.
4. **NIEMALS** ohne Consent-Banner aktivieren — der ist bereits eingebaut, aber bitte testen.

## Schritt 8: Cookie-Consent prüfen

1. Webseite öffnen, Banner muss erscheinen.
2. „Ablehnen" wählen → keine Tracking-Skripte im HTML.
3. „Akzeptieren" wählen → Tracker laden.
4. Wenn alles passt, ggf. ein professionelles Consent-Tool (Usercentrics, CookieFirst) einbauen.

## Schritt 9: Sitemap bei Google Search Console einreichen

1. <https://search.google.com/search-console> öffnen.
2. „Property hinzufügen" → „Domain".
3. DNS-Verifizierung per TXT-Eintrag.
4. „Sitemaps" → `https://deinedomain.de/sitemap.xml` einreichen.
5. Indexierung prüfen (kann mehrere Tage dauern).

## Schritt 10: Erste Seiten testen + Live-Schaltung

Stichproben:

- Startseite lädt
- Eine Vergleichsseite mit echtem Anbieter funktioniert (Klick auf Affiliate-Button → echte Ziel-URL erreicht)
- `/admin/audit` zeigt 100 % Readiness oder dokumentierte Lücken
- `/admin/launch-wizard` zeigt Status „Bereit für Livegang"
- Impressum + Datenschutz sind mit echten Daten gefüllt

**Wenn alle Stichproben durch sind:**

1. Domain in Vercel finalisieren (Apex + www).
2. DNS-Provider: A-Record/CNAME laut Vercel-Anweisung.
3. SSL wird automatisch ausgestellt.
4. `NEXT_PUBLIC_SITE_URL` final setzen, neu deployen.

Glückwunsch — du bist live. 🎉

## Was du NICHT tun sollst

- ❌ Keine bezahlten Anzeigen schalten, bevor Conversion-Tracking sauber funktioniert
- ❌ Kein Newsletter-Versand ohne Double-Opt-In
- ❌ Keine fremden Logos ohne Lizenz
- ❌ Keine garantierten Einnahmen versprechen
- ❌ Keine Affiliate-Links teilen, deren Programm dich nicht akzeptiert hat
