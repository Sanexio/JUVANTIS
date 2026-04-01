"use client";

import { motion } from "framer-motion";
import { FlaskConical, Activity, Zap, Dna, Trophy, Cpu } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { IconBox } from "@/components/ui/icon-box";

// ProductGrid = Übersicht der 6 Hauptprodukte/Features von Juvantis.
// Jede Karte zeigt ein Icon, einen Titel und eine kurze Beschreibung.

const PRODUCTS = [
  {
    icon: Cpu,
    title: "Digital Health Twin",
    description:
      "Dein personalisierter 3D-Avatar — visualisiert Organe, Biomarker und Vitalwerte in Echtzeit.",
    color: "from-teal to-teal-bright",
  },
  {
    icon: FlaskConical,
    title: "Bloody Check-ups",
    description:
      "Umfassende Blutanalysen mit 80+ Biomarkern. Verstehe, was in deinem Körper passiert.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Activity,
    title: "Body Check-ups",
    description:
      "Ganzheitliche Ultraschall-Checks: Schilddrüse, Abdomen, Gefäße und mehr.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Infusionstherapie",
    description:
      "Individuelle IV-Infusionen für Energie, Regeneration und Immunstärkung — laborbasiert formuliert.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Dna,
    title: "Longevity-Protokolle",
    description:
      "Wissenschaftliche Prävention, die deine biologische Uhr verlangsamt und deine Healthspan maximiert.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description:
      "Gesundheitsziele werden zu Quests. Achievements, Streaks und ein persönliches Health-Ranking.",
    color: "from-yellow-500 to-amber-500",
  },
];

export function ProductGrid() {
  return (
    <Section id="produkte">
      <SectionHeader
        label="Unser Angebot"
        title="Gesundheit neu verstehen"
        description="Juvantis vereint modernste Diagnostik, KI-Analyse und Gamification zu einer Plattform, die Prävention erlebbar macht."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full">
              <IconBox icon={product.icon} className="mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                {product.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {product.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
