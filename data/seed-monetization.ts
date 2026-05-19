/**
 * Demo-Daten für Monetarisierung.
 *
 * Wichtig: keine echten Markenlogos, keine echten Affiliate-Links,
 * alle Demo-Ziele klar als DEMO_LINK_ERSETZEN markiert.
 */

export const AD_NETWORKS = [
  {
    name: "Google AdSense",
    type: "ADSENSE",
    status: "inactive",
    publisherId: "",
    notes:
      "Aktiv schalten, sobald die AdSense-Anmeldung freigegeben ist und die Publisher-ID (ca-pub-...) eingetragen wurde. Skripte laden nur nach Consent.",
  },
  {
    name: "Awin (CPC + CPL/CPA)",
    type: "AWIN",
    status: "inactive",
    publisherId: "",
    notes: "Programme bewerben, Deeplinks pflegen. CPC-Programme separat anlegen.",
  },
  {
    name: "financeAds",
    type: "FINANCEADS",
    status: "inactive",
    publisherId: "",
    notes: "Banking und Versicherungen – meist CPL und CPA.",
  },
  {
    name: "Direkt-Werbepartner",
    type: "DIRECT",
    status: "inactive",
    publisherId: "",
    notes:
      "Plätze, die direkt verkauft werden (z. B. Sponsoring eines Vergleichs). HTML-Snippet im Placement-Code-Feld pflegen.",
  },
];

export const AD_PLACEMENTS = [
  { name: "Header (Top-Banner)", slug: "header-banner", placementType: "HEADER", adType: "BANNER", isActive: false },
  { name: "Sidebar (Desktop)", slug: "sidebar-desktop", placementType: "SIDEBAR", adType: "DISPLAY", isActive: false, showOnMobile: false },
  { name: "In-Content: nach Einleitung", slug: "comparison-after-intro", placementType: "IN_CONTENT", adType: "DISPLAY", isActive: false },
  { name: "In-Content: nach Vergleichstabelle", slug: "comparison-after-table", placementType: "COMPARISON_TABLE", adType: "DISPLAY", isActive: false },
  { name: "In-Content: im FAQ-Bereich", slug: "comparison-in-faq", placementType: "IN_CONTENT", adType: "NATIVE", isActive: false, showOnMobile: false },
  { name: "Footer", slug: "footer-banner", placementType: "FOOTER", adType: "DISPLAY", isActive: false },
  { name: "Mobile Sticky", slug: "mobile-sticky", placementType: "MOBILE_STICKY", adType: "DISPLAY", isActive: false, showOnDesktop: false },
];

export const DEMO_CPC_OFFERS = [
  {
    name: "DEMO CPC: Geschäftskonto",
    slug: "demo-cpc-geschaeftskonto",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "Awin",
    cpcRate: 0.4,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-geschaeftskonto",
    description: "CPC-Demo: vergütet pro Klick auf einen Geschäftskonto-Anbieter. Ersetze den Demo-Link vor Go-Live.",
  },
  {
    name: "DEMO CPC: Kreditkarte",
    slug: "demo-cpc-kreditkarte",
    categorySlug: "geschaeftskonto-kreditkarten",
    network: "financeAds",
    cpcRate: 0.35,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-kreditkarte",
    description: "CPC-Demo: vergütet pro Klick auf einen Kreditkarten-Vergleich.",
  },
  {
    name: "DEMO CPC: Buchhaltungssoftware",
    slug: "demo-cpc-buchhaltungssoftware",
    categorySlug: "buchhaltung-steuern",
    network: "PartnerStack",
    cpcRate: 0.25,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-buchhaltung",
    description: "CPC-Demo: vergütet pro Klick auf eine Buchhaltungs-Software.",
  },
  {
    name: "DEMO CPC: DSL-Vergleich",
    slug: "demo-cpc-dsl",
    categorySlug: "energie-internet-telekom",
    network: "Tarifcheck",
    cpcRate: 0.5,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-dsl",
    description: "CPC-Demo: vergütet pro Klick auf einen DSL-Vergleichsrechner.",
  },
  {
    name: "DEMO CPC: Versicherungsvergleich",
    slug: "demo-cpc-versicherung",
    categorySlug: "versicherungen",
    network: "CHECK24",
    cpcRate: 0.6,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-versicherung",
    description: "CPC-Demo: vergütet pro Klick auf einen Versicherungsvergleich.",
  },
  {
    name: "DEMO CPC: Shopify-Tool",
    slug: "demo-cpc-shopify-tool",
    categorySlug: "shopify-e-commerce",
    network: "impact.com",
    cpcRate: 0.3,
    targetUrl: "DEMO_LINK_ERSETZEN:cpc-shopify",
    description: "CPC-Demo: vergütet pro Klick auf eine Shopify-App.",
  },
];
