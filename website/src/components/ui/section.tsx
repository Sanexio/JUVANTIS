import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

// Section = Ein großer Abschnitt der Seite (z.B. Hero, Features, Preise).
// Sorgt automatisch für gleichmäßige Abstände oben/unten und eine maximale Breite.

type SectionProps = {
  children: ReactNode;
  id?: string; // Für Ankerlinks, z.B. id="features" → scrollt zu #features
  className?: string;
  narrow?: boolean; // Schmaler Inhalt (z.B. für Texte)
};

export function Section({ children, id, className, narrow = false }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className={cn("mx-auto", narrow ? "max-w-3xl" : "max-w-7xl")}>
        {children}
      </div>
    </section>
  );
}

// SectionHeader = Überschrift + Untertitel für einen Abschnitt. Zentriert.
type SectionHeaderProps = {
  label?: string; // Kleiner Text über der Überschrift (z.B. "FEATURES")
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <p className="text-sm font-medium mb-3 text-teal-bright tracking-wider uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-lg max-w-2xl mx-auto text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
