"use client";

import { ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";

const GROUPS = [
  {
    title: "What we do",
    href: "/what-we-do",
    links: [
      { label: "Strategy & Advisory", href: "/what-we-do/technology-consulting" },
      { label: "Digital Solutions", href: "/what-we-do" },
      { label: "Cloud & Infrastructure", href: "/capabilities/cloud-infrastructure" },
      { label: "Data & Analytics", href: "/what-we-do/enterprise-platforms" },
      { label: "Integration & Automation", href: "/what-we-do/ai-automation" },
      { label: "Security & Compliance", href: "/how-we-think/security-responsible-technology" },
    ],
  },
  {
    title: "How we think",
    href: "/how-we-think",
    links: [
      { label: "Our Approach", href: "/how-we-think/our-approach" },
      { label: "Methodologies", href: "/how-we-think/engineering-philosophy" },
      { label: "Partnerships", href: "/how-we-think/technology-architecture" },
    ],
  },
  {
    title: "Perspectives",
    href: "/perspectives",
    links: [
      { label: "Insights", href: "/perspectives/insights" },
      { label: "Case Studies", href: "/perspectives" },
      { label: "Resources", href: "/perspectives" },
    ],
  },
  {
    title: "Inside Kosha",
    href: "/inside-kosha",
    links: [
      { label: "About Us", href: "/inside-kosha/about-us" },
      { label: "Leadership", href: "/inside-kosha/leadership" },
      { label: "Careers", href: "/inside-kosha/careers" },
      { label: "Contact", href: "/inside-kosha/contact" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer id="connect" className="footer">
      <div className="foot">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo light href="/" />
            <p>We partner with organizations to solve meaningful problems through technology. Built on trust, driven by impact.</p>
            <i className="foot-rule" />
            <div className="social">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
                </svg>
              </a>
              <a href="mailto:hello@koshatechnohub.com" aria-label="Email">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {GROUPS.map((group) => (
            <nav className="foot-group" key={group.title} aria-label={group.title}>
              <h3>
                <a href={group.href}>{group.title}</a>
              </h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="foot-cta">
            <h3>Let’s connect</h3>
            <p>Have a question or a project in mind? We’d love to hear from you.</p>
            <a className="foot-btn" href="/inside-kosha/contact">
              Start a Conversation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="legal">
        <p>© 2026 Kosha. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
}
