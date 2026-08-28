"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Braces, LineChart, Pencil, Search } from "lucide-react";
import Image from "next/image";
import { ArrowLink } from "./Buttons";

const STEPS = [
  { Icon: Search, title: "Understand", text: "We start by listening. Gaining clarity on your challenges, goals and context." },
  { Icon: Pencil, title: "Design", text: "We shape solutions that are practical, scalable and aligned to your needs." },
  { Icon: Braces, title: "Build", text: "We engineer with precision, following best practices and modern standards." },
  { Icon: LineChart, title: "Evolve", text: "We stay with you to optimise, adapt and unlock long-term value." },
];

const STATS = [
  { n: 10, s: "+", title: "Years of Experience", text: "A decade of building trust through technology." },
  { n: 250, s: "+", title: "Projects Delivered", text: "Across industries and business functions." },
  { n: 50, s: "+", title: "Technology Experts", text: "Passionate problem solvers and builders." },
  { n: 95, s: "%", title: "Client Retention", text: "Relationships built on trust, value and results." },
];

function Count({ n, s }: { n: number; s: string }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 1100);
      setV(Math.round(n * (1 - (1 - p) ** 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, n]);
  return (
    <b ref={ref} className="serif">
      {v}
      {s}
    </b>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="approach-inner">
        <motion.div
          className="approach-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">OUR APPROACH</p>
          <div className="rule" />
          <h2 className="serif approach-h">
            Thoughtful by design.
            <br />
            Built to <em>endure.</em>
          </h2>
          <p className="approach-lede">
            We combine strategic thinking, deep technical expertise and a collaborative mindset to deliver solutions that are relevant today and ready for what&apos;s next.
          </p>
          <div className="approach-cta">
            <ArrowLink href="#connect">Our approach</ArrowLink>
          </div>
        </motion.div>

        <div className="steps">
          {STEPS.map((st, i) => (
            <motion.div
              key={st.title}
              className="step"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="step-ic">
                <st.Icon size={22} strokeWidth={1.45} />
              </div>
              <span className="step-dot" />
              <div className="step-body">
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="ap-photo">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80"
            alt="Modern house at dusk"
            fill
            sizes="40vw"
          />
        </div>
      </div>

      <div id="perspectives" className="stats">
        {STATS.map((st) => (
          <div key={st.title} className="stat">
            <Count n={st.n} s={st.s} />
            <h3 className="serif">{st.title}</h3>
            <p>{st.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
