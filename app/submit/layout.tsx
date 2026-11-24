import type { Metadata } from "next";

export const metadata: Metadata = { title: "Submit a free AI offer", description: "Share a free AI credit, API token, trial, or tool for TokenShelf to review.", alternates: { canonical: "/submit" } };

export default function SubmitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
