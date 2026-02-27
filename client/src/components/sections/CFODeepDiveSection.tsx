/*
 * LUXURY UPGRADE — CFO Deep Dive Section
 * Cinematic church background with cream overlay, gold frame on image, premium list
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const SANCTUARY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/sanctuary-light-nCBxqpTeQgQCzseWDXaucL.webp";
const CHURCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-church-interior-mkVqhzmZDGxUAhbTefdaBV.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

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
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img src={CHURCH_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.9568_0.0119_79.78_/_0.96)] via-[oklch(0.9568_0.0119_79.78_/_0.92)] to-[oklch(0.9568_0.0119_79.78_/_0.88)]" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side — luxury gold frame */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[oklch(0.7432_0.1171_89.51_/_0.5)] z-10" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[oklch(0.7432_0.1171_89.51_/_0.5)] z-10" />
              <div className="overflow-hidden shadow-[0_25px_60px_oklch(0_0_0_/_0.2)]">
                <img
                  src={SANCTUARY_IMG}
                  alt="Church sanctuary with dramatic light"
                  className="w-full h-[500px] lg:h-[620px] object-cover"
                />
              </div>
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[oklch(0.7432_0.1171_89.51_/_0.2)] -z-10" />
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="font-sans font-700 text-xs tracking-[0.25em] uppercase text-[oklch(0.565_0.0889_88.97)] mb-5">Fractional CFO Deep Dive</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-[1.1] text-[oklch(0.2177_0.0356_251.29)] mb-6">
                Executive Financial Infrastructure for Ministry Growth
              </h2>
              <p className="font-sans text-base text-[oklch(0.35_0.01_260)] leading-[1.8] mb-10">
                Our fractional CFO offering mirrors what top-tier firms deliver — with the added advantage of integrated legal, real estate, and tax services under one roof. We position your church with the same financial rigor as a Fortune 500 company.
              </p>

              {/* Capabilities List — premium gold diamonds */}
              <div className="space-y-5 mb-10">
                {capabilities.map((item, i) => (
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

              <div className="h-[2px] bg-gradient-to-r from-[oklch(0.7432_0.1171_89.51)] via-[oklch(0.7432_0.1171_89.51_/_0.3)] to-transparent max-w-[200px]" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
