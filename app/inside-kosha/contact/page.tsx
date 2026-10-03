import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Kosha",
  description: "Let’s build what’s next. Get in touch with Kosha Techno Hub in Mysore.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
