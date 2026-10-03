import type { Metadata } from "next";
import ApproachPhase from "@/components/ApproachPhase";
import { APPROACH_PHASE_PAGES } from "@/lib/approach-phase-content";

export const metadata: Metadata = {
  title: "Define — Our Approach — Kosha",
  description: APPROACH_PHASE_PAGES.define.lede,
};

export default function DefinePage() {
  return <ApproachPhase page={APPROACH_PHASE_PAGES.define} />;
}
