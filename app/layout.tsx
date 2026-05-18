import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import TrackingScripts from "@/components/TrackingScripts";
import { buildMetadata } from "@/lib/seo";
import { getTrackingIds } from "@/lib/tracking";

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tracking = getTrackingIds();
  return (
    <html lang="de">
      <body className="min-h-screen bg-white">
        <TrackingScripts {...tracking} />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
