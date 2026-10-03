"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Layers,
  Lock,
  Settings,
  ShieldCheck,
  Target,
} from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { ArrowLink, PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

export const SERVICES = [
  {
    Icon: Target,
    title: "Strategy & Advisory",
    text: "We help define the right strategy and roadmap aligned to your business goals.",
  },
  {
    Icon: Layers,
    title: "Digital Solutions",
    text: "We build custom applications and platforms that deliver measurable business value.",
  },
  {
    Icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "We modernize infrastructure and leverage cloud to drive agility and performance.",
  },
  {
    Icon: ShieldCheck,
    title: "Data & Analytics",
    text: "We turn data into insights that enable smarter decisions and better outcomes.",
  },
  {
    Icon: Settings,
    title: "Integration & Automation",
    text: "We connect systems and automate processes to improve efficiency.",
  },
  {
    Icon: Lock,
    title: "Security & Compliance",
    text: "We help build secure, compliant and resilient technology ecosystems.",
  },
];

const HOW = [
  {
    title: "Clarity first",
    text: "We start with the business problem — aligning goals, users and constraints before technology choices.",
  },
  {
    title: "Built to scale",
    text: "Solutions are engineered on modern standards so they can integrate, grow and evolve with you.",
  },
  {
    title: "Partnership delivery",
    text: "We work as an extension of your team — accountable, collaborative and focused on outcomes.",
  },
];

export default function WhatWeDoPageContent() {
  return (
    <>
      <section className="wd-hero" id="what-we-do-top">
        <Header />
        <div className="wd-hero-grid">
          <motion.div
            className="wd-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="eyebrow">WHAT WE DO</p>
            <div className="rule" />
            <h1 className="serif">
              Solving complex challenges with clarity and <em>expertise.</em>
            </h1>
            <p>
              We partner with organizations to design, engineer and evolve technology solutions that drive efficiency, resilience and growth.
            </p>
            <a href="#capabilities" className="ab-story-link">
              <span className="ab-story-orb" aria-hidden>
                <ArrowRight size={16} color="#e8891a" />
              </span>
              <span>Explore our capabilities</span>
              <i aria-hidden />
            </a>
          </motion.div>
          <motion.div
            className="wd-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            aria-hidden
          >
            <div className="wd-hero-frame">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
                alt=""
                fill
                priority
                sizes="55vw"
                className="wd-hero-photo"
              />
              <div className="wd-hero-fade" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="wd-services">
        <div className="wd-services-inner">
          <motion.div
            className="wd-services-intro"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow">CAPABILITIES</p>
            <div className="rule" />
            <h2 className="serif">
              End-to-end technology capabilities for what&apos;s <em>next.</em>
            </h2>
            <p>
              From strategy through delivery, we help organisations solve complex challenges with clarity and expertise.
            </p>
          </motion.div>
          <div className="wd-services-grid">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                className="wd-svc"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05, ease }}
              >
                <s.Icon size={30} strokeWidth={1.4} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-how">
        <div className="wd-how-inner">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow">HOW WE DELIVER</p>
            <div className="rule" />
            <h2 className="serif">
              Practical delivery.
              <br />
              Measurable <em>impact.</em>
            </h2>
          </motion.div>
          <div className="wd-how-grid">
            {HOW.map((h, i) => (
              <motion.article
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
              >
                <span className="serif">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="wd-how-cta">
            <ArrowLink href="/approach">See our approach</ArrowLink>
          </div>
        </div>
      </section>

      <section className="wd-end">
        <motion.div
          className="wd-end-inner"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="serif">
            Ready to solve what&apos;s <em>next?</em>
          </h2>
          <p>Tell us about your challenges — we&apos;ll help shape the right path forward.</p>
          <PrimaryButton href="#connect" />
        </motion.div>
      </section>
    </>
  );
}
