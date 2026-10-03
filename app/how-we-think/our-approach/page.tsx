import type { Metadata } from "next";
import OurApproach from "@/components/OurApproach";

export const metadata: Metadata = {
  title: "Our Approach — Kosha",
  description:
    "A structured, collaborative and practical approach to solving business problems with technology — from understanding to real outcomes.",
};

export default function OurApproachPage() {
  return <OurApproach />;
}
