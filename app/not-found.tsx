import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">Seite nicht gefunden</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-600">
        Die gesuchte Seite existiert nicht oder wurde verschoben. Versuche es über die Startseite.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Zur Startseite</Link>
        <Link href="/vergleich" className="btn-secondary">Vergleiche ansehen</Link>
      </div>
    </section>
  );
}
