import { prisma } from "@/lib/prisma";
import ComparisonForm from "@/components/ComparisonForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditComparisonPage({ params }: { params: { id: string } }) {
  const [cmp, categories] = await Promise.all([
    prisma.comparisonPage.findUnique({ where: { id: params.id } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
  ]);
  if (!cmp) return notFound();
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Vergleichsseite bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{cmp.title}</p>
      <div className="mt-6">
        <ComparisonForm categories={categories} comparison={cmp} action="/api/admin/comparisons/save" />
      </div>
    </div>
  );
}
