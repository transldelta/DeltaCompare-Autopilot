"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dc_consent_v1";

type Consent = "accepted" | "declined" | null;

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

function writeConsent(v: Exclude<Consent, null>) {
  window.localStorage.setItem(STORAGE_KEY, v);
  window.dispatchEvent(new CustomEvent("dc:consent-change", { detail: v }));
}

export function hasTrackingConsent(): boolean {
  return readConsent() === "accepted";
}

export default function ConsentBanner() {
  const [state, setState] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setState(readConsent());
  }, []);

  if (!mounted || state !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white shadow-lg">
      <div className="container-page py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700">
          Wir verwenden technisch notwendige Cookies. Mit deiner Einwilligung laden wir zusätzlich
          Analyse- und Marketing-Dienste (z. B. Google Analytics, Meta Pixel, TikTok Pixel). Du kannst die
          Einwilligung jederzeit in deinem Browser zurücknehmen.{" "}
          <a href="/datenschutz" className="text-brand-700 underline">Mehr erfahren</a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              writeConsent("declined");
              setState("declined");
            }}
          >
            Ablehnen
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              writeConsent("accepted");
              setState("accepted");
              // Lädt Tracking-Skripte neu beim nächsten Seitenaufruf
              window.location.reload();
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
