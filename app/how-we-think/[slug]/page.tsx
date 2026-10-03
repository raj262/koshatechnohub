import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThinkDetail, { type ThinkPage } from "@/components/ThinkDetail";

const PAGES: Record<string, ThinkPage> = {
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
