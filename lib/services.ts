export const SERVICES = [
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    summary: "Strategic consulting to help you assess, plan and implement the right technology for your business goals.",
    intro:
      "We work with leadership teams to clarify priorities, assess what you already run, and shape a practical technology direction. The aim is decisions you can act on, not a stack of recommendations that sit unused.",
    outcomes: [
      "A clear view of where technology helps, and where it does not",
      "Priorities tied to business outcomes, cost, and risk",
      "A roadmap your teams can follow",
    ],
    approach:
      "We start by listening. Goals, constraints, and current systems come first. From there we recommend a path that fits the organization, not a generic playbook.",
  },
  {
    slug: "custom-erp",
    title: "Custom ERP & Operational Systems",
    summary: "End-to-end business systems designed around your processes, people and industry requirements.",
    intro:
      "When off-the-shelf software fights the way you work, we design and build ERP and operational systems that follow your workflows. Finance, operations, and teams share one reliable way of working.",
    outcomes: [
      "Systems shaped around real operations",
      "Less manual work between teams and tools",
      "Software that can change as the business changes",
    ],
    approach:
      "We map how work moves today, then design the system around those flows. Build stays close to the people who will use it, so the result is practical on day one.",
  },
  {
    slug: "enterprise-platforms",
    title: "Enterprise Platforms & Integrations",
    summary: "Scalable platforms and seamless integrations that connect your systems, data and teams.",
    intro:
      "Enterprise work breaks when systems stay separate. We design platforms and integrations that let applications, data, and teams share what they need without constant rework.",
    outcomes: [
      "Connected systems instead of isolated tools",
      "Platforms that can support more than one team or product",
      "Integrations that stay stable as volume grows",
    ],
    approach:
      "We look at the landscape you already have, decide what should connect, and build the platform layer that keeps those connections clear and maintainable.",
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    summary: "Practical AI solutions and automation to improve efficiency, enable better decisions and unlock new possibilities.",
    intro:
      "We use automation and AI on work that is repetitive, slow, or hard to scale. The focus is useful outcomes: fewer handoffs, faster responses, and better use of the information you already have.",
    outcomes: [
      "Processes that no longer depend on manual steps",
      "AI applied to a real business problem, not a demo",
      "Controls so automated work stays accurate and accountable",
    ],
    approach:
      "We pick the work worth automating first. Then we design the flow, the checks, and the tools so the result is reliable in daily use.",
  },
] as const;

export function servicePath(slug: (typeof SERVICES)[number]["slug"]) {
  return `/what-we-do/${slug}`;
}
