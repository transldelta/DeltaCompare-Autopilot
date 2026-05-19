import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CATEGORIES } from "../data/seed-categories";
import { OFFERS } from "../data/seed-offers";
import { COMPARISONS } from "../data/seed-comparisons";
import { AD_NETWORKS, AD_PLACEMENTS, DEMO_CPC_OFFERS } from "../data/seed-monetization";

const prisma = new PrismaClient();

async function main() {
  console.log("→ DeltaCompare Seed startet");

  const rawEmail = process.env.ADMIN_EMAIL || "admin@deltacompare.local";
  const adminEmail = rawEmail.trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  // Defensive Bereinigung: alte Admin-Datensätze mit abweichender Schreibweise
  // entfernen (z. B. wenn ADMIN_EMAIL früher mit Großbuchstaben gesetzt war).
  // Das Login normalisiert die E-Mail auf Kleinschreibung – also muss der
  // gespeicherte Wert ebenfalls kleingeschrieben sein, damit findUnique trifft.
  const existingUsers = await prisma.user.findMany();
  for (const u of existingUsers) {
    if (u.email.toLowerCase() === adminEmail && u.email !== adminEmail) {
      console.log(`⚠ Stale Admin-Datensatz entfernt: ${u.email} (wird durch ${adminEmail} ersetzt)`);
      await prisma.user.delete({ where: { id: u.id } });
    }
  }

  const upserted = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash, role: "admin" },
    create: { email: adminEmail, passwordHash, role: "admin" },
  });

  console.log(`✓ Admin-User gespeichert: ${upserted.email}`);
  console.log(`  Passwort wurde frisch mit bcrypt gehasht.`);
  console.log(`  ADMIN_EMAIL aus ENV:    ${process.env.ADMIN_EMAIL ? "✓ gesetzt" : "○ leer → Fallback verwendet"}`);
  console.log(`  ADMIN_PASSWORD aus ENV: ${process.env.ADMIN_PASSWORD ? "✓ gesetzt" : "○ leer → 'change-me' verwendet"}`);

  for (const cat of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description, icon: cat.icon, status: "active" },
      create: { ...cat, status: "active" },
    });
  }
  console.log(`✓ ${CATEGORIES.length} Kategorien angelegt`);

  for (const offer of OFFERS) {
    const cat = await prisma.category.findUnique({ where: { slug: offer.categorySlug } });
    if (!cat) {
      console.warn(`⚠ Kategorie nicht gefunden für Offer ${offer.slug}: ${offer.categorySlug}`);
      continue;
    }
    const { categorySlug, ...rest } = offer;
    await prisma.offer.upsert({
      where: { slug: offer.slug },
      update: { ...rest, categoryId: cat.id },
      create: { ...rest, categoryId: cat.id },
    });
  }
  console.log(`✓ ${OFFERS.length} Demo-Angebote angelegt`);

  for (const cmp of COMPARISONS) {
    const cat = await prisma.category.findUnique({ where: { slug: cmp.categorySlug } });
    if (!cat) {
      console.warn(`⚠ Kategorie nicht gefunden für Vergleichsseite ${cmp.slug}: ${cmp.categorySlug}`);
      continue;
    }
    const { categorySlug, faq, ...rest } = cmp;
    const faqJson = JSON.stringify(faq);
    await prisma.comparisonPage.upsert({
      where: { slug: cmp.slug },
      update: { ...rest, categoryId: cat.id, faq: faqJson, status: "active" },
      create: { ...rest, categoryId: cat.id, faq: faqJson, status: "active" },
    });
  }
  console.log(`✓ ${COMPARISONS.length} Vergleichsseiten angelegt`);

  const defaultSettings = [
    { key: "site_name", value: "DeltaCompare" },
    { key: "site_domain", value: "deltacompare.local" },
    {
      key: "affiliate_disclosure",
      value:
        "Diese Webseite enthält Affiliate-Links. Wenn Sie über einen solchen Link ein Angebot abschließen oder ein Produkt kaufen, erhalten wir möglicherweise eine Provision. Für Sie entstehen dadurch keine zusätzlichen Kosten.",
    },
    { key: "google_analytics_id", value: "" },
    { key: "google_tag_manager_id", value: "" },
    { key: "meta_pixel_id", value: "" },
    { key: "tiktok_pixel_id", value: "" },
    { key: "adsense_client_id", value: "" },
    { key: "ads_enabled", value: "false" },
  ];
  for (const s of defaultSettings) {
    await prisma.settings.upsert({ where: { key: s.key }, update: {}, create: s });
  }
  console.log("✓ Default-Settings angelegt");

  // === Monetarisierung ===
  for (const net of AD_NETWORKS) {
    const existing = await prisma.adNetwork.findFirst({ where: { name: net.name } });
    if (existing) {
      await prisma.adNetwork.update({ where: { id: existing.id }, data: net });
    } else {
      await prisma.adNetwork.create({ data: net });
    }
  }
  console.log(`✓ ${AD_NETWORKS.length} Ad-Networks angelegt`);

  for (const pl of AD_PLACEMENTS) {
    await prisma.adPlacement.upsert({
      where: { slug: pl.slug },
      update: pl,
      create: pl,
    });
  }
  console.log(`✓ ${AD_PLACEMENTS.length} Anzeigen-Plätze angelegt`);

  for (const cpc of DEMO_CPC_OFFERS) {
    const cat = cpc.categorySlug
      ? await prisma.category.findUnique({ where: { slug: cpc.categorySlug } })
      : null;
    const { categorySlug, ...rest } = cpc;
    await prisma.cpcOffer.upsert({
      where: { slug: cpc.slug },
      update: { ...rest, categoryId: cat?.id ?? null },
      create: { ...rest, categoryId: cat?.id ?? null },
    });
  }
  console.log(`✓ ${DEMO_CPC_OFFERS.length} Demo-CPC-Angebote angelegt`);

  console.log("→ Seed erfolgreich abgeschlossen.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
