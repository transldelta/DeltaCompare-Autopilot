import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdPlacementsList() {
  const placements = await prisma.adPlacement.findMany({
    include: {
      network: true,
      _count: { select: { impressions: true, clicks: true } },
    },
    orderBy: { name: "asc" },
  });
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Anzeigen-Plätze</h1>
          <p className="mt-1 text-sm text-ink-600">{placements.length} Plätze. Deaktiviert = wird nicht ausgespielt.</p>
        </div>
        <Link href="/admin/ad-placements/new" className="btn-primary">Neuer Platz</Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Typ</th>
              <th className="px-4 py-3">Anzeige</th>
              <th className="px-4 py-3">Netzwerk</th>
              <th className="px-4 py-3">Aktiv</th>
              <th className="px-4 py-3">Imp.</th>
              <th className="px-4 py-3">Klicks</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {placements.map((p) => (
              <tr key={p.id}>
                <td className="px-4 py-3 font-medium text-ink-900">{p.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-ink-600">{p.slug}</td>
                <td className="px-4 py-3 text-ink-700">{p.placementType}</td>
                <td className="px-4 py-3 text-ink-700">{p.adType}</td>
                <td className="px-4 py-3 text-ink-700">{p.network?.name || "–"}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-0.5 text-xs ${p.isActive ? "bg-emerald-50 text-emerald-700" : "bg-ink-100 text-ink-600"}`}>
                    {p.isActive ? "aktiv" : "inaktiv"}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink-700">{p._count.impressions}</td>
                <td className="px-4 py-3 text-ink-700">{p._count.clicks}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/ad-placements/${p.id}`} className="text-brand-700 hover:underline">Bearbeiten</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
