"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Hero = Der allererste Bereich, den Besucher sehen.
// Muss sofort klar machen: Was ist Juvantis? Was bringt es mir?

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Hintergrund-Leuchteffekt (rein dekorativ, Teal-Schimmer) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(2,128,144,0.15)_0%,transparent_70%)]" />

      {/* Animiertes Badge — kleiner Hinweis über der Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge pulse>Digital Health Twin — Next Generation Prävention</Badge>
      </motion.div>

      {/* Hauptüberschrift */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mt-8 mb-6 relative z-10 max-w-4xl font-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Verstehe deine Gesundheit.{" "}
        <span className="text-gradient">Wirklich.</span>
      </motion.h1>

      {/* Unterüberschrift — erklärt in einem Satz, was Juvantis macht */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed relative z-10 text-text-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Dein personalisierter Digital Health Twin visualisiert Blutanalysen,
        Body Check-ups und Longevity-Protokolle in einem intelligenten 3D-Avatar
        — damit du weißt, was dein Körper wirklich braucht.
      </motion.p>

      {/* Zwei Buttons: Hauptaktion + Nebenauswahl */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button variant="primary" size="lg" href="#">
          Jetzt starten
          <ChevronRight size={18} />
        </Button>
        <Button variant="secondary" size="lg" href="#dht">
          Mehr erfahren
        </Button>
      </motion.div>

      {/* Vertrauensindikatoren — kurze Stichworte unter den Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-16 text-xs text-text-muted relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {["Medizinisch validiert", "DSGVO-konform", "Made in Germany"].map(
          (item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-teal-bright/40">•</span>}
              {item}
            </span>
          )
        )}
      </motion.div>
    </section>
  );
}
