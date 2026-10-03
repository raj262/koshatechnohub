import type { Metadata } from "next";
import OurJourney from "@/components/OurJourney";

export const metadata: Metadata = {
  title: "Our Journey — Kosha",
  description:
    "From a small beginning to a growing global presence — a journey shaped by people, partnerships and technology that matters.",
};

export default function OurJourneyPage() {
  return <OurJourney />;
}
