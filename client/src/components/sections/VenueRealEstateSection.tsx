/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Venue & Real Estate: Cream document section with building imagery
 * Two-column layout with sophisticated architectural imagery
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Building2 } from "lucide-react";

const BUILDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/real-estate-building-6QB5pHtVMSDbWvzYcQS4WE.webp";

const venueItems = [
  "Market and demographic analysis",
  "Commercial site identification",
  "Lease vs. buy financial modeling",
  "Zoning and permitting guidance",
  "Lease negotiation and review",
  "Multi-campus expansion planning",
];

const investmentItems = [
  "Property acquisition strategy",
  "Building portfolio management",
  "Investment ROI modeling",
  "Debt structuring and refinancing",
  "Capital improvement planning",
  "Asset valuation and optimization",
];

export function VenueRealEstateSection() {
  return (
    <section className="document-section py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 max-w-3xl">
          <p className="section-label mb-4">Venue & Real Estate</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Find the Right Space.{" "}
            <span className="text-[oklch(0.65_0.12_85)]">Build the Right Portfolio.</span>
          </h2>
        </AnimatedSection>

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Two service columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Venue Search */}
            <AnimatedSection delay={0.1}>
              <div className="border-t-2 border-[oklch(0.65_0.12_85)] pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-[oklch(0.65_0.12_85)]" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-bold">Venue Search & Location</h3>
                </div>
                <div className="space-y-4">
                  {venueItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_85)] mt-2 shrink-0" />
                      <span className="font-sans text-sm text-[oklch(0.35_0.01_260)] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Real Estate Investment */}
            <AnimatedSection delay={0.2}>
              <div className="border-t-2 border-[oklch(0.65_0.12_85)] pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-[oklch(0.65_0.12_85)]" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-bold">Real Estate & Investment</h3>
                </div>
                <div className="space-y-4">
                  {investmentItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_85)] mt-2 shrink-0" />
                      <span className="font-sans text-sm text-[oklch(0.35_0.01_260)] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.3} className="lg:col-span-2">
            <div className="relative h-full min-h-[400px]">
              <img
                src={BUILDING_IMG}
                alt="Modern commercial building at twilight"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[oklch(0.65_0.12_85_/_0.3)] -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
