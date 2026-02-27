/*
 * Design: "The Vault" — Dark Editorial Luxury
 * CFO Deep Dive: Cream "document" section with sanctuary image
 * Premium breakdown of fractional CFO capabilities
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const SANCTUARY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/sanctuary-light-nCBxqpTeQgQCzseWDXaucL.webp";

const capabilities = [
  "Budgeting & multi-year forecasting with scenario modeling",
  "Board-ready reporting packages delivered monthly",
  "90-day cash flow modeling and management",
  "Recurring giving strategy and stewardship campaign design",
  "Dashboard & KPI systems for real-time financial visibility",
  "Capital campaign structuring and financial oversight",
  "Chart of accounts optimization for nonprofit reporting",
  "Bookkeeper and accountant oversight and coordination",
];

export function CFODeepDiveSection() {
  return (
    <section className="document-section py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={SANCTUARY_IMG}
                  alt="Church sanctuary with dramatic light"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[oklch(0.65_0.12_85_/_0.3)] -z-10" />
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="section-label mb-4">Fractional CFO Deep Dive</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Executive Financial Infrastructure for Ministry Growth
              </h2>
              <p className="font-sans text-base text-[oklch(0.4_0.01_260)] leading-relaxed mb-10">
                Our fractional CFO offering mirrors what top-tier firms deliver — with the added advantage of integrated legal, real estate, and tax services under one roof. We position your church with the same financial rigor as a Fortune 500 company.
              </p>

              {/* Capabilities List */}
              <div className="space-y-4 mb-10">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[oklch(0.65_0.12_85)] mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="font-sans text-sm text-[oklch(0.3_0.01_260)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-gradient-to-r from-[oklch(0.65_0.12_85)] via-[oklch(0.65_0.12_85_/_0.3)] to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
