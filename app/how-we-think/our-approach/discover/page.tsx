import type { Metadata } from "next";
import ApproachPhase from "@/components/ApproachPhase";
import { APPROACH_PHASE_PAGES } from "@/lib/approach-phase-content";

export const metadata: Metadata = {
  title: "Discover — Our Approach — Kosha",
  description: APPROACH_PHASE_PAGES.discover.lede,
};

export default function DiscoverPage() {
  return <ApproachPhase page={APPROACH_PHASE_PAGES.discover} />;
}
