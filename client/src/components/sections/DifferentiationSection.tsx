/*
 * LUXURY UPGRADE — Differentiation Section
 * Cinematic aerial city background, glassmorphism table, gold accents
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";

const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-aerial-city-2snjVMscaxXyAGEHpzG75R.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

const capabilities = [
  { name: "Fractional CFO Services", typical: true, cpa: false, accelerate: true },
  { name: "Pastoral Tax Expertise", typical: false, cpa: true, accelerate: true },
  { name: "Venue Search & Location", typical: false, cpa: false, accelerate: true },
  { name: "Real Estate Investment", typical: false, cpa: false, accelerate: true },
  { name: "Legal & Nonprofit Setup", typical: false, cpa: false, accelerate: true },
  { name: "Stewardship Campaign Design", typical: false, cpa: false, accelerate: true },
  { name: "Board-Ready Reporting", typical: true, cpa: false, accelerate: true },
];

function StatusIcon({ active }: { active: boolean }) {
  return active ? (
    <div className="w-7 h-7 flex items-center justify-center bg-[oklch(0.7432_0.1171_89.51_/_0.15)] border border-[oklch(0.7432_0.1171_89.51_/_0.3)]">
      <Check className="w-4 h-4 text-[oklch(0.7432_0.1171_89.51)]" strokeWidth={2.5} />
    </div>
  ) : (
    <div className="w-7 h-7 flex items-center justify-center">
      <X className="w-4 h-4 text-[oklch(0.35_0.01_260)]" strokeWidth={1.5} />
    </div>
  );
}

export function DifferentiationSection() {
  return (
    <section id="why-us" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic aerial background */}
      <div className="absolute inset-0">
        <img
          src={AERIAL_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2177_0.0356_251.29_/_0.94)] via-[oklch(0.2177_0.0356_251.29_/_0.90)] to-[oklch(0.2177_0.0356_251.29_/_0.95)]" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <p className="section-label mb-5">Why Accelerate CFO</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            One Firm. Every Financial Need.{" "}
            <span className="gold-shimmer-text">Kingdom Focus.</span>
          </h2>
          <div className="gold-rule max-w-[160px] mx-auto" />
        </AnimatedSection>

        {/* Glassmorphism Comparison Table */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 lg:p-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[oklch(0.7432_0.1171_89.51_/_0.4)]">
                  <th className="text-left font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.02_285)] py-5 pr-4">
                    Capability
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.02_285)] py-5 px-4 w-[140px]">
                    Typical CFO Firm
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.02_285)] py-5 px-4 w-[140px]">
                    Typical Church CPA
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.7432_0.1171_89.51)] py-5 pl-4 w-[160px]">
                    Accelerate CFO
                  </th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((cap) => (
                  <tr
                    key={cap.name}
                    className="border-b border-[oklch(0.7432_0.1171_89.51_/_0.1)] transition-colors hover:bg-[oklch(0.7432_0.1171_89.51_/_0.03)]"
                  >
                    <td className="font-sans text-sm text-[oklch(0.85_0.005_85)] py-5 pr-4 font-500">
                      {cap.name}
                    </td>
                    <td className="text-center py-5 px-4">
                      <div className="flex justify-center">
                        <StatusIcon active={cap.typical} />
                      </div>
                    </td>
                    <td className="text-center py-5 px-4">
                      <div className="flex justify-center">
                        <StatusIcon active={cap.cpa} />
                      </div>
                    </td>
                    <td className="text-center py-5 pl-4 bg-[oklch(0.7432_0.1171_89.51_/_0.04)]">
                      <div className="flex justify-center">
                        <StatusIcon active={cap.accelerate} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Bottom Statement */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="text-center">
            <div className="luxury-divider max-w-[200px] mx-auto mb-8" />
            <p className="font-serif text-lg lg:text-xl italic text-[oklch(0.7432_0.1171_89.51)] max-w-2xl mx-auto leading-relaxed">
              No other firm serving churches integrates CFO services, tax, legal, venue search, and real estate investment under one relationship.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
