import Link from "next/link";
import type { Offer } from "../../lib/offers";
import Icon from "./Icon";
import SaveButton from "./SaveButton";
import ModelLogos from "./ModelLogos";

export function ProviderMark({ offer }: { offer: Pick<Offer, "id" | "tone" | "mark"> }) {
  return <span className={`provider-mark tone-${offer.tone} provider-${offer.id}`} aria-hidden="true">{offer.mark}</span>;
}

export function VerificationBadge({ offer }: { offer: Pick<Offer, "verification"> }) {
  const label = offer.verification === "confirmed" ? "Provider confirmed" : offer.verification === "partial" ? "Details checked" : "Community offer";
  return <span className={`verification verification-${offer.verification}`}><Icon name={offer.verification === "confirmed" ? "check-circle" : "link"} />{label}</span>;
}

export function AvailabilityBadge({ offer }: { offer: Pick<Offer, "availability"> }) {
  return offer.availability === "offline" ? <span className="availability-badge"><Icon name="clock" />Models offline</span> : null;
}

export function DailyLoginBadge({ offer }: { offer: Pick<Offer, "dailyLogin" | "refresh"> }) {
  return offer.dailyLogin ? <span className="daily-login-badge" title={offer.refresh}><Icon name="check-circle" />Daily login</span> : null;
}

export default function OfferCard({ offer, revealDelay = 0 }: { offer: Offer; revealDelay?: number }) {
  return (
    <article className="offer-card" data-offer-id={offer.id} data-reveal="" data-reveal-delay={revealDelay}>
      <div className="card-provider"><ProviderMark offer={offer} /><div><h3><Link href={`/offers/${offer.id}`}>{offer.provider}</Link></h3><span>{offer.category}</span></div><SaveButton id={offer.id} provider={offer.provider} /></div>
      <div className="card-reward"><p>{offer.amount}</p><span>{offer.rewardLabel}</span></div>
      <DailyLoginBadge offer={offer} />
      <p className="card-description">{offer.description}</p>
      <div className="card-models"><ModelLogos offer={offer} /></div>
      {(offer.deadline || offer.availability === "offline") && <div className="card-condition">{offer.availability === "offline" ? <AvailabilityBadge offer={offer} /> : <><Icon name="clock" /><span>{offer.deadline}</span></>}</div>}
      <div className="card-footer"><VerificationBadge offer={offer} /><Link href={`/offers/${offer.id}`} className="inline-link" aria-label={`View ${offer.provider} offer`}>View offer<Icon name="arrow" /></Link></div>
    </article>
  );
}
