import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminComparisonsPage() {
  const list = await prisma.comparisonPage.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink-900">Vergleichsseiten</h1>
        <Link href="/admin/comparisons/new" className="btn-primary">Neue Seite</Link>
      </div>
      <p className="mt-1 text-sm text-ink-600">{list.length} Vergleichsseiten.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
        <table className="min-w-full divide-y divide-ink-100 text-sm">
          <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
            <tr>
              <th className="px-4 py-3">Titel</th>
              <th className="px-4 py-3">Kategorie</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {list.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3 font-medium text-ink-900">{c.title}</td>
                <td className="px-4 py-3 text-ink-700">{c.category.name}</td>
                <td className="px-4 py-3 text-ink-600 font-mono text-xs">{c.slug}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-0.5 text-xs ${c.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-ink-100 text-ink-600"}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/comparisons/${c.id}`} className="text-brand-700 hover:underline">Bearbeiten</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
