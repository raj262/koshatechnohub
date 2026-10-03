"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Layers, Monitor, Workflow } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.28 },
  transition: { duration: 0.65, ease },
};

const LABELS = ["Modern", "Scalable", "Open", "Secure"];

const PILLARS = [
  {
    id: "foundations",
    Icon: Workflow,
    title: "Modern Foundations",
    text: "Cloud-ready, modular and scalable architectures.",
  },
  {
    id: "connected",
    Icon: Cloud,
    title: "Open and Connected",
    text: "Interoperable systems that integrate easily across platforms.",
  },
  {
    id: "evolve",
    Icon: Layers,
    title: "Built to Evolve",
    text: "Flexible architectures that adapt to changing business needs.",
  },
  {
    id: "practical",
    Icon: Monitor,
    title: "Practical by Design",
    text: "We balance innovation with real-world usability and maintainability.",
  },
];

const PARTNERS = ["Microsoft", "AWS", "Google Cloud", "Other leading technologies"];

export default function TechnologyArchitecture() {
  return (
    <>
      <Header />

      <section className="ta-hero">
        <div className="ta-hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            HOW WE THINK
          </motion.p>
          <motion.h1
            className="serif"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            Technology &
            <br />
            Architecture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            We design and build modern, scalable and future-ready technology foundations that support real business outcomes.
          </motion.p>
          <motion.a
            href="#connect"
            className="ta-pill"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease }}
          >
            Talk to Our Experts
            <ArrowRight size={16} />
          </motion.a>
        </div>
        <div className="ta-hero-visual">
          <motion.div
            className="ta-hero-photo"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
              alt=""
              fill
              priority
              sizes="58vw"
            />
          </motion.div>
          <motion.ul
            className="ta-labels"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
            }}
          >
            {LABELS.map((item) => (
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
          <motion.p className="ta-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.85 }}>
            Technology for a more possible tomorrow
          </motion.p>
        </div>
      </section>

      <section className="ta-approach">
        <div className="ta-approach-head">
          <motion.div {...fadeUp}>
            <p className="eyebrow">OUR APPROACH TO TECHNOLOGY</p>
            <h2 className="serif">
              Built for today.
              <br />
              Ready for what&apos;s next.
            </h2>
          </motion.div>
          <motion.p {...fadeUp}>
            We choose the right technologies, architectures and integrations for each context — balancing performance, security, flexibility and long-term maintainability.
          </motion.p>
          <motion.p className="ta-impact" {...fadeUp}>
            Right technology.
            <br />
            Real impact.
          </motion.p>
        </div>
        <div className="ta-grid">
          {PILLARS.map((item, i) => (
            <motion.article
              key={item.title}
              id={item.id}
              className="ta-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <span className="ta-ic">
                <item.Icon size={22} strokeWidth={1.5} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#connect">
                Learn more
                <ArrowRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="ta-partners">
        <motion.div {...fadeUp}>
          <p className="eyebrow">OUR TECHNOLOGY PARTNERS</p>
          <h2 className="serif">Stronger together.</h2>
          <p>
            We work with trusted technology partners to deliver robust, secure and future-ready solutions.
          </p>
        </motion.div>
        <div className="ta-logos">
          {PARTNERS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="ta-belief">
        <div className="ta-belief-bg" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <motion.div
          className="ta-belief-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow">OUR BELIEF</p>
          <h2 className="serif">
            The right architecture doesn&apos;t just support today.
            <br />
            It creates tomorrow.
          </h2>
        </motion.div>
        <motion.p
          className="ta-belief-aside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          People. Ideas. Technology. Progress.
          <br />
          Built to last.
        </motion.p>
      </section>

      <section className="ta-end">
        <PrimaryButton href="#connect" />
      </section>

      <Footer />
    </>
  );
}
