import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Haftungsausschluss",
  description: "Haftungsausschluss von DeltaVergleich. Keine Finanz-, Steuer- oder Rechtsberatung.",
  path: "/haftungsausschluss",
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Haftungsausschluss" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Haftungsausschluss</h1>
        <div className="prose-dc mt-6 max-w-3xl">
          <h2>Keine Beratung</h2>
          <p>
            Die Inhalte auf DeltaVergleich stellen keine Finanz-, Steuer-, Versicherungs- oder Rechts­beratung dar.
            Sie ersetzen nicht die individuelle Beratung durch Fachpersonen.
          </p>
          <h2>Aktualität</h2>
          <p>
            Wir prüfen unsere Angaben regelmäßig. Konditionen, Preise und Verfügbarkeit von Angeboten können sich jedoch
            kurzfristig ändern. Bitte prüfe vor Abschluss alle Details direkt beim Anbieter.
          </p>
          <h2>Externe Links</h2>
          <p>
            Für die Inhalte von verlinkten externen Webseiten sind ausschließlich deren Betreiber verantwortlich. Bei
            Bekanntwerden von Rechtsverstößen werden wir derartige Links umgehend entfernen.
          </p>
          <h2>Keine Garantie</h2>
          <p>
            Wir geben keine Garantie für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
            Eine Haftung für Schäden, die aus der Nutzung der Inhalte entstehen, ist ausgeschlossen, soweit gesetzlich zulässig.
          </p>
        </div>
      </section>
    </>
  );
}
