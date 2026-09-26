import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_PAGES } from "@/lib/service-pages";

const page = SERVICE_PAGES["custom-erp"];

export const metadata: Metadata = {
  title: "Custom ERP & Operational Systems — Kosha",
  description: page.lede,
};

export default function CustomErpPage() {
  return <ServiceDetail page={page} />;
}
