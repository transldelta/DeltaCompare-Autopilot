import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminAuditPage() {
  const [allOffers, allComparisons] = await Promise.all([
    prisma.offer.findMany({ include: { category: true }, orderBy: { name: "asc" } }),
    prisma.comparisonPage.findMany({ include: { category: true }, orderBy: { title: "asc" } }),
  ]);

  const demoOffers = allOffers.filter((o) => isDemoLink(o.affiliateLink));
  const realOffers = allOffers.filter((o) => !isDemoLink(o.affiliateLink));
  const inactiveOffers = allOffers.filter((o) => o.status !== "active");
  const comparisonsWithoutOffers = allComparisons.filter((c) => !c.offerSlugs || c.offerSlugs.trim() === "");
  const comparisonsWithoutMeta = allComparisons.filter((c) => !c.metaDescription || !c.seoTitle);

  // Vergleichsseiten, deren zugeordnete Anbieter alle Demo-Links sind
  const offerMap = new Map(allOffers.map((o) => [o.slug, o]));
  const comparisonsAllDemo = allComparisons.filter((c) => {
    const slugs = (c.offerSlugs || "").split(",").map((s) => s.trim()).filter(Boolean);
    if (slugs.length === 0) return false;
    return slugs.every((slug) => {
      const o = offerMap.get(slug);
      return !o || isDemoLink(o.affiliateLink);
    });
  });

  const totalOffers = allOffers.length;
  const readiness = totalOffers === 0 ? 0 : Math.round((realOffers.length / totalOffers) * 100);

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Pre-Launch Audit</h1>
      <p className="mt-1 text-sm text-ink-600">
        Übersicht über alles, was vor dem Go-Live ersetzt werden muss. Demo-Links blockieren automatisch den
        Affiliate-Redirect, dein Portal funktioniert also auch ohne echte Links – aber du verdienst dann nichts.
      </p>

      <section className="mt-6 grid gap-3 sm:grid-cols-4">
        <Stat label="Echte Affiliate-Links" value={`${realOffers.length} / ${totalOffers}`} tone={readiness === 100 ? "ok" : "warn"} />
        <Stat label="Demo-Links offen" value={demoOffers.length} tone={demoOffers.length === 0 ? "ok" : "warn"} />
        <Stat label="Vergleiche ohne Anbieter" value={comparisonsWithoutOffers.length} tone={comparisonsWithoutOffers.length === 0 ? "ok" : "warn"} />
        <Stat label="Readiness" value={`${readiness} %`} tone={readiness === 100 ? "ok" : readiness > 50 ? "info" : "warn"} />
      </section>

      <section className="mt-8">
        <h2 className="font-semibold text-ink-900">
          Demo-Anbieter ({demoOffers.length})
        </h2>
        <p className="mt-1 text-xs text-ink-500">
          Diese Anbieter haben noch keinen echten Affiliate-Link (<code>DEMO_LINK_ERSETZEN</code>). Vor Go-Live ersetzen.
        </p>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
          <table className="min-w-full divide-y divide-ink-100 text-sm">
            <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
              <tr>
                <th className="px-4 py-3">Anbieter</th>
                <th className="px-4 py-3">Kategorie</th>
                <th className="px-4 py-3">Netzwerk</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Aktion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {demoOffers.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-6 text-center text-emerald-700">
                  ✓ Alle Anbieter haben echte Affiliate-Links.
                </td></tr>
              )}
              {demoOffers.map((o) => (
                <tr key={o.id}>
                  <td className="px-4 py-3 font-medium text-ink-900">{o.name}</td>
                  <td className="px-4 py-3 text-ink-700">{o.category.name}</td>
                  <td className="px-4 py-3 text-ink-700">{o.network}</td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-xs text-amber-700">DEMO_LINK</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/offers/${o.id}`} className="btn-primary !py-1.5 !px-3 text-xs">
                      Demo-Link ersetzen
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel
          title={`Vergleichsseiten ganz im Demo-Modus (${comparisonsAllDemo.length})`}
          hint="Alle zugeordneten Anbieter sind aktuell Demo-Anbieter."
        >
          {comparisonsAllDemo.length === 0 ? (
            <p className="text-emerald-700 text-sm">✓ Keine Vergleichsseite hängt komplett an Demo-Anbietern.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {comparisonsAllDemo.slice(0, 20).map((c) => (
                <li key={c.id}>
                  <Link href={`/admin/comparisons/${c.id}`} className="hover:text-brand-700">{c.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title={`Vergleichsseiten ohne zugeordnete Anbieter (${comparisonsWithoutOffers.length})`}
          hint="Hier solltest du Anbieter-Slugs eintragen, damit die Vergleichstabelle gefüllt ist."
        >
          {comparisonsWithoutOffers.length === 0 ? (
            <p className="text-emerald-700 text-sm">✓ Alle Vergleichsseiten haben Anbieter.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {comparisonsWithoutOffers.slice(0, 20).map((c) => (
                <li key={c.id}>
                  <Link href={`/admin/comparisons/${c.id}`} className="hover:text-brand-700">{c.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title={`Vergleichsseiten mit unvollständigen Meta-Daten (${comparisonsWithoutMeta.length})`}
          hint="SEO-Titel oder Meta-Description fehlt."
        >
          {comparisonsWithoutMeta.length === 0 ? (
            <p className="text-emerald-700 text-sm">✓ Alle Vergleichsseiten haben Meta-Daten.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {comparisonsWithoutMeta.slice(0, 20).map((c) => (
                <li key={c.id}>
                  <Link href={`/admin/comparisons/${c.id}`} className="hover:text-brand-700">{c.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title={`Inaktive Anbieter (${inactiveOffers.length})`}
          hint="Status ist nicht 'active'. Für Vergleichsseiten unsichtbar."
        >
          {inactiveOffers.length === 0 ? (
            <p className="text-ink-600 text-sm">Keine inaktiven Anbieter.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {inactiveOffers.slice(0, 20).map((o) => (
                <li key={o.id} className="flex justify-between">
                  <Link href={`/admin/offers/${o.id}`} className="hover:text-brand-700">{o.name}</Link>
                  <span className="text-ink-500 text-xs">{o.status}</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </section>

      <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <h2 className="font-semibold">Vor Go-Live unbedingt prüfen</h2>
        <ul className="mt-3 space-y-1 list-disc pl-5">
          <li>Alle Demo-Links durch echte Affiliate-Links ersetzen oder Demo-Anbieter löschen.</li>
          <li>Rechtstexte (Impressum, Datenschutz) anwaltlich prüfen lassen.</li>
          <li><code>AUTH_SECRET</code> und <code>ADMIN_PASSWORD</code> sind starke Zufallswerte.</li>
          <li><code>NEXT_PUBLIC_SITE_URL</code> zeigt auf die Produktivdomain.</li>
          <li>Sitemap im Google Search Console eingereicht.</li>
        </ul>
        <p className="mt-3">
          Vollständige Liste in <Link href="/docs" className="underline">docs/LAUNCH_CHECKLIST.md</Link> und{" "}
          <Link href="/docs" className="underline">docs/LEGAL_TODO_BEFORE_LAUNCH.md</Link>.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string | number; tone: "ok" | "warn" | "info" }) {
  const bg = tone === "ok" ? "border-emerald-200 bg-emerald-50" : tone === "warn" ? "border-amber-200 bg-amber-50" : "border-ink-200 bg-white";
  return (
    <div className={`rounded-2xl border p-5 ${bg}`}>
      <div className="text-xs uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-2 text-2xl font-bold text-ink-900">{value}</div>
    </div>
  );
}

function Panel({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-ink-200 bg-white p-5">
      <h2 className="font-semibold text-ink-900">{title}</h2>
      <p className="mt-1 text-xs text-ink-500">{hint}</p>
      <div className="mt-3">{children}</div>
    </section>
  );
}
