import type { Metadata } from "next";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";

export const metadata: Metadata = {
  title: "Technology & Architecture — Kosha",
  description:
    "We design and build modern, scalable and future-ready technology foundations that support real business outcomes.",
};

export default function TechnologyArchitecturePage() {
  return <TechnologyArchitecture />;
}
