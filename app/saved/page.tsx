import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import SavedOffersList from "../components/SavedOffersList";
import { offers } from "../../lib/offers";
import { toOfferSummary } from "../../lib/offer-summary";

export const metadata: Metadata = { title: "Your saved offers" };

export default function SavedPage() {
  return <PageShell title="Your little collection." intro="A shortlist of useful offers, saved on this device."><SavedOffersList offers={offers.map(toOfferSummary)} /></PageShell>;
}
