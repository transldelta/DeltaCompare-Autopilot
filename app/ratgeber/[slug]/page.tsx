import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoBlock from "@/components/SeoBlock";
import { InfoBox } from "@/components/ui";
import { BLOG_POSTS } from "@/data/blog-posts";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { getSiteUrl } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = BLOG_POSTS.find((b) => b.slug === params.slug);
  if (!p) return buildMetadata({ title: "Artikel nicht gefunden", path: `/ratgeber/${params.slug}`, noIndex: true });
  return buildMetadata({ title: p.title, description: p.description, path: `/ratgeber/${p.slug}` });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/ratgeber/${post.slug}`;
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Start", href: "/" },
          { name: "Ratgeber", href: "/ratgeber" },
          { name: post.title },
        ]}
      />
      <section className="border-b border-ink-200/70 bg-hero-gradient">
        <div className="container-page pb-10 pt-3">
          <span className="badge-brand">{post.category}</span>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">{post.description}</p>
        </div>
      </section>

      <article className="container-page grid gap-10 py-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="max-w-3xl">
            <SeoBlock title="" content={post.content} />
          </div>
          <div className="mt-8 max-w-3xl">
            <InfoBox title="Tipp">
              Passende Anbieter findest du in unseren{" "}
              <Link href="/vergleich" className="font-semibold text-brand-700 underline">Vergleichen</Link>. Affiliate-Links
              sind transparent gekennzeichnet.
            </InfoBox>
          </div>
        </div>
        <aside className="lg:col-span-4">
          <div className="card-flat sticky top-24">
            <h2 className="text-sm font-bold text-ink-900">Schnell vergleichen</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/vergleich" className="text-brand-700 hover:underline">Alle Vergleiche →</Link></li>
              <li><Link href="/kategorien" className="text-brand-700 hover:underline">Alle Kategorien →</Link></li>
              <li><Link href="/anbieter" className="text-brand-700 hover:underline">Alle Anbieter →</Link></li>
            </ul>
            <p className="mt-4 border-t border-ink-100 pt-3 text-xs text-ink-500">
              Dieser Ratgeber ist keine Finanz-, Steuer- oder Rechtsberatung.
            </p>
          </div>
        </aside>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({ title: post.title, description: post.description, url })),
        }}
      />
    </>
  );
}
