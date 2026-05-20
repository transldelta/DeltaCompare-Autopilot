import Link from "next/link";

type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const linkCls = light ? "text-white/70 hover:text-white" : "hover:text-brand-700";
  const currentCls = light ? "text-white" : "text-ink-700";
  const sepCls = light ? "text-white/40" : "text-ink-300";
  return (
    <nav aria-label="Breadcrumb" className={`container-page pt-4 text-xs ${light ? "text-white/70" : "text-ink-500"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.href ? (
              <Link href={it.href} className={linkCls}>
                {it.name}
              </Link>
            ) : (
              <span className={currentCls}>{it.name}</span>
            )}
            {i < items.length - 1 && <span className={sepCls}>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
