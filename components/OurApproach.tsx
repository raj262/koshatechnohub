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
import Header from "./Header";
import Footer from "./Footer";
import { PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease },
};

const PATH = [
  { label: "Understand", x: 8, y: 88 },
  { label: "Assess", x: 28, y: 70 },
  { label: "Architect", x: 48, y: 54 },
  { label: "Build", x: 64, y: 38 },
  { label: "Scale", x: 78, y: 24 },
  { label: "Real Outcomes", x: 92, y: 10, peak: true },
];

const GLANCE = [
  { Icon: Users, title: "Understand", text: "We start by listening – understanding your business, goals, users and challenges." },
  { Icon: Search, title: "Assess", text: "We analyse current systems, processes, risks and opportunities to identify what really matters." },
  { Icon: Cog, title: "Architect", text: "We design the right solution architecture, technology roadmap and implementation plan." },
  { Icon: Braces, title: "Build", text: "We engineer, integrate and deploy with a focus on quality, security and minimal business disruption." },
  { Icon: BarChart3, title: "Scale", text: "We support, optimise and evolve the solution to ensure long-term value and growth." },
];

const PRINCIPLES = [
  { Icon: Target, title: "Business First", text: "We align technology with real business outcomes, not just technical possibilities." },
  { Icon: Users, title: "People Centric", text: "We design solutions that are easy to adopt and create a positive experience for users." },
  { Icon: Lightbulb, title: "Solution Oriented", text: "We focus on practical, implementable solutions that solve actual problems." },
  { Icon: Leaf, title: "Sustainable Growth", text: "We build systems that are secure, scalable and ready for what comes next." },
];

const WORK = [
  { n: "01", title: "Discover", sub: "Understand", href: "/how-we-think/our-approach/discover", items: ["Stakeholder discussions", "Goal setting", "Initial assessment"] },
  { n: "02", title: "Define", sub: "Requirements", href: "/how-we-think/our-approach/define", items: ["Detailed analysis", "Process mapping", "Opportunity identification"] },
  { n: "03", title: "Design", sub: "Solution", href: "/how-we-think/our-approach/design", items: ["Solution architecture", "Technology selection", "Roadmap and planning"] },
  { n: "04", title: "Deliver", sub: "Implementation", href: "/how-we-think/our-approach/deliver", items: ["Agile execution", "Regular reviews", "Quality and security focus"] },
  { n: "05", title: "Support", sub: "Evolve", href: "/how-we-think/our-approach/support", items: ["Monitoring and optimisation", "User enablement", "Continuous improvement"] },
];

const OUTCOMES = [
  { Icon: BarChart3, title: "Greater Efficiency", text: "Streamlined processes and reduced manual effort." },
  { Icon: CheckCircle2, title: "Better Decisions", text: "Access to reliable data and real-time insights." },
  { Icon: Users, title: "Stronger Teams", text: "Improved collaboration and user adoption." },
  { Icon: Star, title: "Long-Term Value", text: "Scalable systems that grow with your business." },
];

