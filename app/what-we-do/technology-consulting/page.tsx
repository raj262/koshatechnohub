import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_PAGES } from "@/lib/service-pages";

const page = SERVICE_PAGES["technology-consulting"];

export const metadata: Metadata = {
  title: "Technology Consulting — Kosha",
  description: page.lede,
};

export default function TechnologyConsultingPage() {
  return <ServiceDetail page={page} />;
}
