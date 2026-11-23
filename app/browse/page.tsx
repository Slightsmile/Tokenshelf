import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import OfferDirectory from "../components/OfferDirectory";
import { offers } from "../../lib/offers";
import { toOfferSummary } from "../../lib/offer-summary";

export const metadata: Metadata = { title: "Browse free AI offers" };

export default function BrowsePage({ searchParams }: { searchParams: { q?: string; category?: string; sort?: string; model?: string } }) {
  const query = typeof searchParams.q === "string" ? searchParams.q : "";
  const category = typeof searchParams.category === "string" ? searchParams.category : "";
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "";
  const model = typeof searchParams.model === "string" ? searchParams.model : "";
  return <PageShell title="Find your next good offer." intro="Free credits, tokens, and model access. Find something useful, then check the details."><OfferDirectory key={`${query}:${category}:${sort}:${model}`} offers={offers.map(toOfferSummary)} initialQuery={query} initialCategory={category} initialSort={sort} initialModel={model} /></PageShell>;
}
