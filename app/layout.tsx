import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { offers } from "../lib/offers";
import SavedOffersProvider from "./components/SavedOffersProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollMotion from "./components/ScrollMotion";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: { default: "TokenShelf | More AI. Less spend.", template: "%s | TokenShelf" },
  description: "Find free AI credits, token offers, and useful tools. Compare the rewards, check the details, and follow simple claim instructions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body><SavedOffersProvider offerIds={offers.map((offer) => offer.id)}><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /><ScrollMotion /></SavedOffersProvider><Analytics /></body>
    </html>
  );
}
