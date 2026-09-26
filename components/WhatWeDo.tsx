"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Compass, Layers, Network } from "lucide-react";
import { ArrowLink } from "./Buttons";
import { SERVICES, servicePath } from "@/lib/services";

const ICONS = {
  "technology-consulting": Compass,
  "custom-erp": Layers,
  "enterprise-platforms": Network,
  "ai-automation": Bot,
} as const;

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="wrap do-grid">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="serif sec-h">
            Solving complex challenges with clarity and <em>expertise.</em>
          </h2>
          <p className="lede">
            We partner with organizations to design, engineer and evolve technology solutions that drive efficiency, resilience and growth.
          </p>
          <div style={{ marginTop: 28 }}>
            <ArrowLink href="/what-we-do">Explore what we do</ArrowLink>
          </div>
        </motion.div>
        <div className="svcs home-svcs">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.slug];
            return (
              <motion.article
                key={service.slug}
                className="svc"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Icon size={30} strokeWidth={1.4} />
                <h3>
                  <Link href={servicePath(service.slug)}>{service.title}</Link>
                </h3>
                <p>{service.summary}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
