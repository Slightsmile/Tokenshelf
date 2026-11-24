import type { Metadata } from "next";
import Link from "next/link";
import { formatCheckedDate, offers } from "../../lib/offers";
import Icon from "../components/Icon";
import { VerificationBadge } from "../components/OfferCard";
import PageShell from "../components/PageShell";

export const metadata: Metadata = { title: "How TokenShelf verifies AI offers", description: "Understand TokenShelf's confirmed, partial, and community offer labels, sources, and referral-link disclosures.", alternates: { canonical: "/methodology" } };

export default function MethodologyPage() {
  const lastChecked = offers.map((offer) => offer.checkedAt).sort().at(-1)!;

  return (
    <PageShell title="Good offers. Clear details." intro="A little context about where the information comes from and what the labels mean.">
      <div className="methodology-content">
        <section><h2>We start with the source</h2><p>We read provider sign-up pages, pricing, public gateway settings, and integration guides. Each offer links to its sources and includes a last-checked date.</p><p>The current collection has {offers.length} offers. Its latest content check was <strong>{formatCheckedDate(lastChecked)}</strong>. Public-page checks establish what a provider publishes; successful code redemption and account-specific balances require a separate check.</p></section>
        <section><h2>A label you can understand</h2><dl className="verification-guide"><div><dt><VerificationBadge offer={{ verification: "confirmed" }} /></dt><dd>The listed free programme or allowance is described by the provider. Activity availability and account-specific eligibility can still change.</dd></div><div><dt><VerificationBadge offer={{ verification: "partial" }} /></dt><dd>Some details are confirmed, but a reward amount or invite code comes from the community. The offer page explains which parts were checked.</dd></div><div><dt><VerificationBadge offer={{ verification: "community" }} /></dt><dd>The offer was submitted by a community member and its reward has not been independently confirmed.</dd></div></dl></section>
        <section><h2>Referral links and invite codes</h2><p>Some provider links contain a referral ID, and some offers use a shared invite code. A successful referral may reward the person who supplied the link or code as well as the new user.</p><p>Reward values, claim windows, model scope, and reset rules belong on the offer page, alongside the instructions. We keep the homepage short so you can get to those details quickly.</p><Link href="/browse" className="inline-link">Explore the offers<Icon name="arrow" /></Link></section>
      </div>
    </PageShell>
  );
}
