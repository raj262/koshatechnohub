import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_PAGES } from "@/lib/service-pages";

const page = SERVICE_PAGES["ai-automation"];

export const metadata: Metadata = {
  title: "AI & Intelligent Automation — Kosha",
  description: page.lede,
};

export default function AiAutomationPage() {
  return <ServiceDetail page={page} />;
}
