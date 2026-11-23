"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { offers } from "../../lib/offers";

const storageKey = "tokenshelf:saved-offers";
const validIds = new Set(offers.map((offer) => offer.id));
const SavedOffersContext = createContext<{
  savedIds: string[];
  loaded: boolean;
  persistent: boolean;
  toggleSaved: (id: string) => void;
} | null>(null);

function readSaved(raw: string | null): string[] {
  try {
    const value: unknown = JSON.parse(raw ?? "[]");
    return Array.isArray(value) ? Array.from(new Set(value.filter((id): id is string => typeof id === "string" && validIds.has(id)))) : [];
  } catch {
    return [];
  }
}

export default function SavedOffersProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [persistent, setPersistent] = useState(true);

  useEffect(() => {
    try {
      setSavedIds(readSaved(localStorage.getItem(storageKey)));
    } catch {
      setPersistent(false);
    }
    setLoaded(true);

    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) setSavedIds(readSaved(event.key === null ? null : event.newValue));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedIds));
    } catch {
      setPersistent(false);
    }
  }, [savedIds, loaded]);

  const toggleSaved = useCallback((id: string) => {
    if (!validIds.has(id)) return;
    setSavedIds((current) => current.includes(id) ? current.filter((saved) => saved !== id) : [...current, id]);
  }, []);

  return <SavedOffersContext.Provider value={{ savedIds, loaded, persistent, toggleSaved }}>{children}</SavedOffersContext.Provider>;
}

export function useSavedOffers() {
  const context = useContext(SavedOffersContext);
  if (!context) throw new Error("useSavedOffers must be used within SavedOffersProvider");
  return context;
}
