import { prisma } from "@/lib/prisma";
import { formatDate, formatNumber } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminRevenuePage() {
  const imports = await prisma.revenueImport.findMany({ orderBy: { date: "desc" }, take: 200 });

  const totals = imports.reduce(
    (acc, r) => {
      acc.clicks += r.clicks;
      acc.leads += r.leads;
      acc.sales += r.sales;
      acc.revenue += r.revenue;
      return acc;
    },
    { clicks: 0, leads: 0, sales: 0, revenue: 0 }
  );

  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Einnahmen-Import</h1>
      <p className="mt-1 text-sm text-ink-600">
        Importiere CSV-Reports aus deinen Affiliate-Netzwerken, um Klicks, Leads, Sales und Umsätze zentral zu erfassen.
      </p>

      <section className="mt-6 rounded-2xl border border-ink-200 bg-white p-5">
        <h2 className="font-semibold text-ink-900">CSV importieren</h2>
        <p className="mt-1 text-xs text-ink-500">
          Spalten: <code>network,date,clicks,leads,sales,revenue</code> – Datum im Format <code>YYYY-MM-DD</code>.
        </p>
        <form action="/api/admin/revenue/import" method="post" encType="multipart/form-data" className="mt-3 flex flex-wrap items-center gap-3">
          <input
            type="file"
            name="file"
            accept=".csv"
            required
            className="text-sm"
          />
          <button type="submit" className="btn-primary">Importieren</button>
        </form>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-4">
        <Stat label="Klicks gesamt" value={formatNumber(totals.clicks)} />
        <Stat label="Leads gesamt" value={formatNumber(totals.leads)} />
        <Stat label="Sales gesamt" value={formatNumber(totals.sales)} />
        <Stat label="Umsatz gesamt" value={`${formatNumber(Math.round(totals.revenue * 100) / 100)} €`} />
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-ink-900">Letzte Imports</h2>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
          <table className="min-w-full divide-y divide-ink-100 text-sm">
            <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
              <tr>
                <th className="px-4 py-3">Datum</th>
                <th className="px-4 py-3">Netzwerk</th>
                <th className="px-4 py-3">Klicks</th>
                <th className="px-4 py-3">Leads</th>
                <th className="px-4 py-3">Sales</th>
                <th className="px-4 py-3">Umsatz</th>
                <th className="px-4 py-3">Datei</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {imports.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-ink-500" colSpan={7}>
                    Noch keine Imports vorhanden.
                  </td>
                </tr>
              )}
              {imports.map((r) => (
                <tr key={r.id}>
                  <td className="px-4 py-3 text-ink-700">{formatDate(r.date)}</td>
                  <td className="px-4 py-3 font-medium text-ink-900">{r.network}</td>
                  <td className="px-4 py-3 text-ink-700">{r.clicks}</td>
                  <td className="px-4 py-3 text-ink-700">{r.leads}</td>
                  <td className="px-4 py-3 text-ink-700">{r.sales}</td>
                  <td className="px-4 py-3 text-ink-700">{r.revenue.toFixed(2)} €</td>
                  <td className="px-4 py-3 text-xs text-ink-500">{r.csvFileName || "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-2 text-2xl font-bold text-ink-900">{value}</div>
    </div>
  );
}
