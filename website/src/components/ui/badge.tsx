import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

// Badge = Kleine farbige Pillen für Labels, z.B. "NEU", "PREMIUM" oder Status-Anzeigen.

type BadgeProps = {
  children: ReactNode;
  variant?: "teal" | "muted";
  pulse?: boolean; // Animierter Punkt links?
  className?: string;
};

export function Badge({ children, variant = "teal", pulse = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium",
        variant === "teal" && "border border-teal-bright/40 text-teal-bright bg-teal-bright/5",
        variant === "muted" && "border border-border text-text-muted bg-dark-card",
        className
      )}
    >
      {pulse && (
        <span className="w-1.5 h-1.5 rounded-full bg-teal-bright animate-pulse" />
      )}
      {children}
    </span>
  );
}
