"use client";

import { useMemo, useState } from "react";

type Inputs = {
  visitorsPerMonth: number;
  pagesPerVisit: number;
  adImpressionsPerPage: number;
  adClickRate: number;       // CTR auf Display-Anzeigen in %
  cpcValue: number;          // € pro Klick auf eigene CPC-Links
  cpmValue: number;          // € pro 1000 Display-Impressionen
  affiliateClickRate: number; // % der Besucher, die einen Affiliate-Klick machen
  leadRate: number;          // % der Affiliate-Klicks → Leads
  saleRate: number;          // % der Leads → Sales
  avgCommission: number;     // € pro Sale
};

const DEFAULTS: Inputs = {
  visitorsPerMonth: 10_000,
  pagesPerVisit: 1.8,
  adImpressionsPerPage: 2,
  adClickRate: 0.4,
  cpcValue: 0.25,
  cpmValue: 1.5,
  affiliateClickRate: 4,
  leadRate: 25,
  saleRate: 15,
  avgCommission: 45,
};

const SCENARIOS = [
  { name: "10.000 Besucher / Monat", visitors: 10_000 },
  { name: "50.000 Besucher / Monat", visitors: 50_000 },
  { name: "100.000 Besucher / Monat", visitors: 100_000 },
  { name: "250.000 Besucher / Monat", visitors: 250_000 },
];

export default function RevenueCalculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS);

  const calc = (visitors: number) => {
    const pageviews = visitors * v.pagesPerVisit;
    const impressions = pageviews * v.adImpressionsPerPage;
    const adClicks = (pageviews * v.adClickRate) / 100;
    const affiliateClicks = (visitors * v.affiliateClickRate) / 100;
    const leads = (affiliateClicks * v.leadRate) / 100;
    const sales = (leads * v.saleRate) / 100;
    const cpcRevenue = adClicks * v.cpcValue;
    const cpmRevenue = (impressions / 1000) * v.cpmValue;
    const affiliateRevenue = sales * v.avgCommission;
    const total = cpcRevenue + cpmRevenue + affiliateRevenue;
    return { pageviews, impressions, adClicks, affiliateClicks, leads, sales, cpcRevenue, cpmRevenue, affiliateRevenue, total };
  };

  const scenarios = useMemo(() => SCENARIOS.map((s) => ({ ...s, result: calc(s.visitors) })), [v]);
  const conservative = (n: number) => n * 0.5;
  const optimistic = (n: number) => n * 1.5;

  const fmt = (n: number) => `${n.toLocaleString("de-DE", { maximumFractionDigits: 0 })} €`;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-ink-200 bg-white p-5">
        <h2 className="font-semibold text-ink-900">Annahmen</h2>
        <p className="mt-1 text-xs text-ink-500">
          Werte sind beispielhaft. Passe sie an deine reale Performance an.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Input label="Seiten pro Besuch" value={v.pagesPerVisit} step={0.1} onChange={(x) => setV({ ...v, pagesPerVisit: x })} />
          <Input label="Anzeigen-Impressionen pro Seite" value={v.adImpressionsPerPage} step={1} onChange={(x) => setV({ ...v, adImpressionsPerPage: x })} />
          <Input label="CTR Display in %" value={v.adClickRate} step={0.1} onChange={(x) => setV({ ...v, adClickRate: x })} />
          <Input label="CPC in € (Display/CPC-Link)" value={v.cpcValue} step={0.05} onChange={(x) => setV({ ...v, cpcValue: x })} />
          <Input label="CPM in € (pro 1000 Imp.)" value={v.cpmValue} step={0.1} onChange={(x) => setV({ ...v, cpmValue: x })} />
          <Input label="Affiliate-Klick-Rate in %" value={v.affiliateClickRate} step={0.5} onChange={(x) => setV({ ...v, affiliateClickRate: x })} />
          <Input label="Lead-Rate in %" value={v.leadRate} step={1} onChange={(x) => setV({ ...v, leadRate: x })} />
          <Input label="Sale-Rate in %" value={v.saleRate} step={1} onChange={(x) => setV({ ...v, saleRate: x })} />
          <Input label="Ø Provision pro Sale in €" value={v.avgCommission} step={5} onChange={(x) => setV({ ...v, avgCommission: x })} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {scenarios.map((s) => (
          <div key={s.name} className="rounded-2xl border border-ink-200 bg-white p-5">
            <h3 className="font-semibold text-ink-900">{s.name}</h3>
            <ul className="mt-3 space-y-1 text-sm text-ink-700">
              <li>Pageviews: {s.result.pageviews.toLocaleString("de-DE")}</li>
              <li>Anzeigen-Impressionen: {s.result.impressions.toLocaleString("de-DE")}</li>
              <li>Anzeigen-Klicks: {Math.round(s.result.adClicks).toLocaleString("de-DE")}</li>
              <li>Affiliate-Klicks: {Math.round(s.result.affiliateClicks).toLocaleString("de-DE")}</li>
              <li>Leads: {Math.round(s.result.leads).toLocaleString("de-DE")}</li>
              <li>Sales: {Math.round(s.result.sales).toLocaleString("de-DE")}</li>
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <Scenario label="Konservativ" value={fmt(conservative(s.result.total))} />
              <Scenario label="Realistisch" value={fmt(s.result.total)} highlight />
              <Scenario label="Optimistisch" value={fmt(optimistic(s.result.total))} />
            </div>
            <div className="mt-3 text-xs text-ink-500">
              CPC {fmt(s.result.cpcRevenue)} · CPM {fmt(s.result.cpmRevenue)} · Affiliate {fmt(s.result.affiliateRevenue)}
            </div>
          </div>
        ))}
      </section>

      <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Wichtiger Hinweis:</strong> Dies ist nur eine Schätzung. Einnahmen sind nicht garantiert.
        Tatsächliche Werte hängen stark von Branche, Saison, Quellen-Mix und Anbieter-Konditionen ab.
      </p>
    </div>
  );
}

function Input({ label, value, step, onChange }: { label: string; value: number; step: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
      />
    </label>
  );
}

function Scenario({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg border p-2 text-center ${highlight ? "border-brand-300 bg-brand-50" : "border-ink-200 bg-ink-50"}`}>
      <div className="text-[10px] uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-1 text-sm font-bold text-ink-900">{value}</div>
    </div>
  );
}
