import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber",
  description: "Ratgeber-Artikel für Selbstständige zu Geschäftskonten, Buchhaltung, Versicherungen und mehr.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Start", href: "/" }, { name: "Ratgeber" }]} />
      <section className="container-page py-10">
        <h1 className="section-heading">Ratgeber</h1>
        <p className="mt-2 max-w-3xl text-ink-600">
          Praxisnahe Artikel zu Buchhaltung, Versicherungen, Tools und Strukturen für Selbstständige.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} href={`/ratgeber/${p.slug}`} className="card hover:-translate-y-0.5">
              <div className="text-xs uppercase tracking-wide text-brand-700">{p.category}</div>
              <h2 className="mt-1 text-lg font-semibold text-ink-900">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink-600">{p.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-700">Artikel lesen →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
