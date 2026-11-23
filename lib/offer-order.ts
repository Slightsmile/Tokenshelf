import type { Offer } from "./offers";

type SortableOffer = Pick<Offer, "id" | "featured" | "checkedAt" | "provider">;

export function compareOffers(a: SortableOffer, b: SortableOffer) {
  return Number(a.id === "xingchi") - Number(b.id === "xingchi") || (a.featured ?? Number.MAX_SAFE_INTEGER) - (b.featured ?? Number.MAX_SAFE_INTEGER) || b.checkedAt.localeCompare(a.checkedAt) || a.provider.localeCompare(b.provider);
}
