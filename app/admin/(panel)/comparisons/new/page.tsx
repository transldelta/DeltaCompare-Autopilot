import { prisma } from "@/lib/prisma";
import ComparisonForm from "@/components/ComparisonForm";

export const dynamic = "force-dynamic";

export default async function NewComparisonPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neue Vergleichsseite</h1>
      <div className="mt-6">
        <ComparisonForm categories={categories} action="/api/admin/comparisons/save" />
      </div>
    </div>
  );
}
