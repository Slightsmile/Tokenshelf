import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { offers } from "../lib/offers";
import SavedOffersProvider from "./components/SavedOffersProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollMotion from "./components/ScrollMotion";
import { siteUrl } from "../lib/site";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "TokenShelf | More AI. Less spend.", template: "%s | TokenShelf" },
  description: "Find verified and community-submitted free AI credits, API tokens, trials, and tools. Compare details, limits, and simple claim steps in one directory.",
  applicationName: "TokenShelf",
  alternates: { canonical: "/" },
  keywords: ["free AI credits", "free AI API", "free API tokens", "AI trials", "free AI tools", "AI offers"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TokenShelf",
    title: "TokenShelf | Free AI credits, tokens, and tools",
    description: "A clear directory of free AI credits, API tokens, trials, and tools.",
  },
  twitter: { card: "summary", title: "TokenShelf | Free AI credits, tokens, and tools", description: "A clear directory of free AI credits, API tokens, trials, and tools." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export const viewport = { themeColor: "#f8f7f4" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
  <body><SavedOffersProvider offerIds={offers.map((offer) => offer.id)}><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /><ScrollMotion /></SavedOffersProvider><Analytics /></body>
    </html>
  );
}
