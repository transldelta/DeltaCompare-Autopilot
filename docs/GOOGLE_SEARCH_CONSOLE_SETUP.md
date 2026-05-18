# Google Search Console einrichten

## 1. Property erstellen

- Auf <https://search.google.com/search-console> anmelden.
- „Property hinzufügen“ → „Domain“ wählen.
- Deine Domain eintragen (z. B. `deinedomain.de`).

## 2. Domain bestätigen

- DNS-TXT-Eintrag bei deinem Domain-Provider hinzufügen.
- Auf „Bestätigen“ klicken.

## 3. Sitemap einreichen

- Im linken Menü „Sitemaps“ öffnen.
- `https://deinedomain.de/sitemap.xml` eintragen und absenden.

## 4. Indexierung prüfen

- „URL-Prüfung“ verwenden, um einzelne Seiten zu testen.
- Bei „URL ist nicht auf Google“ → „Indexierung beantragen“.

## 5. Fehler erkennen

- Im Bereich „Seiten“ siehst du Probleme: 404, Soft-404, robots.txt-Blockierungen.
- `/admin`, `/api`, `/go/` sind absichtlich gesperrt – keine Fehlerursache.

## 6. Tipps

- Setze `NEXT_PUBLIC_SITE_URL` korrekt, sonst sind deine Canonicals falsch.
- Nach jeder neuen Kategorie / Vergleichsseite kannst du die Sitemap neu einreichen.
- Beobachte CTR und Rankings für deine Top-Vergleichsseiten.
