import Link from "next/link";
import { formatCheckedDate, type Offer } from "../../lib/offers";
import Icon from "./Icon";
import { ProviderMark } from "./OfferCard";
import SaveButton from "./SaveButton";

export default function OfferRow({ offer, compact = false, revealDelay = 0 }: { offer: Offer; compact?: boolean; revealDelay?: number }) {
  return (
    <article className={`offer-row${compact ? " offer-row-compact" : ""}`} data-reveal={compact ? "" : undefined} data-reveal-delay={compact ? revealDelay : undefined}>
      <Link href={`/offers/${offer.id}`} className="offer-row-main"><ProviderMark offer={offer} /><span><h3>{offer.provider}</h3><span className="row-description">{offer.title}</span></span></Link>
      <div className="row-reward"><strong>{offer.amount}</strong><span>{offer.rewardLabel}</span></div>
      {compact ? <time className="row-date" dateTime={offer.checkedAt}><Icon name="clock" />{formatCheckedDate(offer.checkedAt, false)}</time> : <span className="row-requirement">{offer.requirement}</span>}
      <div className="row-actions">{!compact && <SaveButton id={offer.id} provider={offer.provider} />}<Link href={`/offers/${offer.id}`} className="icon-button row-details" aria-label={`View ${offer.provider} offer`}><Icon name="arrow" /></Link></div>
    </article>
  );
}
