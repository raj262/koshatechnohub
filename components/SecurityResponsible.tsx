"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Leaf, Shield, Users } from "lucide-react";
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

const LABELS = ["Trust", "People", "Data", "Society"];

const PILLARS = [
  {
    Icon: Shield,
    title: "Security by Design",
    text: "Security is built into our architecture, development and operations.",
  },
  {
    Icon: Database,
    title: "Data Privacy",
    text: "We respect and protect the data of our clients, users and partners.",
  },
  {
    Icon: Users,
    title: "Responsible Innovation",
    text: "We develop technology that creates positive and inclusive impact.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Technology",
    text: "We build for long-term value — mindful of people and the planet.",
  },
];

export default function SecurityResponsible() {
  return (
    <>
      <Header />

      <section className="sr-hero">
        <div className="sr-hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            HOW WE THINK
          </motion.p>
          <motion.h1
            className="serif"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            Security &
            <br />
            Responsible
            <br />
            Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            We build technology with a deep sense of responsibility — to protect, to enable and to create lasting value.
          </motion.p>
          <motion.a
            href="#commitment"
            className="sr-pill"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease }}
          >
            Our Security Approach
            <ArrowRight size={16} />
          </motion.a>
        </div>
        <div className="sr-hero-visual">
          <motion.div
            className="sr-hero-photo"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, ease }}
          >
            <Image
              src="/images/security-hero.jpg"
              alt="Secure digital infrastructure"
              fill
              priority
              quality={95}
              sizes="58vw"
            />
          </motion.div>
          <motion.ul
            className="sr-labels"
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
          <motion.p className="sr-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.85 }}>
            Technology with a longer horizon
          </motion.p>
        </div>
      </section>

      <section className="sr-commit" id="commitment">
        <div className="sr-commit-head">
          <motion.div {...fadeUp}>
            <p className="eyebrow">OUR COMMITMENT</p>
            <h2 className="serif">
              Built on trust.
              <br />
              Designed for a better tomorrow.
            </h2>
          </motion.div>
          <motion.p {...fadeUp}>
            We embed security, privacy and responsibility into every stage of the technology lifecycle. Our goal is to create solutions that are secure, resilient and aligned with a more inclusive and sustainable digital future.
          </motion.p>
        </div>
        <div className="sr-grid">
          {PILLARS.map((item, i) => (
            <motion.article
              key={item.title}
              className="sr-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <span className="sr-ic">
                <item.Icon size={22} strokeWidth={1.5} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sr-quote">
        <div className="sr-quote-bg" aria-hidden>
            <Image
              src="/images/security-quote.jpg"
              alt=""
              fill
              quality={95}
              sizes="100vw"
            />
        </div>
        <motion.blockquote
          className="serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          “A safer, more inclusive digital future is a shared responsibility.”
        </motion.blockquote>
        <motion.p
          className="sr-quote-aside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          People. Technology. Society.
          <br />
          A stronger tomorrow together.
        </motion.p>
      </section>

      <section className="sr-cta">
        <motion.div {...fadeUp}>
          <p className="eyebrow">LET&apos;S BUILD TOGETHER</p>
          <h2 className="serif">Technology that earns trust and creates opportunity.</h2>
        </motion.div>
        <motion.div className="sr-cta-side" {...fadeUp}>
          <p>Let&apos;s discuss how we can help you build secure, responsible and future-ready solutions for your organisation.</p>
          <PrimaryButton href="#connect" />
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
