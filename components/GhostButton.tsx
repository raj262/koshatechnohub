"use client";

import { ArrowRight } from "lucide-react";

export default function GhostButton({
  children = "Start a Conversation",
  href = "#connect",
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <a href={href} className="btn-ghost">
      {children}
      <ArrowRight size={14} color="#e8891a" strokeWidth={2} />
    </a>
  );
}
