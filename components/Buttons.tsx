"use client";

import { ArrowRight } from "lucide-react";

export function PrimaryButton({ href = "#connect" }: { href?: string }) {
  return (
    <a href={href} className="btn-primary">
      Start a Conversation
      <ArrowRight size={16} color="#e8891a" />
    </a>
  );
}

export function GhostButton({ href = "#connect" }: { href?: string }) {
  return (
    <a href={href} className="btn-ghost">
      Start a Conversation
      <ArrowRight size={14} color="#e8891a" />
    </a>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="link-arrow">
      <u>{children}</u>
      <ArrowRight size={16} />
    </a>
  );
}
