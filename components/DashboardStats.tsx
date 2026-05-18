type Stat = { label: string; value: string | number; hint?: string };

export default function DashboardStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-ink-200 bg-white p-5">
          <div className="text-xs uppercase tracking-wide text-ink-500">{s.label}</div>
          <div className="mt-2 text-2xl font-bold text-ink-900">{s.value}</div>
          {s.hint && <div className="mt-1 text-xs text-ink-500">{s.hint}</div>}
        </div>
      ))}
    </div>
  );
}
