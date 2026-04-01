import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

// Card = Eine "Karte" mit dunklem Hintergrund und leuchtendem Rand bei Hover.
// Wird z.B. für Feature-Karten, Preiskarten etc. genutzt.

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean; // Soll die Karte bei Mausberührung leuchten?
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-dark-card border border-border",
        hover && "transition-all duration-300 hover:border-border-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
