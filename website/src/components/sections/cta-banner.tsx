"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

// CTA-Banner = Letzte Aufforderung zum Handeln, bevor der Footer kommt.
// Soll den Besucher überzeugen, der bis hierhin gescrollt hat.

export function CTABanner() {
  return (
    <Section>
      <motion.div
        className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Hintergrund mit Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-teal to-teal-bright opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />

        {/* Inhalt */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
            Bereit für deine Health-Transformation?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Starte noch heute mit deinem Digital Health Twin und verstehe deine
            Gesundheit wie nie zuvor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="#"
              className="bg-white! text-teal! hover:bg-white/90! glow-teal"
            >
              Jetzt kostenlos starten
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
