import Link from "next/link";

const FOOTER_LINKS = {
  Produkte: [
    { label: "Bluttests", href: "/bluttests" },
    { label: "Body Check-ups", href: "/body-checks" },
    { label: "Infusionen", href: "/infusionen" },
    { label: "Longevity", href: "/longevity" },
    { label: "Digital Health Twin", href: "/digital-health-twin" },
  ],
  Unternehmen: [
    { label: "Über uns", href: "#" },
    { label: "Für Praxen", href: "/fuer-praxen" },
    { label: "Standorte", href: "/standorte" },
    { label: "Karriere", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Oberer Bereich: Logo + Link-Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Marke */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-br from-teal to-teal-bright text-text-primary">
                J
              </div>
              <span className="text-xl font-semibold tracking-tight text-text-primary font-heading">
                Juvantis
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Die Health-UX Plattform. Verstehe deine Gesundheit durch deinen
              persönlichen Digital Health Twin — medizinisch validiert, KI-gestützt,
              DSGVO-konform.
            </p>
          </div>

          {/* Link-Spalten */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-text-primary mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-teal-bright transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Unterer Bereich: Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Sanexio GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-muted">Made with care in Frankfurt am Main</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
