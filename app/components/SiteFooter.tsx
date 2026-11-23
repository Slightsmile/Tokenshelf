import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div><Link href="/" className="footer-brand">TokenShelf.</Link><span>Good AI access, all in one place.</span></div>
      <nav aria-label="Footer navigation"><Link href="/methodology">Sources & labels</Link><Link href="/submit">Share an offer</Link><span>© {new Date().getFullYear()} TokenShelf</span></nav>
    </footer>
  );
}
