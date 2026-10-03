"use client";

import { motion, useReducedMotion } from "framer-motion";
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

  return (
    <>
      <Header />

      <section className="jn-hero">
        <motion.div className="jn-hero-photo" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease }}>
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
          <motion.p className="jn-crumbs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <a href="/inside-kosha">Inside Kosha</a>
            <span>/</span>
            Our Journey
          </motion.p>
          <motion.h1 className="serif" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.06, ease }}>
            A Journey of Ideas, People
            <em>and Possibilities.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18, ease }}>
            From a small beginning to a growing global presence, our journey has been shaped by people, partnerships and a commitment to building technology that matters.
          </motion.p>
        </div>
        <motion.p className="jn-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Same values.
          <br />
          A bigger tomorrow.
        </motion.p>
      </section>

      <section className="jn-road" id="full-journey">
        <motion.div className="jn-road-head" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease }}>
          <p className="eyebrow">INSIDE KOSHA</p>
          <h2 className="serif">The road so far</h2>
          <p>Each step has been about people, partnerships and technology that lasts.</p>
        </motion.div>

        <div className="jn-path">
          <svg className="jn-path-rail" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden>
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="#ececec"
              strokeWidth="2"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, ease }}
            />
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="#e8891a"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, delay: 0.15, ease }}
            />
            {!reduce && (
              <motion.circle
                r="1.4"
                cx="1"
                fill="#e8891a"
                initial={{ cy: 0, opacity: 0 }}
                whileInView={{ cy: [0, 100], opacity: [0, 1, 1, 0] }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
            )}
          </svg>
          <ol>
            {STORY.map((item, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.year}
                  className={fromLeft ? "is-left" : "is-right"}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: fromLeft ? -72 : 72 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <i />
                  <div>
                    <em>{item.n}</em>
                    <b>{item.year}</b>
                    <h3 className="serif">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="jn-stats">
        {STATS.map((stat, i) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease }}
          >
            <stat.Icon size={22} color="#e8891a" strokeWidth={1.6} aria-hidden />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          People. Ideas. Technology. A stronger tomorrow.
        </motion.p>
      </section>

      <Footer />
    </>
  );
}
