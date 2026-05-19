import RevenueCalculator from "@/components/RevenueCalculator";

export default function RevenueCalculatorPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Einnahmen-Rechner</h1>
      <p className="mt-1 max-w-3xl text-sm text-ink-600">
        Modellrechnung für CPC, CPM und Affiliate-Einnahmen bei verschiedenen Besucherzahlen. Verwende reale Werte aus
        deinen Analytics, sobald du sie hast. Werte hier sind beispielhaft und ersetzen keine Marktforschung.
      </p>
      <div className="mt-6">
        <RevenueCalculator />
      </div>
    </div>
  );
}
