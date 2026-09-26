import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import { SERVICES, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: "What We Do — Kosha",
  description:
    "Technology consulting, custom ERP and operational systems, enterprise platforms and integrations, and AI and intelligent automation.",
};

function Icon({ slug }: { slug: (typeof SERVICES)[number]["slug"] }) {
  if (slug === "technology-consulting") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
        <circle cx="16" cy="14" r="5" stroke="#e8891a" strokeWidth="1.7" />
        <path d="M8 28c1.2-5 4-7.5 8-7.5s6.8 2.5 8 7.5" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="29" cy="24" r="6" stroke="#1a1a1a" strokeWidth="1.6" />
        <path d="M29 21.5v2.2l1.6 1.6" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "custom-erp") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
        <rect x="6" y="8" width="22" height="16" rx="2" stroke="#1a1a1a" strokeWidth="1.6" />
        <path d="M6 13h22" stroke="#1a1a1a" strokeWidth="1.6" />
        <circle cx="29" cy="28" r="7" stroke="#e8891a" strokeWidth="1.7" />
        <path d="m29 25 1.2 2.2 2.3.3-1.7 1.6.4 2.3L29 30.3 26.8 31.4l.4-2.3-1.7-1.6 2.3-.3L29 25Z" stroke="#e8891a" strokeWidth="1.1" />
      </svg>
    );
  }
  if (slug === "enterprise-platforms") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
        <path d="M14 26c0-6 4-10 8-12 3 4 4 7 4 12" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10 28h16c2 0 4 2 4 4v1H8v-1c0-2 1-4 2-4Z" stroke="#1a1a1a" strokeWidth="1.6" />
        <circle cx="12" cy="16" r="2" fill="#e8891a" />
        <circle cx="30" cy="14" r="2" fill="#e8891a" />
        <circle cx="32" cy="24" r="2" fill="#e8891a" />
      </svg>
    );
  }
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <rect x="11" y="11" width="20" height="20" rx="3" stroke="#1a1a1a" strokeWidth="1.6" />
      <path d="M11 16h20M16 11v5" stroke="#1a1a1a" strokeWidth="1.4" />
      <text x="21" y="28" textAnchor="middle" fill="#e8891a" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">
        AI
      </text>
    </svg>
  );
}

const TINTS = ["tint-a", "tint-b", "tint-c", "tint-d"] as const;

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <section className="wwd">
        <div className="wwd-top">
          <div className="wwd-copy">
            <div className="rule" />
            <p className="eyebrow">WHAT WE DO</p>
            <h1 className="serif wwd-h">
              Technology
              <br />
              <em>for What&apos;s Next.</em>
            </h1>
            <p>
              We help organisations solve real business problems through consulting, custom systems, enterprise platforms and intelligent automation — built for measurable outcomes.
            </p>
          </div>
          <div className="wwd-photo">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
              alt="Kosha meeting room"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 56vw"
            />
            <div className="wwd-phrases">
              <p>
                IDEAS
                <br />
                SYSTEMS
                <br />
                PEOPLE
                <br />
                IMPACT
              </p>
              <p>
                A STRONGER
                <br />
                TOMORROW
                <br />
                TOGETHER
              </p>
            </div>
          </div>
        </div>

        <div className="wwd-cards">
          {SERVICES.map((service, i) => (
            <article key={service.slug} id={service.slug} className={`wwd-card ${TINTS[i]}`}>
              <Icon slug={service.slug} />
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <a className="wwd-more" href={servicePath(service.slug)}>
                Learn More
                <i>
                  <ArrowRight size={15} />
                </i>
              </a>
            </article>
          ))}
        </div>

        <div className="wwd-bar">
          <strong className="serif">From idea to impact.</strong>
          <span>Strategy. Systems. People. A stronger tomorrow.</span>
          <span className="wwd-explore">
            EXPLORE CAPABILITIES <ArrowRight size={16} />
          </span>
        </div>
      </section>
    </PageShell>
  );
}
