import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Kosha",
  description:
    "Kosha Technohub is an enterprise technology company with more than a decade of experience designing, developing and delivering software solutions for organisations across industries and geographies.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
      <Footer />
    </main>
  );
}
