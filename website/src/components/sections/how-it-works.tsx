"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Microscope, Sparkles, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

// HowItWorks = Erklärt in 4 einfachen Schritten, wie Juvantis funktioniert.
// Wichtig für Vertrauensbildung: Der Nutzer soll sehen, dass es einfach ist.

const STEPS = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Check-up buchen",
    description:
      "Wähle dein Paket online und buche einen Termin an einem unserer Standorte — in unter 2 Minuten.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Probe & Analyse",
    description:
      "Blutabnahme vor Ort. Deine Proben gehen ins akkreditierte Labor. Ergebnisse in 3–5 Werktagen.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "KI-Auswertung & DHT",
    description:
      "Unsere KI analysiert deine Werte, erstellt Empfehlungen und aktualisiert deinen Digital Health Twin.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Fortschritt tracken",
    description:
      "Verfolge Veränderungen über die Zeit. Dein Avatar reagiert auf jeden Fortschritt — sichtbar und motivierend.",
  },
];

export function HowItWorks() {
  return (
    <Section id="ablauf" className="bg-dark-card/50">
      <SectionHeader
        label="So funktioniert&apos;s"
        title="In 4 Schritten zu deinem Health Twin"
        description="Von der Buchung bis zum personalisierten Gesundheitsplan — einfach, schnell und medizinisch fundiert."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Schrittnummer */}
              <span className="text-6xl font-bold text-teal/10 font-heading absolute -top-2 left-1/2 -translate-x-1/2">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-teal/15 flex items-center justify-center mx-auto mb-4 relative z-10">
                <Icon size={24} className="text-teal-bright" />
              </div>

              <h3 className="text-base font-semibold text-text-primary mb-2 font-heading relative z-10">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Verbindungslinie (nicht beim letzten Schritt) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
