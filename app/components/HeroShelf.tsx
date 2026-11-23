"use client";

import Link from "next/link";
import { useEffect, useRef, type PointerEvent } from "react";
import type { Offer } from "../../lib/offers";
import Icon from "./Icon";
import { DailyLoginBadge, ProviderMark } from "./OfferCard";
import ModelLogos from "./ModelLogos";

type ShelfOffer = Pick<Offer, "id" | "provider" | "amount" | "tone" | "mark" | "models" | "modelFamilies" | "availability" | "category" | "dailyLogin" | "refresh">;

export default function HeroShelf({ offers }: { offers: ShelfOffer[] }) {
  const stack = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const enabled = useRef(false);

  function reset() {
    if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    frame.current = null;
    if (stack.current) stack.current.style.transform = "";
  }

  useEffect(() => {
    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => {
      enabled.current = preference.matches;
      if (!preference.matches) reset();
    };
    update();
    preference.addEventListener("change", update);
    return () => { preference.removeEventListener("change", update); reset(); };
  }, []);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!enabled.current || event.pointerType !== "mouse") return;
    if (event.currentTarget.querySelector(":focus-visible")) { reset(); return; }
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    frame.current = window.requestAnimationFrame(() => {
      if (stack.current) stack.current.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0) rotateX(${-y * 2.5}deg) rotateY(${x * 3}deg)`;
      frame.current = null;
    });
  }

  return (
    <div className="hero-visual" aria-label="A few offers on the shelf" onPointerMove={move} onPointerLeave={reset} onFocusCapture={reset}>
      <div className="offer-stack" ref={stack}>
        {offers.map((offer, index) => <Link className={`offer-pass pass-${index + 1}`} href={`/offers/${offer.id}`} key={offer.id}><ProviderMark offer={offer} /><div className="pass-copy"><span>{offer.provider}</span><strong>{offer.amount}</strong><div className="pass-meta"><ModelLogos offer={offer} /><DailyLoginBadge offer={offer} /></div></div><span className="pass-arrow"><Icon name="arrow" /></span></Link>)}
      </div>
    </div>
  );
}
