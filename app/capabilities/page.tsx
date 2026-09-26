import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { CAPABILITIES } from "@/lib/nav";

const PHOTOS = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
];

export const metadata: Metadata = {
  title: "Capabilities — Kosha",
  description: "Industries we work with and the engineering capabilities we bring to the work.",
};

export default function CapabilitiesPage() {
  const [industries, engineering] = CAPABILITIES;
  return (
    <PageShell>
      <section className="caphub">
        <div className="caphub-intro">
          <p className="eyebrow">CAPABILITIES</p>
          <h1 className="serif">Where we work, and how we build.</h1>
          <p>Industry context on one side. Engineering practice on the other.</p>
        </div>
        <div id="industries">
          <h2 className="serif">Industries</h2>
          <ul className="caphub-photos">
            {industries.items.map((item, i) => (
              <li key={item.href}>
                <a href={item.href}>
                  <img src={PHOTOS[i]} alt="" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="engineering" className="caphub-eng">
          <h2 className="serif">Engineering Capabilities</h2>
          <ol>
            {engineering.items.map((item, i) => (
              <li key={item.href}>
                <b>0{i + 1}</b>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
