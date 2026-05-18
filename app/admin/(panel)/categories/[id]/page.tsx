import { prisma } from "@/lib/prisma";
import CategoryForm from "@/components/CategoryForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
  const cat = await prisma.category.findUnique({ where: { id: params.id } });
  if (!cat) return notFound();
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Kategorie bearbeiten</h1>
      <p className="mt-1 text-sm text-ink-600">{cat.name}</p>
      <div className="mt-6">
        <CategoryForm category={cat} action="/api/admin/categories/save" />
      </div>
    </div>
  );
}
