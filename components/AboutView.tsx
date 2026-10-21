"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { animate, motion, useInView, type Variants } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  Code2,
  Cpu,
  Gamepad2,
  Globe,
  GraduationCap,
  LayoutGrid,
  Megaphone,
  PenTool,
  Play,
  Scan,
  Share2,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

export type AboutStory = {
  established: string;
  whoTitle: string;
  who: string;
  missionTitle: string;
  mission: string;
  workTitle: string;
  work: string[];
  teamTitle: string;
  team: { name: string; role: string; image: string; linkedin?: string }[];
  milesTitle: string;
  milestones: { year: string; title: string; text: string }[];
  stepsTitle: string;
  steps: string[];
  marksTitle: string;
  marks: { src: string; alt: string; dark?: boolean }[];
  stats: { value: string; label: string }[];
};

const AboutHeroScene = dynamic(() => import("./AboutHeroScene"), { ssr: false });

const WORK_ICONS = [
  Code2,
  PenTool,
  Cpu,
  Globe,
  Scan,
  Gamepad2,
  ClipboardCheck,
  BookOpen,
  GraduationCap,
  Share2,
  Smartphone,
  Megaphone,
  LayoutGrid,
  ShoppingBag,
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};

function Count({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const match = value.match(/^(\d+)(.*)$/);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const parts = value.match(/^(\d+)(.*)$/);
    if (!parts) return;
    const controls = animate(0, Number(parts[1]), {
      duration: 1.15,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  if (!match) return <strong ref={ref}>{value}</strong>;
  return (
    <strong ref={ref}>
      {inView ? n : 0}
      {match[2]}
    </strong>
  );
}

export default function AboutView({
  title,
  lede,
  story,
}: {
  title: string;
  lede: string;
  story: AboutStory;
}) {
  const words = title.trim().split(/\s+/);
  const accent = words.pop() ?? title;
  const lead = words.join(" ");

  return (
    <div className="about">
      <header className="ab-hero">
        <div className="ab-hero-inner">
          <div className="ab-hero-copy">
            <motion.div className="ab-hero-meta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="eyebrow">Inside Kosha</p>
              <i />
              <span>Est. 2014 · Mysore</span>
            </motion.div>
            <div className="ab-title">
              <motion.h1 className="serif" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.75, ease, delay: 0.05 }}>
                {lead ? <span>{lead}</span> : null}
                <em>{accent}</em>
              </motion.h1>
            </div>
            <motion.p className="ab-hero-lede" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
              {lede}
            </motion.p>
            <motion.div className="ab-hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}>
              <a className="ab-hero-btn" href="/inside-kosha/contact">
                Get in touch
              </a>
              <a className="ab-hero-ghost" href="#about-story">
                <Play size={14} fill="currentColor" />
                Our story
              </a>
            </motion.div>
            <motion.div className="ab-hero-people" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.46 }}>
              <div className="ab-faces">
                {story.team.map((person) => (
                  <img key={person.name} src={person.image} alt={person.name} />
                ))}
              </div>
              <span>Leadership team</span>
            </motion.div>
          </div>
          <motion.div className="ab-hero-stage" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: 0.08 }}>
            <span className="ab-hero-orbit" aria-hidden>
              <b />
            </span>
            <span className="ab-hero-orbit is-slow" aria-hidden>
              <b />
            </span>
            <AboutHeroScene />
          </motion.div>
        </div>
        <motion.ul className="ab-metrics" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
          {story.stats.map((stat) => (
            <motion.li key={stat.label} variants={rise}>
              <Count value={stat.value} />
              <span>{stat.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </header>

      <motion.section id="about-story" className="ab-story" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <motion.blockquote variants={rise}>
          <span className="ab-quote" aria-hidden>“</span>
          <div>
            <p className="ab-kicker">{story.missionTitle}</p>
            <p>{story.mission}</p>
          </div>
        </motion.blockquote>
        <motion.article variants={rise}>
          <p className="ab-kicker">{story.whoTitle}</p>
          <p>{story.who}</p>
        </motion.article>
      </motion.section>

      <section className="ab-work">
        <div className="ab-wrap">
          <motion.header className="ab-work-head" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="serif">{story.workTitle}</h2>
            <p>{String(story.work.length).padStart(2, "0")} practices</p>
          </motion.header>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
            {story.work.map((item, i) => {
              const Icon = WORK_ICONS[i % WORK_ICONS.length];
              return (
                <motion.li key={item} variants={rise} whileHover={{ y: -6 }}>
                  <span className="ab-work-top">
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <Icon size={i < 2 ? 28 : 20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <strong className="serif">{item}</strong>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      <section className="ab-team">
        <div className="ab-wrap">
          <motion.h2 className="serif" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {story.teamTitle}
          </motion.h2>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            {story.team.map((person) => (
              <motion.li key={person.name} variants={rise} whileHover={{ y: -8 }}>
                <img src={person.image} alt="" />
                <strong>{person.name}</strong>
                <span>{person.role}</span>
                {person.linkedin ? (
                  <a href={person.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="ab-miles">
        <div className="ab-wrap">
          <motion.header className="ab-miles-head" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Inside Kosha</p>
            <h2 className="serif">{story.milesTitle}</h2>
          </motion.header>
          <motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            {story.milestones.map((mile, i) => (
              <motion.li key={mile.year} variants={rise}>
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b className="serif">{mile.year}</b>
                <strong>{mile.title}</strong>
                <p>{mile.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Kosha's 5-step process — hidden for now */}

      <section className="ab-marks">
        <div className="ab-wrap">
          <header className="ab-marks-head">
            <div>
              <p className="eyebrow">Inside Kosha</p>
              <h2 className="serif">{story.marksTitle}</h2>
            </div>
            <p>{String(story.marks.length).padStart(2, "0")} partners</p>
          </header>
        </div>
        <div className="ab-marks-slider" aria-label="Accreditation logos">
          <div className="ab-marks-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 || undefined}>
                {story.marks.map((mark) => (
                  <li key={`${copy}-${mark.src}`} className={mark.dark ? "is-dark" : undefined}>
                    <span className="ab-marks-logo">
                      <img src={mark.src} alt={copy === 0 ? mark.alt : ""} />
                    </span>
                    <em>{mark.alt}</em>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
