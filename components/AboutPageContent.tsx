"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe2, Share2 } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { ArrowLink, PrimaryButton } from "./Buttons";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { kind: "num" as const, n: "10+", label: "Years of Experience" },
  { kind: "icon" as const, Icon: Globe2, title: "Global", text: "Clients across geographies" },
  { kind: "icon" as const, Icon: BarChart3, title: "Enterprise", text: "Focus on measurable business outcomes" },
  { kind: "icon" as const, Icon: Share2, title: "Open Technologies", text: "Built on modern standards" },
];

const PILLARS = [
  {
    n: "01",
    title: "Ideas",
    text: "We start with the problem, not the product — shaping ideas relevant to how your business actually works.",
  },
  {
    n: "02",
    title: "Systems",
    text: "We design and engineer platforms on modern, open standards so technology can scale, integrate and evolve.",
  },
  {
    n: "03",
    title: "People",
    text: "We work as an extension of your team — collaborative, accountable and focused on shared success.",
  },
  {
    n: "04",
    title: "A Stronger Tomorrow",
    text: "We measure success by lasting impact: efficiency, resilience and digital experiences that endure.",
  },
];

function StoryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="ab-story-link">
      <span className="ab-story-orb" aria-hidden>
        <ArrowRight size={16} color="#e8891a" />
      </span>
      <span>{children}</span>
      <i aria-hidden />
    </a>
  );
}

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="ab-hero" id="about-top">
        <Header />

        <div className="ab-hero-grid">
          <motion.div
            className="ab-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="ab-kicker">
              <span />
              About Us
            </p>
            <h1 className="serif">
              An Enterprise
              <br />
              Technology Company
              <br />
              <em>for What&apos;s Next.</em>
            </h1>
            <p>
              Kosha Technohub is an enterprise technology company with more than a decade of experience in designing, developing and delivering software solutions for organisations across industries and geographies.
            </p>
            <p>
              We develop solutions based on the latest technologies and open standards, helping some of the world&apos;s leading brands create powerful digital experiences.
            </p>
            <StoryLink href="#our-story">Our Story</StoryLink>
          </motion.div>

          <motion.div
            className="ab-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease }}
            aria-hidden
          >
            <div className="ab-hero-frame">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2200&q=90"
                alt=""
                fill
                priority
                sizes="55vw"
                className="ab-hero-photo"
              />
              <div className="ab-hero-fade" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="ab-stats" aria-label="Company highlights">
        <div className="ab-stats-row">
          {STATS.map((st, i) => (
            <motion.div
              key={st.kind === "num" ? st.label : st.title}
              className={`ab-stat${st.kind === "icon" ? " ab-stat-row" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              {st.kind === "num" ? (
                <>
                  <b className="serif">{st.n}</b>
                  <span>{st.label}</span>
                </>
              ) : (
                <>
                  <st.Icon size={26} strokeWidth={1.4} aria-hidden />
                  <div>
                    <strong>{st.title}</strong>
                    <span>{st.text}</span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="ab-story">
        <div className="ab-story-inner">
          <motion.div
            className="ab-story-media"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85"
              alt="Team collaboration"
              fill
              sizes="50vw"
            />
          </motion.div>
          <motion.div
            className="ab-story-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="eyebrow">OUR STORY</p>
            <div className="rule" />
            <h2 className="serif">
              Built on trust.
              <br />
              Driven by <em>people.</em>
            </h2>
            <p>
              We work as an extension of your team — listening first, then shaping technology around the way your organisation actually works.
            </p>
            <p>
              Relationships, craft and accountability sit at the centre of every engagement, so the work we deliver is relevant today and ready for what comes next.
            </p>
            <ArrowLink href="#pillars">How we create impact</ArrowLink>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="ab-pillars">
        <div className="ab-pillars-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow">HOW WE CREATE IMPACT</p>
            <div className="rule" />
            <h2 className="serif">
              Ideas. Systems. People.
              <br />
              A stronger <em>tomorrow.</em>
            </h2>
          </motion.div>
        </div>
        <div className="ab-pillars-grid">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.title}
              className="ab-pillar"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <span className="serif">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Beyond */}
      <section id="beyond" className="ab-beyond">
        <div className="ab-beyond-bg" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85"
            alt=""
            fill
            sizes="100vw"
          />
          <div className="ab-beyond-veil" />
        </div>
        <div className="ab-beyond-inner">
          <motion.div
            className="ab-beyond-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="eyebrow">TECHNOLOGY BEYOND BOUNDARIES</p>
            <div className="rule" />
            <h2 className="serif">
              Open technologies.
              <br />
              Built to <em>endure.</em>
            </h2>
            <p>
              We design and engineer on modern, open standards — so platforms can scale, integrate and evolve without locking you in.
            </p>
            <p>
              From strategy through delivery, we measure success by business outcomes: efficiency, resilience and experiences that last.
            </p>
            <a href="/#what-we-do" className="ab-ghost">
              Explore our capabilities
              <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.ul
            className="ab-beyond-points"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            <li>
              <span className="serif">01</span>
              <div>
                <strong>Design</strong>
                <p>Solutions shaped around real business outcomes — not technology for its own sake.</p>
              </div>
            </li>
            <li>
              <span className="serif">02</span>
              <div>
                <strong>Build</strong>
                <p>Engineered on open standards so platforms integrate, scale and stay adaptable.</p>
              </div>
            </li>
            <li>
              <span className="serif">03</span>
              <div>
                <strong>Scale</strong>
                <p>Measured by efficiency, resilience and digital experiences that endure.</p>
              </div>
            </li>
          </motion.ul>
        </div>
      </section>

      {/* From India */}
      <section id="india" className="ab-india">
        <div className="ab-india-inner">
          <motion.div
            className="ab-india-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow">FROM INDIA</p>
            <div className="rule" />
            <h2 className="serif">
              From India,
              <br />
              for a more
              <br />
              <em>connected tomorrow.</em>
            </h2>
            <p>
              Headquartered in India and working with organisations across geographies, we bring global-standard engineering with a deeply collaborative way of working.
            </p>
            <p>
              That combination lets us move with pace, stay close to the problem, and help leading brands create digital experiences that travel.
            </p>
            <StoryLink href="#connect">Let&apos;s Connect</StoryLink>
          </motion.div>
          <motion.div
            className="ab-india-media"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <Image
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1800&q=85"
              alt="City skyline"
              fill
              sizes="48vw"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-end">
        <motion.div
          className="ab-end-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="serif">
            Have a project in mind?
            <br />
            Let&apos;s build what&apos;s <em>next.</em>
          </h2>
          <p>We&apos;d love to hear about your challenges and explore how we can partner with you.</p>
          <PrimaryButton href="#connect" />
        </motion.div>
      </section>
    </>
  );
}
