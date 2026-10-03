"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StartProject() {
  return (
    <section className="sp-cta">
      <motion.div
        className="sp-cta-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="eyebrow">Start a project</p>
          <h2 className="serif">Would you like to start a project with Kosha Technohub?</h2>
          <p>We believe in work that goes beyond the expected. Come build with us.</p>
        </div>
        <a href="/inside-kosha/contact">
          Get in touch
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
