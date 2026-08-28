"use client";

import { motion } from "framer-motion";
import { Cloud, Layers, Lock, Settings, ShieldCheck, Target } from "lucide-react";
import { ArrowLink } from "./Buttons";

const SERVICES = [
  { Icon: Target, title: "Strategy & Advisory", text: "We help define the right strategy and roadmap aligned to your business goals." },
  { Icon: Layers, title: "Digital Solutions", text: "We build custom applications and platforms that deliver measurable business value." },
  { Icon: Cloud, title: "Cloud & Infrastructure", text: "We modernize infrastructure and leverage cloud to drive agility and performance." },
  { Icon: ShieldCheck, title: "Data & Analytics", text: "We turn data into insights that enable smarter decisions and better outcomes." },
  { Icon: Settings, title: "Integration & Automation", text: "We connect systems and automate processes to improve efficiency." },
  { Icon: Lock, title: "Security & Compliance", text: "We help build secure, compliant and resilient technology ecosystems." },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="wrap do-grid">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="serif sec-h">
            Solving complex challenges with clarity and <em>expertise.</em>
          </h2>
          <p className="lede">
            We partner with organizations to design, engineer and evolve technology solutions that drive efficiency, resilience and growth.
          </p>
          <div style={{ marginTop: 28 }}>
            <ArrowLink href="#approach">Explore our capabilities</ArrowLink>
          </div>
        </motion.div>
        <div className="svcs">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              className="svc"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <s.Icon size={30} strokeWidth={1.4} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
