"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const root = document.querySelector(".page-transition");
    if (!root) return;
    const selector = "[data-reveal], .offer-row, .category-page-row, .detail-content > section, .offer-summary, .submission-tips";
    const elements = new Set<HTMLElement>();
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

      const delay = Math.max(0, Math.min(150, Number(element.dataset.revealDelay) || 0));
      const animation = element.animate([
        { opacity: 0.45, translate: "0 14px" },
        { opacity: 1, translate: "0 0" },
      ], { duration: 560, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" });
      animations.set(element, animation);
      animation.onfinish = () => animations.delete(element);
    }

    function onFocus(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>(selector);
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

    function register(node: Element) {
      const candidates = Array.from(node.querySelectorAll<HTMLElement>(selector));
      if (node instanceof HTMLElement && node.matches(selector)) candidates.unshift(node);
      candidates.forEach((element, index) => {
        if (elements.has(element)) return;
        elements.add(element);
        if (!element.hasAttribute("data-reveal-delay")) element.dataset.revealDelay = String(index % 3 * 35);
        if (!preference.matches) observer.observe(element);
      });
    }

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => { if (node instanceof Element) register(node); }));
      elements.forEach((element) => {
        if (!element.isConnected) {
          observer.unobserve(element);
          animations.get(element)?.cancel();
          animations.delete(element);
          elements.delete(element);
          seen.delete(element);
        }
      });
    });
    register(root);
    mutations.observe(root, { childList: true, subtree: true });
    updatePreference();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("focusin", onFocus);
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return null;
}
