"use client";

import { motion } from "framer-motion";
import { Eye, Heart, Brain, FlaskConical } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

// DHT = Digital Health Twin. Das Alleinstellungsmerkmal von Juvantis.
// Diese Sektion erklärt: Was ist der Avatar? Was kann er anzeigen?

const DHT_FEATURES = [
  {
    icon: Eye,
    label: "Haut & Äußeres",
    description: "Sichtbare Veränderungen — Hautbild, Vitalität, Energielevel",
  },
  {
    icon: Heart,
    label: "Organe & Systeme",
    description: "Herz, Leber, Nieren — Statusanzeige basierend auf Laborwerten",
  },
  {
    icon: Brain,
    label: "Vitalwerte",
    description: "Blutdruck, Herzfrequenz, Schlafqualität in Echtzeit",
  },
  {
    icon: FlaskConical,
    label: "Biomarker",
    description: "80+ Laborwerte übersichtlich visualisiert und erklärt",
  },
];

export function DHTShowcase() {
  return (
    <Section id="dht">
      <SectionHeader
        label="Kern-Innovation"
        title="Dein Digital Health Twin"
        description="Ein 3D-Avatar, der deine echten Gesundheitsdaten visualisiert. Veränderungen an Laborwerten werden sofort sichtbar — motivierend statt abstrakt."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Linke Seite: Avatar-Platzhalter (wird später durch echte 3D-Grafik ersetzt) */}
        <motion.div
          className="relative aspect-square max-w-md mx-auto w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-dark-card to-dark-elevated border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal/30 to-teal-bright/10 flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal to-teal-bright opacity-60" />
              </div>
              <p className="text-text-muted text-sm">3D Health Avatar</p>
              <p className="text-text-muted text-xs mt-1">(Coming soon — Blender Pipeline)</p>
            </div>
          </div>
          {/* Dekorativer Leuchtring */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/10 to-transparent -z-10 blur-xl" />
        </motion.div>

        {/* Rechte Seite: Die 4 Feature-Bereiche des Avatars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DHT_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                className={cn(
                  "p-5 rounded-xl bg-dark-card border border-border",
                  "hover:border-border-hover transition-all duration-300"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Icon size={20} className="text-teal-bright mb-3" />
                <h3 className="text-sm font-semibold text-text-primary mb-1">{feature.label}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
