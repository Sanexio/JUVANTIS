"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Pricing = Drei Preisstufen wie im Businessplan definiert:
// Free (Einstieg), Premium (Vollversion), Business (für Praxen/B2B)

const PLANS = [
  {
    name: "Free",
    price: "0",
    period: "für immer",
    description: "Erste Einblicke in deine Gesundheit",
    features: [
      "Basis Digital Health Twin",
      "Vital-Tracking (manuell)",
      "Community-Zugang",
      "1 Laborwert-Erklärung/Monat",
    ],
    cta: "Kostenlos starten",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "14,99",
    period: "/Monat",
    description: "Die volle Health-UX Erfahrung",
    features: [
      "Alle Free-Features",
      "Voller Digital Health Twin (3D)",
      "80+ Biomarker-Analysen",
      "KI-Empfehlungen & Coaching",
      "Gamification & Challenges",
      "Fortschrittstracking über Zeit",
      "Infusionstherapie-Beratung",
      "Prioritäts-Support",
    ],
    cta: "Premium starten",
    highlighted: true,
  },
  {
    name: "Business",
    price: "Individuell",
    period: "",
    description: "Für Praxen, Kliniken & Versicherer",
    features: [
      "Alle Premium-Features",
      "White-Label-Integration",
      "Patienten-Dashboard",
      "Clinical Decision Support",
      "API-Zugang",
      "Dedicated Account Manager",
      "Individuelle Schulungen",
    ],
    cta: "Kontakt aufnehmen",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="preise">
      <SectionHeader
        label="Preise"
        title="Transparent. Fair. Flexibel."
        description="Starte kostenlos und upgrade, wenn du bereit bist. Keine versteckten Kosten."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={cn(
              "rounded-2xl p-8 border flex flex-col",
              plan.highlighted
                ? "border-teal-bright/50 bg-gradient-to-b from-teal/10 to-dark-card relative"
                : "border-border bg-dark-card"
            )}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* "Beliebt" Badge beim Premium-Plan */}
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-teal to-teal-bright text-text-primary">
                Beliebt
              </div>
            )}

            <h3 className="text-lg font-semibold text-text-primary font-heading">{plan.name}</h3>
            <p className="text-sm text-text-muted mt-1 mb-6">{plan.description}</p>

            {/* Preis */}
            <div className="mb-6">
              {plan.price === "Individuell" ? (
                <span className="text-3xl font-bold text-text-primary font-heading">Individuell</span>
              ) : (
                <>
                  <span className="text-4xl font-bold text-text-primary font-heading">
                    {plan.price}€
                  </span>
                  <span className="text-text-muted text-sm ml-1">{plan.period}</span>
                </>
              )}
            </div>

            {/* Feature-Liste */}
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                  <Check size={16} className="text-teal-bright mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant={plan.highlighted ? "primary" : "secondary"}
              size="md"
              href="#"
              className="w-full"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
