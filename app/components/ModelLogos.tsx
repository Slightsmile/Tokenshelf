import type { Offer } from "../../lib/offers";
import { getModelFamilies, modelFamilyInfo } from "../../lib/model-families";

export default function ModelLogos({ offer }: { offer: Pick<Offer, "provider" | "models" | "modelFamilies" | "availability" | "category"> }) {
  const families = getModelFamilies(offer);
  if (!families.length) return <span className="model-empty">{offer.availability === "offline" ? "Offline" : offer.category === "AI agents" ? "AI agent" : "See model list"}</span>;

  return <ul className="model-logos" aria-label={`${offer.provider} model families`}>{families.map((family) => {
    const info = modelFamilyInfo[family];
    return <li key={family}><span className="model-logo" title={info.name}><img src={`/model-logos/${info.logo}`} alt={info.name} width={20} height={20} loading="lazy" decoding="async" /></span></li>;
  })}</ul>;
}
