import type { Metadata } from "next";
import HowWeThinkHub from "@/components/HowWeThinkHub";

export const metadata: Metadata = {
  title: "How We Think — Kosha",
  description:
    "We combine deep engineering expertise with a long-term perspective to solve meaningful problems for organisations.",
};

export default function HowWeThinkPage() {
  return <HowWeThinkHub />;
}
