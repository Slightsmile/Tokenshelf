import type { Metadata } from "next";
import SavedOffersProvider from "./components/SavedOffersProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TokenShelf | More AI. Less spend.", template: "%s | TokenShelf" },
  description: "Find free AI credits, token offers, and useful tools. Compare the rewards, check the details, and follow simple claim instructions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SavedOffersProvider><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /></SavedOffersProvider></body>
    </html>
  );
}
