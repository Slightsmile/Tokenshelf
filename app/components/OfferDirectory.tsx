"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, compareOffers, offers } from "../../lib/offers";
import { getModelFamilies, modelFamilyInfo, modelFamilyOrder, type ModelFamily } from "../../lib/model-families";
import Icon from "./Icon";
import OfferCard from "./OfferCard";
import OfferRow from "./OfferRow";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "updated", label: "Recently Updated" },
  { value: "name-asc", label: "Name A to Z" },
  { value: "name-desc", label: "Name Z to A" },
] as const;
type SortOrder = typeof sortOptions[number]["value"];

export default function OfferDirectory({ initialQuery = "", initialCategory = "", initialSort = "", initialModel = "" }: { initialQuery?: string; initialCategory?: string; initialSort?: string; initialModel?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(categories.some((item) => item.name === initialCategory) ? initialCategory : "");
  const [sort, setSort] = useState<SortOrder>(sortOptions.some((item) => item.value === initialSort) ? initialSort as SortOrder : "featured");
  const [model, setModel] = useState<ModelFamily | "">(modelFamilyOrder.includes(initialModel as ModelFamily) ? initialModel as ModelFamily : "");
  const [view, setView] = useState<"cards" | "list" | null>(null);

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 760px)");
    function updateView() { setView(phone.matches ? "list" : "cards"); }
    updateView();
    phone.addEventListener("change", updateView);
    return () => phone.removeEventListener("change", updateView);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query); else url.searchParams.delete("q");
    if (category) url.searchParams.set("category", category); else url.searchParams.delete("category");
    if (sort !== "featured") url.searchParams.set("sort", sort); else url.searchParams.delete("sort");
    if (model) url.searchParams.set("model", model); else url.searchParams.delete("model");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}`);
  }, [query, category, sort, model]);

  const filteredOffers = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return offers.filter((offer) => (!category || offer.category === category) && (!model || getModelFamilies(offer).includes(model)) && `${offer.provider} ${offer.title} ${offer.description} ${offer.amount} ${offer.category} ${offer.models.join(" ")} ${getModelFamilies(offer).map((family) => modelFamilyInfo[family].name).join(" ")} ${offer.code ?? ""}`.toLowerCase().includes(normalized)).sort((a, b) => {
      if (sort === "updated") return b.checkedAt.localeCompare(a.checkedAt) || compareOffers(a, b);
      if (sort === "name-asc") return a.provider.localeCompare(b.provider) || a.id.localeCompare(b.id);
      if (sort === "name-desc") return b.provider.localeCompare(a.provider) || a.id.localeCompare(b.id);
      return compareOffers(a, b);
    });
  }, [query, category, sort, model]);

  function reset() { setQuery(""); setCategory(""); setModel(""); }

  return (
    <section className="directory" aria-label="AI offer directory" data-view={view ?? "auto"}>
      <div className="directory-search"><label className="search-control"><Icon name="search" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search providers, models, or credits…" aria-label="Search offers" />{query && <button type="button" className="icon-button" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" /></button>}</label></div>
      <div className="category-filters" role="group" aria-label="Filter by category"><button type="button" aria-pressed={category === ""} onClick={() => setCategory("")}>All offers<span>{offers.length}</span></button>{categories.map((item) => <button type="button" aria-pressed={category === item.name} onClick={() => setCategory(item.name)} key={item.name}>{item.name}<span>{offers.filter((offer) => offer.category === item.name).length}</span></button>)}</div>
      <div className="model-filters" role="group" aria-label="Filter by AI model family">
        <button type="button" aria-pressed={model === ""} onClick={() => setModel("")}>All models</button>
        {modelFamilyOrder.map((family) => {
          const info = modelFamilyInfo[family];
          return <button type="button" aria-pressed={model === family} onClick={() => setModel(model === family ? "" : family)} key={family} title={info.name}><img src={`/model-logos/${info.logo}`} alt="" width={20} height={20} /><span>{info.name.split(" / ")[0]}</span></button>;
        })}
      </div>
      <div className="directory-toolbar">
        <p role="status" aria-live="polite">{filteredOffers.length} {filteredOffers.length === 1 ? "offer" : "offers"}{query.trim() && <> for <strong>“{query.trim()}”</strong></>}</p>
        <div className="directory-controls">
          <label className="directory-sort">Sort by<select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}>{sortOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
          <div className="view-toggle" role="group" aria-label="Offer view">
            <button type="button" aria-label="Card view" title="Card view" aria-pressed={view === "cards"} onClick={() => setView("cards")}><Icon name="grid" /></button>
            <button type="button" aria-label="List view" title="List view" aria-pressed={view === "list"} onClick={() => setView("list")}><Icon name="list" /></button>
          </div>
        </div>
      </div>
      {filteredOffers.length > 0 ? <>
        {view !== "list" && <div className="offer-grid directory-cards">{filteredOffers.map((offer) => <OfferCard offer={offer} key={offer.id} />)}</div>}
        {view !== "cards" && <div className="offer-list directory-list"><div className="list-heading" aria-hidden="true"><span>Offer</span><span>What you get</span><span>Models</span><span /></div>{filteredOffers.map((offer) => <OfferRow offer={offer} key={offer.id} />)}</div>}
      </> : <div className="empty-state"><span className="empty-icon"><Icon name="search" /></span><h2>No offers found</h2><p>Try a different provider or model, or reset your filters.</p><button className="button button-secondary" type="button" onClick={reset}>Reset filters<Icon name="arrow" /></button></div>}
      <p className="directory-note"><Icon name="link" />Provider-confirmed details and community rewards are labeled on each offer page.</p>
    </section>
  );
}
