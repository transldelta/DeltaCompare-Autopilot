import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO. Vor Veröffentlichung anpassen lassen.",
  path: "/datenschutz",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Datenschutz" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Datenschutzerklärung</h1>
        <div className="prose-dc mt-6 max-w-3xl">
          <p><strong>Bitte vor Veröffentlichung anpassen.</strong> Diese Vorlage ersetzt keine juristische Prüfung.</p>

          <h2>1. Verantwortlicher</h2>
          <p>Verantwortlich im Sinne der DSGVO: [Name, Anschrift, E-Mail].</p>

          <h2>2. Zugriffsdaten und Server-Logs</h2>
          <p>
            Beim Aufruf unserer Webseite werden automatisch Daten erhoben, die zur technischen Bereitstellung notwendig sind
            (IP-Adresse, Datum, Uhrzeit, User-Agent). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Wir verwenden technisch notwendige Cookies sowie – soweit eingerichtet und nur mit Einwilligung – Cookies von
            Analyse- und Marketingdiensten (z. B. Google Analytics, Google Tag Manager, Meta Pixel, TikTok Pixel).
            Du kannst deine Einwilligung jederzeit widerrufen.
          </p>

          <h2>4. Affiliate-Links</h2>
          <p>
            Unsere Seite enthält Affiliate-Links zu Partner­netzwerken (z. B. Awin, financeAds, CHECK24 Partner­programm,
            Tarifcheck, PartnerStack, impact.com). Klickst du auf einen solchen Link, werden Daten an das jeweilige
            Partner­netzwerk übermittelt (z. B. Klick-ID, Zeitpunkt). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw.
            – soweit erforderlich – deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
          </p>

          <h2>5. Tracking-Dienste</h2>
          <p>
            Wenn Tracking-IDs gepflegt sind, werden die folgenden Dienste eingebunden. Bitte ergänze hier die konkrete Verarbeitung,
            Rechtsgrundlage und Speicherdauer für jeden Dienst:
          </p>
          <ul>
            <li>Google Analytics 4</li>
            <li>Google Tag Manager</li>
            <li>Meta Pixel</li>
            <li>TikTok Pixel</li>
          </ul>

          <h2>6. Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Daten­übertrag­barkeit
            sowie Widerspruch. Du kannst dich zudem bei einer Datenschutz­aufsichts­behörde beschweren.
          </p>

          <h2>7. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für die genannten Zwecke erforderlich ist
            oder gesetzliche Aufbewahrungs­fristen es vorgeben.
          </p>

          <p className="mt-8 text-xs text-ink-500">
            Hinweis: Diese Vorlage ist nicht abschließend. Bitte vor Veröffentlichung rechtlich prüfen lassen.
          </p>
        </div>
      </section>
    </>
  );
}
