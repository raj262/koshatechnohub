"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Handshake, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;

const PEOPLE = [
  {
    name: "Venugopal D.N.",
    role: "Chairman & Advisor",
    image: "/about/venugopal.png",
    bio: "Brings invaluable experience, principles and guidance to Kosha. His belief in education, ethics and purposeful work continues to inspire our journey.",
    quote: "Technology is most meaningful when it helps people and society grow.",
  },
  {
    name: "Sagar Deshpande",
    role: "Director",
    image: "/about/sagar.png",
    bio: "Leads strategy, business growth and client engagement. With over a decade of experience in enterprise technology, he is focused on building scalable solutions that solve real business problems.",
    quote: "Our focus is simple — understand the real problem, engineer a practical solution, and create lasting impact.",
  },
  {
    name: "Kavya R.N.",
    role: "Director — R&D",
    image: "/about/kavya.png",
    bio: "Leads research, product development and technology innovation at Kosha. With a strong engineering background and a passion for meaningful innovation, she drives the development of products and platforms for the future.",
    quote: "Innovation happens when curiosity meets purpose.",
  },
];

const VALUES = [
  { Icon: Users, title: "People First", text: "We build for people, not just systems." },
  { Icon: Lightbulb, title: "Practical Thinking", text: "Real solutions for real challenges." },
  { Icon: BarChart3, title: "Long-Term Value", text: "Built to evolve, not just deliver." },
  { Icon: Handshake, title: "Collaborative Leadership", text: "Together, we go further." },
];

export default function Leadership() {
  return (
    <>
      <Header />

      <section className="ls-hero">
        <motion.div className="ls-hero-photo" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease }}>
          <Image src="/images/lead-hero.jpg" alt="The Kosha leadership team at work" fill priority quality={90} sizes="100vw" />
        </motion.div>
        <div className="ls-hero-inner">
          <motion.p className="ls-crumbs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }}>
            <a href="/inside-kosha">Inside Kosha</a>
            <span>/</span>
            Leadership
          </motion.p>
          <motion.h1 className="serif" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}>
            People who build
            <em>what’s next.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12, ease }}>
            Our leadership brings a blend of practical experience, technical depth and a long-term perspective. We work closely with our team, clients and partners to build technology that creates real and lasting value.
          </motion.p>
        </div>
        <motion.p className="ls-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          People. Ideas. Technology. Impact.
          <br />
          A stronger tomorrow together.
        </motion.p>
      </section>

      <section className="ls-board" id="team">
        <div className="ls-people">
          {PEOPLE.map((person, i) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div className="ls-photo">
                <Image src={person.image} alt={person.name} fill sizes="220px" />
              </div>
              <h2>{person.name}</h2>
              <span>{person.role}</span>
              <p>{person.bio}</p>
              <blockquote>“{person.quote}”</blockquote>
            </motion.article>
          ))}
        </div>
        <motion.aside className="ls-panel" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }}>
          <p className="eyebrow">OUR LEADERSHIP</p>
          <h2 className="serif">
            Different strengths.
            <br />
            A shared purpose.
          </h2>
          <p>We combine experience, engineering and empathy to build technology that makes organisations stronger.</p>
          <a href="#team">
            Meet the team
            <ArrowRight size={16} />
          </a>
        </motion.aside>
      </section>

      <section className="ls-values">
        {VALUES.map((value) => (
          <article key={value.title}>
            <value.Icon size={20} color="#e8891a" strokeWidth={1.6} />
            <strong>{value.title}</strong>
            <span>{value.text}</span>
          </article>
        ))}
        <p>People. Ideas. Technology. A stronger tomorrow.</p>
      </section>

      <Footer />
    </>
  );
}
