export type ApproachSlug = "discover" | "define" | "design" | "deliver" | "support";

export type ApproachIcon =
  | "users"
  | "file"
  | "settings"
  | "target"
  | "lightbulb"
  | "branch"
  | "chart"
  | "network"
  | "check"
  | "layers"
  | "database"
  | "puzzle"
  | "shield"
  | "code"
  | "cloud"
  | "box"
  | "headset"
  | "refresh"
  | "trend"
  | "book"
  | "compass"
  | "flag";

export type ApproachPhasePage = {
  slug: ApproachSlug;
  title: string;
  sub: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  visual: ApproachSlug;
  aside: string;
  phaseIntro: string;
  questionsTitle: string;
  questions: string[];
  quote: string;
  activities: { icon: ApproachIcon; title: string; text: string }[];
  deliverIntro: string;
  deliverables: { icon: ApproachIcon; title: string; text: string }[];
  nextText: string;
  nextHref?: string;
  nextLabel?: string;
};

export const APPROACH_PHASE_PAGES: Record<ApproachSlug, ApproachPhasePage> = {
  discover: {
    slug: "discover",
    title: "Discover",
    sub: "Understanding before designing.",
    lede: "Every successful solution starts with a clear understanding of the business. In the Discover phase, we take the time to listen, learn and make sense of your goals, challenges and opportunities.",
    image: "/images/discover-hero.jpg",
    imageAlt: "A discovery workshop with the team mapping ideas together",
    visual: "discover",
    aside: "Real business conversations lead to meaningful solutions.",
    phaseIntro:
      "We work closely with your team to understand the bigger picture — beyond just technology. This helps us identify what really matters and where technology can create meaningful impact.",
    questionsTitle: "Key questions we help answer",
    questions: [
      "What are we trying to achieve?",
      "What is working well, and what is not?",
      "Where are the biggest opportunities?",
      "What would success look like for different stakeholders?",
      "What constraints do we need to consider?",
    ],
    quote: "Better solutions start with better questions.",
    activities: [
      { icon: "users", title: "Stakeholder Engagement", text: "Conversations with leadership, end users and key teams to understand perspectives." },
      { icon: "file", title: "Business Context", text: "Understand your goals, market environment, operational model and constraints." },
      { icon: "settings", title: "Current State Analysis", text: "Review existing systems, processes, data and technology landscape." },
      { icon: "target", title: "Challenge Identification", text: "Identify pain points, inefficiencies, risks and opportunities for improvement." },
      { icon: "lightbulb", title: "Opportunity Mapping", text: "Explore where technology can enable better outcomes, new capability or improved efficiency." },
      { icon: "users", title: "User Needs", text: "Understand the needs, expectations and real-world challenges of the people who will use the solution." },
    ],
    deliverIntro:
      "A clear and shared understanding of the business landscape, challenges and opportunities — forming the foundation for the next steps.",
    deliverables: [
      { icon: "file", title: "Discovery Report", text: "Summary of key insights, challenges and opportunities." },
      { icon: "branch", title: "Process Maps", text: "Visual representation of key processes and workflows." },
      { icon: "chart", title: "Opportunity Areas", text: "Prioritised areas where technology can create value." },
      { icon: "network", title: "Aligned Stakeholders", text: "A shared understanding across teams to move forward with confidence." },
    ],
    nextText:
      "Once we have a clear understanding of your business and opportunities, we move to the next phase — Define, where we translate insights into clear and actionable requirements.",
    nextHref: "/how-we-think/our-approach/define",
    nextLabel: "Explore Define",
  },
  define: {
    slug: "define",
    title: "Define",
    sub: "Turning business needs into clear requirements.",
    lede: "In this phase, we translate the understanding from Discovery into clear, structured and prioritised requirements. We work with stakeholders to define what needs to be built, why it matters and how success will be measured.",
    image: "/images/define-hero.jpg",
    imageAlt: "A team aligning on requirements and priorities",
    visual: "define",
    aside: "Well-defined requirements lead to better solutions.",
    phaseIntro:
      "We work collaboratively with your team to convert insights into well-defined, actionable requirements. This helps avoid ambiguity, reduce rework and ensure that the solution is aligned with real business needs.",
    questionsTitle: "Key questions we help answer",
    questions: [
      "What exactly do we need to build?",
      "What are the must-have vs nice-to-have features?",
      "What are the dependencies and constraints?",
      "How will we measure success?",
      "Who are the key users and what do they need?",
      "What does the scope look like for phase one?",
    ],
    quote: "A well-defined requirement today prevents a costly rebuild tomorrow.",
    activities: [
      { icon: "target", title: "Define Objectives", text: "Translate business goals into measurable outcomes." },
      { icon: "file", title: "Process Mapping", text: "Document key workflows, decision points and dependencies." },
      { icon: "book", title: "Gather Detailed Requirements", text: "Work with stakeholders to capture functional and non-functional requirements." },
      { icon: "network", title: "Identify Constraints", text: "Understand technical, operational, regulatory and budgetary constraints." },
      { icon: "compass", title: "Prioritise and Scope", text: "Identify must-have, should-have and future requirements to define a realistic scope." },
      { icon: "check", title: "Set Success Criteria", text: "Define how success will be measured once the solution is live." },
    ],
    deliverIntro: "A clear and agreed set of requirements that becomes the foundation for solution design.",
    deliverables: [
      { icon: "file", title: "Requirements Document", text: "Detailed functional and non-functional requirements." },
      { icon: "branch", title: "Process Flows", text: "Visual maps of key business processes and user journeys." },
      { icon: "chart", title: "Prioritised Scope", text: "A clear list of features and phases with business justification." },
      { icon: "check", title: "Success Metrics", text: "Defined KPIs to measure the impact of the solution." },
    ],
    nextText:
      "With clear requirements in place, we move to the next phase — Design, where we create the solution architecture and technology approach.",
    nextHref: "/how-we-think/our-approach/design",
    nextLabel: "Explore Design",
  },
  design: {
    slug: "design",
    title: "Design",
    sub: "Architecture, experience and technology decisions for real needs.",
    lede: "In the Design phase, we turn requirements into a practical solution design. We define the architecture, user experience, technology components and integration approach that will deliver real business value.",
    image: "/images/design-hero.jpg",
    imageAlt: "A bright studio space for architecture and experience design",
    visual: "design",
    aside: "From requirements to a solution that works.",
    phaseIntro:
      "We design solutions that are practical, scalable and aligned with your business goals. We consider users, processes, data, security and future growth — not just today's requirements.",
    questionsTitle: "Key questions we help answer",
    questions: [
      "What is the right solution architecture?",
      "Which technologies best fit our needs?",
      "How will this integrate with our existing systems?",
      "How will users interact with the solution?",
      "What are the data and security considerations?",
      "Can this scale as our business grows?",
    ],
    quote: "A well-designed solution reduces risk, saves time and creates long-term value.",
    activities: [
      { icon: "layers", title: "Solution Architecture", text: "Define application architecture, technology stack and integration model." },
      { icon: "users", title: "User Experience Design", text: "Design intuitive and efficient experiences for your users across web and mobile." },
      { icon: "database", title: "Data Design", text: "Plan data structures, flows and governance requirements." },
      { icon: "puzzle", title: "Integration Design", text: "Design integrations with existing and third-party systems, APIs and data sources." },
      { icon: "settings", title: "Technology Selection", text: "Recommend the right technologies based on fit, scalability and long-term support." },
      { icon: "shield", title: "Security & Compliance Planning", text: "Incorporate security, compliance and risk considerations into the solution design." },
    ],
    deliverIntro: "A clear and detailed design that acts as a blueprint for successful implementation.",
    deliverables: [
      { icon: "file", title: "Solution Design Document", text: "Detailed architecture, components and integration flows." },
      { icon: "layers", title: "Technical Architecture", text: "Infrastructure, security and technology stack details." },
      { icon: "compass", title: "UX/UI Designs", text: "User flows, wireframes and design prototypes where required." },
      { icon: "check", title: "Implementation Plan", text: "Phased roadmap with key dependencies and milestones." },
    ],
    nextText:
      "Once the design is finalised, we move to the next phase — Deliver, where we bring the solution to life through engineering, integration and deployment.",
    nextHref: "/how-we-think/our-approach/deliver",
    nextLabel: "Explore Deliver",
  },
  deliver: {
    slug: "deliver",
    title: "Deliver",
    sub: "From plans to working solutions.",
    lede: "In the Deliver phase, we turn designs into reliable, high-quality systems. Our engineering teams build, integrate, test and deploy solutions with a focus on quality, security and minimal disruption to your operations.",
    image: "/images/deliver-hero.jpg",
    imageAlt: "Engineers reviewing a working system during delivery",
    visual: "deliver",
    aside: "Engineering solutions that work in the real world.",
    phaseIntro:
      "We follow a structured and transparent development approach, working closely with your team to ensure the solution is built as intended, integrated smoothly and ready for real-world use.",
    questionsTitle: "Key focus areas",
    questions: [
      "How do we ensure quality and security?",
      "How do we minimise disruption to your business?",
      "How do we integrate with your existing systems?",
      "How do we handle testing and user acceptance?",
      "What happens during deployment?",
      "How do we prepare your team for go-live?",
    ],
    quote: "A well-delivered solution is not just functional — it is ready for real use.",
    activities: [
      { icon: "code", title: "Application Development", text: "Build robust, scalable and maintainable applications." },
      { icon: "cloud", title: "Environment Setup", text: "Configure development, staging and production environments." },
      { icon: "settings", title: "System Integration", text: "Integrate with existing systems, third-party platforms and APIs." },
      { icon: "flag", title: "Deployment & Go-Live", text: "Plan and execute smooth deployment with minimal disruption." },
      { icon: "shield", title: "Quality Assurance", text: "Functional, performance and security testing to ensure reliability." },
      { icon: "users", title: "Knowledge Transfer", text: "Enable your team with documentation, training and handover support." },
    ],
    deliverIntro:
      "A working system, fully integrated, tested and ready for use, along with the knowledge to support it effectively.",
    deliverables: [
      { icon: "box", title: "Working Application", text: "Fully developed, configured and tested solution." },
      { icon: "network", title: "Integrated Systems", text: "Connected with required internal and external systems." },
      { icon: "file", title: "Deployment Plan", text: "Detailed go-live plan with rollback and risk mitigation." },
      { icon: "users", title: "Trained Teams", text: "Documentation and handover for smooth adoption." },
    ],
    nextText:
      "Once the solution is live, our engagement continues. We move into the next phase — Support, where we ensure the solution remains reliable, optimised and ready to grow with your needs.",
    nextHref: "/how-we-think/our-approach/support",
    nextLabel: "Explore Support",
  },
  support: {
    slug: "support",
    title: "Support",
    sub: "Evolving, optimising and scaling for what's next.",
    lede: "Our engagement doesn't end at go-live. In the Support phase, we work with you to ensure the solution continues to perform, adapt to changing needs and create greater value over time.",
    image: "/images/support-hero.jpg",
    imageAlt: "A long path ahead, representing ongoing partnership and growth",
    visual: "support",
    aside: "Systems that grow with you.",
    phaseIntro:
      "We provide ongoing support and continuous improvement to help you get the most from your technology investment. As your business evolves, we work with you to enhance, optimise and scale the solution.",
    questionsTitle: "Key questions we help answer",
    questions: [
      "How do we keep the system stable and secure?",
      "What can be improved based on real usage?",
      "How do we adapt to new business requirements?",
      "How do we manage updates and changes?",
      "What support model is right for our team?",
      "How do we ensure long-term value?",
    ],
    quote: "Technology should not just work today, but continue to create value tomorrow.",
    activities: [
      { icon: "headset", title: "Ongoing Support", text: "Provide responsive support for a stable and reliable experience." },
      { icon: "chart", title: "Performance Monitoring", text: "Track system health, performance and usage to identify improvement areas." },
      { icon: "settings", title: "Continuous Improvement", text: "Recommend and implement enhancements based on real usage and feedback." },
      { icon: "refresh", title: "Adapt to Change", text: "Support new features, integrations and evolving business requirements." },
      { icon: "users", title: "Knowledge & Enablement", text: "Provide training, documentation and guidance for your teams." },
      { icon: "shield", title: "Security & Compliance", text: "Support updates, patches and risk mitigation as technology and threats evolve." },
    ],
    deliverIntro: "Ongoing support, measurable performance and a roadmap to help you grow with confidence.",
    deliverables: [
      { icon: "headset", title: "Support Framework", text: "Defined support model, SLAs and escalation process." },
      { icon: "chart", title: "Performance Reports", text: "Insights on usage, performance and improvement opportunities." },
      { icon: "trend", title: "Enhancement Roadmap", text: "Prioritised list of future enhancements." },
      { icon: "users", title: "Enabled Teams", text: "Trained and confident teams with access to ongoing support." },
    ],
    nextText:
      "As your business evolves, we remain by your side — helping you adapt, improve and scale the solution for whatever comes next.",
  },
};
