import type { Metadata } from "next";
import SecurityResponsible from "@/components/SecurityResponsible";

export const metadata: Metadata = {
  title: "Security & Responsible Technology — Kosha",
  description:
    "We build technology with a deep sense of responsibility — to protect, to enable and to create lasting value.",
};

export default function SecurityResponsiblePage() {
  return <SecurityResponsible />;
}
