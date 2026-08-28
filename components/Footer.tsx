"use client";

import { ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";

const COLS = [
  {
    h: "WHAT WE DO",
    links: ["Strategy & Advisory", "Digital Solutions", "Cloud & Infrastructure", "Data & Analytics", "Integration & Automation", "Security & Compliance"],
  },
  { h: "HOW WE THINK", links: ["Our Approach", "Methodologies", "Partnerships"] },
  { h: "PERSPECTIVES", links: ["Insights", "Case Studies", "Resources"] },
  { h: "INSIDE KOSHA", links: ["About Us", "Leadership", "Careers", "Contact"] },
];

export default function Footer() {
  return (
    <footer id="connect" className="footer">
      <div className="fg">
        <div className="fc">
          <Logo light />
          <p style={{ marginTop: 16, maxWidth: 250 }}>
            We partner with organizations to solve meaningful problems through technology. Built on trust, driven by impact.
          </p>
          <div className="rule" />
          <div className="social">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
              </svg>
            </a>
            <a href="mailto:hello@kosha.com" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.h} className="fc">
            <h4>{c.h}</h4>
            <div className="rule" />
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#what-we-do">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="fc">
          <h4>LET&apos;S CONNECT</h4>
          <div className="rule" />
          <p style={{ marginTop: 16 }}>Have a question or a project in mind? We&apos;d love to hear from you.</p>
          <a href="mailto:hello@kosha.com" className="link-arrow" style={{ marginTop: 20, color: "#fff" }}>
            <u>Start a Conversation</u>
            <ArrowRight size={16} color="#e8891a" />
          </a>
        </div>
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
