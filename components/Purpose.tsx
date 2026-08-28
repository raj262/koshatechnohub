"use client";

import { motion } from "framer-motion";
import { ArrowLink } from "./Buttons";

function PeopleIcon() {
  return (
    <svg width="54" height="40" viewBox="0 0 54 40" fill="none" aria-hidden>
      <circle cx="15" cy="16" r="5" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M6 34c1.2-6 4.4-9 9-9s7.8 3 9 9" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="13" r="5.5" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M16.5 34c1.4-7 5.2-10.5 10.5-10.5S41.6 27 43 34" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="39" cy="16" r="5" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M30 34c1.2-6 4.4-9 9-9s7.8 3 9 9" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 6.5c3.2-3.4 7.2-4.2 11-4.2 3.8 0 7.8.8 11 4.2" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <circle cx="20" cy="22" r="14" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="8" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="3" fill="#e8891a" />
      <path d="M20 22 34 6" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M29.5 6.2h5.2V11.5" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrityIcon() {
  return (
    <svg width="40" height="44" viewBox="0 0 40 44" fill="none" aria-hidden>
      <path
        d="M20 2.5 36 9v12.5c0 9.2-7 16.4-16 20.5C11 37.9 4 30.7 4 21.5V9L20 2.5Z"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m13 22 5 5 10-12" stroke="#e8891a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FutureIcon() {
  return (
    <svg width="40" height="46" viewBox="0 0 40 46" fill="none" aria-hidden>
      <path
        d="M20 14c-5.5 0-10 4.3-10 9.6 0 3.4 1.8 6.4 4.5 8.1V36h11v-4.3c2.7-1.7 4.5-4.7 4.5-8.1C30 18.3 25.5 14 20 14Z"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <path d="M16 36h8M17.5 39.5h5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 3v4.5M8 8.5l2.8 2.8M32 8.5l-2.8 2.8" stroke="#e8891a" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const VALUES = [
  { Icon: PeopleIcon, title: "People First", text: "We value relationships, collaboration and shared success." },
  { Icon: ImpactIcon, title: "Impact Focused", text: "We measure success by the impact we create together." },
  { Icon: IntegrityIcon, title: "Integrity Always", text: "We act with honesty, transparency and accountability." },
  { Icon: FutureIcon, title: "Future Ready", text: "We embrace change and build solutions that last." },
];

export default function Purpose() {
  return (
    <section id="purpose" className="purpose">
      <div className="purpose-inner">
        <motion.div
          className="purpose-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">OUR PURPOSE</p>
          <div className="rule" />
          <h2 className="serif purpose-h">
            Technology with
            <br />
            purpose.
            <br />
            <em>Impact</em> that lasts.
          </h2>
          <p className="purpose-lede">
            At Kosha, our purpose is to solve meaningful business problems through technology that is relevant, reliable, and responsible.
          </p>
          <div className="purpose-cta">
            <ArrowLink href="#connect">Learn more about us</ArrowLink>
          </div>
        </motion.div>

        <div className="purpose-values">
          {VALUES.map((v, i) => (
            <motion.article
              key={v.title}
              className="purpose-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <div className="purpose-icon">
                <v.Icon />
              </div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
