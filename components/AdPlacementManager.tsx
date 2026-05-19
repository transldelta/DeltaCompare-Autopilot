type Network = { id: string; name: string };
type PlacementInput = {
  id?: string;
  name?: string;
  slug?: string;
  placementType?: string;
  adType?: string;
  networkId?: string | null;
  codeSnippet?: string;
  isActive?: boolean;
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
};

const PLACEMENT_TYPES = ["HEADER", "SIDEBAR", "IN_CONTENT", "FOOTER", "COMPARISON_TABLE", "MOBILE_STICKY"];
const AD_TYPES = ["DISPLAY", "TEXT_LINK", "BANNER", "NATIVE", "CPC_LINK"];

export default function AdPlacementManager({
  networks,
  placement,
  action,
}: {
  networks: Network[];
  placement?: PlacementInput;
  action: string;
}) {
  const isNew = !placement?.id;
  return (
    <form method="post" action={action} className="space-y-4 max-w-2xl">
      {!isNew && <input type="hidden" name="id" value={placement!.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Name *" defaultValue={placement?.name} required />
        <Field name="slug" label="Slug *" defaultValue={placement?.slug} required />
        <Select
          name="placementType"
          label="Platzierungs-Typ"
          options={PLACEMENT_TYPES}
          defaultValue={placement?.placementType || "IN_CONTENT"}
        />
        <Select
          name="adType"
          label="Anzeigen-Typ"
          options={AD_TYPES}
          defaultValue={placement?.adType || "DISPLAY"}
        />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">Werbenetzwerk</span>
          <select
            name="networkId"
            defaultValue={placement?.networkId || ""}
            className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
          >
            <option value="">– keines –</option>
            {networks.map((n) => (
              <option key={n.id} value={n.id}>{n.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink-800">Code-Snippet (HTML, optional)</span>
        <textarea
          name="codeSnippet"
          rows={6}
          defaultValue={placement?.codeSnippet}
          className="mt-1 block w-full rounded-lg border border-ink-200 px-3 py-2 text-xs font-mono"
          placeholder="<!-- z. B. AdSense-Slot-Code oder direkter Banner-HTML -->"
        />
      </label>
      <div className="flex flex-wrap gap-4">
        <Checkbox name="isActive" label="aktiv" defaultChecked={placement?.isActive} />
        <Checkbox name="showOnDesktop" label="Desktop anzeigen" defaultChecked={placement?.showOnDesktop ?? true} />
        <Checkbox name="showOnMobile" label="Mobile anzeigen" defaultChecked={placement?.showOnMobile ?? true} />
      </div>
      <div className="flex gap-3">
        <button type="submit" className="btn-primary">Speichern</button>
        {!isNew && (
          <button
            type="submit"
            formAction={action.replace("/save", "/delete")}
            className="text-sm text-rose-700 hover:underline"
          >
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

function Select({ name, label, options, defaultValue }: { name: string; label: string; options: string[]; defaultValue: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="mt-1 block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Checkbox({ name, label, defaultChecked }: { name: string; label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} />
      {label}
    </label>
  );
}
