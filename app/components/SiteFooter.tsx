import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div><Link href="/" className="footer-brand">TokenShelf.</Link><span>Good AI access, all in one place.</span></div>
      <nav aria-label="Footer navigation"><a href="https://www.tokentracker.cc/" target="_blank" rel="noopener noreferrer">TokenTracker</a><a href="https://github-treasure.vercel.app/" target="_blank" rel="noopener noreferrer">GitHub Treasure</a><span>© {new Date().getFullYear()} TokenShelf</span></nav>
    </footer>
  );
}
