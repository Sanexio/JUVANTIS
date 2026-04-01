"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

// WhyJuvantis = Vergleichstabelle, die zeigt, warum Juvantis mehr bietet als Wettbewerber.
// Direkt aus dem Businessplan: Juvantis vs. Aware, InsideTracker, Freeletics etc.

type Feature = {
  name: string;
  juvantis: boolean;
  aware: boolean;
  insideTracker: boolean;
};

const COMPARISON: Feature[] = [
  { name: "Labor-Bluttests (80+ Biomarker)", juvantis: true, aware: true, insideTracker: true },
  { name: "3D Digital Health Twin", juvantis: true, aware: false, insideTracker: false },
  { name: "Body Check-ups (Ultraschall)", juvantis: true, aware: false, insideTracker: false },
  { name: "Infusionstherapie", juvantis: true, aware: false, insideTracker: false },
  { name: "Gamification & Quests", juvantis: true, aware: false, insideTracker: false },
  { name: "KI-Empfehlungen", juvantis: true, aware: false, insideTracker: true },
  { name: "Digitale Patientenakte", juvantis: true, aware: false, insideTracker: false },
  { name: "Longevity-Protokolle", juvantis: true, aware: false, insideTracker: false },
  { name: "DSGVO-konform (Deutschland)", juvantis: true, aware: true, insideTracker: false },
];

function StatusIcon({ value }: { value: boolean }) {
  return value ? (
    <Check size={18} className="text-teal-bright" />
  ) : (
    <X size={18} className="text-text-muted/40" />
  );
}

export function WhyJuvantis() {
  return (
    <Section id="vergleich">
      <SectionHeader
        label="Warum wir?"
        title="Juvantis vs. Wettbewerb"
        description="Andere bieten Bluttests oder Lifestyle-Tracking. Juvantis vereint Diagnostik, Visualisierung, Therapie und Motivation in einer Plattform."
      />

      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-sm text-text-muted font-normal">Feature</th>
              <th className="py-4 px-4 text-sm font-semibold text-teal-bright text-center">
                Juvantis
              </th>
              <th className="py-4 px-4 text-sm text-text-muted font-normal text-center">Aware</th>
              <th className="py-4 px-4 text-sm text-text-muted font-normal text-center">InsideTracker</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr
                key={row.name}
                className={cn(
                  "border-b border-border/50",
                  i % 2 === 0 && "bg-dark-card/30"
                )}
              >
                <td className="py-3.5 px-4 text-sm text-text-secondary">{row.name}</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex justify-center">
                    <StatusIcon value={row.juvantis} />
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex justify-center">
                    <StatusIcon value={row.aware} />
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex justify-center">
                    <StatusIcon value={row.insideTracker} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Section>
  );
}
