import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  Cable,
  Cog,
  GitBranch,
  Layers,
  Lightbulb,
  Link2,
  RefreshCw,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import type { SERVICES } from "./services";

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export type ServicePage = {
  slug: ServiceSlug;
  crumb: string;
  title: string;
  accent: string;
  lede: string;
  image: string;
  imageAlt: string;
  wallLeft: string[];
  wallRight: string[];
  points: { icon: LucideIcon; label: string }[];
  approachTitle: string;
  approachLede: string;
  steps: { n: string; icon: LucideIcon; title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const SERVICE_PAGES: Record<ServiceSlug, ServicePage> = {
  "technology-consulting": {
    slug: "technology-consulting",
    crumb: "TECHNOLOGY CONSULTING",
    title: "Technology Consulting",
    accent: "for Real Business Impact.",
    lede: "We work with organisations to understand their business, assess their technology needs and create a clear, practical roadmap for growth.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Consulting team in a meeting",
    wallLeft: ["IDEAS", "STRATEGY", "SOLUTIONS", "IMPACT"],
    wallRight: ["From", "Challenges", "to Possibilities"],
    points: [
      { icon: Target, label: "Business-aligned technology strategy" },
      { icon: BarChart3, label: "Practical and implementable roadmaps" },
      { icon: Users, label: "Independent and objective advice" },
      { icon: Shield, label: "Focus on measurable outcomes" },
    ],
    approachTitle: "Our Consulting Approach",
    approachLede: "A structured, collaborative and outcome-focused approach.",
    steps: [
      { n: "01", icon: Target, title: "Understand", text: "Your business, challenges and goals" },
      { n: "02", icon: Search, title: "Assess", text: "People, processes, systems and data" },
      { n: "03", icon: Lightbulb, title: "Recommend", text: "Practical, scalable technology solutions" },
      { n: "04", icon: Settings, title: "Plan", text: "Detailed roadmap and implementation approach" },
      { n: "05", icon: BarChart3, title: "Enable", text: "Support through execution and adoption" },
    ],
    ctaTitle: "Let's solve your most important challenges.",
    ctaText: "Talk to our consulting team and explore what's possible.",
  },
  "custom-erp": {
    slug: "custom-erp",
    crumb: "CUSTOM ERP & OPERATIONAL SYSTEMS",
    title: "Custom ERP & Operational Systems",
    accent: "for the Way You Work.",
    lede: "We design and build ERP and operational systems around your processes, people and industry, so teams share one reliable way of working.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Team planning an operational system",
    wallLeft: ["IDEAS", "SYSTEMS", "PEOPLE", "IMPACT"],
    wallRight: ["From", "Process", "to Platform"],
    points: [
      { icon: Workflow, label: "Systems shaped around real operations" },
      { icon: Users, label: "One way of working across teams" },
      { icon: Layers, label: "Less manual handoff between tools" },
      { icon: RefreshCw, label: "Software that changes with the business" },
    ],
    approachTitle: "Our Build Approach",
    approachLede: "We start from how work moves, then build the system around it.",
    steps: [
      { n: "01", icon: Search, title: "Discover", text: "How work actually moves today" },
      { n: "02", icon: Workflow, title: "Design", text: "Workflows, roles and the system around them" },
      { n: "03", icon: Cog, title: "Build", text: "Software close to the people who use it" },
      { n: "04", icon: Link2, title: "Integrate", text: "Finance, operations and the tools you already run" },
      { n: "05", icon: Users, title: "Adopt", text: "Rollout, training and room to change" },
    ],
    ctaTitle: "Let's build the system your teams will use.",
    ctaText: "Talk to us about an ERP shaped around your operations.",
  },
  "enterprise-platforms": {
    slug: "enterprise-platforms",
    crumb: "ENTERPRISE PLATFORMS & INTEGRATIONS",
    title: "Enterprise Platforms & Integrations",
    accent: "that Keep Work Connected.",
    lede: "We design platforms and integrations that connect your systems, data and teams, so information moves once and stays reliable as you grow.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Teams working across connected systems",
    wallLeft: ["IDEAS", "SYSTEMS", "PEOPLE", "IMPACT"],
    wallRight: ["From", "Silos", "to One System"],
    points: [
      { icon: Link2, label: "Connected systems instead of isolated tools" },
      { icon: Boxes, label: "Platforms that serve more than one team" },
      { icon: ShieldCheck, label: "Integrations that stay stable as volume grows" },
      { icon: GitBranch, label: "A layer your teams can maintain" },
    ],
    approachTitle: "Our Platform Approach",
    approachLede: "We connect what you already run, then build the layer that holds it together.",
    steps: [
      { n: "01", icon: Search, title: "Map", text: "The systems and data you already rely on" },
      { n: "02", icon: GitBranch, title: "Connect", text: "What should share, and what should stay separate" },
      { n: "03", icon: Layers, title: "Build", text: "The platform layer that holds those connections" },
      { n: "04", icon: ShieldCheck, title: "Secure", text: "Access, ownership and a path you can audit" },
      { n: "05", icon: BarChart3, title: "Scale", text: "Room for more teams, products and volume" },
    ],
    ctaTitle: "Let's connect the systems your business depends on.",
    ctaText: "Talk to us about a platform your teams can grow with.",
  },
  "ai-automation": {
    slug: "ai-automation",
    crumb: "AI & INTELLIGENT AUTOMATION",
    title: "AI & Intelligent Automation",
    accent: "for Work That Matters.",
    lede: "We apply practical AI and automation to repetitive, slow work, so teams move faster, decisions get better, and the result stays accountable.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Team reviewing an automated workflow",
    wallLeft: ["IDEAS", "SYSTEMS", "PEOPLE", "IMPACT"],
    wallRight: ["From", "Manual Work", "to Momentum"],
    points: [
      { icon: Sparkles, label: "Automation on real work, not a demo" },
      { icon: Workflow, label: "Fewer manual steps between teams" },
      { icon: BarChart3, label: "Better use of information you already have" },
      { icon: ShieldCheck, label: "Controls so automated work stays accurate" },
    ],
    approachTitle: "Our Automation Approach",
    approachLede: "We pick the work worth automating, then design the flow and the checks.",
    steps: [
      { n: "01", icon: Target, title: "Select", text: "The work worth automating first" },
      { n: "02", icon: Workflow, title: "Design", text: "The flow, the checks and the handoffs" },
      { n: "03", icon: Cog, title: "Build", text: "Tools your teams can run every day" },
      { n: "04", icon: ShieldCheck, title: "Govern", text: "Accuracy, ownership and a way to step in" },
      { n: "05", icon: Cable, title: "Improve", text: "Measure the result and refine what matters" },
    ],
    ctaTitle: "Let's put AI to work on a real problem.",
    ctaText: "Talk to us about automation that holds up in daily use.",
  },
};
