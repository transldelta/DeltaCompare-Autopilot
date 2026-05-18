type FaqItem = { q: string; a: string };

export default function FAQ({ items, title = "Häufige Fragen" }: { items: FaqItem[]; title?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="section-heading">{title}</h2>
      <div className="mt-5 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
        {items.map((item, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-ink-900">
              <span>{item.q}</span>
              <span className="text-ink-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
