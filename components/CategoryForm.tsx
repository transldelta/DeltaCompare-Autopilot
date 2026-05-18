type Category = {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  icon?: string;
  status?: string;
};

export default function CategoryForm({ category, action }: { category?: Category; action: string }) {
  const isNew = !category?.id;
  return (
    <form method="post" action={action} className="space-y-4 max-w-2xl">
      {!isNew && <input type="hidden" name="id" value={category!.id} />}
      <Field name="name" label="Name *" defaultValue={category?.name} required />
      <Field name="slug" label="Slug *" defaultValue={category?.slug} required />
      <Field name="icon" label="Icon-Name" defaultValue={category?.icon || "Tag"} />
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Beschreibung *</span>
        <textarea
          name="description"
          defaultValue={category?.description}
          required
          rows={4}
          className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Status</span>
        <select
          name="status"
          defaultValue={category?.status || "active"}
          className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
        >
          <option value="active">aktiv</option>
          <option value="inactive">inaktiv</option>
        </select>
      </label>
      <div className="flex gap-3">
        <button type="submit" className="btn-primary">Speichern</button>
        {!isNew && (
          <button type="submit" formAction={action.replace("/save", "/delete")} className="text-sm text-rose-700 hover:underline">
            Löschen
          </button>
        )}
      </div>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <input {...rest} className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm" />
    </label>
  );
}
