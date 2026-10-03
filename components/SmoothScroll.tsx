"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    document.documentElement.classList.add("is-smooth");

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = 0;

    const limit = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      target = Math.max(0, Math.min(limit(), target + event.deltaY));
    };

    const onKey = (event: KeyboardEvent) => {
      const jump = window.innerHeight * 0.82;
      if (event.key === "ArrowDown" || event.key === "PageDown") target = Math.min(limit(), target + jump);
      if (event.key === "ArrowUp" || event.key === "PageUp") target = Math.max(0, target - jump);
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = limit();
    };

    const tick = () => {
      current += (target - current) * 0.08;
      if (Math.abs(target - current) < 0.2) current = target;
      window.scrollTo(0, current);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("is-smooth");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
