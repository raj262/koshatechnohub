"use client";

import { useEffect, useRef } from "react";

const DOTS = 6;

export default function WaveCursor() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !root.current) return;

    document.documentElement.classList.add("has-wave-cursor");

    const nodes = Array.from(root.current.querySelectorAll<HTMLElement>("[data-dot]"));
    const points = nodes.map(() => ({ x: innerWidth / 2, y: innerHeight / 2 }));
    let mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    let hover = false;
    let ripple = 0;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      mouse = { x: event.clientX, y: event.clientY };
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      hover = Boolean(target?.closest("a, button, input, textarea, select, [role='button']"));
    };
    const onDown = () => {
      ripple = 1;
    };

    const tick = () => {
      points[0].x += (mouse.x - points[0].x) * 0.32;
      points[0].y += (mouse.y - points[0].y) * 0.32;
      for (let i = 1; i < points.length; i += 1) {
        points[i].x += (points[i - 1].x - points[i].x) * (0.22 - i * 0.015);
        points[i].y += (points[i - 1].y - points[i].y) * (0.22 - i * 0.015);
      }
      nodes.forEach((node, i) => {
        const scale = hover ? 1.35 - i * 0.08 : 1 - i * 0.09;
        node.style.transform = `translate3d(${points[i].x}px, ${points[i].y}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = String(1 - i * 0.12);
      });
      if (ripple > 0) {
        ripple += 0.045;
        if (ripple > 1.8) ripple = 0;
      }
      const ring = root.current?.querySelector<HTMLElement>("[data-ripple]");
      if (ring) {
        ring.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) scale(${ripple || 0.2})`;
        ring.style.opacity = ripple ? String(Math.max(0, 1.15 - ripple)) : "0";
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-wave-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="wave-cursor" ref={root} aria-hidden>
      {Array.from({ length: DOTS }, (_, i) => (
        <span key={i} data-dot className={i === 0 ? "is-core" : undefined} />
      ))}
      <b data-ripple />
    </div>
  );
}
