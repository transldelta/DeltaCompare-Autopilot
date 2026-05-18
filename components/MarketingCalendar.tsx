type Item = { title: string; platform: string; preview: string };

export default function MarketingCalendar({ items }: { items: Item[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <li key={i} className="rounded-2xl border border-ink-200 bg-white p-4">
          <div className="text-xs uppercase tracking-wide text-brand-700">{it.platform}</div>
          <div className="mt-1 font-semibold text-ink-900 line-clamp-2">{it.title}</div>
          <p className="mt-2 text-xs text-ink-600 line-clamp-3">{it.preview}</p>
        </li>
      ))}
    </ul>
  );
}
