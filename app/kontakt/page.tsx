import Breadcrumbs from "@/components/Breadcrumbs";
import { PublicPageHero, InfoBox } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontaktiere DeltaVergleich – für Fragen, Hinweise von Anbietern, Fehlermeldungen und Kooperationen.",
  path: "/kontakt",
});

const REASONS = [
  { glyph: "✉", title: "Allgemeine Fragen", text: "Schreib uns bei Fragen rund um Vergleiche und Anbieter." },
  { glyph: "▣", title: "Hinweise für Anbieter", text: "Du bietest ein Produkt an und möchtest gelistet werden? Melde dich." },
  { glyph: "⚠", title: "Fehler melden", text: "Ein Link funktioniert nicht oder eine Angabe ist veraltet? Sag Bescheid." },
  { glyph: "✦", title: "Kooperationen", text: "Partnerschaften und Affiliate-Anfragen sind willkommen." },
];

export default function ContactPage() {
  return (
    <>
      <PublicPageHero
        glyph="✉"
        eyebrow="Wir freuen uns auf deine Nachricht"
        title="Kontakt"
        subtitle="Fragen, Hinweise, Fehlermeldungen oder Kooperationen – so erreichst du uns."
        gradient="from-brand-950 via-brand-800 to-accent-700"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kontakt" }]} light />}
      />

      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="card-flat">
              <div className="text-xs font-bold uppercase tracking-wide text-brand-600">Direkt erreichen</div>
              <a href="mailto:kontakt@deltavergleich.de" className="mt-1 block text-lg font-bold text-ink-900 hover:text-brand-700">
                kontakt@deltavergleich.de
              </a>
              <p className="mt-1 text-sm text-ink-600">Wir antworten in der Regel innerhalb weniger Werktage.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {REASONS.map((r) => (
                <div key={r.title} className="card-flat">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-lg text-brand-600">{r.glyph}</span>
                  <h3 className="mt-3 text-sm font-bold text-ink-900">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600">{r.text}</p>
                </div>
              ))}
            </div>

            <InfoBox title="Hinweis vor dem Livegang">
              Bitte ergänze vor der Veröffentlichung das Impressum mit einer ladungsfähigen Anschrift gemäß § 5 TMG.
            </InfoBox>
          </div>

          <div className="lg:col-span-7">
            <div className="card-flat">
              <h2 className="text-lg font-bold text-ink-900">Nachricht schreiben</h2>
              <p className="mt-1 text-sm text-ink-600">
                Fülle die Felder aus und klicke auf „Nachricht vorbereiten" – deine E-Mail-App öffnet sich mit dem Text.
              </p>
              <form action="mailto:kontakt@deltavergleich.de" method="post" encType="text/plain" className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-ink-800">Name</span>
                    <input name="Name" required className="mt-1.5 block w-full rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-600/10" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-ink-800">E-Mail</span>
                    <input type="email" name="E-Mail" required className="mt-1.5 block w-full rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-600/10" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-ink-800">Nachricht</span>
                  <textarea name="Nachricht" rows={6} required className="mt-1.5 block w-full rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-600/10" />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">Nachricht vorbereiten</button>
              </form>
              <p className="mt-4 text-xs text-ink-500">
                Hinweis: Dieses Formular versendet noch nicht serverseitig, sondern öffnet deine E-Mail-App. Für einen
                echten Versand kann später ein Formular-Dienst angebunden werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
