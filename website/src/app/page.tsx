// Startseite von Juvantis — setzt alle Sektionen zusammen.
// Jede Sektion ist ein eigener Baustein in src/components/sections/

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { DHTShowcase } from "@/components/sections/dht-showcase";
import { ProductGrid } from "@/components/sections/product-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { WhyJuvantis } from "@/components/sections/why-juvantis";
import { Pricing } from "@/components/sections/pricing";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <DHTShowcase />
        <ProductGrid />
        <HowItWorks />
        <WhyJuvantis />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
