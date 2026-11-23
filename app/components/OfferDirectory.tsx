"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, offers } from "../../lib/offers";
import { getModelFamilies, modelFamilyInfo } from "../../lib/model-families";
import Icon from "./Icon";
import OfferRow from "./OfferRow";

export default function OfferDirectory({ initialQuery = "", initialCategory = "" }: { initialQuery?: string; initialCategory?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(categories.some((item) => item.name === initialCategory) ? initialCategory : "");

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query); else url.searchParams.delete("q");
    if (category) url.searchParams.set("category", category); else url.searchParams.delete("category");
    url.searchParams.delete("sort");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}`);
  }, [query, category]);

  const filteredOffers = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return offers.filter((offer) => (!category || offer.category === category) && `${offer.provider} ${offer.title} ${offer.description} ${offer.amount} ${offer.category} ${offer.models.join(" ")} ${getModelFamilies(offer).map((family) => modelFamilyInfo[family].name).join(" ")} ${offer.code ?? ""}`.toLowerCase().includes(normalized));
  }, [query, category]);

  function reset() { setQuery(""); setCategory(""); }

  return (
    <section className="directory" aria-label="AI offer directory">
      <div className="directory-search"><label className="search-control"><Icon name="search" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search providers, models, or credits…" aria-label="Search offers" />{query && <button type="button" className="icon-button" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" /></button>}</label></div>
      <div className="category-filters" role="group" aria-label="Filter by category"><button type="button" aria-pressed={category === ""} onClick={() => setCategory("")}>All offers<span>{offers.length}</span></button>{categories.map((item) => <button type="button" aria-pressed={category === item.name} onClick={() => setCategory(item.name)} key={item.name}>{item.name}<span>{offers.filter((offer) => offer.category === item.name).length}</span></button>)}</div>
      <div className="directory-toolbar"><p role="status" aria-live="polite">{filteredOffers.length} {filteredOffers.length === 1 ? "offer" : "offers"}{query.trim() && <> for <strong>“{query.trim()}”</strong></>}</p><span className="directory-order-note"><Icon name="sparkles" />Featured first</span></div>
      {filteredOffers.length > 0 ? <div className="offer-list"><div className="list-heading" aria-hidden="true"><span>Offer</span><span>What you get</span><span>Models</span><span /></div>{filteredOffers.map((offer) => <OfferRow offer={offer} key={offer.id} />)}</div> : <div className="empty-state"><span className="empty-icon"><Icon name="search" /></span><h2>No offers found</h2><p>Try a different provider or model, or reset your filters.</p><button className="button button-secondary" type="button" onClick={reset}>Reset filters<Icon name="arrow" /></button></div>}
      <p className="directory-note"><Icon name="link" />Provider-confirmed details and community rewards are labeled on each offer page.</p>
    </section>
  );
}
