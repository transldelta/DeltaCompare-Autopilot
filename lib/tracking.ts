import crypto from "node:crypto";

export function detectDevice(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad/.test(ua)) return "mobile";
  if (/tablet/.test(ua)) return "tablet";
  return "desktop";
}

export function hashIp(ip: string): string {
  if (!ip) return "";
  const salt = process.env.AUTH_SECRET || "dc-default-salt";
  return crypto.createHash("sha256").update(`${ip}|${salt}`).digest("hex").slice(0, 32);
}

export function getClientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return headers.get("x-real-ip") || "";
}

export type TrackingIds = {
  ga?: string;
  gtm?: string;
  metaPixel?: string;
  tiktokPixel?: string;
};

export function getTrackingIds(): TrackingIds {
  return {
    ga: process.env.GOOGLE_ANALYTICS_ID || undefined,
    gtm: process.env.GOOGLE_TAG_MANAGER_ID || undefined,
    metaPixel: process.env.META_PIXEL_ID || undefined,
    tiktokPixel: process.env.TIKTOK_PIXEL_ID || undefined,
  };
}
