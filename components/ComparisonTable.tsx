import Link from "next/link";
import AffiliateButton from "./AffiliateButton";
import { RatingBadge } from "./ui";

type OfferRow = {
  name: string;
  slug: string;
  rating: number;
  priceNote?: string;
  shortDescription: string;
  advantages?: string;
  buttonText?: string;
  isFeatured?: boolean;
};

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function ComparisonTable({ offers }: { offers: OfferRow[] }) {
  if (offers.length === 0) {
    return (
      <div className="card-flat text-sm text-ink-600">
        Es sind aktuell keine Anbieter für diesen Vergleich hinterlegt. Bitte später erneut prüfen.
      </div>
    );
  }

  return (
    <>
      {/* Desktop-Tabelle */}
      <div className="hidden overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-card md:block">
        <table className="min-w-full divide-y divide-ink-200 text-sm">
          <thead className="bg-ink-50 text-left text-xs font-bold uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-5 py-3.5">Anbieter</th>
              <th className="px-5 py-3.5">Bewertung</th>
              <th className="px-5 py-3.5">Vorteile</th>
              <th className="px-5 py-3.5">Preishinweis</th>
              <th className="px-5 py-3.5 text-right">Aktion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {offers.map((o, i) => {
              const adv = (o.advantages || "").split("|").filter(Boolean).slice(0, 3);
              return (
                <tr key={o.slug} className="align-top transition hover:bg-ink-50/50">
                  <td className="px-5 py-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm font-extrabold text-brand-600">
                        {initials(o.name)}
                      </span>
                      <div>
                        <Link href={`/anbieter/${o.slug}`} className="flex items-center gap-2 font-bold text-ink-900 hover:text-brand-700">
                          {o.name}
                          {(o.isFeatured || i === 0) && <span className="badge-accent">{i === 0 ? "Top Wahl" : "Beliebt"}</span>}
                        </Link>
                        <p className="mt-1 line-clamp-2 max-w-xs text-xs text-ink-500">{o.shortDescription}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5"><RatingBadge rating={o.rating} /></td>
                  <td className="px-5 py-5">
                    <ul className="space-y-1.5 text-ink-700">
                      {adv.map((a) => (
                        <li key={a} className="flex gap-2">
                          <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-accent-500"><path d="M8 13.2l-3.2-3.2-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5 text-xs text-ink-600">{o.priceNote || "–"}</td>
                  <td className="px-5 py-5 text-right">
                    <div className="inline-flex justify-end">
                      <AffiliateButton offerSlug={o.slug} label={o.buttonText || "Zum Anbieter"} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile-Karten */}
      <div className="space-y-4 md:hidden">
        {offers.map((o, i) => {
          const adv = (o.advantages || "").split("|").filter(Boolean).slice(0, 3);
          return (
            <div key={o.slug} className="card-flat">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-sm font-extrabold text-brand-600">
                    {initials(o.name)}
                  </span>
                  <div>
                    <Link href={`/anbieter/${o.slug}`} className="font-bold text-ink-900">{o.name}</Link>
                    {(o.isFeatured || i === 0) && <span className="badge-accent ml-1">{i === 0 ? "Top Wahl" : "Beliebt"}</span>}
                  </div>
                </div>
                <RatingBadge rating={o.rating} />
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                {adv.map((a) => (
                  <li key={a} className="flex gap-2">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-accent-500"><path d="M8 13.2l-3.2-3.2-1.4 1.4L8 16l9-9-1.4-1.4z" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
              {o.priceNote && <p className="mt-3 text-xs text-ink-500">{o.priceNote}</p>}
              <div className="mt-4">
                <AffiliateButton offerSlug={o.slug} label={o.buttonText || "Zum Anbieter"} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
