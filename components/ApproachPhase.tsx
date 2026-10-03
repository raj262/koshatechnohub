"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  Cloud,
  Code2,
  Compass,
  Database,
  FileText,
  Flag,
  GitBranch,
  Headphones,
  Layers,
  Lightbulb,
  Network,
  Puzzle,
  RefreshCw,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { PrimaryButton } from "./Buttons";
import { APPROACH_PHASES } from "@/lib/approach-phases";
import type { ApproachIcon, ApproachPhasePage } from "@/lib/approach-phase-content";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease },
};

const ICONS: Record<ApproachIcon, LucideIcon> = {
  users: Users,
  file: FileText,
  settings: Settings,
  target: Target,
  lightbulb: Lightbulb,
  branch: GitBranch,
  chart: BarChart3,
  network: Network,
  check: CheckCircle2,
  layers: Layers,
  database: Database,
  puzzle: Puzzle,
  shield: Shield,
  code: Code2,
  cloud: Cloud,
  box: Boxes,
  headset: Headphones,
  refresh: RefreshCw,
  trend: TrendingUp,
  book: BookOpen,
  compass: Compass,
  flag: Flag,
};

const HERO_SIGNALS: Partial<Record<ApproachPhasePage["visual"], { kicker: string; chips: string[] }>> = {
  define: {
    kicker: "From ideas to a clear plan.",
    chips: ["Business Goals", "Requirements", "Constraints", "User Needs", "Priorities", "Success Metrics"],
  },
  design: {
    kicker: "People at the centre. Systems that work together.",
    chips: ["User Experience", "Architecture", "Data & Integrations", "Infrastructure", "Security by Design"],
  },
  deliver: {
    kicker: "From plans to working solutions.",
    chips: ["Build", "Test", "Integrate", "Deploy"],
  },
  support: {
    kicker: "A long-term partner for your next chapter.",
    chips: ["Stabilise", "Optimise", "Adapt", "Scale"],
  },
};

const itemIn = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const trackItem = {
  hidden: { opacity: 0, y: 28, scale: 0.82 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 340, damping: 22 } },
};

function JourneyTrack({ currentSlug }: { currentSlug: string }) {
  const reduce = useReducedMotion();
  const currentIndex = Math.max(0, APPROACH_PHASES.findIndex((phase) => phase.slug === currentSlug));
  const progress = currentIndex / (APPROACH_PHASES.length - 1);
  const line = reduce
    ? { pathLength: 1 }
    : { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true, amount: 0.5 }, transition: { duration: 1.05, ease } };
  const fill = reduce
    ? { pathLength: progress }
    : { initial: { pathLength: 0 }, whileInView: { pathLength: progress }, viewport: { once: true, amount: 0.5 }, transition: { duration: 1.25, delay: 0.28, ease } };

  return (
    <div className="oad-track-wrap">
      <svg className="oad-track-rail is-h" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden>
        <motion.line x1="0" y1="1" x2="100" y2="1" stroke="#ececec" strokeWidth="2" {...line} />
        <motion.line x1="0" y1="1" x2="100" y2="1" stroke="#e8891a" strokeWidth="2" strokeLinecap="round" {...fill} />
        {!reduce && (
          <motion.circle
            r="1.35"
            cy="1"
            fill="#e8891a"
            initial={{ cx: 0, opacity: 0 }}
            whileInView={{ cx: [0, 100], opacity: [0, 1, 1, 0] }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          />
        )}
      </svg>
      <svg className="oad-track-rail is-v" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden>
        <motion.line x1="1" y1="0" x2="1" y2="100" stroke="#ececec" strokeWidth="2" {...line} />
        <motion.line x1="1" y1="0" x2="1" y2="100" stroke="#e8891a" strokeWidth="2" strokeLinecap="round" {...fill} />
      </svg>
      <motion.ol
        className="oad-track"
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.35 } } }}
      >
      {APPROACH_PHASES.map((phase) => {
        const current = phase.slug === currentSlug;
        const body = (
          <>
            <b>
              <i />
              {phase.n}
            </b>
            <strong>{phase.title}</strong>
            <em>{phase.sub}</em>
          </>
        );
        return (
          <motion.li key={phase.slug} className={current ? "is-current" : undefined} variants={trackItem}>
            {current ? (
              <span>{body}</span>
            ) : (
              <motion.a href={phase.href} whileHover={reduce ? undefined : { y: -6 }} whileTap={{ scale: 0.98 }}>
                {body}
              </motion.a>
            )}
          </motion.li>
        );
      })}
      </motion.ol>
    </div>
  );
}

