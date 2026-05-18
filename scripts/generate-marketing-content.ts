/**
 * Generiert SVG-Platzhalter und Marketing-Content-JSON-Dateien.
 *
 * Aufruf: npx tsx scripts/generate-marketing-content.ts
 *
 * Output:
 *   content/social-media/tiktok-scripts.json (100)
 *   content/social-media/youtube-shorts.json (100, identisch verwendbar)
 *   content/social-media/instagram-posts.json (100)
 *   content/social-media/pinterest-pins.json (100)
 *   content/social-media/newsletter-ideas.json (30)
 *   content/blog-drafts/blog-ideas.json (50)
 *   content/ad-campaigns/google-ads.json
 *   content/ad-campaigns/meta-ads.json
 *   content/ad-campaigns/tiktok-ads.json
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

const TOPICS = [
  { id: "geschaeftskonto", name: "Geschäftskonto für Selbstständige", pageSlug: "vergleich/beste-geschaeftskonten-fuer-selbststaendige" },
  { id: "kreditkarte", name: "Business-Kreditkarte", pageSlug: "vergleich/beste-kreditkarten-fuer-selbststaendige" },
  { id: "buchhaltung", name: "Buchhaltungssoftware", pageSlug: "vergleich/beste-buchhaltungssoftware" },
  { id: "rechnung", name: "Rechnungsprogramm", pageSlug: "vergleich/beste-rechnungsprogramme" },
  { id: "steuer", name: "Steuer-Tool", pageSlug: "vergleich/beste-steuer-tools-fuer-selbststaendige" },
  { id: "shopify", name: "Shopify-Tools", pageSlug: "vergleich/beste-shopify-tools" },
  { id: "website", name: "Website-Builder", pageSlug: "vergleich/beste-website-builder" },
  { id: "hosting", name: "Hosting-Anbieter", pageSlug: "vergleich/beste-hosting-anbieter" },
  { id: "crm", name: "CRM-System", pageSlug: "vergleich/beste-crm-systeme" },
  { id: "email", name: "E-Mail-Marketing-Tool", pageSlug: "vergleich/beste-e-mail-marketing-tools" },
  { id: "versicherung", name: "Versicherung für Selbstständige", pageSlug: "vergleich/beste-versicherungen-fuer-selbststaendige" },
  { id: "pkv", name: "Private Krankenversicherung", pageSlug: "vergleich/private-krankenversicherung-vergleich" },
  { id: "kfz", name: "Kfz-Versicherung", pageSlug: "vergleich/kfz-versicherung-vergleich" },
  { id: "dsl", name: "DSL/Glasfaser", pageSlug: "vergleich/dsl-vergleich" },
  { id: "strom", name: "Strom & Gas", pageSlug: "vergleich/strom-und-gasvergleich" },
  { id: "scanner", name: "Scanner", pageSlug: "vergleich/beste-scanner-fuer-selbststaendige" },
  { id: "drucker", name: "Drucker", pageSlug: "vergleich/beste-drucker-fuer-buero-und-homeoffice" },
  { id: "headset", name: "Headset", pageSlug: "vergleich/beste-headsets-fuer-online-meetings" },
  { id: "dolmetscher", name: "Tools für Dolmetscher", pageSlug: "vergleich/beste-tools-fuer-dolmetscher-und-uebersetzer" },
  { id: "apps", name: "Apps für Selbstständige", pageSlug: "vergleich/beste-apps-fuer-selbststaendige" },
  { id: "pm", name: "Projektmanagement-Tool", pageSlug: "vergleich/beste-projektmanagement-tools" },
  { id: "termin", name: "Terminbuchungs-Tool", pageSlug: "vergleich/beste-terminbuchungs-tools" },
  { id: "zahlung", name: "Online-Zahlungsanbieter", pageSlug: "vergleich/beste-online-zahlungsanbieter" },
  { id: "ki", name: "KI-Tool", pageSlug: "vergleich/beste-ki-tools-fuer-selbststaendige" },
  { id: "dms", name: "Dokumentenmanagement", pageSlug: "vergleich/beste-dokumentenmanagement-tools" },
];

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

// === TikTok / YouTube Shorts Skripte (100) ===
function tiktokScripts() {
  const hooks = [
    "3 Dinge, die jeder Selbstständige zu spät lernt:",
    "So sparst du dieses Jahr 500 € in deinem Business:",
    "Was kostet eigentlich ein gutes",
    "Hör auf, das manuell zu machen.",
    "Diese 1 Sache spart dir 2 Stunden pro Woche:",
    "Wenn du das noch nicht kennst, verlierst du Geld:",
    "Was niemand dir über",
    "Mein Setup als Selbstständige in 30 Sekunden:",
    "3 Tools, die du als Solo-Selbstständige brauchst:",
    "Falsche Spar-Tipps und was wirklich hilft:",
  ];
  const bodies = [
    "Schritt 1: Bedarf klar machen. Schritt 2: 3 Anbieter vergleichen. Schritt 3: Konditionen schwarz auf weiß holen.",
    "Wichtig: Nicht den günstigsten, sondern den passendsten Anbieter wählen.",
    "Worauf ich besonders schaue: Konditionen, Wechselmöglichkeit, Buchhaltungs-Anbindung.",
    "Tipp: Liste die wichtigsten Funktionen vor dem Vergleich auf.",
    "Spar-Tipp: jährlich vergleichen lohnt sich fast immer.",
  ];
  const ctas = [
    "Vergleich in der Bio.",
    "Link auf Profil – kostenlos.",
    "Mehr im Profil.",
    "Klick auf Bio für den Vergleich.",
    "Detail-Vergleich verlinkt.",
  ];
  const out: any[] = [];
  for (let i = 0; i < 100; i++) {
    const t = TOPICS[i % TOPICS.length];
    out.push({
      id: `tt-${i + 1}`,
      platform: "TikTok / YouTube Shorts",
      topic: t.name,
      hook: `${pick(hooks, i)} ${t.name}.`,
      script: `${pick(bodies, i)}`,
      cta: pick(ctas, i),
      targetUrl: `/${t.pageSlug}`,
      durationSec: 30,
      hashtags: ["#Selbstständig", "#" + t.id, "#Vergleich", "#Business"],
    });
  }
  return out;
}

// === Instagram Posts (100) ===
function instagramPosts() {
  const out: any[] = [];
  for (let i = 0; i < 100; i++) {
    const t = TOPICS[i % TOPICS.length];
    out.push({
      id: `ig-${i + 1}`,
      platform: "Instagram",
      topic: t.name,
      title: `${t.name}: Worauf du wirklich achten solltest`,
      caption: `Wer ${t.name} sucht, sollte 3 Dinge prüfen: Konditionen, Kündigungs­fristen und Integrationen.\n\n👉 Im Vergleich auf DeltaCompare findest du Anbieter im direkten Überblick. Werbung / Affiliate-Link.`,
      targetUrl: `/${t.pageSlug}`,
      hashtags: ["#Selbstständig", "#" + t.id, "#Vergleich", "#Business", "#Solopreneur"],
    });
  }
  return out;
}

// === Pinterest Pins (100) ===
function pinterestPins() {
  const out: any[] = [];
  for (let i = 0; i < 100; i++) {
    const t = TOPICS[i % TOPICS.length];
    out.push({
      id: `pin-${i + 1}`,
      platform: "Pinterest",
      topic: t.name,
      title: `${t.name} – einfacher Vergleich für Selbstständige`,
      description: `Sieh dir den ${t.name}-Vergleich an. Wichtige Kriterien, Vor- und Nachteile, alle Anbieter im direkten Überblick. Werbung / Affiliate-Link.`,
      targetUrl: `/${t.pageSlug}`,
      altText: `${t.name} im Vergleich`,
    });
  }
  return out;
}

// === Newsletter Ideen (30) ===
function newsletterIdeas() {
  const angles = [
    "Was sich gerade für Selbstständige bei",
    "5 Fehler beim Thema",
    "Vergleich der Woche:",
    "Worauf du dieses Jahr besonders achten musst beim Thema",
    "Mein persönliches Top-Tool für",
    "3 Tipps, mit denen du beim Thema",
  ];
  const out: any[] = [];
  for (let i = 0; i < 30; i++) {
    const t = TOPICS[i % TOPICS.length];
    const angle = pick(angles, i);
    out.push({
      id: `nl-${i + 1}`,
      topic: t.name,
      subject: `${angle} ${t.name} ändert`,
      preheader: `Aktuelle Empfehlungen und Vergleich`,
      body: `Hi,\n\n${angle.toLowerCase()} ${t.name.toLowerCase()} solltest du diese Woche kennen.\n\nIm aktuellen Vergleich findest du die wichtigsten Anbieter und Hinweise. Werbung / Affiliate-Link.\n\nViele Grüße\nDein DeltaCompare-Team`,
      targetUrl: `/${t.pageSlug}`,
    });
  }
  return out;
}

// === Blog-Ideen (50) ===
function blogIdeas() {
  const templates = [
    (n: string) => `${n}: Die 5 besten Optionen 2026`,
    (n: string) => `${n} im Vergleich – Vor- und Nachteile`,
    (n: string) => `So findest du das richtige ${n} in 3 Schritten`,
    (n: string) => `${n} für Einsteiger – Schritt für Schritt`,
    (n: string) => `${n}: 7 Fehler, die du vermeiden solltest`,
  ];
  const out: any[] = [];
  for (let i = 0; i < 50; i++) {
    const t = TOPICS[i % TOPICS.length];
    out.push({
      id: `blog-${i + 1}`,
      topic: t.name,
      title: pick(templates, i)(t.name),
      angle: i % 2 === 0 ? "Ratgeber" : "Vergleich",
      targetUrl: `/${t.pageSlug}`,
      outline: ["Einleitung", "Worauf achten", "Top-Anbieter", "Häufige Fragen", "Fazit"],
    });
  }
  return out;
}

// === Ad-Kampagnen ===
function googleAds() {
  return TOPICS.map((t) => ({
    platform: "Google Ads",
    campaignName: `DC | ${t.name}`,
    targetUrl: `/${t.pageSlug}`,
    keywords: [t.name + " Vergleich", "Beste " + t.name.toLowerCase(), t.name + " Empfehlung"],
    headlines: [
      `${t.name} im Vergleich`,
      `Top ${t.name} 2026`,
      `${t.name} für Selbstständige`,
      `Jetzt ${t.name} vergleichen`,
      `Anbieter im Überblick`,
    ],
    descriptions: [
      `Vergleiche ${t.name} für Selbstständige. Vor- und Nachteile, Empfehlungen. Werbung / Affiliate-Link.`,
      `Anbieter im direkten Vergleich. Faire Bewertung, transparent. Werbung / Affiliate-Link.`,
    ],
    suggestedBudget: "5–10 € pro Tag (Testbudget)",
    riskNote:
      "Hinweis: Keine Garantie für Conversions. Bitte Conversion-Tracking vor Start einrichten und Budget täglich prüfen.",
  }));
}

function metaAds() {
  return TOPICS.map((t) => ({
    platform: "Meta (Facebook & Instagram)",
    campaignName: `DC | ${t.name}`,
    targetUrl: `/${t.pageSlug}`,
    audience: "Selbstständige, Freelancer, Solo-Unternehmer, 25–55, DACH",
    creatives: [
      `Vergleichsvideo zu ${t.name}`,
      `Karussell mit 3 Anbietern`,
      `Single Image mit Headline „${t.name} im Vergleich“`,
    ],
    headlines: [
      `${t.name} – jetzt vergleichen`,
      `${t.name} für dein Business`,
    ],
    primaryText: [
      `Du suchst ein passendes ${t.name}? Wir haben die wichtigsten Anbieter verglichen. Werbung / Affiliate-Link.`,
    ],
    suggestedBudget: "5–10 € pro Tag (Testbudget)",
    riskNote:
      "Hinweis: Meta-Ads können schnell Budget verbrauchen. Bitte CBO-Limits setzen und Pixel-Events vorher prüfen.",
  }));
}

function tiktokAds() {
  return TOPICS.map((t) => ({
    platform: "TikTok Ads",
    campaignName: `DC | ${t.name}`,
    targetUrl: `/${t.pageSlug}`,
    hook: `3 Dinge, die jeder Selbstständige über ${t.name} wissen sollte`,
    script: `0-3s Hook | 3-15s 3 Punkte | 15-25s Vergleichs-Empfehlung | 25-30s CTA „Link in Bio / im Profil“`,
    cta: "Mehr erfahren",
    suggestedBudget: "10 € pro Tag (Testbudget)",
    riskNote:
      "Hinweis: TikTok-Ads brauchen oft mehrere Creatives für saubere Tests. Bitte mit kleinem Budget starten.",
  }));
}

async function ensureDir(p: string) {
  await mkdir(p, { recursive: true });
}

async function writeJson(rel: string, data: unknown) {
  const full = path.join(ROOT, rel);
  await ensureDir(path.dirname(full));
  await writeFile(full, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`✓ ${rel} (${Array.isArray(data) ? data.length : "object"})`);
}

async function main() {
  const tiktok = tiktokScripts();
  await writeJson("content/social-media/tiktok-scripts.json", tiktok);
  await writeJson("content/social-media/youtube-shorts.json", tiktok.map((t) => ({ ...t, platform: "YouTube Shorts" })));
  await writeJson("content/social-media/instagram-posts.json", instagramPosts());
  await writeJson("content/social-media/pinterest-pins.json", pinterestPins());
  await writeJson("content/social-media/newsletter-ideas.json", newsletterIdeas());
  await writeJson("content/blog-drafts/blog-ideas.json", blogIdeas());
  await writeJson("content/ad-campaigns/google-ads.json", googleAds());
  await writeJson("content/ad-campaigns/meta-ads.json", metaAds());
  await writeJson("content/ad-campaigns/tiktok-ads.json", tiktokAds());

  await writeJson("data/demo-offers.json", []);
  await writeJson("data/demo-categories.json", []);
  await writeJson("data/demo-comparisons.json", []);
  await writeJson("data/demo-blog-posts.json", []);
  await writeJson("data/social-media-ideas.json", { tiktok: tiktok.length, instagram: 100, pinterest: 100, newsletter: 30, blog: 50 });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
