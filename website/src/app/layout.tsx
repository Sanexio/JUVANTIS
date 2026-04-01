import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Inter = Fließtext (Body). Klar, modern, gut lesbar.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Sora = Überschriften (Headlines). Geometrisch, auffällig, premium.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juvantis — Dein Digital Health Twin",
  description:
    "Juvantis verbindet modernste Gesundheitsdiagnostik mit KI-gestützter Analyse und einem personalisierten 3D Digital Health Twin. Bluttests, Body Check-ups, Infusionstherapie und Longevity-Protokolle — alles in einer Plattform.",
  keywords: [
    "Digital Health Twin",
    "Bluttest",
    "Biomarker",
    "Infusionstherapie",
    "Longevity",
    "Prävention",
    "Gesundheitscheck",
  ],
  openGraph: {
    title: "Juvantis — Dein Digital Health Twin",
    description:
      "Verstehe deine Gesundheit. Wirklich. Bluttests, 3D-Avatar, KI-Empfehlungen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
