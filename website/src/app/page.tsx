"use client";

import { useState } from "react";
import { Menu, X, ChevronRight, Activity, FlaskConical, Zap, Dna, Trophy, Cpu } from "lucide-react";

const NAV_LINKS = [
  { label: "Startseite", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Bluttests", href: "#bluttests" },
  { label: "Infusionen", href: "#infusionen" },
  { label: "Preise", href: "#preise" },
  { label: "App", href: "#app" },
];

const FEATURES = [
  {
    icon: Cpu,
    title: "Digital Health Twin",
    description:
      "Dein personalisierter 3D-Avatar visualisiert alle Gesundheitsdaten in Echtzeit — Organe, Biomarker und Vitalwerte auf einen Blick.",
  },
  {
    icon: FlaskConical,
    title: "Labor-Bluttests",
    description:
      "Umfassende Blutanalysen mit über 80 Biomarkern. Verstehe, was in deinem Körper wirklich passiert — mit klaren, verständlichen Erklärungen.",
  },
  {
    icon: Activity,
    title: "Body Check-ups",
    description:
      "Ganzheitliche Gesundheitschecks kombinieren Biometrie, Leistungsdiagnostik und medizinische Befunde zu einem vollständigen Bild deiner Gesundheit.",
  },
  {
    icon: Zap,
    title: "Infusionstherapie",
    description:
      "Individuelle IV-Infusionen für Energie, Regeneration und Immunstärkung — basierend auf deinen persönlichen Laborwerten formuliert.",
  },
  {
    icon: Dna,
    title: "Longevity-Protokolle",
    description:
      "Wissenschaftlich fundierte Präventionsprotokolle, die deine biologische Uhr verlangsamen und deine Healthspan maximieren.",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description:
      "Gesundheitsziele werden zu Quests. Sammle Achievements, verfolge Streaks und steige im persönlichen Health-Ranking auf.",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0E1A", color: "#F8FAFC" }}>
      {/* Navigation */}
      <nav
        style={{ backgroundColor: "rgba(10, 14, 26, 0.85)", borderBottom: "1px solid rgba(2, 128, 144, 0.2)" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #028090, #02C39A)" }}
            >
              J
            </div>
            <span className="text-xl font-semibold tracking-tight" style={{ color: "#F8FAFC" }}>
              Juvantis
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "#94A3B8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#02C39A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm px-4 py-2 rounded-full transition-colors"
              style={{ color: "#94A3B8" }}
            >
              Anmelden
            </a>
            <a
              href="#"
              className="text-sm px-5 py-2 rounded-full font-medium transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #028090, #02C39A)", color: "#F8FAFC" }}
            >
              Jetzt starten
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Navigation umschalten"
            style={{ color: "#F8FAFC" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ borderTop: "1px solid rgba(2, 128, 144, 0.2)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm"
                style={{ color: "#94A3B8" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="text-sm px-5 py-3 rounded-full font-medium text-center mt-2"
              style={{ background: "linear-gradient(135deg, #028090, #02C39A)", color: "#F8FAFC" }}
            >
              Jetzt starten
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16 overflow-hidden"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(2,128,144,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 relative z-10"
          style={{
            border: "1px solid rgba(2, 195, 154, 0.4)",
            color: "#02C39A",
            backgroundColor: "rgba(2, 195, 154, 0.05)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#02C39A" }}
          />
          Digital Health Twin — Next Generation Prävention
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 relative z-10 max-w-4xl"
          style={{ color: "#F8FAFC" }}
        >
          Verstehe deine Gesundheit.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #028090, #02C39A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Wirklich.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed relative z-10"
          style={{ color: "#94A3B8" }}
        >
          Dein personalisierter Digital Health Twin visualisiert Blutanalysen, Body
          Check-ups und Longevity-Protokolle in einem intelligenten 3D-Avatar — damit
          du weißt, was dein Körper wirklich braucht.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #028090, #02C39A)", color: "#F8FAFC" }}
          >
            Jetzt starten
            <ChevronRight size={18} />
          </a>
          <a
            href="#features"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-colors"
            style={{
              border: "1px solid rgba(2, 128, 144, 0.5)",
              color: "#F8FAFC",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(2, 128, 144, 0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Mehr erfahren
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap justify-center gap-6 mt-16 text-xs relative z-10"
          style={{ color: "#64748B" }}
        >
          <span>Medizinisch validiert</span>
          <span style={{ color: "rgba(2, 195, 154, 0.4)" }}>•</span>
          <span>DSGVO-konform</span>
          <span style={{ color: "rgba(2, 195, 154, 0.4)" }}>•</span>
          <span>CE-zertifiziert</span>
          <span style={{ color: "rgba(2, 195, 154, 0.4)" }}>•</span>
          <span>Made in Germany</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#02C39A" }}>
              PLATTFORM-FEATURES
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F8FAFC" }}>
              Gesundheit neu verstehen
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Juvantis vereint modernste Diagnostik, KI-Analyse und Gamification zu
              einer Plattform, die Prävention wirklich erlebbar macht.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl transition-colors group"
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(2, 128, 144, 0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(2, 195, 154, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(2, 128, 144, 0.2)")
                  }
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(2, 128, 144, 0.15)" }}
                  >
                    <Icon size={24} style={{ color: "#02C39A" }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#F8FAFC" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center text-xs"
        style={{
          borderTop: "1px solid rgba(2, 128, 144, 0.15)",
          color: "#64748B",
          backgroundColor: "#0A0E1A",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs"
              style={{ background: "linear-gradient(135deg, #028090, #02C39A)" }}
            >
              J
            </div>
            <span style={{ color: "#94A3B8" }}>Juvantis by Sanexio GmbH</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          <span>© 2025 Sanexio GmbH. Alle Rechte vorbehalten.</span>
        </div>
      </footer>
    </div>
  );
}
