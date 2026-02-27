import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LuxuryDivider } from "@/components/LuxuryDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServiceLinesSection } from "@/components/sections/ServiceLinesSection";
import { CFODeepDiveSection } from "@/components/sections/CFODeepDiveSection";
import { TaxLegalSection } from "@/components/sections/TaxLegalSection";
import { VenueRealEstateSection } from "@/components/sections/VenueRealEstateSection";
import { DifferentiationSection } from "@/components/sections/DifferentiationSection";
import { EngageSection } from "@/components/sections/EngageSection";
import { ExecutiveBioSection } from "@/components/sections/ExecutiveBioSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <LuxuryDivider variant="gold-bar" />
      <ProblemSection />
      <SolutionSection />
      <LuxuryDivider variant="diamond" />
      <ServiceLinesSection />
      <LuxuryDivider variant="gold-bar" />
      <CFODeepDiveSection />
      <LuxuryDivider variant="line" />
      <TaxLegalSection />
      <LuxuryDivider variant="gold-bar" />
      <VenueRealEstateSection />
      <LuxuryDivider variant="diamond" />
      <DifferentiationSection />
      <LuxuryDivider variant="gold-bar" />
      <EngageSection />
      <LuxuryDivider variant="line" />
      <ExecutiveBioSection />
      <LuxuryDivider variant="diamond" />
      <PromiseSection />
      <LuxuryDivider variant="gold-bar" />
      <ContactSection />
      <Footer />
    </div>
  );
}
