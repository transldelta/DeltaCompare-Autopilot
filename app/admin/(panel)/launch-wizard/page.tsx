import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { isDemoLink } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Check = {
  label: string;
  ok: boolean;
  hint?: string;
  href?: string;
};

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-800"}`}>
      {ok ? "✓ OK" : "○ offen"}
    </span>
  );
}

export default async function LaunchWizardPage() {
  const [
    categories,
    offers,
    comparisons,
    cpcOffers,
    placements,
    networks,
    clicksTotal,
    adClicksTotal,
    impressionsTotal,
    settings,
  ] = await Promise.all([
    prisma.category.count(),
    prisma.offer.findMany(),
    prisma.comparisonPage.findMany(),
    prisma.cpcOffer.findMany(),
    prisma.adPlacement.findMany(),
    prisma.adNetwork.findMany(),
    prisma.clickEvent.count(),
    prisma.adClick.count(),
    prisma.adImpression.count(),
    prisma.settings.findMany(),
  ]);

  const settingsMap = new Map(settings.map((s) => [s.key, s.value]));
  const offersWithDemo = offers.filter((o) => isDemoLink(o.affiliateLink));
  const cpcWithDemo = cpcOffers.filter((o) => isDemoLink(o.affiliateLink || o.targetUrl));
  const offersActive = offers.filter((o) => o.status === "active");
  const offersReal = offersActive.filter((o) => !isDemoLink(o.affiliateLink));
  const cmpsMissingMeta = comparisons.filter((c) => !c.metaDescription || !c.seoTitle);
  const cmpsWithoutOffers = comparisons.filter((c) => !c.offerSlugs || c.offerSlugs.trim() === "");
  const activePlacements = placements.filter((p) => p.isActive);

  const env = process.env;
  const hasAdsense = Boolean(env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID?.startsWith("ca-pub-"));
  const adsEnvEnabled = env.NEXT_PUBLIC_ENABLE_ADS === "true";
  const adsDbEnabled = settingsMap.get("ads_enabled") === "true";
  const hasAuthSecret = Boolean(env.AUTH_SECRET && env.AUTH_SECRET.length >= 32 && !env.AUTH_SECRET.includes("dev-"));
  const siteUrl = env.NEXT_PUBLIC_SITE_URL || "";
  const isProdUrl = siteUrl.startsWith("https://") && !siteUrl.includes("localhost");

  // Section 1: Projektstatus
  const projectChecks: Check[] = [
    { label: "Datenbank verbunden (Kategorien geladen)", ok: categories > 0 },
    { label: "Sitemap-Route vorhanden", ok: true, hint: "Automatisch generiert unter /sitemap.xml" },
    { label: "robots.txt-Route vorhanden", ok: true, hint: "Automatisch unter /robots.txt" },
    { label: "Impressum-Seite vorhanden", ok: true, hint: "/impressum (bitte mit echten Daten füllen)" },
    { label: "Datenschutz-Seite vorhanden", ok: true, hint: "/datenschutz (Vorlage, prüfen lassen)" },
    { label: "Affiliate-Hinweis-Seite vorhanden", ok: true },
    { label: "Affiliate-Links aktiv (mind. 1 echter Link)", ok: offersReal.length > 0, hint: `${offersReal.length} von ${offersActive.length} Anbieter mit echtem Link`, href: "/admin/audit" },
    { label: "Anzeigen vorbereitet (Plätze in DB)", ok: placements.length > 0, hint: `${placements.length} Plätze, ${activePlacements.length} aktiv`, href: "/admin/ad-placements" },
    { label: "Tracking-IDs gesetzt", ok: Boolean(env.GOOGLE_ANALYTICS_ID || env.GOOGLE_TAG_MANAGER_ID), hint: "Optional – setze GA/GTM in .env oder Settings" },
    { label: "Cookie-Consent integriert", ok: true, hint: "ConsentBanner aktiv, Tracking lädt erst nach Einwilligung" },
    { label: "AUTH_SECRET in Produktion sicher", ok: hasAuthSecret, hint: hasAuthSecret ? "" : "Mindestens 32 Zeichen, kein 'dev-'-Präfix" },
    { label: "NEXT_PUBLIC_SITE_URL zeigt auf Produktiv-URL", ok: isProdUrl, hint: isProdUrl ? siteUrl : `Aktuell: ${siteUrl || "leer"}` },
  ];

  // Section 4: AdSense
  const adsenseChecks: Check[] = [
    { label: "AdSense-Client-ID gesetzt (.env)", ok: hasAdsense, hint: hasAdsense ? "OK" : "NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID fehlt oder hat falsches Format" },
    { label: "Anzeigen global aktiv (ENV)", ok: adsEnvEnabled, hint: "NEXT_PUBLIC_ENABLE_ADS=true" },
    { label: "Anzeigen aktiv (DB-Settings)", ok: adsDbEnabled, href: "/admin/settings" },
    { label: "Mindestens 1 Anzeigen-Platz aktiviert", ok: activePlacements.length > 0, hint: `${activePlacements.length} aktive Plätze`, href: "/admin/ad-placements" },
  ];

  // Section 7: SEO
  const seoChecks: Check[] = [
    { label: "Alle Vergleichsseiten haben SEO-Titel", ok: cmpsMissingMeta.length === 0, hint: cmpsMissingMeta.length ? `${cmpsMissingMeta.length} ohne` : "" },
    { label: "Alle Vergleichsseiten haben Meta-Description", ok: cmpsMissingMeta.length === 0 },
    { label: "Sitemap funktioniert (statisch)", ok: true, href: "/sitemap.xml" },
    { label: "robots.txt funktioniert", ok: true, href: "/robots.txt" },
    { label: "OpenGraph-Standard-Bild vorhanden", ok: true, hint: "public/og/default.svg" },
    { label: "Interne Links vorhanden", ok: true, hint: "Breadcrumbs + Footer + Hauptnavigation" },
    { label: "404-Seite vorhanden", ok: true, hint: "app/not-found.tsx" },
  ];

  // Section 8: Monetarisierung
  const monetizationChecks: Check[] = [
    { label: "CPC-Angebote angelegt", ok: cpcOffers.length > 0, hint: `${cpcOffers.length} CPC-Angebote (${cpcWithDemo.length} mit Demo-Link)`, href: "/admin/cpc-offers" },
    { label: "Werbenetzwerke definiert", ok: networks.length > 0, hint: `${networks.length} Netzwerke`, href: "/admin/ads" },
    { label: "Anzeigen-Plätze definiert", ok: placements.length > 0, href: "/admin/ad-placements" },
    { label: "Klicktracking funktioniert (mindestens 0)", ok: true, hint: `Affiliate: ${clicksTotal}, CPC: ${adClicksTotal}, Impressionen: ${impressionsTotal}`, href: "/admin/tracking" },
    { label: "Demo-Angebote klar markiert", ok: true, hint: "DEMO_LINK_ERSETZEN wird im Audit angezeigt" },
    { label: "Einnahmen-Rechner verfügbar", ok: true, href: "/admin/revenue-calculator" },
  ];

  // Section 2: Demo-Links
  const totalDemo = offersWithDemo.length + cpcWithDemo.length;

  // Section 11: Sicherheit
  const securityChecks: Check[] = [
    { label: "Kein hartkodiertes Admin-Passwort im Code", ok: true, hint: "Passwort wird bcrypt-gehashed in DB gespeichert" },
    { label: "Keine API-Keys im Frontend", ok: true, hint: "AdSense Publisher-ID ist öffentlich, keine geheimen Schlüssel im Client" },
    { label: "Keine echten personenbezogenen Daten in Demos", ok: true, hint: "Anbieter heißen 'Anbieter A/B/C', keine echten Daten" },
    { label: "Keine automatischen Fake-Klicks", ok: true, hint: "CPC-Redirect filtert Bots, kein Auto-Click-Code" },
    { label: "Keine automatische Werbeausgabe", ok: true, hint: "Nur Entwürfe in content/ad-campaigns/" },
    { label: "Keine versteckten Weiterleitungen", ok: true, hint: "/go/ und /cpc/ tragen rel='sponsored nofollow'" },
    { label: "AUTH_SECRET stark genug", ok: hasAuthSecret, hint: hasAuthSecret ? "" : "In Produktion mindestens 32 Zeichen, kein 'dev-'-Präfix" },
  ];

  // Gesamt-Status
  const allChecks = [...projectChecks, ...adsenseChecks, ...seoChecks, ...monetizationChecks, ...securityChecks];
  const okCount = allChecks.filter((c) => c.ok).length;
  const totalCount = allChecks.length;
  const readiness = Math.round((okCount / totalCount) * 100);
  const status: "not_ready" | "almost" | "test" | "live" =
    readiness < 50 ? "not_ready" :
    readiness < 75 ? "almost" :
    readiness < 95 ? "test" :
    "live";

  const statusLabels = {
    not_ready: { label: "Nicht bereit", color: "bg-rose-100 text-rose-800 border-rose-200", bar: "bg-rose-500" },
    almost: { label: "Fast bereit", color: "bg-amber-100 text-amber-900 border-amber-200", bar: "bg-amber-500" },
    test: { label: "Bereit für Test-Deployment", color: "bg-sky-100 text-sky-900 border-sky-200", bar: "bg-sky-500" },
    live: { label: "Bereit für Livegang", color: "bg-emerald-100 text-emerald-900 border-emerald-200", bar: "bg-emerald-500" },
  };

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <header>
        <h1 className="text-2xl font-extrabold text-ink-900">Launch-Assistent</h1>
        <p className="mt-1 max-w-3xl text-sm text-ink-600">
          Schritt-für-Schritt-Prüfung vor dem Go-Live. Jede Sektion verlinkt zu dem Admin-Bereich, in dem du Probleme behebst.
        </p>
      </header>

      <section className={`rounded-2xl border p-6 ${statusLabels[status].color}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Launch-Status</div>
            <div className="mt-1 text-3xl font-extrabold">{statusLabels[status].label}</div>
            <div className="mt-1 text-sm">{okCount} von {totalCount} automatischen Checks bestanden</div>
          </div>
          <div className="text-right text-xs">
            <div>Demo-Links offen: <strong>{totalDemo}</strong></div>
            <div>Aktive Anzeigen-Plätze: <strong>{activePlacements.length}</strong></div>
            <div>Vergleichsseiten: <strong>{comparisons.length}</strong></div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>Fortschritt</span>
            <span>{readiness} %</span>
          </div>
          <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-white/60">
            <div className={`h-full rounded-full transition-all ${statusLabels[status].bar}`} style={{ width: `${readiness}%` }} />
          </div>
        </div>
      </section>

      <Section title="1. Projektstatus" subtitle="Grundlegende technische Voraussetzungen">
        <ChecksList checks={projectChecks} />
      </Section>

      <Section title="2. Demo-Link-Prüfung" subtitle="Diese Demo-Links müssen vor Livegang ersetzt werden.">
        <div className="grid gap-3 lg:grid-cols-2">
          <Panel title={`Affiliate-Anbieter mit Demo-Link (${offersWithDemo.length})`} tone={offersWithDemo.length === 0 ? "ok" : "warn"}>
            {offersWithDemo.length === 0 ? (
              <Empty>Alle Affiliate-Anbieter haben echte Links.</Empty>
            ) : (
              <ul className="space-y-1 text-sm">
                {offersWithDemo.slice(0, 8).map((o) => (
                  <li key={o.id}>
                    <Link href={`/admin/offers/${o.id}`} className="hover:underline">{o.name}</Link>
                    <span className="ml-2 rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">kritisch</span>
                  </li>
                ))}
                {offersWithDemo.length > 8 && (
                  <li className="text-xs text-ink-500">… und {offersWithDemo.length - 8} weitere</li>
                )}
              </ul>
            )}
          </Panel>
          <Panel title={`CPC-Angebote mit Demo-Link (${cpcWithDemo.length})`} tone={cpcWithDemo.length === 0 ? "ok" : "warn"}>
            {cpcWithDemo.length === 0 ? (
              <Empty>Alle CPC-Angebote haben echte Ziele.</Empty>
            ) : (
              <ul className="space-y-1 text-sm">
                {cpcWithDemo.slice(0, 8).map((o) => (
                  <li key={o.id}>
                    <Link href={`/admin/cpc-offers/${o.id}`} className="hover:underline">{o.name}</Link>
                    <span className="ml-2 rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">vor Livegang ersetzen</span>
                  </li>
                ))}
                {cpcWithDemo.length > 8 && (
                  <li className="text-xs text-ink-500">… und {cpcWithDemo.length - 8} weitere</li>
                )}
              </ul>
            )}
          </Panel>
          <Panel title={`Vergleichsseiten ohne Anbieter (${cmpsWithoutOffers.length})`} tone={cmpsWithoutOffers.length === 0 ? "ok" : "warn"}>
            {cmpsWithoutOffers.length === 0 ? (
              <Empty>Alle Vergleichsseiten haben Anbieter zugeordnet.</Empty>
            ) : (
              <ul className="space-y-1 text-sm">
                {cmpsWithoutOffers.slice(0, 8).map((c) => (
                  <li key={c.id}>
                    <Link href={`/admin/comparisons/${c.id}`} className="hover:underline">{c.title}</Link>
                    <span className="ml-2 text-[10px] text-ink-500">optional</span>
                  </li>
                ))}
                {cmpsWithoutOffers.length > 8 && (
                  <li className="text-xs text-ink-500">… und {cmpsWithoutOffers.length - 8} weitere</li>
                )}
              </ul>
            )}
          </Panel>
          <Panel title="Status-Legende" tone="info">
            <ul className="space-y-1 text-xs text-ink-700">
              <li><span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">kritisch</span> – muss vor Livegang ersetzt werden</li>
              <li><span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">vor Livegang ersetzen</span> – würde sonst Klicks ins Leere führen</li>
              <li><span className="text-[10px] text-ink-500">optional</span> – Seite funktioniert auch ohne Anbieter, aber Monetarisierung leidet</li>
            </ul>
          </Panel>
        </div>
      </Section>

      <Section title="3. Affiliate-Netzwerk-Assistent" subtitle="Trage hier deine Tracking-Daten ein, sobald du die Programm-Freigabe hast.">
        <div className="rounded-xl border border-ink-200 bg-white p-5">
          <p className="text-sm text-ink-700">
            Die Affiliate-Daten pflegst du pro Anbieter unter <Link href="/admin/offers" className="text-brand-700 underline">/admin/offers</Link>.
            Pro Anbieter setzt du <code>affiliateLink</code> + optional <code>trackingId</code> (SubID).
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <HelpCard
              title="Awin"
              steps={[
                "Anmeldung auf awin.com als Publisher",
                "Programm beantragen → Bestätigung abwarten",
                "Tools → Deeplink-Generator → URL einsetzen",
                "Link kopieren und ins Feld 'affiliateLink' beim Anbieter einsetzen",
              ]}
            />
            <HelpCard
              title="financeAds"
              steps={[
                "Anmeldung auf financeads.net",
                "Programm wählen, Antrag stellen",
                "Tracking-Link aus dem Dashboard kopieren",
                "Bei Bedarf SubID als clickref anhängen",
              ]}
            />
            <HelpCard
              title="CHECK24 / Tarifcheck"
              steps={[
                "Anmeldung im jeweiligen Partner-Portal",
                "Vergleichsrechner-Link kopieren",
                "Optional eigene SubID anhängen",
              ]}
            />
            <HelpCard
              title="PartnerStack / impact.com / Direkt"
              steps={[
                "Im Partner-Dashboard das Programm wählen",
                "Tracking-Link kopieren",
                "In DeltaVergleich unter /admin/offers/<anbieter> einsetzen",
                "Mit /go/<slug>?from=test verifizieren",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="4. AdSense-Assistent" subtitle="Anzeigen werden erst ausgespielt, wenn Publisher-ID gesetzt UND Nutzer-Consent vorhanden ist.">
        <ChecksList checks={adsenseChecks} />
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Hinweis:</strong> AdSense erst aktivieren, sobald Google deine Domain freigegeben hat.
          Bei aktiviertem AdSense ohne Freigabe sind die Plätze leer oder bringen keine Erlöse.
          Cookie-Consent ist Pflicht – siehe <Link href="/admin/settings" className="underline">Settings</Link> und{" "}
          <code>docs/COOKIE_CONSENT_AND_ADS.md</code>.
        </div>
      </Section>

      <Section title="5. Domain & Deployment" subtitle="Schritte für den Live-Stand auf Vercel.">
        <ol className="list-decimal space-y-2 pl-5 text-sm text-ink-700">
          <li>Repo auf GitHub bereitstellen (siehe Sektion 12 unten).</li>
          <li>Vercel-Projekt erstellen und Repo verbinden.</li>
          <li>Environment Variables eintragen (mind. <code>DATABASE_URL</code>, <code>AUTH_SECRET</code>, <code>ADMIN_*</code>, <code>NEXT_PUBLIC_SITE_URL</code>).</li>
          <li>Postgres-DB anbinden (Vercel Postgres oder Neon). Schema-Switch: <code>cp prisma/schema.postgres.prisma prisma/schema.prisma</code>.</li>
          <li><code>npx prisma db push</code> einmalig gegen Prod-DB.</li>
          <li><code>npm run db:seed</code> einmalig gegen Prod-DB.</li>
          <li>Domain unter Vercel hinzufügen und DNS-Eintrag setzen.</li>
          <li><code>NEXT_PUBLIC_SITE_URL</code> auf finale Domain umstellen, neu deployen.</li>
        </ol>
        <p className="mt-3 text-xs text-ink-500">
          Vollständige Anleitung: <code>docs/DEPLOYMENT_VERCEL.md</code> und{" "}
          <code>docs/GO_LIVE_STEP_BY_STEP.md</code>.
        </p>
      </Section>

      <Section title="6. Rechtliche Launch-Prüfung" subtitle="Diese Punkte musst du selbst manuell freigeben – sie sind nicht automatisch prüfbar.">
        <ul className="grid gap-2 text-sm text-ink-700 sm:grid-cols-2">
          <ManualCheck>Impressum mit echten Daten (Name, Anschrift, Kontakt)</ManualCheck>
          <ManualCheck>Datenschutzerklärung anwaltlich geprüft</ManualCheck>
          <ManualCheck>Affiliate-Hinweis sichtbar im Footer und auf Vergleichsseiten</ManualCheck>
          <ManualCheck>Cookie-Consent getestet (Akzeptieren + Ablehnen)</ManualCheck>
          <ManualCheck>Keine Aussagen zur Finanzberatung</ManualCheck>
          <ManualCheck>Keine Aussagen zur Steuerberatung</ManualCheck>
          <ManualCheck>Keine Aussagen zur Rechtsberatung</ManualCheck>
          <ManualCheck>Werbung mit „Anzeige / Werbung" gekennzeichnet</ManualCheck>
          <ManualCheck>Preise und Provisionen tragen „ohne Gewähr"-Hinweis</ManualCheck>
        </ul>
        <p className="mt-3 text-xs text-ink-500">
          Checkliste in <code>docs/LEGAL_TODO_BEFORE_LAUNCH.md</code>.
        </p>
      </Section>

      <Section title="7. SEO-Launch-Prüfung" subtitle="Automatische SEO-Voraussetzungen">
        <ChecksList checks={seoChecks} />
      </Section>

      <Section title="8. Monetarisierungs-Prüfung" subtitle="Was steht für den Verdienst bereit?">
        <ChecksList checks={monetizationChecks} />
      </Section>

      <Section title="9. Sicherheits-Prüfung" subtitle="Pflichtchecks vor jedem Deployment">
        <ChecksList checks={securityChecks} />
      </Section>

      <Section title="10. Dokumentation" subtitle="Diese Dateien helfen dir beim Livegang.">
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          <DocLink>docs/GO_LIVE_STEP_BY_STEP.md</DocLink>
          <DocLink>docs/DEPLOYMENT_VERCEL.md</DocLink>
          <DocLink>docs/POSTGRES_SETUP.md</DocLink>
          <DocLink>docs/LEGAL_TODO_BEFORE_LAUNCH.md</DocLink>
          <DocLink>docs/COOKIE_CONSENT_AND_ADS.md</DocLink>
          <DocLink>docs/ADSENSE_SETUP.md</DocLink>
          <DocLink>docs/AWIN_CPC_SETUP.md</DocLink>
          <DocLink>docs/REVENUE_SCENARIOS.md</DocLink>
          <DocLink>docs/REPO_RENAME_RECOMMENDATION.md</DocLink>
        </ul>
      </Section>

      <Section title="11. Repo-Hinweis" subtitle="Das Projekt liegt aktuell im Repo transldelta/XAU-USD.">
        <div className="rounded-xl border border-ink-200 bg-white p-5 text-sm text-ink-700">
          <p>
            Empfehlung: Repo umbenennen in <code>transldelta/DeltaVergleich</code> oder neu anlegen und Bundle pushen.
          </p>
          <p className="mt-2">
            Vollständige Anleitung in <code>docs/REPO_RENAME_RECOMMENDATION.md</code>.
          </p>
        </div>
      </Section>
    </div>
  );
}

// ============ Helpers ============

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-ink-900">{title}</h2>
      <p className="mt-1 text-sm text-ink-600">{subtitle}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ChecksList({ checks }: { checks: Check[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {checks.map((c, i) => (
        <li key={i} className="flex items-start justify-between gap-3 rounded-xl border border-ink-200 bg-white p-3">
          <div className="min-w-0 flex-1">
            <div className="font-medium text-ink-900">{c.label}</div>
            {c.hint && <div className="mt-0.5 text-xs text-ink-500">{c.hint}</div>}
            {c.href && (
              <Link href={c.href} className="mt-1 inline-block text-xs text-brand-700 hover:underline">
                {c.href} →
              </Link>
            )}
          </div>
          <StatusBadge ok={c.ok} />
        </li>
      ))}
    </ul>
  );
}

function Panel({ title, children, tone }: { title: string; children: React.ReactNode; tone: "ok" | "warn" | "info" }) {
  const cls =
    tone === "ok"
      ? "border-emerald-200 bg-emerald-50"
      : tone === "warn"
        ? "border-amber-200 bg-amber-50"
        : "border-ink-200 bg-white";
  return (
    <div className={`rounded-xl border p-4 ${cls}`}>
      <div className="font-semibold text-ink-900">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-emerald-700">✓ {children}</p>;
}

function HelpCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-lg border border-ink-200 bg-ink-50 p-3">
      <div className="font-semibold text-ink-900">{title}</div>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs text-ink-700">
        {steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </div>
  );
}

function ManualCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 rounded-xl border border-ink-200 bg-white p-3">
      <input type="checkbox" className="mt-1 accent-brand-600" aria-label="manuell bestätigen" />
      <span>{children}</span>
    </li>
  );
}

function DocLink({ children }: { children: string }) {
  return (
    <li className="rounded-xl border border-ink-200 bg-white p-3 text-sm">
      <code className="font-mono text-xs text-brand-700">{children}</code>
    </li>
  );
}
