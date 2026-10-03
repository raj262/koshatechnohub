import type { Metadata } from "next";
import ApproachPhase from "@/components/ApproachPhase";
import { APPROACH_PHASE_PAGES } from "@/lib/approach-phase-content";

export const metadata: Metadata = {
  title: "Deliver — Our Approach — Kosha",
  description: APPROACH_PHASE_PAGES.deliver.lede,
};

export default function DeliverPage() {
  return <ApproachPhase page={APPROACH_PHASE_PAGES.deliver} />;
}
