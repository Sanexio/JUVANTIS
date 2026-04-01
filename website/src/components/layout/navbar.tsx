"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Digital Health Twin", href: "#dht" },
  { label: "Bluttests", href: "#produkte" },
  { label: "Infusionen", href: "#produkte" },
  { label: "Preise", href: "#preise" },
  { label: "Standorte", href: "#standorte" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-br from-teal to-teal-bright text-text-primary">
            J
          </div>
          <span className="text-xl font-semibold tracking-tight text-text-primary font-heading">
            Juvantis
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-teal-bright transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" href="#">
            Anmelden
          </Button>
          <Button variant="primary" size="sm" href="#">
            Jetzt starten
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Navigation umschalten"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-teal-bright transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="md" href="#" className="mt-2">
            Jetzt starten
          </Button>
        </div>
      </div>
    </nav>
  );
}
