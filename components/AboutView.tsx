"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";

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
  ctaTitle: string;
  ctaText: string;
  place: string;
};

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
  return (
    <div className="about">
      <header className="ab-hero">
        <div className="ab-glow" aria-hidden />
        <div className="ab-hero-grid">
          <div>
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              Inside Kosha
            </motion.p>
            <div className="ab-title">
              <motion.h1 className="serif" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 0.75, ease, delay: 0.05 }}>
                {title}
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {lede}
            </motion.p>
            <motion.a href="/inside-kosha/contact" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} whileHover={{ y: -2 }}>
              Get in touch
            </motion.a>
          </div>
          <motion.aside className="ab-glass" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.15 }}>
            <b>2014</b>
            <span>{story.established}</span>
            <div className="ab-faces">
              {story.team.map((person) => (
                <img key={person.name} src={person.image} alt="" />
              ))}
            </div>
          </motion.aside>
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

      <motion.section className="ab-story" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
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
          <motion.h2 className="serif" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {story.workTitle}
          </motion.h2>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            {story.work.map((item, i) => (
              <motion.li key={item} variants={rise} whileHover={{ y: -3 }}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <span>{item}</span>
              </motion.li>
            ))}
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
          <motion.h2 className="serif" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {story.milesTitle}
          </motion.h2>
          <div className="ab-mile-track">
            <i className="ab-mile-line" aria-hidden />
            <motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              {story.milestones.map((mile) => (
                <motion.li key={mile.year} variants={rise}>
                  <b>{mile.year}</b>
                  <strong>{mile.title}</strong>
                  <p>{mile.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </section>

      <section className="ab-steps">
        <div className="ab-wrap">
          <motion.h2 className="serif" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {story.stepsTitle}
          </motion.h2>
          <div className="ab-flow">
            <i className="ab-flow-line" aria-hidden />
            <ol>
              {story.steps.map((step, i) => (
                <li key={step}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.12 * i }}
                  >
                    {step}
                  </motion.span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ab-marks">
        <div className="ab-wrap">
          <h2 className="serif">{story.marksTitle}</h2>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {story.marks.map((mark) => (
              <motion.li key={mark.src} className={mark.dark ? "is-dark" : undefined} variants={rise} whileHover={{ y: -4 }}>
                <img src={mark.src} alt={mark.alt} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <motion.section className="ab-cta" variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <div className="ab-cta-copy">
          <p className="ab-kicker">Start a project</p>
          <h2 className="serif">{story.ctaTitle}</h2>
          <p>{story.ctaText}</p>
        </div>
        <div className="ab-cta-side">
          <p className="ab-place">{story.place}</p>
          <motion.a href="/inside-kosha/contact" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            Get in touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
