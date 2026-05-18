import ImportUploader from "@/components/ImportUploader";
import { OFFER_CSV_HEADERS } from "@/lib/importers";

export const dynamic = "force-dynamic";

export default function AdminImportPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Import & Export</h1>
      <p className="mt-1 text-sm text-ink-600">
        Importiere Angebote aus CSV oder JSON oder exportiere bestehende Daten.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-ink-900">Angebote importieren</h2>
          <p className="mt-1 text-sm text-ink-600">
            Lade eine CSV-Datei mit den Standardspalten oder ein JSON-Array hoch. Demo-Importer:{" "}
            <a className="text-brand-700 underline" href="/api/admin/import/offers?demo=1">/api/admin/import/offers?demo=1</a>
          </p>
          <div className="mt-4">
            <ImportUploader />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink-900">Export</h2>
          <p className="mt-1 text-sm text-ink-600">
            Lade alle Angebote als CSV herunter. Eignet sich für Backups und Bearbeitung in Excel/Numbers.
          </p>
          <a className="btn-secondary mt-4 inline-flex" href="/api/admin/export/offers.csv">
            Angebote als CSV exportieren
          </a>

          <div className="mt-8">
            <h3 className="font-semibold text-ink-900">CSV-Spalten</h3>
            <code className="mt-2 block break-all rounded-lg bg-ink-50 p-3 text-xs text-ink-700">
              {OFFER_CSV_HEADERS.join(",")}
            </code>
            <p className="mt-2 text-xs text-ink-500">
              Pflicht: name, category, network, affiliateLink, shortDescription, longDescription
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
