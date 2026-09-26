import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PerspectiveDetail, { type PerspectivePage } from "@/components/PerspectiveDetail";

const PAGES: Record<string, PerspectivePage> = {
  insights: {
    title: "Insights",
    lede: "Short observations from client work: what held up, what needed a simpler design, and what we would do again.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    quote: "The useful insight is usually smaller than the first workshop suggested.",
    body: [
      "Most projects start with a wide brief. The work gets better when that brief is cut down to the few decisions that change how a team spends its week.",
      "We write these notes so the next engagement starts from what already proved itself, not from a fresh set of slogans.",
    ],
  },
  "ai-business": {
    title: "AI & Business",
    lede: "Where AI earns its place in the business, and where a clearer process still matters more than a model.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    quote: "If the process is unclear, a model will only make the confusion faster.",
    body: [
      "AI is worth adding when a step is repetitive, the input is already captured, and a person can still review the result.",
      "It is the wrong tool when the organisation has not agreed what a good outcome looks like. In that case the first job is the process, not the model.",
    ],
  },
  "enterprise-technology": {
    title: "Enterprise Technology",
    lede: "How large organisations choose, connect, and look after the systems their teams depend on every day.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    quote: "A system the team cannot explain will not survive the next reorganisation.",
    body: [
      "Enterprise technology fails quietly: another tool, another login, another copy of the same customer. The cost shows up as delay, not as a crashed server.",
      "We prefer fewer systems, named owners, and connections that a new colleague can trace without a legend.",
    ],
  },
  "erp-operations": {
    title: "ERP & Operations",
    lede: "Operations made visible: the processes, data, and business systems that keep work moving without extra friction.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    quote: "An ERP should describe the operation. It should not ask the operation to impersonate the software.",
    body: [
      "When finance, inventory, and delivery each keep their own version of the truth, the business spends its time reconciling instead of moving work.",
      "The useful system is the one a supervisor can open and see what is late, what is short, and who owns the next step.",
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation",
    lede: "Change that stays practical. New tools only help when people, process, and the existing systems can carry them.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    quote: "Transformation is a sequence of working changes, not a launch date.",
    body: [
      "A new platform does not transform a company. People still have to trust the numbers, and the old system still has to hand work over cleanly.",
      "We plan the change as a path: what stays, what moves, and how the team knows the new way is actually better.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: "Perspectives — Kosha" };
  return { title: `${page.title} — Kosha`, description: page.lede };
}

export default async function PerspectivePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();
  return <PerspectiveDetail page={page} />;
}
