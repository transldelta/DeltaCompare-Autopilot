type Category = { id: string; name: string };
type ComparisonInput = {
  id?: string;
  title?: string;
  slug?: string;
  categoryId?: string;
  seoTitle?: string;
  metaDescription?: string;
  intro?: string;
  content?: string;
  faq?: string;
  offerSlugs?: string;
  status?: string;
};

export default function ComparisonForm({
  categories,
  comparison,
  action,
}: {
  categories: Category[];
  comparison?: ComparisonInput;
  action: string;
}) {
  const isNew = !comparison?.id;
  return (
    <form method="post" action={action} className="space-y-4 max-w-3xl">
      {!isNew && <input type="hidden" name="id" value={comparison!.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="title" label="Titel *" defaultValue={comparison?.title} required />
        <Field name="slug" label="Slug *" defaultValue={comparison?.slug} required />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">Kategorie *</span>
          <select
            name="categoryId"
            required
            defaultValue={comparison?.categoryId}
            className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">– bitte wählen –</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <Field name="seoTitle" label="SEO-Titel *" defaultValue={comparison?.seoTitle} required />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">Status</span>
          <select
            name="status"
            defaultValue={comparison?.status || "active"}
            className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
          >
            <option value="active">aktiv</option>
            <option value="draft">Entwurf</option>
          </select>
        </label>
      </div>
      <Textarea
        name="metaDescription"
        label="Meta-Description *"
        defaultValue={comparison?.metaDescription}
        required
        rows={2}
      />
      <Textarea name="intro" label="Einleitung *" defaultValue={comparison?.intro} required rows={4} />
      <Textarea name="content" label="Hauptinhalt (Markdown-light) *" defaultValue={comparison?.content} required rows={10} />
      <Textarea name="faq" label="FAQ als JSON-Array ([{q,a}])" defaultValue={comparison?.faq || "[]"} rows={6} />
      <Field
        name="offerSlugs"
        label="Anbieter-Slugs (Komma-separiert, Reihenfolge wie in Tabelle)"
        defaultValue={comparison?.offerSlugs}
      />
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
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <textarea {...rest} className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-sm font-mono" />
    </label>
  );
}
