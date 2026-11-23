"use client";

import type { MouseEvent } from "react";
import Icon from "./Icon";
import { useSavedOffers } from "./SavedOffersProvider";

export default function SaveButton({ id, provider, showLabel = false }: { id: string; provider: string; showLabel?: boolean }) {
  const { savedIds, loaded, toggleSaved } = useSavedOffers();
  const saved = savedIds.includes(id);

  function save(event: MouseEvent<HTMLButtonElement>) {
    toggleSaved(id);
    if (event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const icon = event.currentTarget.querySelector("svg");
    if (!icon || typeof icon.animate !== "function") return;
    icon.getAnimations().forEach((animation) => animation.cancel());
    icon.animate([{ transform: "scale(0.82)", opacity: 0.65 }, { transform: "scale(1)", opacity: 1 }], { duration: 210, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }

  return (
    <button
      type="button"
      className={`${showLabel ? "button button-secondary save-button" : "icon-button"}${saved ? " is-saved" : ""}`}
      aria-label={`${saved ? "Unsave" : "Save"} ${provider}`}
      aria-pressed={saved}
      disabled={!loaded}
      onClick={save}
      title={saved ? "Remove from saved offers" : "Save for later"}
    >
      <Icon name="bookmark" filled={saved} />
      {showLabel && (saved ? "Saved" : "Save offer")}
    </button>
  );
}
