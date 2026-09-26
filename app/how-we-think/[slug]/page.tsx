import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThinkDetail, { type ThinkPage } from "@/components/ThinkDetail";

const PAGES: Record<string, ThinkPage> = {
  "engineering-philosophy": {
    title: "Engineering Philosophy",
    lede: "We build with care: clear systems, practical choices, and software that stays understandable as it grows.",
    layout: "band",
    points: [
      { title: "Clarity over cleverness", text: "A simpler design that a team can explain is worth more than a clever one they have to protect." },
      { title: "Built for the people who run it", text: "The people who use the system every day shape the decisions, not a diagram made far from the work." },
      { title: "Stay after it goes live", text: "The first release is the start. We stay to tighten what daily use reveals." },
    ],
    note: "Good engineering is quiet. The organisation should feel the result, not the machinery.",
  },
  "technology-architecture": {
    title: "Technology & Architecture",
    lede: "Architecture should fit the work. We design systems that connect cleanly, stay maintainable, and can grow with the organisation.",
    layout: "stack",
    points: [
      { title: "Fit the organisation", text: "The shape of the system follows how teams already work, not a platform chosen first." },
      { title: "Connect before you replace", text: "Existing systems stay where they still earn their place. New layers join them instead of wiping the slate." },
      { title: "Leave it changeable", text: "Someone inside the organisation should be able to understand the architecture and change it later." },
    ],
    note: "Architecture is a set of decisions the next team can still read.",
  },
  "security-responsible-technology": {
    title: "Security & Responsible Technology",
    lede: "Security and responsibility are part of the build. Access, data, and automated work stay accountable to the people who rely on them.",
    layout: "grid",
    points: [
      { title: "Access that matches the work", text: "People see what their role needs. Nothing extra sits open because it was easier to build." },
      { title: "Data with an owner", text: "Every important record has a team that is accountable for it, and a path to correct it." },
      { title: "Automation that can stop", text: "If a machine is acting, a person can see what it did and step in." },
    ],
    note: "Responsible technology is not a policy page. It is how the system behaves on an ordinary Tuesday.",
  },
};

type Slug = keyof typeof PAGES;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: "How We Think — Kosha" };
  return { title: `${page.title} — Kosha`, description: page.lede };
}

export default async function HowWeThinkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) notFound();
  return <ThinkDetail page={page} />;
}
