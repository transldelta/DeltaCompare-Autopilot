"use client";

import { useState } from "react";

type Preview = {
  rows: Array<Record<string, string>>;
  errors: Array<{ row: number; message: string }>;
};

export default function ImportUploader() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [loading, setLoading] = useState(false);

  async function previewFile(file: File) {
    setLoading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("mode", "preview");
    const r = await fetch("/api/admin/import/offers", { method: "POST", body: fd });
    const data = await r.json();
    setPreview(data);
    setLoading(false);
  }

  async function importFile(file: File) {
    setLoading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("mode", "import");
    const r = await fetch("/api/admin/import/offers", { method: "POST", body: fd });
    const data = await r.json();
    setLoading(false);
    alert(
      `Import abgeschlossen. ${data.created ?? 0} angelegt, ${data.updated ?? 0} aktualisiert, ${data.errors?.length ?? 0} Fehler.`
    );
    setPreview(null);
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-dashed border-ink-300 bg-white p-6 text-center">
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".csv,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) previewFile(f);
            }}
          />
          <span className="btn-primary">CSV/JSON auswählen</span>
        </label>
        <p className="mt-3 text-xs text-ink-500">
          Akzeptiert: CSV mit den Standard-Spalten (siehe Doku) oder JSON-Array mit gleichen Feldern.
        </p>
      </div>

      {loading && <div className="text-sm text-ink-600">Verarbeite …</div>}

      {preview && (
        <div className="rounded-2xl border border-ink-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-ink-900">Vorschau</h3>
            <span className="text-xs text-ink-500">
              {preview.rows.length} Zeilen · {preview.errors.length} Fehler
            </span>
          </div>
          {preview.errors.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-rose-700">
              {preview.errors.slice(0, 10).map((e) => (
                <li key={`${e.row}-${e.message}`}>Zeile {e.row}: {e.message}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 max-h-72 overflow-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-ink-50">
                <tr>
                  {preview.rows[0] && Object.keys(preview.rows[0]).map((k) => (
                    <th key={k} className="px-2 py-1 text-left">{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.rows.slice(0, 50).map((r, i) => (
                  <tr key={i} className="even:bg-ink-50">
                    {Object.values(r).map((v, j) => (
                      <td key={j} className="px-2 py-1 align-top">{String(v).slice(0, 80)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                const input = document.querySelector<HTMLInputElement>('input[type="file"]');
                const file = input?.files?.[0];
                if (file) importFile(file);
              }}
            >
              Import bestätigen
            </button>
            <button type="button" className="btn-secondary" onClick={() => setPreview(null)}>
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
