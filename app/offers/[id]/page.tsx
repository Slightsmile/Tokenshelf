import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatCheckedDate, getOffer, offers } from "../../../lib/offers";
import CopyField from "../../components/CopyField";
import Icon from "../../components/Icon";
import { AvailabilityBadge, DailyLoginBadge, ProviderMark, VerificationBadge } from "../../components/OfferCard";
import ModelLogos from "../../components/ModelLogos";
import SaveButton from "../../components/SaveButton";

export function generateStaticParams() { return offers.map((offer) => ({ id: offer.id })); }

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const offer = getOffer(params.id);
  return { title: offer ? `${offer.provider}: ${offer.title}` : "Offer not found", description: offer?.description };
}

export default function OfferPage({ params }: { params: { id: string } }) {
  const offer = getOffer(params.id);
  if (!offer) notFound();

  return (
    <main id="main" className="shell page-main detail-main">
      <Link href="/browse" className="back-link"><Icon name="arrow" />All offers</Link>
      <header className="detail-heading"><div className="detail-provider"><ProviderMark offer={offer} /><div><p>{offer.provider}</p><Link href={`/browse?category=${encodeURIComponent(offer.category)}`}>{offer.category}</Link></div><VerificationBadge offer={offer} /><AvailabilityBadge offer={offer} /></div><h1>{offer.title}</h1><p className="detail-intro">{offer.description}</p></header>
      <div className="detail-layout">
        <aside className="offer-summary" aria-label="Offer at a glance">
          <p className="summary-label">What you get</p><p className="summary-amount">{offer.amount}</p><p className="summary-reward-label">{offer.rewardLabel}</p>
          <div className="summary-signals"><ModelLogos offer={offer} /><DailyLoginBadge offer={offer} /></div>
          {offer.code && <CopyField label={offer.codeLabel ?? "Redeem code"} value={offer.code} />}
          <a className="button summary-visit" href={offer.url} target="_blank" rel="noopener noreferrer">Visit {offer.id === "muse" ? "Muse" : "provider"}<Icon name="external" /></a>
          <SaveButton id={offer.id} provider={offer.provider} showLabel />
          <dl className="offer-facts"><div><dt>To get started</dt><dd>{offer.requirement}</dd></div><div><dt>Refresh</dt><dd>{offer.refresh}</dd></div><div><dt>Access</dt><dd>{offer.access}</dd></div>{offer.deadline && <div><dt>Redeem by</dt><dd>{offer.deadline}</dd></div>}<div><dt>Last checked</dt><dd><time dateTime={offer.checkedAt}>{formatCheckedDate(offer.checkedAt)}</time></dd></div></dl>
        </aside>
        <div className="detail-content">
          {offer.notice && <div className={`detail-notice${offer.availability === "offline" ? " notice-offline" : ""}`}><Icon name="clock" /><div><strong>{offer.notice.title}</strong><p>{offer.notice.description}</p></div></div>}
          <section aria-labelledby="included-title"><h2 id="included-title">What’s included</h2><ul className="benefit-list">{offer.benefits.map((benefit) => <li key={benefit}><Icon name="check" /><span>{benefit}</span></li>)}</ul></section>
          <section aria-labelledby="claim-title"><div className="detail-section-heading"><h2 id="claim-title">How to claim</h2><span>{offer.steps.length} steps</span></div><ol className="claim-steps">{offer.steps.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3>{step.description && <p>{step.description}</p>}{step.items && <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>}{step.link && <a className="inline-link step-link" href={step.link.url} target="_blank" rel="noopener noreferrer">{step.link.label}<Icon name="external" /></a>}</div></li>)}</ol></section>
          <section aria-labelledby="models-title">
            <h2 id="models-title">Models & access</h2>
            {offer.models.length > 0 && <ul className="model-tags">{offer.models.map((model) => <li key={model}>{model}</li>)}</ul>}
            <p>{offer.modelNote}</p>
            {offer.apiBase && <CopyField label="API base URL" value={offer.apiBase} />}
            {(offer.modelsUrl || offer.docsUrl) && <div className="model-links">{offer.modelsUrl && <a className="inline-link" href={offer.modelsUrl} target="_blank" rel="noopener noreferrer">View model list<Icon name="external" /></a>}{offer.docsUrl && <a className="inline-link" href={offer.docsUrl} target="_blank" rel="noopener noreferrer">Provider documentation<Icon name="external" /></a>}</div>}
          </section>
          <section aria-labelledby="conditions-title"><h2 id="conditions-title">Good to know</h2><ul className="conditions-list">{offer.conditions.map((condition) => <li key={condition}>{condition}</li>)}</ul></section>
          <section className="sources-section" aria-labelledby="sources-title"><div className="detail-section-heading"><h2 id="sources-title">Sources & verification</h2><time dateTime={offer.checkedAt}>{formatCheckedDate(offer.checkedAt)}</time></div><p>{offer.sourceNote}</p><ul className="source-links">{offer.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer"><Icon name="link" /><span>{source.label}<small>{new URL(source.url).hostname}</small></span><Icon name="external" /></a></li>)}</ul></section>
        </div>
      </div>
    </main>
  );
}
