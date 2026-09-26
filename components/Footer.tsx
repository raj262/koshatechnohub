"use client";

import { ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";
import { SERVICES, servicePath } from "@/lib/services";
import { HOW_WE_THINK, CAPABILITIES, PERSPECTIVES, INSIDE_KOSHA } from "@/lib/nav";

const GROUPS = [
  {
    h: "What we do",
    links: SERVICES.map((service) => ({
      label: service.title,
      href: servicePath(service.slug),
    })),
  },
  {
    h: "How we think",
    links: HOW_WE_THINK.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    h: "Perspectives",
    links: PERSPECTIVES.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    h: "Inside Kosha",
    links: INSIDE_KOSHA.map((item) => ({ label: item.label, href: item.href })),
  },
];

export default function Footer() {
  return (
    <footer id="connect" className="footer">
      <div className="foot">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo light />
            <p>We partner with organizations to solve meaningful problems through technology. Built on trust, driven by impact.</p>
            <div className="social">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
                </svg>
              </a>
              <a href="mailto:info@koshatechnohub.com" aria-label="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>
          <div className="foot-cta">
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 className="serif">Have a question or a project in mind?</h2>
            <a className="foot-mail" href="mailto:info@koshatechnohub.com">info@koshatechnohub.com</a>
            <p>Plot 16, Hootagalli Industrial Area, Mysore, Karnataka — 570018</p>
            <a className="foot-btn" href="/inside-kosha/contact">
              Start a Conversation
              <ArrowRight size={16} color="#e8891a" />
            </a>
          </div>
        </div>

        <nav className="foot-nav" aria-label="Footer">
          {GROUPS.map((group) => (
            <div key={group.h} className="foot-group">
              <h3>{group.h}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="foot-cap">
            {CAPABILITIES.map((group) => (
              <div key={group.label} className="foot-group">
                <h3>
                  <a href={group.href}>{group.label}</a>
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="legal">
        <p>© 2026 Kosha. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
}
