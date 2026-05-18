const TRUST = [
  { title: "Unabhängig", text: "Wir empfehlen nur Anbieter, die wir prüfen und vergleichen können." },
  { title: "Transparent", text: "Affiliate-Links sind als Werbung gekennzeichnet. Für dich entstehen keine Mehrkosten." },
  { title: "Aktuell", text: "Unsere Vergleiche werden regelmäßig auf neue Konditionen geprüft." },
  { title: "DSGVO-konform", text: "Tracking ist nur aktiv, wenn die nötigen IDs hinterlegt sind und gilt das deutsche Datenschutzrecht." },
];

export default function TrustBadges() {
  return (
    <section className="container-page my-16">
      <h2 className="section-heading text-center">Warum DeltaCompare?</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((t) => (
          <div key={t.title} className="card text-center">
            <h3 className="text-base font-semibold text-ink-900">{t.title}</h3>
            <p className="mt-2 text-sm text-ink-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
