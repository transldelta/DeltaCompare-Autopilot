import { formatDate } from "@/lib/utils";

type Row = {
  id: string;
  createdAt: Date | string;
  offerName: string;
  pageSlug: string;
  device: string;
  referrer: string;
};

export default function TrackingTable({ rows }: { rows: Row[] }) {
  if (rows.length === 0) return <div className="text-sm text-ink-600">Noch keine Klicks erfasst.</div>;
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-200 bg-white">
      <table className="min-w-full divide-y divide-ink-100 text-sm">
        <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
          <tr>
            <th className="px-4 py-3">Datum</th>
            <th className="px-4 py-3">Anbieter</th>
            <th className="px-4 py-3">Seite</th>
            <th className="px-4 py-3">Gerät</th>
            <th className="px-4 py-3">Referrer</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {rows.map((r) => (
            <tr key={r.id}>
              <td className="px-4 py-3 text-ink-700">{formatDate(r.createdAt)}</td>
              <td className="px-4 py-3 font-medium text-ink-900">{r.offerName}</td>
              <td className="px-4 py-3 text-ink-600">{r.pageSlug || "–"}</td>
              <td className="px-4 py-3 text-ink-700">{r.device}</td>
              <td className="px-4 py-3 text-ink-600 truncate max-w-xs">{r.referrer || "–"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
