import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoBlock from "@/components/SeoBlock";
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
      <article className="container-page py-10">
        <div className="text-xs uppercase tracking-wide text-brand-700">{post.category}</div>
        <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 max-w-3xl text-lg text-ink-700">{post.description}</p>
        <div className="mt-8 max-w-3xl">
          <SeoBlock title="" content={post.content} />
        </div>
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
