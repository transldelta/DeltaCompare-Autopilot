import { prisma } from "@/lib/prisma";
import DashboardStats from "@/components/DashboardStats";
import Link from "next/link";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [offers, categories, comparisons, totalClicks, topOffersByClicks] = await Promise.all([
    prisma.offer.findMany({ include: { _count: { select: { clicks: true } } } }),
    prisma.category.count(),
    prisma.comparisonPage.count(),
    prisma.clickEvent.count(),
    prisma.offer.findMany({
      include: { _count: { select: { clicks: true } } },
      orderBy: { clicks: { _count: "desc" } },
      take: 5,
    }),
  ]);

  const offersWithoutLink = offers.filter((o) => isDemoLink(o.affiliateLink));
  const comparisonsMissingMeta = await prisma.comparisonPage.findMany({
    where: { OR: [{ metaDescription: "" }, { seoTitle: "" }] },
    select: { slug: true, title: true },
    take: 10,
  });

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Dashboard</h1>
      <p className="mt-1 text-sm text-ink-600">Übersicht über Angebote, Klicks und SEO-Status.</p>

      <div className="mt-6">
        <DashboardStats
          stats={[
            { label: "Angebote", value: offers.length, hint: `${offers.filter((o) => o.status === "active").length} aktiv` },
            { label: "Kategorien", value: categories },
            { label: "Vergleichsseiten", value: comparisons },
            { label: "Klicks gesamt", value: totalClicks, hint: "über interne /go/-Route" },
          ]}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">Top-Angebote nach Klicks</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {topOffersByClicks.length === 0 ? (
              <li className="text-ink-500">Noch keine Klicks erfasst.</li>
            ) : (
              topOffersByClicks.map((o) => (
                <li key={o.id} className="flex items-center justify-between rounded border border-ink-100 px-3 py-2">
                  <Link href={`/admin/offers/${o.id}`} className="font-medium text-ink-900 hover:text-brand-700">
                    {o.name}
                  </Link>
                  <span className="text-ink-600">{o._count.clicks} Klicks</span>
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">Anbieter ohne Affiliate-Link</h2>
          <p className="mt-1 text-xs text-ink-500">
            Diese Anbieter haben einen Demo-Link. Bitte vor Veröffentlichung im Admin austauschen.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {offersWithoutLink.length === 0 ? (
              <li className="text-emerald-700">Alle Anbieter haben einen Affiliate-Link.</li>
            ) : (
              offersWithoutLink.slice(0, 10).map((o) => (
                <li key={o.id} className="flex items-center justify-between rounded border border-amber-100 bg-amber-50 px-3 py-2">
                  <Link href={`/admin/offers/${o.id}`} className="font-medium text-ink-900 hover:text-brand-700">
                    {o.name}
                  </Link>
                  <span className="text-amber-700">DEMO_LINK_ERSETZEN</span>
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">SEO-Warnungen</h2>
          <p className="mt-1 text-xs text-ink-500">Vergleichsseiten ohne SEO-Titel oder Meta-Description.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {comparisonsMissingMeta.length === 0 ? (
              <li className="text-emerald-700">Alle Vergleichsseiten haben Meta-Daten.</li>
            ) : (
              comparisonsMissingMeta.map((c) => (
                <li key={c.slug} className="rounded border border-amber-100 bg-amber-50 px-3 py-2">
                  <span className="font-medium text-ink-900">{c.title}</span>
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">Einnahmen-Import</h2>
          <p className="mt-2 text-sm text-ink-600">
            Importiere CSV-Berichte deiner Affiliate-Netzwerke unter{" "}
            <Link href="/admin/revenue" className="text-brand-700 underline">Einnahmen-Import</Link>. Klicks, Leads,
            Sales und Umsätze werden dort dauerhaft gespeichert.
          </p>
        </section>
      </div>
    </div>
  );
}
