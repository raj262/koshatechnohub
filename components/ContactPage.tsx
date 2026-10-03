"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;
const EMAIL = "hello@koshatechnohub.com";

const REGIONS = ["North America", "Europe", "India", "Middle East", "Asia Pacific"];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [help, setHelp] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "—"}`, `Need: ${help || "—"}`, "", message].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Message from kosha.in")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <Header />
      <section className="ct-hero">
        <motion.div className="ct-hero-photo" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease }}>
          <Image src="/images/contact-hero.jpg" alt="Kosha office" fill priority quality={90} sizes="56vw" />
        </motion.div>
        <div className="ct-hero-inner">
          <motion.div className="ct-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}>
            <p className="ct-crumbs">
              <a href="/inside-kosha">Inside Kosha</a>
              <span>/</span>
              Contact Us
            </p>
            <h1 className="serif">
              Let’s Build
              <br />
              <em>What’s Next.</em>
            </h1>
            <p>Whether you have a project in mind, a question about our work, or simply want to explore possibilities — we’d love to hear from you.</p>
            <ul>
              <li>
                <MapPin size={16} color="#e8891a" />
                <div>
                  <strong>Head Office</strong>
                  <span>Kosha Techno Hub Pvt. Ltd., Hootagalli Industrial Area, Mysore — 570018, India</span>
                </div>
              </li>
              <li>
                <Phone size={16} color="#e8891a" />
                <div>
                  <strong>Call us</strong>
                  <span>+91 821 297 0795 · Mon–Sat 9:00 AM – 6:00 PM (IST)</span>
                </div>
              </li>
              <li>
                <Mail size={16} color="#e8891a" />
                <div>
                  <strong>Email us</strong>
                  <span>{EMAIL} · We usually respond within one business day.</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form id="connect" className="ct-form" onSubmit={onSubmit} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12, ease }}>
            <h2>Send us a message</h2>
            <p>Tell us a little about your requirement and we’ll get back to you.</p>
            <div className="ct-row">
              <input name="name" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
              <input name="email" type="email" placeholder="Your Email*" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </div>
            <input name="company" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
            <select name="help" value={help} onChange={(e) => setHelp(e.target.value)}>
              <option value="">How can we help you?</option>
              <option>Start a project</option>
              <option>Ask a question</option>
              <option>Partnership</option>
              <option>Careers</option>
              <option>Something else</option>
            </select>
            <textarea name="message" placeholder="Your Message*" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
            <div className="ct-actions">
              <button type="submit">
                Send Message
                <ArrowRight size={16} />
              </button>
              <span>We respect your time and your privacy.</span>
            </div>
          </motion.form>
        </div>
        <aside className="ct-panel">
          <p>People. Ideas. Technology. A stronger tomorrow.</p>
          <h2 className="serif">Good conversations create great opportunities.</h2>
          <a href="#connect">
            Let’s start a conversation
            <ArrowRight size={16} />
          </a>
        </aside>
      </section>

      <section className="ct-map">
        <div>
          <h2 className="serif">We work with organisations across geographies.</h2>
          <p>From Mysore to the world — we are always open to new conversations.</p>
        </div>
        <ul>
          {REGIONS.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className="ct-end">People. Ideas. Technology. A stronger tomorrow.</p>
      </section>
      <Footer />
    </>
  );
}
