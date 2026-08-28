"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  children = "Start a Conversation",
  href = "#connect",
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <motion.a href={href} className="btn-primary" whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      {children}
      <ArrowRight size={16} color="#e8891a" strokeWidth={2.2} />
    </motion.a>
  );
}
