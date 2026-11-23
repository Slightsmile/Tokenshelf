export default function PageShell({ children, eyebrow, title, intro }: { children: React.ReactNode; eyebrow?: string; title: React.ReactNode; intro?: string }) {
  return <main id="main" className="shell page-main"><header className="page-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{intro && <p>{intro}</p>}</header>{children}</main>;
}
