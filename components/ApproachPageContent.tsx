"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Braces,
  CheckCircle2,
  Cog,
  Leaf,
  Lightbulb,
  Search,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { ArrowLink, PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

const GLANCE = [
  {
    Icon: Users,
    title: "Understand",
    text: "We start by listening – understanding your business, goals, users and challenges.",
  },
  {
    Icon: Search,
    title: "Assess",
    text: "We analyse current systems, processes, risks and opportunities to identify what really matters.",
  },
  {
    Icon: Cog,
    title: "Architect",
    text: "We design the right solution architecture, technology roadmap and implementation plan.",
  },
  {
    Icon: Braces,
    title: "Build",
    text: "We engineer, integrate and deploy with a focus on quality, security and minimal business disruption.",
  },
  {
    Icon: BarChart3,
    title: "Scale",
    text: "We support, optimise and evolve the solution to ensure long-term value and growth.",
  },
];

export { GLANCE };

const PRINCIPLES = [
  {
    Icon: Target,
    title: "Business First",
    text: "We align technology with real business outcomes, not just technical possibilities.",
  },
  {
    Icon: Users,
    title: "People Centric",
    text: "We design solutions that are easy to adopt and create a positive experience for users.",
  },
  {
    Icon: Lightbulb,
    title: "Solution Oriented",
    text: "We focus on practical, implementable solutions that solve actual problems.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Growth",
    text: "We build systems that are secure, scalable and ready for what comes next.",
  },
];

const WORK = [
  {
    n: "01",
    title: "Discover",
    color: "#3b82f6",
    items: ["Stakeholder discussions", "Goal setting", "Initial assessment"],
  },
  {
    n: "02",
    title: "Define",
    color: "#e8891a",
    items: ["Detailed analysis", "Process mapping", "Opportunity identification"],
  },
  {
    n: "03",
    title: "Design",
    color: "#22a06b",
    items: ["Solution architecture", "Technology selection", "Roadmap and planning"],
  },
  {
    n: "04",
    title: "Deliver",
    color: "#7c6cf0",
    items: ["Agile execution", "Regular reviews", "Quality and security focus"],
  },
  {
    n: "05",
    title: "Support",
    color: "#e05a3c",
    items: ["Monitoring and optimisation", "User enablement", "Continuous improvement"],
  },
];

const OUTCOMES = [
  {
    Icon: BarChart3,
    title: "Greater Efficiency",
    text: "Streamlined processes and reduced manual effort.",
  },
  {
    Icon: CheckCircle2,
    title: "Better Decisions",
    text: "Access to reliable data and real-time insights.",
  },
  {
    Icon: Users,
    title: "Stronger Teams",
    text: "Improved collaboration and user adoption.",
  },
  {
    Icon: Star,
    title: "Long-Term Value",
    text: "Scalable systems that grow with your business.",
  },
];

const PATH = [
  { label: "Understand", x: 18, y: 78 },
  { label: "Assess", x: 34, y: 62 },
  { label: "Architect", x: 50, y: 48 },
  { label: "Build", x: 66, y: 34 },
  { label: "Scale", x: 82, y: 20 },
];

export default function ApproachPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="oa-hero" id="approach-top">
        <Header />
        <div className="oa-hero-bg" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="oa-hero-img"
          />
          <div className="oa-hero-veil" />
        </div>

        <div className="oa-hero-inner">
          <motion.div
            className="oa-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="oa-kicker">
              <span />
              Our Approach
            </p>
            <h1 className="serif">
              From Understanding to
              <br />
              <em>Real Outcomes.</em>
            </h1>
            <p>
              A structured, collaborative and practical approach to solving business problems with technology.
            </p>
          </motion.div>

          <motion.div
            className="oa-path"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            aria-hidden
          >
            <svg className="oa-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M12 82 C 28 70, 36 64, 42 56 S 58 42, 66 34 S 78 22, 88 16"
                fill="none"
                stroke="rgba(255,255,255,.55)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {PATH.map((p, i) => (
              <div
                key={p.label}
                className={`oa-node${i === PATH.length - 1 ? " oa-node-end" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <i />
                <span>{p.label}</span>
              </div>
            ))}
          </motion.div>

          <p className="oa-hero-aside">A Clearer Path To What Matters.</p>
        </div>
      </section>

      {/* At a Glance */}
      <section id="glance" className="oa-glance">
        <div className="oa-glance-top">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <h2 className="serif">Our Approach at a Glance</h2>
            <p>
              We combine business understanding, domain experience and engineering capability to deliver solutions that are relevant, scalable and measurable.
            </p>
            <a href="#how-we-work" className="oa-outline">
              Explore Our Approach
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
        <div className="oa-glance-steps">
          {GLANCE.map((s, i) => (
            <motion.article
              key={s.title}
              className="oa-glance-step"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <div className="oa-glance-ic">
                <s.Icon size={22} strokeWidth={1.5} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < GLANCE.length - 1 && <span className="oa-glance-arrow" aria-hidden>→</span>}
            </motion.article>
          ))}
        </div>
      </section>

      {/* Belief + Principles */}
      <section className="oa-belief">
        <motion.div
          className="oa-belief-left"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="oa-kicker oa-kicker-light">
            <span />
            Our Belief
          </p>
          <h2 className="serif">
            Technology works best when it is built around{" "}
            <em>people, processes and purpose.</em>
          </h2>
        </motion.div>
        <div className="oa-belief-right">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow">OUR GUIDING PRINCIPLES</p>
            <div className="rule" />
            <h3 className="serif oa-principles-h">
              Practical. Focused.
              <br />
              Collaborative. Future-Ready.
            </h3>
          </motion.div>
          <div className="oa-principles">
            {PRINCIPLES.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
              >
                <p.Icon size={22} strokeWidth={1.5} color="#e8891a" aria-hidden />
                <strong>{p.title}</strong>
                <p>{p.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="oa-work">
        <div className="oa-work-head">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <div className="rule" />
            <h2 className="serif">How We Work</h2>
            <p>A structured process with flexibility where it matters.</p>
          </div>
          <ArrowLink href="#outcomes">A Closer Look at Each Step</ArrowLink>
        </div>
        <div className="oa-work-grid">
          {WORK.map((w, i) => (
            <motion.article
              key={w.title}
              className="oa-work-step"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <span className="oa-work-n" style={{ background: w.color }}>
                {w.n}
              </span>
              <h3>{w.title}</h3>
              <ul>
                {w.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section id="outcomes" className="oa-outcome">
        <motion.div
          className="oa-outcome-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="eyebrow">THE OUTCOME</p>
          <div className="rule" />
          <h2 className="serif">The Outcome</h2>
          <p>Technology that is useful, usable and built for long-term impact.</p>
          <PrimaryButton href="#connect" />
        </motion.div>
        <div className="oa-outcome-grid">
          {OUTCOMES.map((o, i) => (
            <motion.article
              key={o.title}
              className="oa-outcome-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <o.Icon size={24} strokeWidth={1.5} color="#e8891a" aria-hidden />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
