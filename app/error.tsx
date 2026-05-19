"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled UI error:", error);
  }, [error]);

  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm font-semibold text-amber-700">Vorübergehend nicht verfügbar</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Wir sind gleich wieder da
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-ink-600">
        Es ist ein unerwarteter Fehler aufgetreten. Wenn das Problem weiterhin besteht, prüfe bitte deine
        Server-Konfiguration (Datenbank, Environment Variables) oder versuche es in wenigen Minuten erneut.
      </p>
      {error?.digest && (
        <p className="mt-2 text-xs text-ink-500">Fehler-ID: {error.digest}</p>
      )}
      <div className="mt-6 flex justify-center gap-3">
        <button type="button" className="btn-primary" onClick={() => reset()}>
          Erneut versuchen
        </button>
        <Link href="/" className="btn-secondary">Zur Startseite</Link>
      </div>
    </section>
  );
}
