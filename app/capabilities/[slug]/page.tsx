import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CapabilityDetail, { type CapabilityPage } from "@/components/CapabilityDetail";

const PAGES: Record<string, CapabilityPage> = {
  "education-learning": {
    group: "Industries",
    title: "Education & Learning",
    lede: "Systems for schools, universities, and learning organisations — admissions, programmes, and the everyday work of teaching.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    points: ["Admissions and student records that staff can trust", "Programmes and timetables that match how teaching actually runs", "Reporting that leadership can read without a second system"],
  },
  healthcare: {
    group: "Industries",
    title: "Healthcare",
    lede: "Careful software for clinics, hospitals, and health programmes, where records, workflows, and trust have to stay intact.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    points: ["Records that stay with the patient, not in a side spreadsheet", "Clinic workflows that nurses and coordinators can follow", "Access controls tight enough for sensitive work"],
  },
  manufacturing: {
    group: "Industries",
    title: "Manufacturing",
    lede: "Operational systems for plants and production teams: planning, inventory, quality, and the handoff between floor and office.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    points: ["Planning that the floor and the office share", "Inventory and quality in the same picture", "Handoffs that do not depend on a phone call"],
  },
  "financial-professional-services": {
    group: "Industries",
    title: "Financial & Professional Services",
    lede: "Platforms for firms that live on accuracy — client work, compliance, reporting, and the systems behind professional service.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    points: ["Client work tracked from intake to delivery", "Reporting that matches the numbers finance already keeps", "A trail for reviews, compliance, and handovers"],
  },
  "government-institutions": {
    group: "Industries",
    title: "Government & Institutions",
    lede: "Practical systems for public and institutional work: clearer processes, accountable data, and services people can actually use.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80",
    points: ["Processes a citizen or member can follow", "Data with a clear owner inside the institution", "Systems staff can run without a specialist on every step"],
  },
  "retail-distribution": {
    group: "Industries",
    title: "Retail & Distribution",
    lede: "Software for catalogues, orders, inventory, and the path from warehouse to customer.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    points: ["Catalogues and orders in one flow", "Stock that the warehouse and the shop both see", "A path from order to delivery that does not break in the middle"],
  },
  "web-enterprise-applications": {
    group: "Engineering Capabilities",
    title: "Web & Enterprise Applications",
    lede: "Web and enterprise applications built around how a team actually works, from internal tools to customer-facing platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    points: ["Internal tools shaped to a real workflow", "Customer-facing products on the same foundations", "Interfaces a team can learn in a day, not a quarter"],
  },
  "mobile-applications": {
    group: "Engineering Capabilities",
    title: "Mobile Applications",
    lede: "Mobile apps for field teams and customers, connected to the same systems the rest of the organisation already uses.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    points: ["Field work that does not wait for a desk", "The same records the office already trusts", "Offline-tolerant steps where the network is unreliable"],
  },
  "erp-business-systems": {
    group: "Engineering Capabilities",
    title: "ERP & Business Systems",
    lede: "Business systems shaped to the operation — finance, inventory, people, and the processes that tie them together.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    points: ["Finance, inventory, and people in one operating picture", "Processes modelled on the business, not a generic module", "Adoption support so the system is actually used"],
  },
  "ai-automation": {
    group: "Engineering Capabilities",
    title: "AI & Automation",
    lede: "Automation and applied AI for repetitive work, with human review where the decision still belongs to a person.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    points: ["Repetitive steps taken off the team", "A person still owns the decision that matters", "A way to see what the automation did"],
  },
  "cloud-infrastructure": {
    group: "Engineering Capabilities",
    title: "Cloud & Infrastructure",
    lede: "Cloud and infrastructure that stay understandable: hosting, environments, and the foundations applications depend on.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    points: ["Environments a team can name and reproduce", "Hosting that matches how the application is released", "Foundations that do not require a hero to restart"],
  },
  "system-integration-apis": {
    group: "Engineering Capabilities",
    title: "System Integration & APIs",
    lede: "Integrations and APIs that let existing systems share data without becoming one tangled platform.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    points: ["Data shared once, not retyped", "Clear contracts between systems", "Failures that are visible instead of silent"],
  },
  "application-modernisation": {
    group: "Engineering Capabilities",
    title: "Application Modernisation",
    lede: "A practical path off ageing software: keep what still works, replace what does not, and leave the organisation able to run it.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    points: ["Keep the parts that still earn their place", "Replace the parts people work around", "Hand the result to a team that can run it"],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: "Capabilities — Kosha" };
  return { title: `${page.title} — Kosha`, description: page.lede };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();
  return <CapabilityDetail page={page} />;
}
