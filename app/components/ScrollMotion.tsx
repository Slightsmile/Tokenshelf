"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new Set<HTMLElement>();
    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target as HTMLElement); });
    }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

    function reveal(element: HTMLElement) {
      if (seen.has(element)) return;
      seen.add(element);
      element.dataset.revealed = "true";
      observer.unobserve(element);
      if (preference.matches || element.contains(document.activeElement) || typeof element.animate !== "function") return;

      const delay = Math.max(0, Math.min(180, Number(element.dataset.revealDelay) || 0));
      const animation = element.animate([
        { opacity: 0.4, translate: "0 12px" },
        { opacity: 1, translate: "0 0" },
      ], { duration: 430, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
      animations.set(element, animation);
      animation.onfinish = () => animations.delete(element);
    }

    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>("[data-reveal]");
      if (!element) return;
      seen.add(element);
      element.dataset.revealed = "true";
      observer.unobserve(element);
      animations.get(element)?.cancel();
      animations.delete(element);
    }

    function updatePreference() {
      if (preference.matches) {
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      } else {
        elements.forEach((element) => { if (!seen.has(element)) observer.observe(element); });
      }
    }

    updatePreference();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("focusin", onFocus);
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
