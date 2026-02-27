/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Tax & Legal: Dark section, two-column split
 * Tone: protective, strategic, elite
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Scale } from "lucide-react";

const taxServices = [
  "Housing allowance structuring and documentation",
  "Minister self-employment tax (SE) optimization",
  "Dual-status tax planning (employee + self-employed)",
  "Quarterly estimated tax planning",
  "Parsonage exemption compliance",
  "Annual clergy tax return preparation",
];

const legalServices = [
  "501(c)(3) application and formation",
  "Nonprofit bylaws and governance documents",
  "State registration and annual compliance",
  "Employment law guidance for ministry staff",
  "Board governance structure and policy",
  "Risk management and liability review",
];

const ABSTRACT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/abstract-gold-finance-UFnSyMZYFF7iJW9ae45EQN.webp";

export function TaxLegalSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[oklch(0.08_0.02_260)] overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={ABSTRACT_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
          <p className="section-label mb-4">Tax & Legal Extension</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.9568_0.0119_79.78)] leading-tight mb-6">
            Protecting Pastors and{" "}
            <span className="text-[oklch(0.7432_0.1171_89.51)]">Their Organizations</span>
          </h2>
          <p className="font-sans text-base text-[oklch(0.55_0.02_285)] leading-relaxed">
            We ensure pastors receive every lawful tax benefit while keeping the organization fully compliant.
          </p>
        </AnimatedSection>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Tax Column */}
          <AnimatedSection delay={0.1}>
            <div className="gold-card bg-[oklch(0.2177_0.0356_251.29)] p-8 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-[oklch(0.7432_0.1171_89.51)]" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)]">
                  Pastoral Tax Services
                </h3>
              </div>
              <div className="space-y-5">
                {taxServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <span className="w-6 h-[1px] bg-[oklch(0.7432_0.1171_89.51)] mt-3 shrink-0 group-hover:w-10 transition-all duration-300" />
                    <span className="font-sans text-[oklch(0.6387_0.0237_285.71)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Legal Column */}
          <AnimatedSection delay={0.2}>
            <div className="gold-card bg-[oklch(0.2177_0.0356_251.29)] p-8 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-8">
                <Scale className="w-8 h-8 text-[oklch(0.7432_0.1171_89.51)]" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)]">
                  Legal Extension Services
                </h3>
              </div>
              <div className="space-y-5">
                {legalServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <span className="w-6 h-[1px] bg-[oklch(0.7432_0.1171_89.51)] mt-3 shrink-0 group-hover:w-10 transition-all duration-300" />
                    <span className="font-sans text-[oklch(0.6387_0.0237_285.71)] leading-relaxed">
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
