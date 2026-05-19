"use client";

import { useEffect, useState } from "react";
import { AD_LABEL } from "@/lib/adRules";

type AdSlotProps = {
  /** Slug des AdPlacement-Datensatzes – zur Impression-Beacon-Zuordnung. */
  placementSlug: string;
  /** Lesbarer Name (z. B. "In-Content Sidebar"). */
  label?: string;
  /** Ob das Slot mobil angezeigt wird (default: true). */
  showOnMobile?: boolean;
  /** Ob das Slot auf Desktop angezeigt wird (default: true). */
  showOnDesktop?: boolean;
  /** Höhe als Tailwind-Klasse, z. B. "h-24". Default: h-28 sm:h-32. */
  heightClass?: string;
  /** Optionaler eigener HTML-Snippet (für Direct Ads). Wird priorisiert über AdSense. */
  snippet?: string;
  /** Optionaler AdSense Ad-Slot (data-ad-slot) – AdSense-Client-ID kommt aus ENV. */
  adsenseSlot?: string;
};

/**
 * Universelles Anzeigen-Slot.
 *
 * Verhalten:
 *   - Lädt KEINE externen Skripte, solange kein Consent erteilt ist
 *     (dc_consent_v1 === "accepted" im localStorage).
 *   - Im Development zeigt es einen neutralen Platzhalter mit Slot-Namen.
 *   - In Produktion:
 *       * AdSense, wenn NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID + adsenseSlot gesetzt
 *       * sonst snippet, wenn vorhanden
 *       * sonst neutraler Platzhalter (kein leerer DOM-Bereich)
 *   - Sendet Impression als Beacon (fire-and-forget) an /api/ads/impression.
 *   - Beachtet showOnMobile / showOnDesktop über CSS.
 */
export default function AdSlot({
  placementSlug,
  label,
  showOnMobile = true,
  showOnDesktop = true,
  heightClass = "h-28 sm:h-32",
  snippet,
  adsenseSlot,
}: AdSlotProps) {
  const [consent, setConsent] = useState<boolean>(false);

  useEffect(() => {
    const v = window.localStorage.getItem("dc_consent_v1");
    setConsent(v === "accepted");
    const onChange = (e: Event) => {
      setConsent((e as CustomEvent).detail === "accepted");
    };
    window.addEventListener("dc:consent-change", onChange);
    return () => window.removeEventListener("dc:consent-change", onChange);
  }, []);

  // Beacon: Impression nur einmal pro Mount feuern, wenn Consent vorhanden.
  useEffect(() => {
    if (!consent) return;
    try {
      const body = new Blob(
        [JSON.stringify({ placementSlug, pageSlug: window.location.pathname })],
        { type: "application/json" }
      );
      navigator.sendBeacon?.("/api/ads/impression", body) ||
        fetch("/api/ads/impression", { method: "POST", body, keepalive: true }).catch(() => {});
    } catch {
      /* fail silently */
    }
  }, [consent, placementSlug]);

  const visibility = [
    !showOnMobile ? "hidden sm:block" : "",
    !showOnDesktop ? "sm:hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const adsenseClientId =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID
      ? process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID
      : "";

  const showAdsense = consent && adsenseClientId.startsWith("ca-pub-") && Boolean(adsenseSlot);
  const showSnippet = consent && !showAdsense && Boolean(snippet);
  const showPlaceholder = !showAdsense && !showSnippet;

  return (
    <aside
      aria-label="Anzeige"
      className={`my-6 rounded-xl border border-ink-200 bg-ink-50 p-3 text-center ${visibility}`}
    >
      <div className="text-[10px] uppercase tracking-wide text-ink-500">{AD_LABEL}</div>
      {showAdsense && adsenseSlot && (
        <ins
          className={`adsbygoogle mt-2 block ${heightClass}`}
          style={{ display: "block" }}
          data-ad-client={adsenseClientId}
          data-ad-slot={adsenseSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
      {showSnippet && snippet && (
        <div className={`mt-2 ${heightClass}`} dangerouslySetInnerHTML={{ __html: snippet }} />
      )}
      {showPlaceholder && (
        <div
          className={`mt-2 flex items-center justify-center rounded-md bg-white text-xs text-ink-400 ${heightClass}`}
        >
          {label || `Platzhalter: ${placementSlug}`}
        </div>
      )}
    </aside>
  );
}
