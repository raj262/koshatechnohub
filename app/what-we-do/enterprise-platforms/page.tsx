import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_PAGES } from "@/lib/service-pages";

const page = SERVICE_PAGES["enterprise-platforms"];

export const metadata: Metadata = {
  title: "Enterprise Platforms & Integrations — Kosha",
  description: page.lede,
};

export default function EnterprisePlatformsPage() {
  return <ServiceDetail page={page} />;
}
