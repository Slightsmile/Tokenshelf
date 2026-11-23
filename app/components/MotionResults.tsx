"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export default function MotionResults({ children, revision, view }: { children: ReactNode; revision: string; view: string }) {
  const root = useRef<HTMLDivElement>(null);
  const positions = useRef(new Map<string, { x: number; y: number }>());
  const previousView = useRef(view);
  const animations = useRef<Animation[]>([]);

  useLayoutEffect(() => {
    animations.current.forEach((animation) => animation.cancel());
    animations.current = [];
    if (!root.current) return;
    const bounds = root.current.getBoundingClientRect();
    const next = new Map<string, { x: number; y: number }>();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.current.querySelectorAll<HTMLElement>("[data-offer-id]").forEach((element) => {
      if (!element.getClientRects().length) return;
      const id = element.dataset.offerId!;
      const rect = element.getBoundingClientRect();
      const position = { x: rect.left - bounds.left, y: rect.top - bounds.top };
      const previous = positions.current.get(id);
      next.set(id, position);
      if (!reduced && previousView.current === view && previous && typeof element.animate === "function") {
        const x = previous.x - position.x;
        const y = previous.y - position.y;
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
          animations.current.push(element.animate([
            { translate: `${x}px ${y}px` },
            { translate: "0 0" },
          ], { duration: 460, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }));
        }
      }
    });
    positions.current = next;
    previousView.current = view;
    return () => animations.current.forEach((animation) => animation.cancel());
  }, [revision, view]);

  return <div className="directory-results" ref={root}>{children}</div>;
}
