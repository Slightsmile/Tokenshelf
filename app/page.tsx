import Link from "next/link";
import { categories, featuredOffers, offers, otherOffers } from "../lib/offers";
import HeroShelf from "./components/HeroShelf";
import Icon from "./components/Icon";
import OfferCard from "./components/OfferCard";
import OfferRow from "./components/OfferRow";

const heroOffers = featuredOffers.slice(0, 3);

export default function Home() {
  return (
    <main id="main" className="home-main">
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
        <HeroShelf offers={heroOffers} />
      </section>

      <section className="home-section shell" id="featured" aria-labelledby="featured-title">
        <div className="section-heading" data-reveal=""><div><h2 id="featured-title">Featured offers<span className="heading-dot">.</span></h2><p>Big token drops and useful everyday access.</p></div><Link href="/browse" className="inline-link">Browse all {offers.length}<Icon name="arrow" /></Link></div>
        <div className="offer-grid">{featuredOffers.slice(0, 3).map((offer, index) => <OfferCard offer={offer} revealDelay={index * 65} key={offer.id} />)}</div>
      </section>

      <section className="home-section recent-section shell" aria-labelledby="other-title">
        <div className="section-heading" data-reveal=""><div><h2 id="other-title">More offers</h2><p>More free access to explore.</p></div><Link href="/methodology" className="quiet-link">How we check<Icon name="arrow" /></Link></div>
        <div className="offer-list"><div className="list-heading" aria-hidden="true"><span>Offer</span><span>What you get</span><span>Models</span><span /></div>{otherOffers.map((offer, index) => <OfferRow offer={offer} reveal revealDelay={index * 45} key={offer.id} />)}</div>
      </section>

      <section className="home-section category-section shell" aria-labelledby="category-title">
        <div className="section-heading" data-reveal=""><h2 id="category-title">Find your kind of AI</h2><Link href="/categories" className="quiet-link">All categories<Icon name="arrow" /></Link></div>
        <div className="category-links">{categories.map((category, index) => {
          const count = offers.filter((offer) => offer.category === category.name).length;
          return <Link href={`/browse?category=${encodeURIComponent(category.name)}`} className="category-link" data-reveal="" data-reveal-delay={index * 45} key={category.name}><span className="category-icon"><Icon name={category.icon} /></span><span><strong>{category.name}</strong><span>{count} {count === 1 ? "offer" : "offers"}</span></span><Icon name="chevron" /></Link>;
        })}</div>
      </section>

      <section className="submission-banner shell" data-reveal=""><span className="submission-icon"><Icon name="plus" /></span><div><h2>Found something good?</h2><p>Share an offer. Give someone else a head start.</p></div><Link href="/submit" className="button button-secondary">Share an offer<Icon name="arrow" /></Link></section>
    </main>
  );
}
