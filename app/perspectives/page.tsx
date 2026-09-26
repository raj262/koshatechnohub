import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PERSPECTIVES } from "@/lib/nav";

const COVERS = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
];

export const metadata: Metadata = {
  title: "Perspectives — Kosha",
  description: "Writing on AI, enterprise technology, operations, and practical digital change.",
};

export default function PerspectivesPage() {
  const [feature, ...rest] = PERSPECTIVES;
  return (
    <PageShell>
      <section className="pershub">
        <p className="eyebrow">PERSPECTIVES</p>
        <h1 className="serif">How we see the work.</h1>
        <a className="pers-feature" href={feature.href}>
          <img src={COVERS[0]} alt="" />
          <span>
            <em>Featured</em>
            <strong className="serif">{feature.label}</strong>
          </span>
        </a>
        <ul>
          {rest.map((item, i) => (
            <li key={item.href}>
              <a href={item.href}>
                <img src={COVERS[i + 1]} alt="" />
                <strong className="serif">{item.label}</strong>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
