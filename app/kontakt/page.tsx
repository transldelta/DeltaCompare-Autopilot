import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontaktinformationen von DeltaVergleich – schreibe uns bei Fragen, Hinweisen oder Kooperations­anfragen.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Kontakt" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Kontakt</h1>
        <p className="mt-3 max-w-2xl text-ink-700">
          Du hast Fragen, möchtest einen Anbieter empfehlen oder einen Fehler melden? Wir freuen uns über deine Nachricht.
        </p>
        <div className="mt-8 max-w-2xl rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
          <p className="text-sm text-ink-700">
            <strong className="text-ink-900">E-Mail:</strong> kontakt@deltacompare.example<br />
            <strong className="text-ink-900">Verantwortlich:</strong> Bitte trage hier die ladungsfähige Anschrift gemäß § 5 TMG ein.
          </p>
          <p className="mt-4 text-xs text-ink-500">
            Hinweis: Vor Veröffentlichung der Webseite musst du eine ladungsfähige Anschrift und ein vollständiges Impressum ergänzen.
          </p>
        </div>
      </section>
    </>
  );
}
