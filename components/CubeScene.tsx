"use client";

import { motion } from "framer-motion";

export default function CubeScene({ variant = "a" }: { variant?: "a" | "b" }) {
  const blocks =
    variant === "a"
      ? [
          { l: "16%", t: "28%", s: 110, bg: "#cfc8bc" },
          { l: "42%", t: "16%", s: 128, bg: "rgba(255,255,255,.5)" },
          { l: "56%", t: "38%", s: 90, bg: "#e8891a" },
          { l: "26%", t: "48%", s: 142, bg: "#b9b2a6" },
          { l: "50%", t: "54%", s: 104, bg: "rgba(255,255,255,.42)" },
          { l: "36%", t: "66%", s: 74, bg: "#f0a84a" },
        ]
      : [
          { l: "20%", t: "40%", s: 150, bg: "#cfc8bc" },
          { l: "46%", t: "18%", s: 110, bg: "rgba(255,255,255,.5)" },
          { l: "54%", t: "40%", s: 122, bg: "#e8891a" },
          { l: "30%", t: "58%", s: 96, bg: "#b9b2a6" },
          { l: "56%", t: "60%", s: 78, bg: "rgba(255,255,255,.42)" },
        ];

  return (
    <div className="cubes">
      <div className="cubes-grid" />
      <motion.div
        style={{ position: "absolute", left: "48%", top: "48%", width: 380, height: 380, marginLeft: -190, marginTop: -190 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {blocks.map((b, i) => (
          <div
            key={i}
            className="block"
            style={{
              left: b.l,
              top: b.t,
              width: b.s,
              height: b.s,
              background: b.bg,
              border: b.bg.includes("rgba") ? "1px solid rgba(255,255,255,.7)" : undefined,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
