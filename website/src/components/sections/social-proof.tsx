"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

// SocialProof = Zahlen, die Vertrauen schaffen.
// Große Zahlen wirken überzeugend — Besucher sehen: "Da nutzen schon viele Leute das."

const STATS = [
  { value: "80+", label: "Biomarker pro Analyse" },
  { value: "2", label: "Standorte in Frankfurt" },
  { value: "3D", label: "Digital Health Twin" },
  { value: "100%", label: "DSGVO-konform" },
];

export function SocialProof() {
  return (
    <Section className="bg-dark-card/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient font-heading mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
