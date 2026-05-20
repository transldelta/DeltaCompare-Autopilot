type FaqItem = { q: string; a: string };

export default function FAQ({ items, title = "Häufige Fragen" }: { items: FaqItem[]; title?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <section>
      <h2 className="section-heading">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, i) => (
          <details key={i} className="group rounded-2xl border border-ink-200/80 bg-white p-5 shadow-card transition open:shadow-cardHover">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-bold text-ink-900">
              <span>{item.q}</span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
