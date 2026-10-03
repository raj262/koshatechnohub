"use client";

import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { GhostButton } from "./Buttons";
import { SERVICES, servicePath } from "@/lib/services";
import { HOW_WE_THINK, CAPABILITIES, PERSPECTIVES, INSIDE_KOSHA } from "@/lib/nav";

const NAV = [
  {
    label: "What We Do",
    href: "/what-we-do",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    items: SERVICES.map((service) => ({
      label: service.title,
      href: servicePath(service.slug),
    })),
  },
  {
    label: "How We Think",
    href: "/how-we-think",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    items: HOW_WE_THINK.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    groups: CAPABILITIES,
  },
  {
    label: "Perspectives",
    href: "/perspectives",
    align: "end" as const,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    items: PERSPECTIVES.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    label: "Inside Kosha",
    href: "/inside-kosha",
    align: "end" as const,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    items: INSIDE_KOSHA.map((item) => ({ label: item.label, href: item.href })),
  },
];

function DropVisual({ href, label, image }: { href: string; label: string; image: string }) {
  return (
    <a className="drop-visual" href={href}>
      <img src={image} alt="" />
      <span>{label}</span>
    </a>
  );
}

export default function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const onEnter = (label: string, hasItems?: boolean) => {
    if (!hasItems) return;
    clearTimers();
    openTimer.current = window.setTimeout(() => setHover(label), 180);
  };

  const onLeave = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setHover(null), 320);
  };

  return (
    <header className={`header ${solid ? "solid" : ""}`}>
      <div className="header-left">
        <Logo href="/" />
      </div>
      <nav className="nav">
        {NAV.map((item) => (
          <div
            key={item.label}
            className="nav-item"
            onMouseEnter={() => onEnter(item.label, Boolean(item.items || item.groups))}
            onMouseLeave={onLeave}
          >
            <a href={item.href}>
              {item.label}
              {(item.items || item.groups) && <ChevronDown size={13} />}
            </a>
            {item.groups && (
              <div className={`dropdown groups ${hover === item.label ? "open" : ""}`}>
                {item.groups.map((group) => (
                  <div key={group.label}>
                    <a className="group-label" href={group.href}>
                      {group.label}
                    </a>
                    {group.items.map((s) => (
                      <a key={s.href} href={s.href}>
                        {s.label}
                      </a>
                    ))}
                  </div>
                ))}
                <DropVisual href={item.href} label={item.label} image={item.image} />
              </div>
            )}
            {item.items && (
              <div className={`dropdown ${"align" in item && item.align === "end" ? "end" : ""} ${hover === item.label ? "open" : ""}`}>
                <div className="drop-links">
                  <p className="drop-kicker">{item.label}</p>
                  {item.items.map((s) => (
                    <a key={s.label} href={s.href}>
                      {s.label}
                    </a>
                  ))}
                </div>
                <DropVisual href={item.href} label={item.label} image={item.image} />
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="header-right">
        <GhostButton href="/#connect" />
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <a className="mobile-visual" href="/what-we-do" onClick={() => setOpen(false)}>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span>Kosha</span>
        </a>
        <div className="mobile-links">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/#connect" className="btn-ghost" onClick={() => setOpen(false)}>
            Start a Conversation
            <ArrowRight size={14} color="#e8891a" />
          </a>
        </div>
      </div>
    </header>
  );
}
