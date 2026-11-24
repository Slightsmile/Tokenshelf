import Link from "next/link";
import { categories, featuredOffers, landingMoreOffers, offers } from "../lib/offers";
import HeroShelf from "./components/HeroShelf";
import Icon from "./components/Icon";
import OfferCard from "./components/OfferCard";
import OfferRow from "./components/OfferRow";
import JsonLd from "./components/JsonLd";
import { absoluteUrl } from "../lib/site";

const heroOffers = featuredOffers.slice(0, 3);

export default function Home() {
  const faq = [
    { question: "What is TokenShelf?", answer: "TokenShelf is a directory of free AI credits, API tokens, trials, and tools. Each listing explains the offer, requirements, limits, claim steps, and verification status." },
    { question: "Are TokenShelf offers verified?", answer: "Each offer has a confirmed, partial, or community label. Confirmed details come from a provider's public information; partial and community listings explain what still needs checking." },
    { question: "How can I submit a free AI offer?", answer: "Use the Submit an offer page to share the provider link, free amount, eligibility, and claim instructions. TokenShelf reviews submissions before listing them." },
  ];
  const structuredData = [
    { "@context": "https://schema.org", "@type": "WebSite", name: "TokenShelf", url: absoluteUrl(), description: "A directory of free AI credits, API tokens, trials, and tools.", potentialAction: { "@type": "SearchAction", target: `${absoluteUrl("/browse")}?q={search_term_string}`, "query-input": "required name=search_term_string" } },
    { "@context": "https://schema.org", "@type": "Organization", name: "TokenShelf", url: absoluteUrl(), sameAs: ["https://github.com/Slightsmile/Tokenshelf"] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];
  return (
    <main id="main" className="home-main">
      <JsonLd data={structuredData} />
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="little-dot" />The free AI access directory</p>
          <h1 id="hero-title">More AI.<br /><span>Less spend.</span></h1>
          <p className="hero-intro">Free credits, token offers, and useful AI tools.<br className="desktop-break" /> All the details. None of the digging.</p>
          <form action="/browse" method="get" className="hero-search">
            <label><Icon name="search" /><input type="search" name="q" placeholder="Search models or providers" aria-label="Search AI offers" /></label>
            <button className="button" type="submit">Explore<Icon name="arrow" /></button>
          </form>
          <p className="hero-caption"><span>{offers.length} offers</span> to give your next idea a head start.</p>
        </div>
        <HeroShelf offers={heroOffers.map(({ id, provider, amount, tone, mark, models, modelFamilies, availability, category, dailyLogin, refresh }) => ({ id, provider, amount, tone, mark, models, modelFamilies, availability, category, dailyLogin, refresh }))} />
      </section>

      <section className="home-section shell" id="featured" aria-labelledby="featured-title">
        <div className="section-heading" data-reveal=""><div><h2 id="featured-title">Featured offers<span className="heading-dot">.</span></h2><p>Big token drops and useful everyday access.</p></div><Link href="/browse" className="inline-link">Browse all {offers.length}<Icon name="arrow" /></Link></div>
        <div className="offer-grid">{featuredOffers.slice(0, 3).map((offer, index) => <OfferCard offer={offer} revealDelay={index * 65} key={offer.id} />)}</div>
      </section>

      <section className="home-section recent-section shell" aria-labelledby="other-title">
        <div className="section-heading" data-reveal=""><div><h2 id="other-title">More offers</h2><p>More free access to explore.</p></div><Link href="/methodology" className="quiet-link">How we check<Icon name="arrow" /></Link></div>
        <div className="offer-list"><div className="list-heading" aria-hidden="true"><span>Offer</span><span>What you get</span><span>Models</span><span /></div>{landingMoreOffers.map((offer, index) => <OfferRow offer={offer} reveal revealDelay={index * 45} key={offer.id} />)}</div>
      </section>

      <section className="home-section category-section shell" aria-labelledby="category-title">
        <div className="section-heading" data-reveal=""><h2 id="category-title">Find your kind of AI</h2><Link href="/categories" className="quiet-link">All categories<Icon name="arrow" /></Link></div>
        <div className="category-links">{categories.map((category, index) => {
          const count = offers.filter((offer) => offer.category === category.name).length;
          return <Link href={`/browse?category=${encodeURIComponent(category.name)}`} className="category-link" data-reveal="" data-reveal-delay={index * 45} key={category.name}><span className="category-icon"><Icon name={category.icon} /></span><span><strong>{category.name}</strong><span>{count} {count === 1 ? "offer" : "offers"}</span></span><Icon name="chevron" /></Link>;
        })}</div>
      </section>

      <section className="home-section shell answer-section" aria-labelledby="answers-title">
        <div className="section-heading"><div><h2 id="answers-title">Free AI offers, explained clearly.</h2><p>Quick answers before you choose an offer.</p></div><Link href="/methodology" className="quiet-link">How we check<Icon name="arrow" /></Link></div>
        <div className="answer-grid">{faq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
      </section>

      <section className="submission-banner shell" data-reveal=""><span className="submission-icon"><Icon name="plus" /></span><div><h2>Found something good?</h2><p>Share an offer. Give someone else a head start.</p></div><Link href="/submit" className="button button-secondary">Share an offer<Icon name="arrow" /></Link></section>
    </main>
  );
}
