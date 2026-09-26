import Image from "next/image";
import { ArrowRight, Building2, Factory, GraduationCap, HeartHandshake, HeartPulse, Landmark } from "lucide-react";
import PageShell from "./PageShell";
import type { ServicePage } from "@/lib/service-pages";

const INDUSTRIES = [
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Landmark, label: "Government & Public Sector" },
  { icon: HeartHandshake, label: "Non-Profit & Religious Institutions" },
  { icon: Building2, label: "Enterprises" },
];

export default function ServiceDetail({ page }: { page: ServicePage }) {
  return (
    <PageShell>
      <section className="tc">
        <div className="tc-hero">
          <div className="tc-intro">
            <div>
              <div className="rule" />
              <p className="tc-crumb">
                <a href="/what-we-do">WHAT WE DO</a>
                <span>/</span>
                {page.crumb}
              </p>
              <h1 className="serif tc-h">
                {page.title}
                <br />
                <em>{page.accent}</em>
              </h1>
            </div>
            <p className="tc-lede">{page.lede}</p>
          </div>

          <div className="tc-stage">
            <div className="tc-photo">
              <Image src={page.image} alt={page.imageAlt} fill priority sizes="(max-width: 1100px) 100vw, 1200px" />
            </div>
            <div className="tc-caption">
              <p>
                {page.wallLeft.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p>{page.wallRight.join(" ")}</p>
            </div>
          </div>

          <ul className="tc-points">
            {page.points.map((point) => (
              <li key={point.label}>
                <point.icon size={22} strokeWidth={1.7} color="#e8891a" />
                {point.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="tc-approach">
          <div className="tc-approach-head">
            <div>
              <div className="rule" />
              <h2 className="serif">{page.approachTitle}</h2>
            </div>
            <p>{page.approachLede}</p>
          </div>
          <ol className="tc-steps">
            {page.steps.map((step) => (
              <li key={step.n} className="tc-step">
                <div className="tc-step-n">{step.n}</div>
                <div className="tc-step-body">
                  <span className="tc-step-icon">
                    <step.icon size={18} strokeWidth={1.7} color="#e8891a" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="tc-cta">
            <div>
              <h2 className="serif">{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>
            </div>
            <a href="#connect">
              Start a Conversation <ArrowRight size={16} />
            </a>
          </aside>
        </div>

        <div className="tc-ind">
          <div className="tc-ind-head">
            <div>
              <div className="rule" />
              <h2 className="serif">Industries We Work With</h2>
              <p>Deep domain understanding. Practical insights. Real-world experience.</p>
            </div>
            <p className="tc-ind-note">
              Different Organisations.
              <br />
              A Common Goal.
              <br />A Stronger Tomorrow.
            </p>
          </div>
          <ul className="tc-ind-list">
            {INDUSTRIES.map((item) => (
              <li key={item.label}>
                <span>
                  <item.icon size={22} strokeWidth={1.7} color="#e8891a" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
