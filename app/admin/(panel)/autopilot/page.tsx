import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { isDemoLink } from "@/lib/utils";
import { generateContentIdeas } from "@/lib/contentGenerator";

export const dynamic = "force-dynamic";

export default async function AdminAutopilotPage() {
  const [offers, comparisonsMissingMeta, comparisons, lowClickOffers, topOffers, totalClicks] = await Promise.all([
    prisma.offer.findMany(),
    prisma.comparisonPage.findMany({ where: { OR: [{ metaDescription: "" }, { seoTitle: "" }] } }),
    prisma.comparisonPage.findMany({ where: { offerSlugs: "" }, take: 20 }),
    prisma.offer.findMany({
      where: { status: "active" },
      include: { _count: { select: { clicks: true } } },
      orderBy: { clicks: { _count: "asc" } },
      take: 10,
    }),
    prisma.offer.findMany({
      where: { status: "active" },
      include: { _count: { select: { clicks: true } } },
      orderBy: { clicks: { _count: "desc" } },
      take: 5,
    }),
    prisma.clickEvent.count(),
  ]);

  const missingLinks = offers.filter((o) => isDemoLink(o.affiliateLink));
  const ideas = generateContentIdeas({ topic: "Geschäftskonto", count: 5 });

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Autopilot</h1>
      <p className="mt-1 text-sm text-ink-600">
        Übersicht über offene Aufgaben und Verbesserungs­vorschläge. Keine automatischen Aktionen – du entscheidest.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title={`Fehlende Affiliate-Links (${missingLinks.length})`} tone={missingLinks.length === 0 ? "ok" : "warn"}>
          <ul className="space-y-2 text-sm">
            {missingLinks.slice(0, 10).map((o) => (
              <li key={o.id}>
                <Link href={`/admin/offers/${o.id}`} className="hover:text-brand-700">
                  {o.name}
                </Link>
              </li>
            ))}
            {missingLinks.length === 0 && <li className="text-emerald-700">Alle Anbieter haben einen Link.</li>}
          </ul>
        </Panel>

        <Panel title={`SEO-Probleme (${comparisonsMissingMeta.length})`} tone={comparisonsMissingMeta.length === 0 ? "ok" : "warn"}>
          <ul className="space-y-2 text-sm">
            {comparisonsMissingMeta.slice(0, 10).map((c) => (
              <li key={c.id}>
                <Link href={`/admin/comparisons/${c.id}`} className="hover:text-brand-700">{c.title}</Link>
              </li>
            ))}
            {comparisonsMissingMeta.length === 0 && <li className="text-emerald-700">Alle Seiten haben Meta-Daten.</li>}
          </ul>
        </Panel>

        <Panel title={`Vergleichsseiten ohne Anbieter (${comparisons.length})`} tone={comparisons.length === 0 ? "ok" : "warn"}>
          <ul className="space-y-2 text-sm">
            {comparisons.slice(0, 10).map((c) => (
              <li key={c.id}>
                <Link href={`/admin/comparisons/${c.id}`} className="hover:text-brand-700">{c.title}</Link>
              </li>
            ))}
            {comparisons.length === 0 && <li className="text-emerald-700">Alle Vergleichsseiten haben Anbieter zugeordnet.</li>}
          </ul>
        </Panel>

        <Panel title={`Klickarme Anbieter (Bottom 10)`} tone="info">
          <ul className="space-y-2 text-sm">
            {lowClickOffers.map((o) => (
              <li key={o.id} className="flex justify-between">
                <Link href={`/admin/offers/${o.id}`} className="hover:text-brand-700">{o.name}</Link>
                <span className="text-ink-600">{o._count.clicks} Klicks</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title={`Top-Anbieter`} tone="info">
          <ul className="space-y-2 text-sm">
            {topOffers.map((o) => (
              <li key={o.id} className="flex justify-between">
                <Link href={`/admin/offers/${o.id}`} className="hover:text-brand-700">{o.name}</Link>
                <span className="text-ink-600">{o._count.clicks} Klicks</span>
              </li>
            ))}
            {topOffers.length === 0 && <li className="text-ink-500">Noch keine Klicks erfasst.</li>}
          </ul>
        </Panel>

        <Panel title="Content-Vorschläge" tone="info">
          <ul className="space-y-2 text-sm">
            {ideas.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </Panel>
      </div>

      <section className="mt-10 rounded-2xl border border-ink-200 bg-white p-5">
        <h2 className="font-semibold text-ink-900">Wochenbericht</h2>
        <p className="mt-1 text-sm text-ink-600">Schnelle Zusammenfassung deiner aktuellen Lage.</p>
        <ul className="mt-3 space-y-1 text-sm text-ink-700">
          <li>• {offers.length} Anbieter gesamt, davon {missingLinks.length} ohne echten Affiliate-Link.</li>
          <li>• {totalClicks} Klicks bisher über die /go/-Route.</li>
          <li>• {comparisonsMissingMeta.length} Vergleichsseiten mit unvollständigen Meta-Daten.</li>
          <li>• {comparisons.length} Vergleichsseiten ohne zugeordnete Anbieter.</li>
        </ul>
        <p className="mt-4 text-xs text-ink-500">
          Empfehlung: zuerst die Top-Vergleichsseiten mit echten Affiliate-Links versorgen, dann SEO-Lücken schließen.
        </p>
      </section>
    </div>
  );
}

function Panel({ title, tone, children }: { title: string; tone: "ok" | "warn" | "info"; children: React.ReactNode }) {
  const cls =
    tone === "ok"
      ? "border-emerald-200 bg-emerald-50"
      : tone === "warn"
        ? "border-amber-200 bg-amber-50"
        : "border-ink-200 bg-white";
  return (
    <section className={`rounded-2xl border p-5 ${cls}`}>
      <h2 className="font-semibold text-ink-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
