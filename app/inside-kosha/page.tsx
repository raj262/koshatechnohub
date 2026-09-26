import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { INSIDE_KOSHA } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Inside Kosha — Kosha",
  description: "About Kosha, our journey, leadership, careers, and how to get in touch.",
};

export default function InsideKoshaPage() {
  return (
    <PageShell>
      <section className="insidehub">
        <div>
          <p className="eyebrow">INSIDE KOSHA</p>
          <h1 className="serif">The people behind the work.</h1>
          <p>Who we are, how we got here, and how to work with us.</p>
        </div>
        <ol>
          {INSIDE_KOSHA.map((item, i) => (
            <li key={item.href}>
              <a href={item.href}>
                <b>0{i + 1}</b>
                <span className="serif">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
