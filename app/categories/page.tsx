import type { Metadata } from "next";
import Link from "next/link";
import { categories, offers } from "../../lib/offers";
import Icon from "../components/Icon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = { title: "Offer categories" };

export default function CategoriesPage() {
  return <PageShell title="Find your kind of AI." intro="Start with what you want to try."><div className="category-page-list">{categories.map((category) => { const count = offers.filter((offer) => offer.category === category.name).length; return <Link className="category-page-row" href={`/browse?category=${encodeURIComponent(category.name)}`} key={category.name}><span className="category-icon"><Icon name={category.icon} /></span><div><h2>{category.name}</h2><p>{category.description}</p></div><span className="category-count">{count} {count === 1 ? "offer" : "offers"}</span><Icon name="arrow" /></Link>; })}</div></PageShell>;
}
