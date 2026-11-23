import Link from "next/link";
import type { Offer } from "../../lib/offers";
import Icon from "./Icon";
import { AvailabilityBadge, DailyLoginBadge, ProviderMark } from "./OfferCard";
import SaveButton from "./SaveButton";
import ModelLogos from "./ModelLogos";

export default function OfferRow({ offer, reveal = false, revealDelay = 0 }: { offer: Offer; reveal?: boolean; revealDelay?: number }) {
  return (
    <article className="offer-row" data-offer-id={offer.id} data-reveal={reveal ? "" : undefined} data-reveal-delay={reveal ? revealDelay : undefined}>
      <Link href={`/offers/${offer.id}`} className="offer-row-main"><ProviderMark offer={offer} /><span><h3>{offer.provider}</h3><span className="row-description">{offer.title}</span><AvailabilityBadge offer={offer} /></span></Link>
      <div className="row-reward"><strong>{offer.amount}</strong><span>{offer.rewardLabel}</span><DailyLoginBadge offer={offer} /></div>
      <div className="row-models"><ModelLogos offer={offer} /></div>
      <div className="row-actions"><SaveButton id={offer.id} provider={offer.provider} /><Link href={`/offers/${offer.id}`} className="icon-button row-details" aria-label={`View ${offer.provider} offer`}><Icon name="arrow" /></Link></div>
    </article>
  );
}
