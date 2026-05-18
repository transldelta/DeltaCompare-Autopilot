import { prisma } from "@/lib/prisma";
import TrackingTable from "@/components/TrackingTable";

export const dynamic = "force-dynamic";

export default async function AdminTrackingPage() {
  const [clicksByOffer, clicksByPage, latest] = await Promise.all([
    prisma.offer.findMany({
      include: { _count: { select: { clicks: true } } },
      orderBy: { clicks: { _count: "desc" } },
      take: 20,
    }),
    prisma.clickEvent.groupBy({
      by: ["pageSlug"],
      _count: { _all: true },
      orderBy: { _count: { pageSlug: "desc" } },
      take: 20,
    }),
    prisma.clickEvent.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
      include: { offer: true },
    }),
  ]);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink-900">Tracking</h1>
        <a className="btn-secondary" href="/api/admin/export/clicks.csv">CSV-Export</a>
      </div>
      <p className="mt-1 text-sm text-ink-600">Internes Klick-Tracking aus der /go/-Redirect-Route.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">Klicks pro Anbieter</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {clicksByOffer.map((o) => (
              <li key={o.id} className="flex justify-between rounded border border-ink-100 px-3 py-2">
                <span>{o.name}</span>
                <span className="text-ink-600">{o._count.clicks}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-ink-200 bg-white p-5">
          <h2 className="font-semibold text-ink-900">Klicks pro Quelle</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {clicksByPage.length === 0 && <li className="text-ink-500">Keine Daten.</li>}
            {clicksByPage.map((c) => (
              <li key={c.pageSlug || "_"} className="flex justify-between rounded border border-ink-100 px-3 py-2">
                <span>{c.pageSlug || "direkt"}</span>
                <span className="text-ink-600">{c._count._all}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8">
        <h2 className="font-semibold text-ink-900">Letzte 100 Klicks</h2>
        <div className="mt-3">
          <TrackingTable
            rows={latest.map((r) => ({
              id: r.id,
              createdAt: r.createdAt,
              offerName: r.offer.name,
              pageSlug: r.pageSlug,
              device: r.device || "-",
              referrer: r.referrer || "-",
            }))}
          />
        </div>
      </section>
    </div>
  );
}
