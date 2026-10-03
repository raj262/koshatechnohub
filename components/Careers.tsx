"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Lightbulb, MapPin, Settings, Users } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease },
};

const TRAITS = [
  { Icon: Lightbulb, title: "Meaningful Work", text: "Solve real problems." },
  { Icon: Users, title: "Learn & Grow", text: "Continuous learning and mentorship." },
  { Icon: Settings, title: "Collaborative Culture", text: "Open, supportive and respectful." },
  { Icon: BarChart3, title: "Real Impact", text: "Contribute to a stronger tomorrow." },
];

const ROLES = [
  { title: "Software Developer", area: "Product & Platforms", place: "Mysore · Full-time", tags: ["PHP", "Laravel", "React", "MySQL"] },
  { title: "UI/UX Designer", area: "Product Design", place: "Mysore · Full-time", tags: ["Figma", "UI/UX", "Web & Mobile"] },
  { title: "Business Development Executive", area: "Sales & Partnerships", place: "Mysore · Full-time", tags: ["B2B Sales", "Client Engagement", "IT Services"] },
  { title: "Marketing Intern", area: "Marketing", place: "Mysore · Internship", tags: ["Content", "Digital Marketing", "Research"] },
];

export default function Careers() {
  return (
    <>
      <Header />
      <section className="cr-hero">
        <motion.div className="cr-hero-photo" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease }}>
          <Image src="/images/careers-hero.jpg" alt="The Kosha team collaborating" fill priority quality={90} sizes="100vw" />
        </motion.div>
        <div className="cr-hero-inner">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}>
            <p className="cr-crumbs">
              <a href="/inside-kosha/about-us">Inside Kosha</a>
              <span>/</span>
              Careers
            </p>
            <h1 className="serif">
              Build Your
              <br />
              <em>Best Work Here.</em>
            </h1>
            <p>
              Work on real problems. Learn continuously. Collaborate with people who care about impact. Grow with a team that values integrity, curiosity and ownership.
            </p>
          </motion.div>
        </div>
        <motion.p className="cr-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          A great place to do meaningful work.
        </motion.p>
      </section>

      <section className="cr-traits">
        {TRAITS.map((t, i) => (
          <motion.article key={t.title} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.05, ease }}>
            <t.Icon size={20} color="#e8891a" strokeWidth={1.6} />
            <strong>{t.title}</strong>
            <span>{t.text}</span>
          </motion.article>
        ))}
      </section>

      <section className="cr-roles" id="roles">
        <div className="cr-roles-head">
          <h2 className="serif">Current Opportunities</h2>
          <a href="mailto:hello@koshatechnohub.com?subject=Careers">
            View all roles
            <ArrowRight size={14} />
          </a>
        </div>
        <div className="cr-grid">
          {ROLES.map((role, i) => (
            <motion.a
              key={role.title}
              href={`mailto:hello@koshatechnohub.com?subject=${encodeURIComponent(role.title)}`}
              className="cr-role"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <h3>
                {role.title}
                <ArrowRight size={16} />
              </h3>
              <b>{role.area}</b>
              <p>
                <MapPin size={13} />
                {role.place}
              </p>
              <ul>
                {role.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.a>
          ))}
          <motion.aside className="cr-cta" {...fadeUp}>
            <h3 className="serif">Let’s build what’s next, together.</h3>
            <a href="#roles">
              Explore Opportunities
              <ArrowRight size={16} />
            </a>
          </motion.aside>
        </div>
      </section>

      <section className="cr-life" id="life">
        <p>
          <strong>Life at Kosha</strong>
          <span>Ideas, collaboration, learning and a shared purpose. Here’s a glimpse of what makes Kosha special.</span>
        </p>
        <a href="mailto:hello@koshatechnohub.com?subject=Life at Kosha">
          Explore life at Kosha
          <ArrowRight size={14} />
        </a>
      </section>
      <Footer />
    </>
  );
}
