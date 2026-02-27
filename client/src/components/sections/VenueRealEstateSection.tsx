/*
 * LUXURY UPGRADE — Venue & Real Estate Section
 * Cream overlay on building background, gold corner frames, premium depth
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Building2 } from "lucide-react";

const BUILDING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/real-estate-building-6QB5pHtVMSDbWvzYcQS4WE.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

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
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic background with cream overlay */}
      <div className="absolute inset-0">
        <img src={BUILDING_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.9568_0.0119_79.78_/_0.97)] via-[oklch(0.9568_0.0119_79.78_/_0.93)] to-[oklch(0.9568_0.0119_79.78_/_0.85)]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 max-w-3xl">
          <p className="font-sans font-700 text-xs tracking-[0.25em] uppercase text-[oklch(0.565_0.0889_88.97)] mb-5">Venue & Real Estate</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.1] text-[oklch(0.2177_0.0356_251.29)] mb-8">
            Find the Right Space.{" "}
            <span className="text-[oklch(0.565_0.0889_88.97)]">Build the Right Portfolio.</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-[oklch(0.7432_0.1171_89.51)] via-[oklch(0.7432_0.1171_89.51_/_0.3)] to-transparent max-w-[160px]" />
        </AnimatedSection>

        {/* Two service columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16">
          {/* Venue Search */}
          <AnimatedSection delay={0.1}>
            <div className="relative p-8 lg:p-10 bg-[oklch(0.9568_0.0119_79.78_/_0.7)] backdrop-blur-sm shadow-[0_20px_50px_oklch(0_0_0_/_0.08)]">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[oklch(0.7432_0.1171_89.51_/_0.4)]" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[oklch(0.7432_0.1171_89.51_/_0.4)]" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center border border-[oklch(0.7432_0.1171_89.51_/_0.3)] bg-[oklch(0.7432_0.1171_89.51_/_0.08)]">
                  <MapPin className="w-5 h-5 text-[oklch(0.565_0.0889_88.97)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.2177_0.0356_251.29)]">Venue Search & Location</h3>
              </div>
              <div className="space-y-4">
                {venueItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rotate-45 bg-[oklch(0.7432_0.1171_89.51)] group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <span className="font-sans text-[0.9rem] text-[oklch(0.3_0.01_260)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Real Estate Investment */}
          <AnimatedSection delay={0.2}>
            <div className="relative p-8 lg:p-10 bg-[oklch(0.9568_0.0119_79.78_/_0.7)] backdrop-blur-sm shadow-[0_20px_50px_oklch(0_0_0_/_0.08)]">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[oklch(0.7432_0.1171_89.51_/_0.4)]" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[oklch(0.7432_0.1171_89.51_/_0.4)]" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center border border-[oklch(0.7432_0.1171_89.51_/_0.3)] bg-[oklch(0.7432_0.1171_89.51_/_0.08)]">
                  <Building2 className="w-5 h-5 text-[oklch(0.565_0.0889_88.97)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.2177_0.0356_251.29)]">Real Estate & Investment</h3>
              </div>
              <div className="space-y-4">
                {investmentItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rotate-45 bg-[oklch(0.7432_0.1171_89.51)] group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <span className="font-sans text-[0.9rem] text-[oklch(0.3_0.01_260)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
