import Breadcrumbs from "@/components/Breadcrumbs";
import { PublicPageHero } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate-Hinweis",
  description: "Transparente Information zu Affiliate-Links auf DeltaVergleich.",
  path: "/affiliate-hinweis",
});

export default function AffiliatePage() {
  return (
    <>
      <PublicPageHero
        glyph="◎"
        eyebrow="Rechtliches"
        title="Affiliate-Hinweis"
        subtitle="Transparente Information zu Affiliate-Links auf DeltaVergleich."
        gradient="from-ink-900 via-brand-900 to-brand-800"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Affiliate-Hinweis" }]} light />}
      />
      <section className="container-page py-14">
        <div className="prose-dc max-w-3xl rounded-2xl border border-ink-200/80 bg-white p-8 shadow-card">
          <p>{AFFILIATE_DISCLOSURE_TEXT}</p>
          <h2>Was sind Affiliate-Links?</h2>
          <p>
            Affiliate-Links sind Verweise auf Angebote von Partner­unternehmen oder Partner­netzwerken. Klickst du auf einen
            solchen Link und schließt anschließend ein Angebot ab, erhalten wir möglicherweise eine Provision.
          </p>
          <h2>Welche Partner­netzwerke nutzen wir?</h2>
          <ul>
            <li>Awin</li>
            <li>financeAds</li>
            <li>CHECK24 Partnerprogramm</li>
            <li>Tarifcheck</li>
            <li>PartnerStack</li>
            <li>impact.com</li>
            <li>Direkte Partner­programme einzelner Anbieter</li>
          </ul>
          <h2>Beeinflusst das unsere Empfehlungen?</h2>
          <p>
            Wir bewerten Anbieter unabhängig von Provisionshöhen. Provisionen helfen uns, den Betrieb dieser Webseite zu
            finanzieren. Empfehlungen erfolgen anhand von Funktionsumfang, Konditionen und Eignung für die Zielgruppe.
          </p>
          <h2>Kennzeichnung</h2>
          <p>
            Affiliate-Links sind im Button-Bereich mit „Werbung / Affiliate-Link" und im Quelltext mit den Attributen
            <code> rel="sponsored nofollow" </code> markiert.
          </p>
        </div>
      </section>
    </>
  );
}