function DiscoverVisual({ page }: { page: ApproachPhasePage }) {
  return (
    <div className="oad-hero-visual is-photo">
      {page.image && (
        <motion.div className="oad-hero-photo" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.15, ease }}>
          <Image src={page.image} alt={page.imageAlt ?? ""} fill priority quality={90} sizes="(max-width: 900px) 100vw, 56vw" />
        </motion.div>
      )}
      <motion.ul className="oad-board" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}>
        {["Understand", "People", "Processes", "Challenges", "Opportunities"].map((item) => (
          <motion.li key={item} variants={itemIn}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <motion.p className="oad-board-end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.85, ease }}>
        Better Solutions
      </motion.p>
      <motion.p className="oad-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
        {page.aside}
      </motion.p>
    </div>
  );
}

function ModernHero({ page }: { page: ApproachPhasePage }) {
  const phase = APPROACH_PHASES.find((item) => item.slug === page.slug);
  const signals = HERO_SIGNALS[page.visual];

  return (
    <section className="oad-hero oad-mod">
      {page.image && (
        <motion.div className="oad-mod-photo" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.15, ease }}>
          <Image src={page.image} alt={page.imageAlt ?? ""} fill priority quality={90} sizes="100vw" />
        </motion.div>
      )}
      <div className="oad-mod-inner">
        <motion.nav className="oad-crumbs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }} aria-label="Breadcrumb">
          <a href="/how-we-think">How We Think</a>
          <span>/</span>
          <a href="/how-we-think/our-approach">Our Approach</a>
          <span>/</span>
          <b>{page.title}</b>
        </motion.nav>
        <motion.p className="oad-mod-n" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
          <em>{phase?.n ?? "00"}</em>
          <span>/ 05</span>
        </motion.p>
        <motion.h1 className="serif" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}>
          {page.title}
          <em>{page.sub}</em>
        </motion.h1>
        <motion.p className="oad-lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16, ease }}>
          {page.lede}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26, ease }}>
          <PrimaryButton href="#connect" />
        </motion.div>
        {signals && (
          <motion.div className="oad-mod-signals" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.34, ease }}>
            <p>{signals.kicker}</p>
            <ul>
              {signals.chips.map((chip, i) => (
                <motion.li key={chip} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease }}>
                  {chip}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <motion.p className="oad-mod-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
        {page.aside}
      </motion.p>
    </section>
  );
}

const DELIV_TONE = ["#e8f1fb", "#e8f6ef", "#f8efe4", "#eee8f8"];

export default function ApproachPhase({ page }: { page: ApproachPhasePage }) {
  const modern = page.visual !== "discover";

  return (
    <>
      <Header />

      {modern ? (
        <ModernHero page={page} />
      ) : (
        <section className="oad-hero">
          <div className="oad-hero-copy">
            <motion.nav className="oad-crumbs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }} aria-label="Breadcrumb">
              <a href="/how-we-think">How We Think</a>
              <span>/</span>
              <a href="/how-we-think/our-approach">Our Approach</a>
              <span>/</span>
              <b>{page.title}</b>
            </motion.nav>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
              OUR APPROACH
            </motion.p>
            <motion.h1 className="serif" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}>
              {page.title}
            </motion.h1>
            <motion.p className="oad-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16, ease }}>
              {page.sub}
            </motion.p>
            <motion.p className="oad-lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22, ease }}>
              {page.lede}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3, ease }}>
              <PrimaryButton href="#connect" />
            </motion.div>
          </div>
          <DiscoverVisual page={page} />
        </section>
      )}

      <section className="oad-phase">
        <div className="oad-phase-main">
          <motion.div {...fadeUp}>
            <p className="eyebrow">WHAT WE DO IN THIS PHASE</p>
            <p className="oad-phase-intro">{page.phaseIntro}</p>
          </motion.div>
          <div className="oad-acts">
            {page.activities.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease }}
                >
                  <Icon size={22} strokeWidth={1.5} color="#e8891a" aria-hidden />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        <aside className="oad-side">
          <motion.div {...fadeUp}>
            <p className="eyebrow">{page.questionsTitle}</p>
            <ul>
              {page.questions.map((q) => (
                <li key={q}>
                  <ArrowRight size={15} color="#e8891a" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <blockquote>
              <p>“{page.quote}”</p>
            </blockquote>
          </motion.div>
        </aside>
      </section>

      <section className="oad-deliv">
        <motion.div className="oad-deliv-copy" {...fadeUp}>
          <h2 className="serif">Deliverables from This Phase</h2>
          <p>{page.deliverIntro}</p>
        </motion.div>
        <div className="oad-deliv-grid">
          {page.deliverables.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease }}
              >
                <span className="oad-deliv-ic" style={{ background: DELIV_TONE[i] }}>
                  <Icon size={22} strokeWidth={1.5} color="#1a1a1a" aria-hidden />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="oad-journey">
        <motion.div
          className="oad-journey-head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="eyebrow" variants={itemIn}>
            OUR APPROACH
          </motion.p>
          <motion.h2 className="serif" variants={itemIn}>
            A Five-Phase Journey
          </motion.h2>
          <motion.p variants={itemIn}>From understanding to long-term impact.</motion.p>
        </motion.div>
        <JourneyTrack currentSlug={page.slug} />
        <motion.div
          className="oad-next"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <p>{page.nextText}</p>
          <div className="oad-next-actions">
            {page.nextHref && page.nextLabel ? (
              <motion.a href={page.nextHref} className="btn-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                {page.nextLabel}
                <ArrowRight size={16} color="#e8891a" />
              </motion.a>
            ) : (
              <PrimaryButton href="#connect" />
            )}
            <motion.a href="/how-we-think/our-approach" className="oad-back" whileHover={{ x: -4 }}>
              <ArrowLeft size={15} />
              Back to Our Approach
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
