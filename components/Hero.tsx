"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mouse } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import CubeScene from "./CubeScene";
import { ArrowLink, PrimaryButton } from "./Buttons";

const CATS = ["BUSINESS", "PEOPLE", "PROCESSES", "DATA", "TECHNOLOGY"] as const;

const SLIDES = [
  {
    cat: "BUSINESS",
    title: (
      <>
        Technology should fit
        <br />
        the way your
        <br />
        <em>business</em> works.
      </>
    ),
    sub: "Building technology around business — not the other way around.",
    link: "Explore our solutions",
    href: "#what-we-do",
    kind: "photo" as const,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    cat: "PEOPLE",
    title: (
      <>
        Real challenges.
        <br />
        Meaningful <em>impact.</em>
      </>
    ),
    sub: "We partner with organizations to solve complex problems, unlock opportunities and create measurable, lasting value.",
    link: "Explore our impact",
    href: "#purpose",
    kind: "cubes" as const,
    cube: "a" as const,
  },
  {
    cat: "PROCESSES",
    title: (
      <>
        Strategy. Technology.
        <br />
        Aligned for outcomes
        <br />
        <em>that matter.</em>
      </>
    ),
    sub: "We align strategy, technology and execution to deliver outcomes that drive growth, efficiency and long-term impact.",
    link: "See how we think",
    href: "#approach",
    kind: "photo" as const,
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
  },
  {
    cat: "DATA",
    title: (
      <>
        Built to adapt. Designed to
        <br />
        <em>scale</em> with you.
      </>
    ),
    sub: "From startups to global enterprises, we build solutions that evolve with your business.",
    link: "Explore our capabilities",
    href: "#what-we-do",
    kind: "cubes" as const,
    cube: "b" as const,
  },
  {
    cat: "TECHNOLOGY",
    title: (
      <>
        Partnerships that create
        <br />
        lasting <em>impact.</em>
      </>
    ),
    sub: "We work as an extension of your team, driving success today and building for tomorrow.",
    link: "Let's build together",
    href: "#connect",
    kind: "photo" as const,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80",
  },
];

const LAST = SLIDES.length - 1;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const heroRef = useRef<HTMLElement>(null);
  const locked = useRef(false);
  const slide = SLIDES[index];
  indexRef.current = index;
  const catI = CATS.indexOf(slide.cat as (typeof CATS)[number]);

  const go = (n: number) => setIndex(Math.max(0, Math.min(LAST, n)));

  useEffect(() => {
    const html = document.documentElement;
    const pin = () => {
      html.style.overflow = "hidden";
    };
    const unpin = () => {
      html.style.overflow = "";
    };
    const cool = (ms = 700) => {
      locked.current = true;
      window.setTimeout(() => {
        locked.current = false;
      }, ms);
    };
    const toPurpose = () => {
      unpin();
      cool(900);
      document.getElementById("purpose")?.scrollIntoView({ behavior: "smooth" });
    };
    const toHero = (slide = LAST) => {
      pin();
      go(slide);
      window.scrollTo({ top: 0, behavior: "smooth" });
      cool(900);
    };

    pin();

    const handleDir = (dir: 1 | -1) => {
      if (locked.current) return;
      const atTop = window.scrollY < 12;
      if (atTop) {
        if (dir === 1) {
          if (indexRef.current < LAST) {
            go(indexRef.current + 1);
            cool();
          } else {
            toPurpose();
          }
        } else if (indexRef.current > 0) {
          go(indexRef.current - 1);
          cool();
        }
        return;
      }
      if (dir === -1 && window.scrollY < window.innerHeight * 0.55) {
        toHero(LAST);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return;
      const atTop = window.scrollY < 12;
      const pullingBack = e.deltaY < 0 && window.scrollY < window.innerHeight * 0.55;
      if (atTop || pullingBack) e.preventDefault();
      handleDir(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (window.scrollY < 12) e.preventDefault();
        handleDir(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (window.scrollY < 12 || window.scrollY < window.innerHeight * 0.55) e.preventDefault();
        handleDir(-1);
      }
    };

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (href && href !== "#top") unpin();
      if (href === "#top") {
        pin();
        go(0);
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      unpin();
    };
  }, []);

  return (
    <section id="top" ref={heroRef} className="hero">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {slide.kind === "photo" ? (
            <Image src={slide.img!} alt="" fill priority={index === 0} />
          ) : (
            <CubeScene variant={slide.cube} />
          )}
          <div className="hero-fade" />
        </motion.div>
      </AnimatePresence>

      <div className="hero-row">
        <div className="pager">
          <button type="button" aria-label="Previous" onClick={() => go(index - 1)}>
            <ChevronUp size={14} />
          </button>
          {SLIDES.map((_, i) => (
            <button key={i} type="button" className={i === index ? "on" : ""} onClick={() => go(i)}>
              {String(i + 1).padStart(2, "0")}
              {i === index && <span className="dot" />}
            </button>
          ))}
          <button type="button" aria-label="Next" onClick={() => go(index + 1)}>
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="hero-copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="serif">{slide.title}</h1>
              <div className="bar" />
              <p className="sub">{slide.sub}</p>
              <div className="hero-cta">
                <PrimaryButton />
                <ArrowLink href={slide.href}>{slide.link}</ArrowLink>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="cats">
          {CATS.map((c, i) => (
            <button
              key={c}
              type="button"
              className={i === catI ? "on" : ""}
              onClick={() => {
                const m = SLIDES.findIndex((s) => s.cat === c);
                if (m >= 0) go(m);
              }}
            >
              <span className="c" />
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-foot">
        <span>
          <Mouse size={14} /> Scroll to explore.
        </span>
        <div className="dots">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" className={i === index ? "on" : ""} aria-label={`Slide ${i + 1}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
