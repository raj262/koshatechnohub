import type { Metadata } from "next";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";

export const metadata: Metadata = {
  title: "Engineering Philosophy — Kosha",
  description:
    "Our engineering philosophy is shaped by a simple belief — technology should solve real problems, be built to last, and create a positive impact on the people and organisations it serves.",
};

export default function EngineeringPhilosophyPage() {
  return <EngineeringPhilosophy />;
}
