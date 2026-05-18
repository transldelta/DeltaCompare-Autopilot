import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CATEGORIES } from "../data/seed-categories";
import { OFFERS } from "../data/seed-offers";
import { COMPARISONS } from "../data/seed-comparisons";

const prisma = new PrismaClient();

async function main() {
  console.log("→ DeltaCompare Seed startet");

  const adminEmail = process.env.ADMIN_EMAIL || "admin@deltacompare.local";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash, role: "admin" },
    create: { email: adminEmail, passwordHash, role: "admin" },
  });
  console.log(`✓ Admin-User: ${adminEmail}`);

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
  ];
  for (const s of defaultSettings) {
    await prisma.settings.upsert({ where: { key: s.key }, update: {}, create: s });
  }
  console.log("✓ Default-Settings angelegt");

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
