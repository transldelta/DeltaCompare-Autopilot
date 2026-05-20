import Breadcrumbs from "@/components/Breadcrumbs";
import VisualArticleCard from "@/components/VisualArticleCard";
import { PublicPageHero, CTASection } from "@/components/ui";
import { BLOG_POSTS } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber",
  description: "Praxisnahe Artikel für Verbraucher, Familien, Selbstständige und Unternehmen.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  return (
    <>
      <PublicPageHero
        glyph="✎"
        eyebrow="Ratgeber & Wissen"
        title="Ratgeber"
        subtitle="Praxisnahe Artikel für Verbraucher, Familien, Selbstständige und Unternehmen – verständlich erklärt."
        gradient="from-violet-700 via-brand-800 to-brand-700"
        breadcrumbs={<Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Ratgeber" }]} light />}
      />
      <section className="container-page py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <VisualArticleCard
              key={p.slug}
              title={p.title}
              slug={p.slug}
              description={p.description}
              category={p.category}
              content={p.content}
              index={i}
            />
          ))}
        </div>
      </section>
      <CTASection
        title="Vom Wissen zur Entscheidung."
        subtitle="Nutze unsere Vergleiche, um das passende Angebot zu finden – kostenlos und transparent."
        primary={{ href: "/vergleich", label: "Vergleiche ansehen" }}
        secondary={{ href: "/kategorien", label: "Kategorien" }}
      />
    </>
  );
}
