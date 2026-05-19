import { prisma } from "@/lib/prisma";
import Link from "next/link";
import MonetizationStats from "@/components/MonetizationStats";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function MonetizationDashboard() {
  const [
    impressions7d,
    adClicks7d,
    affiliateClicks7d,
    cpcOffers,
    placements,
    impressionsByPlacement,
    topAffPages,
    affiliateOffers,
  ] = await Promise.all([
    prisma.adImpression.count({ where: { createdAt: { gte: daysAgo(7) } } }),
    prisma.adClick.count({ where: { createdAt: { gte: daysAgo(7) } } }),
    prisma.clickEvent.count({ where: { createdAt: { gte: daysAgo(7) } } }),
    prisma.cpcOffer.findMany({ include: { _count: { select: { clicks: true } } } }),
    prisma.adPlacement.findMany({ include: { _count: { select: { impressions: true, clicks: true } } } }),
    prisma.adImpression.groupBy({
      by: ["placementId"],
      _count: { _all: true },
      orderBy: { _count: { placementId: "desc" } },
      take: 5,
    }),
    prisma.clickEvent.groupBy({
      by: ["pageSlug"],
      _count: { _all: true },
      orderBy: { _count: { pageSlug: "desc" } },
      take: 5,
    }),
    prisma.offer.findMany({ where: { status: "active" } }),
  ]);

  // Grobe Umsatzschätzung
  const cpcMap = new Map(cpcOffers.map((o) => [o.id, o.cpcRate]));
  const cpcClicksByOffer = await prisma.adClick.groupBy({
    by: ["cpcOfferId"],
    _count: { _all: true },
    where: { cpcOfferId: { not: null }, createdAt: { gte: daysAgo(7) } },
  });
  const estimatedCpcRevenue = cpcClicksByOffer.reduce((sum, row) => {
    if (!row.cpcOfferId) return sum;
    return sum + (cpcMap.get(row.cpcOfferId) ?? 0) * row._count._all;
  }, 0);
  const ESTIMATED_CPM = 1.5; // EUR pro 1000 Impressions, sehr konservativ
  const estimatedCpmRevenue = (impressions7d / 1000) * ESTIMATED_CPM;
  const cpcOffersMissingTarget = cpcOffers.filter((o) => isDemoLink(o.targetUrl || ""));

  const placementMap = new Map(placements.map((p) => [p.id, p.name]));

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Monetarisierung</h1>
      <p className="mt-1 text-sm text-ink-600">
        Übersicht der letzten 7 Tage. Schätzungen sind keine Garantie für Einnahmen.
      </p>

      <div className="mt-6">
        <MonetizationStats
          stats={[
            { label: "Anzeigen-Impressionen (7T)", value: impressions7d.toLocaleString("de-DE") },
            { label: "Anzeigen-/CPC-Klicks (7T)", value: adClicks7d.toLocaleString("de-DE") },
            { label: "Affiliate-Klicks (7T)", value: affiliateClicks7d.toLocaleString("de-DE") },
            {
              label: "Geschätzter Umsatz (7T)",
              value: `${(estimatedCpcRevenue + estimatedCpmRevenue).toFixed(2)} €`,
              hint: `CPC ${estimatedCpcRevenue.toFixed(2)} € · CPM ${estimatedCpmRevenue.toFixed(2)} €`,
            },
          ]}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel title="Beste Anzeigen-Plätze (7T Impressionen)">
          {impressionsByPlacement.length === 0 ? (
            <Empty>Noch keine Impressionen erfasst. Aktiviere Plätze unter „Anzeigen-Plätze".</Empty>
          ) : (
            <ul className="space-y-2 text-sm">
              {impressionsByPlacement.map((row) => (
                <li key={row.placementId} className="flex justify-between rounded border border-ink-100 px-3 py-2">
                  <span>{placementMap.get(row.placementId) ?? row.placementId}</span>
                  <span className="text-ink-600">{row._count._all}</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel title="Beste Seiten nach Affiliate-Klicks (7T)">
          {topAffPages.length === 0 ? (
            <Empty>Noch keine Affiliate-Klicks erfasst.</Empty>
          ) : (
            <ul className="space-y-2 text-sm">
              {topAffPages.map((row) => (
                <li key={row.pageSlug || "direkt"} className="flex justify-between rounded border border-ink-100 px-3 py-2">
                  <span>{row.pageSlug || "direkt"}</span>
                  <span className="text-ink-600">{row._count._all}</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel title={`CPC-Angebote (${cpcOffers.length})`}>
          <p className="text-xs text-ink-500">
            <Link href="/admin/cpc-offers" className="text-brand-700 underline">Verwalten</Link>
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {cpcOffers.slice(0, 8).map((o) => (
              <li key={o.id} className="flex items-center justify-between rounded border border-ink-100 px-3 py-2">
                <span>{o.name}</span>
                <span className="text-ink-600">{o.cpcRate.toFixed(2)} € · {o._count.clicks} Klicks</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title={`Anzeigen-Plätze (${placements.length})`}>
          <p className="text-xs text-ink-500">
            <Link href="/admin/ad-placements" className="text-brand-700 underline">Verwalten</Link>
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {placements.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded border border-ink-100 px-3 py-2">
                <span>{p.name}</span>
                <span className={`text-xs ${p.isActive ? "text-emerald-700" : "text-ink-500"}`}>
                  {p.isActive ? "aktiv" : "inaktiv"} · {p._count.impressions} Imp.
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <h2 className="font-semibold">Warnungen</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {cpcOffersMissingTarget.length > 0 && (
            <li>
              {cpcOffersMissingTarget.length} CPC-Angebote ohne echtes Ziel.
              <Link href="/admin/cpc-offers" className="ml-2 underline">Jetzt ersetzen</Link>
            </li>
          )}
          {affiliateOffers.length > 0 &&
            affiliateOffers.filter((o) => isDemoLink(o.affiliateLink)).length > 0 && (
              <li>
                Einige Affiliate-Anbieter haben noch Demo-Links.
                <Link href="/admin/audit" className="ml-2 underline">Audit öffnen</Link>
              </li>
            )}
          <li>Anzeigen-Skripte (AdSense u. a.) laden nur nach Consent. Settings prüfen.</li>
        </ul>
      </section>
    </div>
  );
}

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-ink-200 bg-white p-5">
      <h2 className="font-semibold text-ink-900">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-ink-500">{children}</p>;
}
