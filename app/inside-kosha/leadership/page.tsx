import type { Metadata } from "next";
import Leadership from "@/components/Leadership";

export const metadata: Metadata = {
  title: "Leadership — Kosha",
  description:
    "People who build what’s next. Our leadership brings practical experience, technical depth and a long-term perspective.",
};

export default function LeadershipPage() {
  return <Leadership />;
}
