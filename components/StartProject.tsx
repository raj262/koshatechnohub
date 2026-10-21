"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StartProject() {
  return (
    <section className="sp-cta">
      <i className="sp-cta-glow" aria-hidden />
      <p className="sp-cta-mark serif" aria-hidden>
        Build
      </p>
      <motion.div
        className="sp-cta-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Start a project</p>
        <div className="sp-cta-row">
          <h2 className="serif">
            Would you like to start a project with <em>Kosha Technohub?</em>
          </h2>
          <div className="sp-cta-side">
            <p>We believe in work that goes beyond the expected. Come build with us.</p>
            <a href="/inside-kosha/contact">
              Get in touch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
