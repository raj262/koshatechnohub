"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Globe, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const STORY = [
  { n: "01", year: "2013", title: "The Beginning", text: "A vision to create meaningful solutions — starting small, with people and purpose at the centre." },
  { n: "02", year: "2014", title: "Rooted in Mysore", text: "Kosha takes shape in Mysore, Karnataka, close to the organisations we serve." },
  { n: "03", year: "2018", title: "Kosha Techno Hub Pvt Ltd", text: "Incorporated to scale our vision, covering a wider range of education and technology work." },
  { n: "04", year: "Growth", title: "New industries and geographies", text: "Partnerships expand the practice into new sectors, while the same values stay in place." },
  { n: "05", year: "Today", title: "A stronger Kosha", text: "A bigger purpose for a brighter tomorrow — same values, a larger stage." },
];

const STATS = [
  { Icon: Users, value: "10+", label: "Years of Experience" },
  { Icon: Globe, value: "250+", label: "Projects Delivered" },
  { Icon: BarChart3, value: "6+", label: "Industries Served" },
  { Icon: MapPin, value: "Global", label: "Clients Across Geographies" },
];

export default function OurJourney() {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(STORY.length - 1, Math.max(0, Math.floor(value * STORY.length - 0.0001)));
    setActive(next);
  });

  const item = STORY[active];
  const fromLeft = active % 2 === 0;

  return (
    <>
      <Header />

      <section className="jn-hero">
        <motion.div className="jn-hero-photo" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.15, ease }}>
          <Image
            src="/images/journey-hero.jpg"
            alt="A road rising through the hills toward a brighter horizon"
            fill
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>
        <div className="jn-hero-inner">
          <p className="jn-crumbs">
            <a href="/inside-kosha/about-us">Inside Kosha</a>
            <span>/</span>
            Our Journey
          </p>
          <h1 className="serif">
            A Journey of Ideas, People
            <em>and Possibilities.</em>
          </h1>
          <p>From a small beginning to a growing global presence, our journey has been shaped by people, partnerships and a commitment to building technology that matters.</p>
        </div>
        <p className="jn-aside">
          Same values.
          <br />
          A bigger tomorrow.
        </p>
      </section>

      <section className="jn-track" id="full-journey" ref={pinRef}>
        <div className="jn-track-stage">
          <div className="jn-track-top">
            <div>
              <p className="eyebrow">INSIDE KOSHA</p>
              <h2 className="serif">The road so far</h2>
            </div>
            <p>Each step has been about people, partnerships and technology that lasts.</p>
          </div>

          <div className="jn-track-main">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.year}
                className="jn-track-slide"
                initial={reduce ? false : { opacity: 0, x: fromLeft ? -48 : 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: fromLeft ? 32 : -32 }}
                transition={{ duration: 0.4, ease }}
              >
                <strong className="serif">{item.year}</strong>
                <div>
                  <em>
                    {item.n} — chapter
                  </em>
                  <h3 className="serif">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="jn-track-nav">
            <div className="jn-track-bar" aria-hidden>
              <motion.i style={{ width: reduce ? `${((active + 1) / STORY.length) * 100}%` : bar }} />
            </div>
            <ol>
              {STORY.map((step, i) => (
                <li key={step.year} className={i === active ? "is-on" : i < active ? "is-done" : undefined}>
                  <b>{step.year}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="jn-stats">
        {STATS.map((stat) => (
          <article key={stat.label}>
            <stat.Icon size={22} color="#e8891a" strokeWidth={1.6} aria-hidden />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
        <p>People. Ideas. Technology. A stronger tomorrow.</p>
      </section>

      <Footer />
    </>
  );
}
