import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const FIELDS: Array<{ key: string; label: string; hint?: string }> = [
  { key: "site_name", label: "Site-Name" },
  { key: "site_domain", label: "Site-Domain" },
  { key: "affiliate_disclosure", label: "Affiliate-Hinweis (sichtbar)" },
  { key: "google_analytics_id", label: "Google Analytics ID", hint: "z. B. G-XXXXXXX" },
  { key: "google_tag_manager_id", label: "Google Tag Manager ID", hint: "z. B. GTM-XXXXXX" },
  { key: "meta_pixel_id", label: "Meta Pixel ID" },
  { key: "tiktok_pixel_id", label: "TikTok Pixel ID" },
];

export default async function AdminSettingsPage() {
  const settings = await prisma.settings.findMany();
  const map = new Map(settings.map((s) => [s.key, s.value]));

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Einstellungen</h1>
      <p className="mt-1 text-sm text-ink-600">
        Diese Werte werden in der Datenbank gespeichert. Tracking-IDs werden zusätzlich aus den Umgebungsvariablen
        gelesen – nutze die <code>.env</code>, wenn du das Tracking serverseitig konfigurieren möchtest.
      </p>

      <form action="/api/admin/settings/save" method="post" className="mt-6 grid max-w-2xl gap-4">
        {FIELDS.map((f) => {
          const isTextarea = f.key === "affiliate_disclosure";
          return (
            <label key={f.key} className="block">
              <span className="text-sm font-medium text-ink-800">{f.label}</span>
              {isTextarea ? (
                <textarea
                  name={f.key}
                  defaultValue={map.get(f.key) || ""}
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
                />
              ) : (
                <input
                  type="text"
                  name={f.key}
                  defaultValue={map.get(f.key) || ""}
                  className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
                />
              )}
              {f.hint && <span className="mt-1 block text-xs text-ink-500">{f.hint}</span>}
            </label>
          );
        })}
        <button type="submit" className="btn-primary w-fit">Speichern</button>
      </form>
    </div>
  );
}
