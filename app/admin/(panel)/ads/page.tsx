import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdNetworksList() {
  const networks = await prisma.adNetwork.findMany({
    include: { _count: { select: { placements: true } } },
    orderBy: { name: "asc" },
  });
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Werbenetzwerke</h1>
          <p className="mt-1 text-sm text-ink-600">{networks.length} Netzwerke vorbereitet.</p>
        </div>
        <Link href="/admin/ads/new" className="btn-primary">Neues Netzwerk</Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Typ</th>
              <th className="px-4 py-3">Publisher-ID</th>
              <th className="px-4 py-3">Plätze</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {networks.map((n) => (
              <tr key={n.id}>
                <td className="px-4 py-3 font-medium text-ink-900">{n.name}</td>
                <td className="px-4 py-3 text-ink-700">{n.type}</td>
                <td className="px-4 py-3 font-mono text-xs text-ink-600">{n.publisherId || "–"}</td>
                <td className="px-4 py-3 text-ink-700">{n._count.placements}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-0.5 text-xs ${n.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-ink-100 text-ink-600"}`}>
                    {n.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/ads/${n.id}`} className="text-brand-700 hover:underline">Bearbeiten</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
