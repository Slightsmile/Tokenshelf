"use client";

import Link from "next/link";
import { offers } from "../../lib/offers";
import Icon from "./Icon";
import OfferRow from "./OfferRow";
import { useSavedOffers } from "./SavedOffersProvider";

export default function SavedOffersList() {
  const { savedIds, loaded, persistent } = useSavedOffers();
  const savedOffers = savedIds.map((id) => offers.find((offer) => offer.id === id)).filter((offer) => offer !== undefined);

  if (!loaded) return <div className="saved-loading" aria-busy="true" aria-label="Loading saved offers"><div /><div /><div /></div>;

  return (
    <section aria-label="Saved offers">
      {!persistent && <p className="storage-note">Browser storage is unavailable. Your offers are kept for this session.</p>}
      {savedOffers.length ? <><div className="saved-toolbar"><p>{savedOffers.length} {savedOffers.length === 1 ? "offer" : "offers"} on your shelf</p><Link href="/browse" className="inline-link">Find more<Icon name="arrow" /></Link></div><div className="offer-list"><div className="list-heading" aria-hidden="true"><span>Offer</span><span>What you get</span><span>To get started</span><span /></div>{savedOffers.map((offer) => <OfferRow offer={offer} key={offer.id} />)}</div></> : <div className="empty-state"><span className="empty-icon"><Icon name="bookmark" /></span><h2>Nothing saved yet</h2><p>Use the bookmark on an offer to keep it here for later.</p><Link href="/browse" className="button">Explore offers<Icon name="arrow" /></Link></div>}
    </section>
  );
}
