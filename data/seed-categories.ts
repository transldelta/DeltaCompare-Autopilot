import { HAUPTBEREICHE } from "./hauptbereiche";

/**
 * Die 16 Hauptbereiche aus hauptbereiche.ts werden direkt als Kategorien
 * verwendet. Single Source of Truth: data/hauptbereiche.ts.
 */
export const CATEGORIES = HAUPTBEREICHE.map((hb) => ({
  name: hb.name,
  slug: hb.slug,
  description: hb.description,
  icon: hb.icon,
}));
