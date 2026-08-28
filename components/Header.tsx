"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { GhostButton } from "./Buttons";

const NAV = [
  { label: "What We Do", href: "#what-we-do", items: ["Strategy & Advisory", "Digital Solutions", "Cloud & Infrastructure"] },
  { label: "How We Think", href: "#approach", items: ["Our Approach", "Methodologies", "Partnerships"] },
  { label: "Capabilities", href: "#what-we-do" },
  { label: "Perspectives", href: "#perspectives", items: ["Insights", "Case Studies", "Resources"] },
  { label: "Inside Kosha", href: "#purpose", items: ["About Us", "Leadership", "Careers"] },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="header-left">
        <Logo />
      </div>
      <nav className="nav">
        {NAV.map((item) => (
          <div
            key={item.label}
            style={{ position: "relative" }}
            onMouseEnter={() => setHover(item.label)}
            onMouseLeave={() => setHover(null)}
          >
            <a href={item.href}>
              {item.label}
              {item.items && <ChevronDown size={13} />}
            </a>
            {hover === item.label && item.items && (
              <div className="dropdown">
                {item.items.map((s) => (
                  <a key={s} href={item.href}>
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="header-right">
        <GhostButton />
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
