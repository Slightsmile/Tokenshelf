import type { Offer } from "./offers";

type SortableOffer = Pick<Offer, "id" | "featured" | "checkedAt" | "provider">;

export function compareOffers(a: SortableOffer, b: SortableOffer) {
  const endRank = (id: string) => id === "vyceai" ? 2 : id === "xingchi" ? 1 : 0;

  return endRank(a.id) - endRank(b.id) || (a.featured ?? Number.MAX_SAFE_INTEGER) - (b.featured ?? Number.MAX_SAFE_INTEGER) || b.checkedAt.localeCompare(a.checkedAt) || a.provider.localeCompare(b.provider);
}
