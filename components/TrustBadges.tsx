import { IconTile } from "./ui";

const TRUST = [
  { glyph: "◎", title: "Transparent gekennzeichnet", text: "Affiliate-Links sind klar als Werbung markiert. Für dich entstehen keine Mehrkosten." },
  { glyph: "✦", title: "Für Selbstständige optimiert", text: "Vergleiche und Inhalte sind auf den Alltag von Solo-Selbstständigen zugeschnitten." },
  { glyph: "▣", title: "Business-orientierte Vergleiche", text: "Konten, Tools, Versicherungen und Services für kleine Unternehmen und Freelancer." },
  { glyph: "⚖", title: "Keine Finanz- oder Steuerberatung", text: "Unsere Inhalte sind unabhängig und ersetzen keine individuelle Fachberatung." },
];

export default function TrustBadges() {
  return (
    <section className="container-page py-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((t) => (
          <div key={t.title} className="card-flat">
            <IconTile tone="accent">{t.glyph}</IconTile>
            <h3 className="mt-4 text-base font-bold text-ink-900">{t.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
