import type { Offer } from "./offers";

export type OfferSummary = Pick<Offer,
  "id" | "provider" | "title" | "description" | "category" | "amount" | "rewardLabel" |
  "refresh" | "dailyLogin" | "tone" | "mark" | "verification" | "checkedAt" |
  "models" | "modelFamilies" | "availability" | "code" | "deadline" | "featured"
>;

// Keep claim instructions and source details on the offer's server-rendered page.
export function toOfferSummary(offer: Offer): OfferSummary {
  const { id, provider, title, description, category, amount, rewardLabel, refresh, dailyLogin, tone, mark, verification, checkedAt, models, modelFamilies, availability, code, deadline, featured } = offer;
  return { id, provider, title, description, category, amount, rewardLabel, refresh, dailyLogin, tone, mark, verification, checkedAt, models, modelFamilies, availability, code, deadline, featured };
}
