"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Network,
  RefreshCw,
  Shield,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease },
};

const STAGES = ["Think", "Design", "Build", "Evolve"];

const PRINCIPLES = [
  {
    Icon: Target,
    title: "Problem-First",
    text: "We start with real problems, not predefined solutions. We focus on outcomes that matter.",
  },
  {
    Icon: Layers,
    title: "Built to Scale",
    text: "We design systems that are modular, maintainable and ready for future growth.",
  },
  {
    Icon: Shield,
    title: "Security by Design",
    text: "We embed security, privacy and resilience into every layer of our engineering process.",
  },
  {
    Icon: Users,
    title: "Human-Centred",
    text: "We build for the people who use our solutions — to make their work simpler, safer and more meaningful.",
  },
  {
    Icon: Network,
    title: "Open and Interoperable",
    text: "We believe in open standards, integration and flexibility to create more connected ecosystems.",
  },
  {
    Icon: RefreshCw,
    title: "Continuous Evolution",
    text: "We learn, adapt and improve — because technology and needs continue to change.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <>
      <Header />

      <section className="ep-hero">
        <div className="ep-hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            HOW WE THINK
          </motion.p>
          <motion.h1
            className="serif"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Engineering
            <br />
            Philosophy
          </motion.h1>
          <motion.p
            className="ep-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            Practical. Principles-led. Built for what&apos;s next.
          </motion.p>
          <motion.p
            className="ep-lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
          >
            Our engineering philosophy is shaped by a simple belief — technology should solve real problems, be built to last, and create a positive impact on the people and organisations it serves.
          </motion.p>
          <motion.a
            href="/how-we-think/our-approach"
            className="ep-pill"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease }}
          >
            Our Approach
            <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="ep-hero-visual">
          <motion.div
            className="ep-hero-photo"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85"
              alt=""
              fill
              priority
              sizes="58vw"
            />
          </motion.div>
          <motion.ul
            className="ep-stages"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
            }}
          >
            {STAGES.map((stage) => (
              <motion.li
                key={stage}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
                }}
              >
                {stage}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className="ep-aside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Engineering for a more open, resilient and human tomorrow.
          </motion.p>
        </div>
      </section>

      <section className="ep-principles" id="principles">
        <div className="ep-principles-head">
          <motion.div {...fadeUp}>
            <p className="eyebrow">OUR PRINCIPLES</p>
            <h2 className="serif">
              Ideas to
              <br />
              lasting impact.
            </h2>
          </motion.div>
          <motion.p {...fadeUp}>
            These principles guide how we design, build and evolve technology. They influence the choices we make, the systems we create and the way we work with clients, partners and communities.
          </motion.p>
        </div>
        <div className="ep-grid">
          {PRINCIPLES.map((item, i) => (
            <motion.article
              key={item.title}
              className="ep-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
            >
              <span className="ep-ic">
                <item.Icon size={22} strokeWidth={1.5} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="ep-quote">
        <div className="ep-quote-bg" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=80"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <motion.blockquote
          className="serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
        >
          “Good engineering creates opportunities — not just solutions.”
        </motion.blockquote>
        <motion.p
          className="ep-quote-aside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sustainable technology for a brighter tomorrow.
        </motion.p>
      </section>

      <section className="ep-cta">
        <motion.div {...fadeUp}>
          <p className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</p>
          <h2 className="serif">
            Turn complex challenges into meaningful progress.
          </h2>
        </motion.div>
        <motion.div className="ep-cta-side" {...fadeUp}>
          <p>Let&apos;s explore how our engineering approach can help you build for a stronger, smarter future.</p>
          <PrimaryButton href="#connect" />
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
