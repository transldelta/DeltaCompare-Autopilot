import { readFile } from "node:fs/promises";
import path from "node:path";
import MarketingCalendar from "@/components/MarketingCalendar";

export const dynamic = "force-dynamic";

async function load<T>(rel: string, fallback: T): Promise<T> {
  try {
    const full = path.join(process.cwd(), rel);
    const text = await readFile(full, "utf8");
    return JSON.parse(text) as T;
  } catch {
    return fallback;
  }
}

type GenericItem = { id?: string; title?: string; hook?: string; subject?: string; platform?: string; topic?: string; caption?: string; description?: string; body?: string };

function preview(item: GenericItem) {
  return item.caption || item.description || item.body || item.hook || "";
}

export default async function AdminMarketingPage() {
  const [tiktok, instagram, pinterest, newsletter, blog, googleAds, metaAds, tiktokAds] = await Promise.all([
    load<GenericItem[]>("content/social-media/tiktok-scripts.json", []),
    load<GenericItem[]>("content/social-media/instagram-posts.json", []),
    load<GenericItem[]>("content/social-media/pinterest-pins.json", []),
    load<GenericItem[]>("content/social-media/newsletter-ideas.json", []),
    load<GenericItem[]>("content/blog-drafts/blog-ideas.json", []),
    load<GenericItem[]>("content/ad-campaigns/google-ads.json", []),
    load<GenericItem[]>("content/ad-campaigns/meta-ads.json", []),
    load<GenericItem[]>("content/ad-campaigns/tiktok-ads.json", []),
  ]);

  const block = (label: string, items: GenericItem[]) => (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-ink-900">
        {label} <span className="text-sm font-normal text-ink-500">({items.length})</span>
      </h2>
      <div className="mt-3">
        <MarketingCalendar
          items={items.slice(0, 12).map((it) => ({
            title: it.title || it.hook || it.subject || it.topic || "(ohne Titel)",
            platform: it.platform || "",
            preview: preview(it),
          }))}
        />
        <p className="mt-2 text-xs text-ink-500">
          Vorschau der ersten 12 Einträge. Vollständige Listen unter <code>content/social-media/</code> und{" "}
          <code>content/ad-campaigns/</code>.
        </p>
      </div>
    </section>
  );

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Marketing-Autopilot</h1>
      <p className="mt-1 text-sm text-ink-600">
        Vorbereitete Inhalte für Social-Media, Newsletter, Blog und Ads. Nichts wird automatisch veröffentlicht oder
        ausgespielt – du übernimmst die finale Auswahl, Kennzeichnung und Ausspielung.
      </p>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <strong>Wichtig:</strong> Bezahlte Werbung schalten wir nicht automatisch. Diese Entwürfe sind Vorschläge, die du
        in deinen Konten manuell anlegst, prüfst und freigibst. Verwende immer Kennzeichnungen wie „Werbung“ bzw.
        „Anzeige“.
      </div>

      {block("TikTok / YouTube Shorts Skripte", tiktok)}
      {block("Instagram-Posts", instagram)}
      {block("Pinterest-Pins", pinterest)}
      {block("Newsletter-Ideen", newsletter)}
      {block("Blog-Ideen", blog)}
      {block("Google-Ads-Entwürfe", googleAds)}
      {block("Meta-Ads-Entwürfe", metaAds)}
      {block("TikTok-Ads-Entwürfe", tiktokAds)}
    </div>
  );
}
