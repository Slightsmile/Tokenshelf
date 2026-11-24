import type { MetadataRoute } from "next";
import { offers } from "../lib/offers";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/browse", "/categories", "/integration", "/methodology", "/about", "/submit"];
  return [
    ...staticPages.map((path) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: path === "/" || path === "/browse" ? "daily" as const : "monthly" as const, priority: path === "/" ? 1 : path === "/browse" ? 0.9 : 0.7 })),
    ...offers.filter((offer) => offer.availability !== "offline").map((offer) => ({ url: absoluteUrl(`/offers/${offer.id}`), lastModified: new Date(`${offer.checkedAt}T00:00:00Z`), changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
