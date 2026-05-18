import { offerInputSchema } from "./validators";
import { slugify } from "./utils";

export type ImportRow = Record<string, string>;

export type ImportResult = {
  rows: ImportRow[];
  errors: Array<{ row: number; message: string }>;
  validated: number;
};

export function parseCsv(text: string): ImportRow[] {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];
  const headers = splitCsvLine(lines[0]);
  const rows: ImportRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = splitCsvLine(lines[i]);
    const row: ImportRow = {};
    headers.forEach((h, idx) => (row[h.trim()] = (cells[idx] ?? "").trim()));
    rows.push(row);
  }
  return rows;
}

function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      out.push(cur);
      cur = "";
    } else {
      cur += c;
    }
  }
  out.push(cur);
  return out;
}

export function rowsToCsv(rows: Array<Record<string, unknown>>, headers?: string[]): string {
  if (rows.length === 0) return "";
  const cols = headers ?? Object.keys(rows[0]);
  const esc = (v: unknown) => {
    const s = v == null ? "" : String(v);
    if (s.includes(",") || s.includes('"') || s.includes("\n")) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  const head = cols.join(",");
  const body = rows.map((r) => cols.map((c) => esc(r[c])).join(",")).join("\n");
  return `${head}\n${body}`;
}

export function normalizeOfferImport(row: ImportRow) {
  const data = {
    name: row.name ?? "",
    slug: row.slug || slugify(row.name ?? ""),
    categorySlug: row.category || row.categorySlug || "",
    network: row.network || "Direkt",
    affiliateLink: row.affiliateLink || "DEMO_LINK_ERSETZEN",
    trackingId: row.trackingId ?? "",
    commissionType: (row.commissionType as any) || "Sale",
    estimatedCommission: row.estimatedCommission ?? "",
    shortDescription: row.shortDescription ?? "",
    longDescription: row.longDescription ?? row.shortDescription ?? "",
    advantages: row.advantages ?? "",
    disadvantages: row.disadvantages ?? "",
    priceNote: row.priceNote ?? "",
    rating: row.rating ? Number(row.rating) : 4,
    logoUrl: row.logoUrl ?? "",
    buttonText: row.buttonText || "Zum Anbieter",
    status: (row.status as any) || "active",
    isFeatured: row.isFeatured === "true" || row.isFeatured === "1",
  };
  return offerInputSchema.safeParse(data);
}

export const OFFER_CSV_HEADERS = [
  "name",
  "slug",
  "category",
  "network",
  "affiliateLink",
  "trackingId",
  "commissionType",
  "estimatedCommission",
  "shortDescription",
  "longDescription",
  "advantages",
  "disadvantages",
  "priceNote",
  "rating",
  "logoUrl",
  "buttonText",
  "status",
];
