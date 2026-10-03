import type { Metadata } from "next";
import ApproachPhase from "@/components/ApproachPhase";
import { APPROACH_PHASE_PAGES } from "@/lib/approach-phase-content";

export const metadata: Metadata = {
  title: "Support — Our Approach — Kosha",
  description: APPROACH_PHASE_PAGES.support.lede,
};

export default function SupportPage() {
  return <ApproachPhase page={APPROACH_PHASE_PAGES.support} />;
}
