# Nächste Schritte – einfache Anleitung

Diese Anleitung ist absichtlich kurz gehalten. Mehr Details findest du in den
anderen Dokumenten unter `docs/`.

## 1. Projekt lokal starten (15 Minuten)

```bash
git clone <dein-repo-url>
cd DeltaCompare   # bzw. XAU-USD, bis das Repo umbenannt ist
cp .env.example .env
# Werte in .env mindestens anpassen:
#   ADMIN_PASSWORD, AUTH_SECRET
npm install
npm run db:push
npm run db:seed
npm run dev
```

Öffne <http://localhost:3000>. Die Webseite ist sofort sichtbar.

## 2. Admin öffnen

- URL: <http://localhost:3000/admin/login>
- E-Mail: Wert aus `ADMIN_EMAIL`
- Passwort: Wert aus `ADMIN_PASSWORD`

Im Admin findest du:

- **Pre-Launch Audit** (unter „/admin/audit“) – die wichtigste Seite vor dem Go-Live.
- **Angebote** – Anbieter pflegen.
- **Vergleichsseiten** – Inhalte erweitern.

## 3. Demo-Links ersetzen

1. Im Admin auf „Pre-Launch Audit“ klicken.
2. Alle Anbieter mit „DEMO_LINK“ erscheinen in der Liste.
3. Pro Anbieter „Demo-Link ersetzen“ klicken → echten Affiliate-Link einfügen → Speichern.

## 4. Affiliate-Netzwerke anmelden

Siehe `docs/AFFILIATE_NETWORKS.md`. Empfohlene Reihenfolge für Selbstständigen-Vergleiche:

1. **Awin** – Geschäftskonten, Hosting, Website-Builder
2. **financeAds** – Banking, Versicherungen, Kredite
3. **CHECK24 / Tarifcheck** – Versicherungen, Strom, DSL
4. **PartnerStack** – Software-SaaS (Buchhaltung, CRM, E-Mail)
5. **impact.com** – Shopify, Canva, FreshBooks
6. **Direkte Programme** – HubSpot, Shopify Affiliate

Pro Netzwerk:

1. Konto eröffnen.
2. Webseite eintragen (deine Domain).
3. IBAN und Steuerdaten hinterlegen.
4. Programme bewerben (Anbieter freischalten lassen).
5. Tracking-Links kopieren.

## 5. Echte Links eintragen

- Im Admin unter „Angebote" pro Anbieter:
  - `affiliateLink` → Deeplink aus dem Netzwerk
  - `trackingId` → eigene SubID (optional, hilft bei Reports)
  - `network` → korrekt setzen
  - `commissionType` → Lead / Sale / Recurring
- Status auf `active` setzen.

Vergiss nicht: nach jedem Speichern lädt die Seite mit den echten Daten.

## 6. Domain verbinden

Siehe `docs/DEPLOYMENT_VERCEL.md`. Kurz:

1. Vercel-Projekt mit dem GitHub-Repo verbinden.
2. Environment Variables setzen (vor allem `DATABASE_URL`, `AUTH_SECRET`, `NEXT_PUBLIC_SITE_URL`).
3. Postgres-DB anbinden (Vercel Postgres oder Neon, siehe `docs/POSTGRES_SETUP.md`).
4. Domain im Vercel-Projekt hinzufügen.
5. DNS-Einträge bei deinem Provider gemäß Vercel-Anweisung setzen.
6. SSL wird automatisch ausgestellt.

## 7. Google Search Console verbinden

Siehe `docs/GOOGLE_SEARCH_CONSOLE_SETUP.md`. Kurz:

1. <https://search.google.com/search-console> öffnen.
2. „Property hinzufügen" → „Domain" → deine Domain.
3. TXT-Eintrag in der DNS-Verwaltung setzen.
4. „Bestätigen".

## 8. Sitemap einreichen

1. In der Search Console „Sitemaps".
2. URL `https://deinedomain.de/sitemap.xml` eintragen → „Senden".
3. Indexierungsstatus in den nächsten Tagen prüfen.

## 9. Erste Seiten veröffentlichen

- Vergleichsseiten mit echten Affiliate-Links priorisieren:
  - Beste Geschäftskonten
  - Beste Buchhaltungssoftware
  - Beste Versicherungen für Selbstständige
- In Google Search Console pro Seite „Indexierung beantragen".

## 10. Social-Media-Entwürfe nutzen

- 100 TikTok-Skripte unter `content/social-media/tiktok-scripts.json`.
- 100 Instagram-Captions unter `content/social-media/instagram-posts.json`.
- 100 Pinterest-Pins unter `content/social-media/pinterest-pins.json`.
- 30 Newsletter-Ideen + 50 Blog-Ideen ebenfalls vorbereitet.

Wähle pro Woche 3–5 Entwürfe, individualisiere sie, veröffentliche sie manuell.
Setze auf jeder Plattform die korrekte Werbe-Kennzeichnung (#Werbung / #Anzeige).

---

## Was du NICHT tun sollst

- ❌ Keine bezahlten Anzeigen schalten, bevor das Conversion-Tracking funktioniert
- ❌ Keine fremden Logos ohne Erlaubnis verwenden
- ❌ Keine Finanz-, Steuer- oder Rechtsberatung versprechen
- ❌ Keine garantierten Einnahmen versprechen
- ❌ Keinen Affiliate-Link teilen, dessen Programm dich nicht akzeptiert hat
- ❌ Kein Newsletter-Versand ohne Double-Opt-In

## Wenn etwas hakt

- Vor Go-Live → `docs/LAUNCH_CHECKLIST.md` und `docs/LEGAL_TODO_BEFORE_LAUNCH.md`
- Datenbank-Fragen → `docs/POSTGRES_SETUP.md`
- Deployment → `docs/DEPLOYMENT_VERCEL.md`
- Repo-Umzug → `docs/REPOSITORY_MIGRATION.md`
