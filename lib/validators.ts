import { z } from "zod";

export const offerInputSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  categorySlug: z.string().min(2),
  network: z.string().min(1),
  affiliateLink: z.string().min(1),
  trackingId: z.string().optional().default(""),
  commissionType: z.enum(["Lead", "Sale", "Recurring", "CPC"]).default("Sale"),
  estimatedCommission: z.string().optional().default(""),
  shortDescription: z.string().min(1),
  longDescription: z.string().min(1),
  advantages: z.string().optional().default(""),
  disadvantages: z.string().optional().default(""),
  priceNote: z.string().optional().default(""),
  rating: z.coerce.number().min(0).max(5).default(4),
  logoUrl: z.string().optional().default(""),
  buttonText: z.string().optional().default("Zum Anbieter"),
  status: z.enum(["active", "inactive", "draft"]).default("active"),
  isFeatured: z.coerce.boolean().default(false),
});

export type OfferInput = z.infer<typeof offerInputSchema>;

export const categoryInputSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(1),
  icon: z.string().default("Tag"),
  status: z.enum(["active", "inactive"]).default("active"),
});

export const comparisonInputSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(2),
  categorySlug: z.string().min(2),
  seoTitle: z.string().min(3),
  metaDescription: z.string().min(20),
  intro: z.string().min(20),
  content: z.string().min(20),
  faq: z.string().default("[]"),
  offerSlugs: z.string().default(""),
  status: z.enum(["active", "draft"]).default("active"),
});