export default function OurApproach() {
  return (
    <>
      <Header />

      <section className="oa-hero">
        <motion.div
          className="oa-hero-art"
          aria-hidden
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        >
          <svg viewBox="0 0 1600 700" preserveAspectRatio="xMaxYMid slice">
            <defs>
              <linearGradient id="oaSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8f5ef" />
                <stop offset="100%" stopColor="#efe8dc" />
              </linearGradient>
              <linearGradient id="oaFar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ddd6cb" />
                <stop offset="100%" stopColor="#cfc7bb" />
              </linearGradient>
              <linearGradient id="oaMid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8c0b4" />
                <stop offset="100%" stopColor="#aea79c" />
              </linearGradient>
              <linearGradient id="oaNear" x1="0" y1="0" x2="0.2" y2="1">
                <stop offset="0%" stopColor="#a39c90" />
                <stop offset="45%" stopColor="#7f786e" />
                <stop offset="100%" stopColor="#6b655c" />
              </linearGradient>
              <linearGradient id="oaFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f8f5ef" stopOpacity="1" />
                <stop offset="34%" stopColor="#f8f5ef" stopOpacity="0.96" />
                <stop offset="52%" stopColor="#f8f5ef" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#f8f5ef" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1600" height="700" fill="url(#oaSky)" />
            <path d="M0 430 C 220 400 390 440 540 370 C 720 286 880 330 1040 250 C 1180 184 1340 210 1600 150 L 1600 700 L 0 700 Z" fill="url(#oaFar)" opacity="0.5" />
            <path d="M180 540 C 420 470 590 510 760 400 C 930 292 1080 330 1220 220 C 1330 142 1450 168 1600 118 L 1600 700 L 180 700 Z" fill="url(#oaMid)" opacity="0.72" />
            <path d="M420 640 C 680 530 860 560 1000 400 C 1120 270 1208 188 1288 108 C 1324 68 1362 58 1394 78 C 1450 116 1520 176 1600 210 L 1600 700 L 420 700 Z" fill="url(#oaNear)" />
            <rect width="1600" height="700" fill="url(#oaFade)" />
          </svg>
        </motion.div>
        <div className="oa-hero-inner">
          <motion.div
            className="oa-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="eyebrow">OUR APPROACH</p>
            <h1>
              From Understanding
              <br />
              to <em>Real Outcomes.</em>
            </h1>
            <p>A structured, collaborative and practical approach to solving business problems with technology.</p>
          </motion.div>
          <motion.div
            className="oa-path"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
            aria-hidden
          >
            <svg className="oa-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                className="oa-path-line"
                d="M8 88 C 18 80, 22 76, 28 70 S 42 58, 48 54 S 58 44, 64 38 S 72 28, 78 24 S 88 12, 92 10"
                fill="none"
                stroke="#e8891a"
                strokeWidth="0.38"
                strokeDasharray="1.35 1.15"
                strokeLinecap="round"
              />
            </svg>
            {PATH.map((p, i) => (
              <motion.div
                key={p.label}
                className={`oa-node${p.peak ? " oa-node-end" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease }}
              >
                {p.peak ? (
                  <span className="oa-flag">
                    <i />
                    <b />
                  </span>
                ) : (
                  <i />
                )}
                <span>{p.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="oa-hero-aside"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            A clearer path
            <br />
            to what matters.
          </motion.p>
        </div>
      </section>

      <section className="oa-glance" id="glance">
        <div className="oa-glance-top">
          <motion.div {...fadeUp}>
            <h2 className="serif">Our Approach at a Glance</h2>
            <p>We combine business understanding, domain experience and engineering capability to deliver solutions that are relevant, scalable and measurable.</p>
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
              whileHover={{ y: -6 }}
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

      <section className="oa-belief">
        <motion.div className="oa-belief-left" {...fadeUp}>
          <p className="eyebrow">OUR BELIEF</p>
          <h2 className="serif">
            Technology works best when it is built around <em>people, processes and purpose.</em>
          </h2>
        </motion.div>
        <div className="oa-belief-right">
          <motion.div {...fadeUp}>
            <p className="eyebrow">OUR GUIDING PRINCIPLES</p>
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
                whileHover={{ y: -4 }}
              >
                <p.Icon size={22} strokeWidth={1.5} color="#e8891a" aria-hidden />
                <strong>{p.title}</strong>
                <p>{p.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="oa-flow" id="how-we-work">
        <motion.div className="oa-flow-head" {...fadeUp}>
          <p className="eyebrow">HOW WE WORK</p>
          <h2 className="serif">How We Work</h2>
          <p>A structured process with flexibility where it matters.</p>
          <a href="/how-we-think/our-approach/discover">
            A closer look at each step
            <ArrowRight size={15} />
          </a>
        </motion.div>
        <ol className="oa-flow-list">
          {WORK.map((w, i) => (
            <motion.li
              key={w.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <a href={w.href}>
                <span className="oa-flow-n">{w.n}</span>
                <div className="oa-flow-copy">
                  <h3 className="serif">{w.title}</h3>
                  <em>{w.sub}</em>
                </div>
                <ul>
                  {w.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="oa-flow-go">
                  Explore
                  <ArrowRight size={16} />
                </span>
              </a>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="oa-outcome" id="outcomes">
        <motion.div className="oa-outcome-copy" {...fadeUp}>
          <p className="eyebrow">THE OUTCOME</p>
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
              whileHover={{ y: -5 }}
            >
              <o.Icon size={24} strokeWidth={1.5} color="#e8891a" aria-hidden />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
