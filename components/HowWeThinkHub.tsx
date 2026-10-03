"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Shield, Waypoints } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, ease },
};

const PILLARS = ["Ideas", "Systems", "People", "Impact"];

const PATHS = [
  {
    Icon: Waypoints,
    title: "Our Approach",
    text: "A structured way of working that turns complex challenges into clear, scalable solutions.",
    href: "/how-we-think/our-approach",
    cta: "Explore Approach",
  },
  {
    Icon: Box,
    title: "Engineering Philosophy",
    text: "Principles that guide how we design, build and evolve technology.",
    href: "/how-we-think/engineering-philosophy",
    cta: "Explore Philosophy",
  },
  {
    Icon: Layers,
    title: "Technology & Architecture",
    text: "Modern, scalable and future-ready technology foundations.",
    href: "/how-we-think/technology-architecture",
    cta: "Explore Architecture",
  },
  {
    Icon: Shield,
    title: "Security & Responsible Technology",
    text: "Engineering for trust, safety and a better digital future.",
    href: "/how-we-think/security-responsible-technology",
    cta: "Explore Our Commitment",
  },
];

export default function HowWeThinkHub() {
  return (
    <>
      <Header />

      <section className="hwt-hero">
        <div className="hwt-hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            HOW WE THINK
          </motion.p>
          <motion.h1
            className="serif"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            Technology
            <br />
            with Purpose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            We combine deep engineering expertise with a long-term perspective to solve meaningful problems for organisations.
          </motion.p>
          <motion.a
            href="/how-we-think/our-approach"
            className="hwt-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease }}
          >
            <span aria-hidden>
              <ArrowRight size={16} color="#e8891a" />
            </span>
            Explore Our Approach
          </motion.a>
        </div>

        <div className="hwt-hero-visual">
          <motion.div
            className="hwt-hero-photo"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
              alt=""
              fill
              priority
              sizes="58vw"
            />
          </motion.div>
          <motion.ul
            className="hwt-pillars"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
            }}
          >
            {PILLARS.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: 14 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className="hwt-aside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            Built for a brighter tomorrow
          </motion.p>
        </div>
      </section>

      <section className="hwt-paths">
        <div className="hwt-paths-head">
          <motion.div {...fadeUp}>
            <p className="eyebrow">OUR PERSPECTIVE</p>
            <h2 className="serif">
              A more thoughtful
              <br />
              way to build
            </h2>
          </motion.div>
          <motion.p {...fadeUp}>
            We believe technology should be practical, responsible and built to create lasting value. Our thinking is shaped by real-world experience, a disciplined engineering approach and a commitment to the people and organisations we work with.
          </motion.p>
        </div>
        <div className="hwt-cards">
          {PATHS.map((item, i) => (
            <motion.article
              key={item.title}
              className="hwt-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <span className="hwt-ic">
                <item.Icon size={22} strokeWidth={1.5} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.href}>
                {item.cta}
                <ArrowRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="hwt-belief">
        <div className="hwt-belief-bg" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2200&q=80"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <motion.div
          className="hwt-belief-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow">OUR BELIEF</p>
          <h2 className="serif">
            Better systems
            <br />
            build better societies.
          </h2>
        </motion.div>
        <motion.p
          className="hwt-belief-aside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Technology. People. Progress.
          <br />
          That&apos;s the direction we work towards.
        </motion.p>
      </section>

      <Footer />
    </>
  );
}
