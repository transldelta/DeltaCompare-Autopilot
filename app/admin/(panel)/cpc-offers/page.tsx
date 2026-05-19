import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function CpcOffersList() {
  const offers = await prisma.cpcOffer.findMany({
    include: { category: true, _count: { select: { clicks: true } } },
    orderBy: { name: "asc" },
  });
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">CPC-Angebote</h1>
          <p className="mt-1 text-sm text-ink-600">{offers.length} CPC-Angebote insgesamt.</p>
        </div>
        <Link href="/admin/cpc-offers/new" className="btn-primary">Neues CPC-Angebot</Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Kategorie</th>
              <th className="px-4 py-3">Netzwerk</th>
              <th className="px-4 py-3">CPC</th>
              <th className="px-4 py-3">Ziel</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Klicks</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {offers.map((o) => (
              <tr key={o.id}>
                <td className="px-4 py-3 font-medium text-ink-900">{o.name}</td>
                <td className="px-4 py-3 text-ink-700">{o.category?.name || "–"}</td>
                <td className="px-4 py-3 text-ink-700">{o.network}</td>
                <td className="px-4 py-3 text-ink-700">{o.cpcRate.toFixed(2)} €</td>
                <td className="px-4 py-3">
                  {isDemoLink(o.affiliateLink || o.targetUrl) ? (
                    <span className="rounded bg-amber-50 px-2 py-0.5 text-xs text-amber-700">DEMO_LINK</span>
                  ) : (
                    <span className="text-emerald-700">✓</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-0.5 text-xs ${o.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-ink-100 text-ink-600"}`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink-700">{o._count.clicks}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/cpc-offers/${o.id}`} className="text-brand-700 hover:underline">Bearbeiten</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
