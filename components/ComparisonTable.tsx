import Link from "next/link";
import AffiliateButton from "./AffiliateButton";

type OfferRow = {
  name: string;
  slug: string;
  rating: number;
  priceNote?: string;
  shortDescription: string;
  advantages?: string;
  buttonText?: string;
};

export default function ComparisonTable({ offers }: { offers: OfferRow[] }) {
  if (offers.length === 0) {
    return (
      <div className="card text-sm text-ink-600">
        Es sind aktuell keine Anbieter für diesen Vergleich hinterlegt. Bitte später erneut prüfen.
      </div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-200 bg-white shadow-card">
      <table className="min-w-full divide-y divide-ink-200 text-sm">
        <thead className="bg-ink-50 text-left text-xs font-semibold uppercase tracking-wide text-ink-600">
          <tr>
            <th className="px-4 py-3">Anbieter</th>
            <th className="px-4 py-3">Bewertung</th>
            <th className="px-4 py-3">Vorteile</th>
            <th className="px-4 py-3">Preishinweis</th>
            <th className="px-4 py-3">Aktion</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {offers.map((o) => {
            const adv = (o.advantages || "").split("|").filter(Boolean).slice(0, 3);
            return (
              <tr key={o.slug} className="align-top">
                <td className="px-4 py-4">
                  <Link href={`/anbieter/${o.slug}`} className="block font-semibold text-ink-900 hover:text-brand-700">
                    {o.name}
                  </Link>
                  <p className="mt-1 text-xs text-ink-600 line-clamp-2">{o.shortDescription}</p>
                </td>
                <td className="px-4 py-4 font-semibold text-emerald-700">★ {o.rating.toFixed(1)}</td>
                <td className="px-4 py-4">
                  <ul className="space-y-1 text-ink-700">
                    {adv.map((a) => (
                      <li key={a} className="flex gap-2"><span className="text-emerald-600">✓</span>{a}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-4 text-xs text-ink-600">{o.priceNote || "–"}</td>
                <td className="px-4 py-4">
                  <AffiliateButton offerSlug={o.slug} label={o.buttonText || "Zum Anbieter"} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
