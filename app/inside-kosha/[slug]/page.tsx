import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsideDetail, { type InsidePage } from "@/components/InsideDetail";

const PAGES: Record<string, InsidePage> = {
  "about-us": {
    slug: "about-us",
    title: "About Us",
    lede: "Kosha is a creative firm focused on making the impossible possible through technology. From digital services to technology products, that is where we stand out.",
    blocks: [],
    story: {
      established: "Established in 2014, in Mysore, Karnataka.",
      whoTitle: "Who we are",
      who: "Kosha is a creative team that brings ideas to life. Design, development, and execution happen in one place. We specialise in software solutions, design, IoT, augmented reality, game-based learning, education products, and test and assessments.",
      missionTitle: "Mission of Kosha",
      mission: "Founder Venugopal Deshpande built Kosha on going the extra mile, with customer satisfaction at the centre. The work rests on high-end training, the right solution, and on-time delivery. We believe our technology services can change things for the better, and we aim to make that impact through our products and services.",
      workTitle: "What we do",
      work: [
        "Software Solutions",
        "Experienced Designs",
        "IoT",
        "Website Designs",
        "AR-Make",
        "Game-Based Learning",
        "Test & Assessments",
        "Publishers",
        "Education Assessments",
        "Social Media Marketing",
        "Mobile Apps",
        "Google Ads",
        "Web Portals",
        "E-Commerce",
      ],
      teamTitle: "Technology development team",
      team: [
        { name: "Venugopal D N", role: "Director", image: "/about/venugopal.png" },
        { name: "Sagar Deshpande", role: "Managing Director", image: "/about/sagar.png", linkedin: "https://www.linkedin.com/in/deshpandesagar/" },
        { name: "Kavya R N", role: "COO", image: "/about/kavya.png", linkedin: "https://www.linkedin.com/in/kavya-r-n-958a9a126/" },
      ],
      milesTitle: "Our milestones",
      milestones: [
        { year: "2014", title: "Mile #1", text: "Established in Mysore, Karnataka." },
        { year: "2016", title: "Mile #2", text: "From successive delivery of individual processes to different units." },
        { year: "2018", title: "Mile #3", text: "Incorporated as a private limited company, covering a wide range in education and IT from rural to urban areas." },
        { year: "2020", title: "Progress #4", text: "Exploring varied products that benefit users across ranges." },
      ],
      stepsTitle: "Kosha's 5-step process",
      steps: ["Requirement Analysis", "Development", "Testing", "Deployment", "Deliver"],
      marksTitle: "Our accreditations",
      marks: [
        { src: "/about/acc-1.png", alt: "Ministry of MSME, Government of India" },
        { src: "/about/acc-2.png", alt: "KEONICS" },
        { src: "/about/acc-3.png", alt: "National Apprenticeship Promotion Scheme" },
        { src: "/about/acc-4.png", alt: "Accreditation partner", dark: true },
        { src: "/about/acc-5.png", alt: "Startup India" },
        { src: "/about/acc-6.png", alt: "Mysore Chamber of Commerce and Industry" },
        { src: "/about/acc-7.jpg", alt: "Karnataka accreditation" },
      ],
      stats: [
        { value: "580", label: "Satisfied clients" },
        { value: "600", label: "Projects completed" },
        { value: "500K+", label: "Lines of code" },
      ],
      ctaTitle: "Would you like to start a project with Kosha Technohub?",
      ctaText: "We believe in work that goes beyond the expected. Come build with us.",
      place: "Kosha Technohub Pvt. Ltd. · #16, Hootagalli Industrial Area, KRS Main Road, Hootagalli, Mysore, Karnataka, India — 570018",
    },
  },
  "our-journey": {
    slug: "our-journey",
    title: "Our Journey",
    lede: "A practice shaped by long client relationships: listening first, building carefully, and staying with the work after it goes live.",
    blocks: [
      { title: "Listen", text: "The first stretch is spent inside the organisation, not in a proposal." },
      { title: "Shape", text: "We cut the problem down to the system that will actually be used." },
      { title: "Build", text: "Engineering follows the agreed shape, with room to correct course." },
      { title: "Stay", text: "After launch we remain until the team can run it without us in the room." },
    ],
  },
  leadership: {
    slug: "leadership",
    title: "Leadership",
    lede: "Direction stays close to the engineering, and accountable for the outcomes clients actually feel.",
    blocks: [
      { title: "Direction", text: "Leaders choose what not to build, so the team can finish what matters." },
      { title: "Craft", text: "The people who set the standard still read the work, not only the status." },
      { title: "Accountability", text: "If a system misses, the responsibility sits with us as well as with the plan." },
    ],
  },
  careers: {
    slug: "careers",
    title: "Careers",
    lede: "We look for people who care about clear systems and the organisations that depend on them.",
    blocks: [
      { title: "Care for the user", text: "You notice when a screen makes someone's day harder." },
      { title: "Clear writing", text: "You can explain a technical choice to someone who will live with it." },
      { title: "Steady delivery", text: "You would rather ship a smaller true thing than a large unfinished one." },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact",
    lede: "Get in touch and begin your journey. Questions and feedback are welcome — use the form, or email Kosha directly.",
    blocks: [],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: "Inside Kosha — Kosha" };
  return { title: `${page.title} — Kosha`, description: page.lede };
}

export default async function InsideKoshaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();
  return <InsideDetail page={page} />;
}
