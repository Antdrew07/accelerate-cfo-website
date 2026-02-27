/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Differentiation: Premium comparison table styled like a financial prospectus
 * Dark background, gold accents, decisive feel
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";

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
    <Check className="w-5 h-5 text-[oklch(0.75_0.12_85)]" strokeWidth={2} />
  ) : (
    <X className="w-5 h-5 text-[oklch(0.35_0.01_260)]" strokeWidth={1.5} />
  );
}

export function DifferentiationSection() {
  return (
    <section id="why-us" className="relative py-28 lg:py-36 bg-[oklch(0.06_0.015_260)] grain-overlay overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="section-label mb-4">Why Accelerate CFO</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.008_85)] leading-tight mb-6">
            One Firm. Every Financial Need.{" "}
            <span className="text-[oklch(0.75_0.12_85)]">Kingdom Focus.</span>
          </h2>
          <div className="gold-rule max-w-[120px] mx-auto" />
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[oklch(0.75_0.12_85)]">
                  <th className="text-left font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.01_260)] py-5 pr-4">
                    Capability
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.01_260)] py-5 px-4 w-[140px]">
                    Typical CFO Firm
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.55_0.01_260)] py-5 px-4 w-[140px]">
                    Typical Church CPA
                  </th>
                  <th className="text-center font-sans text-xs font-700 tracking-[0.15em] uppercase text-[oklch(0.75_0.12_85)] py-5 pl-4 w-[160px]">
                    Accelerate CFO
                  </th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((cap, i) => (
                  <tr
                    key={cap.name}
                    className={`border-b border-[oklch(0.2_0.02_260)] transition-colors hover:bg-[oklch(0.1_0.02_260)]`}
                  >
                    <td className="font-sans text-sm text-[oklch(0.8_0.005_85)] py-5 pr-4">
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
                    <td className="text-center py-5 pl-4 bg-[oklch(0.75_0.12_85_/_0.05)]">
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
        <AnimatedSection delay={0.4} className="mt-12">
          <p className="font-serif text-base italic text-[oklch(0.55_0.01_260)] text-center max-w-2xl mx-auto leading-relaxed">
            No other firm serving churches integrates CFO services, tax, legal, venue search, and real estate investment under one relationship.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
