import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import TrackingScripts from "@/components/TrackingScripts";
import { buildMetadata } from "@/lib/seo";
import { getTrackingIds } from "@/lib/tracking";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tracking = getTrackingIds();
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <TrackingScripts {...tracking} />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
