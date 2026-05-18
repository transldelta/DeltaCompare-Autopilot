import CategoryForm from "@/components/CategoryForm";

export default function NewCategoryPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-ink-900">Neue Kategorie</h1>
      <p className="mt-1 text-sm text-ink-600">Lege eine neue Kategorie an.</p>
      <div className="mt-6">
        <CategoryForm action="/api/admin/categories/save" />
      </div>
    </div>
  );
}
