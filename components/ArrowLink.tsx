"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ArrowLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <motion.a href={href} className="link-arrow" whileHover="hover">
      <span>{children}</span>
      <motion.span variants={{ hover: { x: 4 } }} transition={{ duration: 0.2 }}>
        <ArrowRight size={16} strokeWidth={1.75} />
      </motion.span>
    </motion.a>
  );
}
