# Juvantis Website

Premium-Marketing-Website fuer die Juvantis Health Platform von Sanexio GmbH.

## Technologie-Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-basierte Konfiguration)
- **Framer Motion** (Animationen)
- **Radix UI** (Accessibility-Komponenten: Navigation Menu, Accordion)
- **Lucide React** (Icons)

## Markenfarben

| Name              | Hex       |
|-------------------|-----------|
| Teal (Primaer)    | `#028090` |
| Teal Light        | `#00A896` |
| Teal Bright       | `#02C39A` |
| Teal Dark         | `#015F6B` |
| Background        | `#0A0E1A` |
| Background Sekundaer | `#111827` |
| Text Primary      | `#F8FAFC` |
| Text Secondary    | `#94A3B8` |
| Text Muted        | `#64748B` |

Farben sind als CSS-Custom-Properties in `src/app/globals.css` definiert
(z.B. `--color-juvantis-teal`, `--color-juvantis-teal-bright`).

## Projektstruktur

```
website/
├── src/
│   └── app/
│       ├── globals.css     # Tailwind v4 + Juvantis-Brandfarben
│       ├── layout.tsx      # Root-Layout (Metadaten, Schriftarten, lang=de)
│       └── page.tsx        # Startseite: Navigation, Hero, Features, Footer
├── public/                 # Statische Assets
├── package.json
└── README.md
```

## Lokale Entwicklung

```bash
npm run dev
```

Oeffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build & Deploy

```bash
npm run build
npm run start
```

Fuer Deployment auf Vercel: Repository verbinden und `website/` als Root-Directory setzen.

## Seiten-Abschnitte (aktuell)

- **Navigation**: Fixed Topbar mit Logo, Nav-Links, Mobile-Hamburger-Menu
- **Hero**: Vollbild-Sektion mit Headline, Subheadline, zwei CTAs, Trust-Badges
- **Features**: 6-Karten-Grid (Digital Health Twin, Bluttests, Body Check-ups, Infusionen, Longevity, Gamification)
- **Footer**: Links, Impressum, Copyright

## Naechste Schritte

- [ ] 3D-Avatar-Integration (SceneKit/Three.js)
- [ ] Pricing-Sektion
- [ ] Blog/Content-Bereich
- [ ] App-Download-Sektion
- [ ] Animationen mit Framer Motion aktivieren
