import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../components/Icon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "TokenShelf is an initiative to make useful AI access easier to find for everyone.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell title="Free AI for all." intro="TokenShelf makes worthwhile free AI offers easier to find, understand, and use.">
      <div className="methodology-content about-content">
        <section>
          <h2>Why TokenShelf exists</h2>
          <p>Useful AI should not be difficult to access. This initiative collects free credits, token allowances, trials, tools, and APIs in one place, so more people can build, learn, and experiment without cost being the first barrier.</p>
          <p>Each listing aims to make the practical details clear: what is free, how to claim it, any limits to expect, and where the information came from.</p>
        </section>
        <section>
          <h2>Share an offer</h2>
          <p>Know a good free AI offer? You can submit it for review and help someone else discover it.</p>
          <Link href="/submit" className="inline-link">Submit an offer<Icon name="arrow" /></Link>
        </section>
        <section>
          <h2>For companies</h2>
          <p>If your company has a free offer and would like to attract customers by featuring it at the top of TokenShelf, contact <a href="mailto:akibh987@gmail.com">akibh987@gmail.com</a>.</p>
        </section>
        <section>
          <h2>Follow the project</h2>
          <p>Explore more of the work behind TokenShelf, or support the project with a GitHub star.</p>
          <div className="about-links">
            <a href="https://mohi-uddin.dev" target="_blank" rel="noopener noreferrer" className="inline-link">Visit Mohi Uddin&apos;s portfolio<Icon name="external" /></a>
            <a href="https://github.com/Slightsmile/Tokenshelf" target="_blank" rel="noopener noreferrer" className="inline-link">Star TokenShelf on GitHub<Icon name="external" /></a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
