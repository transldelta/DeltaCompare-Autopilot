import Breadcrumbs from "@/components/Breadcrumbs";
import { PublicPageHero } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von DeltaVergleich – Anbieterkennzeichnung gemäß § 5 TMG.",
  path: "/impressum",
  noIndex: true,
});

export default function ImprintPage() {
  return (
    <>
      <PublicPageHero
        glyph="§"
        eyebrow="Rechtliches"
        title="Impressum"
        subtitle="Anbieterkennzeichnung gemäß § 5 TMG."
        gradient="from-ink-900 via-brand-900 to-brand-800"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Impressum" }]} light />}
      />
      <section className="container-page py-14">
        <div className="prose-dc max-w-3xl rounded-2xl border border-ink-200/80 bg-white p-8 shadow-card">
          <p>
            <strong>Bitte vor Veröffentlichung anpassen.</strong> Diese Vorlage erfüllt nicht automatisch alle rechtlichen Anforderungen und ersetzt keine juristische Prüfung.
          </p>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            [Vor- und Nachname / Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            [Land]
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: kontakt@deltavergleich.de
          </p>
          <h2>Umsatzsteuer-ID</h2>
          <p>USt-ID gemäß § 27 a UStG: [USt-ID einfügen]</p>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>[Name, Anschrift]</p>
          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren vor einer Verbraucher­schlichtungs­stelle teilzunehmen.
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
          <p className="mt-8 text-xs text-ink-500">
            Hinweis: Diese Vorlage ist nicht abschließend. Bitte vor Veröffentlichung rechtlich prüfen lassen.
          </p>
        </div>
      </section>
    </>
  );
}
