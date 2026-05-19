# Monetarisierung – Setup

DeltaCompare unterstützt vier Einnahmequellen parallel:

1. **Affiliate (CPA / CPL / Recurring)** – über `/go/[slug]` und das `Offer`-Modell
2. **CPC-Angebote** – über `/cpc/[slug]` und das `CpcOffer`-Modell
3. **Display Ads (CPM/CPC)** – über `AdPlacement` und die `AdSlot`-Komponente
4. **Direkte Werbeplätze** – HTML-Snippets pro `AdPlacement` hinterlegen

## Admin-Bereich

Im Admin findest du folgende Bereiche:

| Pfad | Inhalt |
| --- | --- |
| `/admin/monetization` | Dashboard, Schätzungen, Warnungen |
| `/admin/cpc-offers` | CPC-Angebote verwalten |
| `/admin/ad-placements` | Anzeigen-Plätze (Header, Sidebar, In-Content, Footer …) |
| `/admin/ads` | Werbenetzwerke (AdSense, Awin, financeAds …) |
| `/admin/revenue-calculator` | Modellrechnung für Einnahmen |
| `/admin/audit` | Pre-Launch-Audit inkl. Demo-Links |

## Globale Schalter

- `.env`: `NEXT_PUBLIC_ENABLE_ADS="true"` aktiviert Anzeigen pauschal
- `.env`: `GOOGLE_ADSENSE_CLIENT_ID` + `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` müssen mit `ca-pub-` beginnen
- Admin `/admin/settings`: `ads_enabled` und `adsense_client_id` ebenfalls pflegbar (DB-Override)
- Pro Anzeigen-Platz: Schalter `isActive`, `showOnMobile`, `showOnDesktop`

## Standardplätze (nach Seed)

Folgende Plätze werden inaktiv vorinstalliert:

- `header-banner` – Top-Banner
- `sidebar-desktop` – Desktop-Sidebar
- `comparison-after-intro` – nach Einleitung der Vergleichsseite
- `comparison-after-table` – nach Vergleichstabelle
- `comparison-in-faq` – im FAQ-Bereich (Desktop only)
- `footer-banner` – Footer
- `mobile-sticky` – Mobile-Sticky

In `app/vergleich/[slug]/page.tsx` sind drei dieser Plätze bereits eingebunden
(`comparison-after-intro`, `comparison-after-table`, `comparison-in-faq`).
Aktiviere sie im Admin, sobald du echte Werbung ausspielen möchtest.

## Was DeltaCompare NICHT macht

- ❌ Keine automatische AdSense-Anmeldung
- ❌ Keine automatische Kontoeröffnung bei Werbenetzwerken
- ❌ Keine Klick-Bots, Auto-Klicks oder Click-Farmen
- ❌ Keine Aufforderungen zum Klicken („Bitte klicken“ verboten)
- ❌ Keine versteckten Anzeigen oder irreführenden Buttons
- ❌ Keine echten Werbeanzeigen automatisch schalten

## Erste Schritte

1. AdSense beantragen → siehe `docs/ADSENSE_SETUP.md`
2. Awin/financeAds anmelden → siehe `docs/AFFILIATE_NETWORKS.md`
3. CPC-Angebote im Admin pflegen → siehe `docs/AWIN_CPC_SETUP.md`
4. Anzeigen-Plätze aktivieren
5. Cookie-Consent prüfen → `docs/COOKIE_CONSENT_AND_ADS.md`
6. Revenue-Calculator als Sanity-Check → `docs/REVENUE_SCENARIOS.md`
