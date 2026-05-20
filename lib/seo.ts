import type { Metadata } from "next";
import { getSiteName, getSiteUrl } from "./utils";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({ title, description, path = "/", image, noIndex }: BuildMetadataInput): Metadata {
  const siteName = getSiteName();
  const siteUrl = getSiteUrl();
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} – Vergleiche für Selbstständige, Business, Finanzen und digitale Tools`;
  const desc =
    description ||
    "Vergleiche für Selbstständige, Business, Finanzen und digitale Tools. DeltaVergleich hilft Selbstständigen und kleinen Unternehmen, passende Anbieter schneller zu finden.";
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og/default.svg`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName,
      type: "website",
      locale: "de_DE",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function articleJsonLd(input: { title: string; description: string; url: string; datePublished?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: input.url,
    datePublished: input.datePublished || new Date().toISOString(),
    publisher: { "@type": "Organization", name: getSiteName(), url: getSiteUrl() },
  };
}

export function breadcrumbsJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
