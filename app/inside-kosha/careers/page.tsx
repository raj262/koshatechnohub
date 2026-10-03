import type { Metadata } from "next";
import Careers from "@/components/Careers";

export const metadata: Metadata = {
  title: "Careers — Kosha",
  description: "Build your best work here. Work on real problems with people who care about impact.",
};

export default function CareersPage() {
  return <Careers />;
}
