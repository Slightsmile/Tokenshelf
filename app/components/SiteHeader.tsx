"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { useSavedOffers } from "./SavedOffersProvider";

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="TokenShelf home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>TokenShelf<span className="brand-period">.</span></Link>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const { savedIds } = useSavedOffers();

  return (
    <header className="site-header">
      <nav className="shell navigation" aria-label="Main navigation">
        <Wordmark />
        <div className="nav-links">
          <Link href="/browse" aria-current={pathname === "/browse" ? "page" : undefined}>Offers</Link>
          <Link href="/categories" aria-current={pathname === "/categories" ? "page" : undefined}>Categories</Link>
          <Link href="/methodology" className="nav-about" aria-current={pathname === "/methodology" ? "page" : undefined}>How it works</Link>
        </div>
        <div className="nav-actions">
          <Link href="/saved" prefetch={false} className={`saved-link${pathname === "/saved" ? " active" : ""}`} aria-label={`Saved offers${savedIds.length ? `, ${savedIds.length} saved` : ""}`} aria-current={pathname === "/saved" ? "page" : undefined}>
            <Icon name="bookmark" filled={savedIds.length > 0} /><span className="saved-label">Saved</span>{savedIds.length > 0 && <span className="saved-count">{savedIds.length}</span>}
          </Link>
          <Link href="/submit" className="button button-small button-secondary nav-submit"><Icon name="plus" /><span>Submit <span className="submit-extra">an offer</span></span></Link>
        </div>
      </nav>
    </header>
  );
}
