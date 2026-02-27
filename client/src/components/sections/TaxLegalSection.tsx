/*
 * LUXURY UPGRADE — Tax & Legal Section
 * Gold texture background, glassmorphism cards, premium depth
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Scale } from "lucide-react";

const GOLD_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-gold-texture-6TDxMjJYSJGYTCqGJvRjsM.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

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

export function TaxLegalSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic gold texture background */}
      <div className="absolute inset-0">
        <img src={GOLD_TEXTURE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2177_0.0356_251.29_/_0.95)] via-[oklch(0.2177_0.0356_251.29_/_0.92)] to-[oklch(0.2177_0.0356_251.29_/_0.96)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center max-w-3xl mx-auto">
          <p className="section-label mb-5">Tax & Legal Extension</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            Protecting Pastors and{" "}
            <span className="gold-shimmer-text">Their Organizations</span>
          </h2>
          <div className="gold-rule max-w-[160px] mx-auto mb-8" />
          <p className="font-sans text-base text-[oklch(0.6_0.01_260)] leading-relaxed">
            We ensure pastors receive every lawful tax benefit while keeping the organization fully compliant.
          </p>
        </AnimatedSection>

        {/* Two Columns — Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Tax Column */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 lg:p-12 h-full group">
              <div className="flex items-center gap-4 mb-10">
                <div className="luxury-icon w-14 h-14">
                  <Shield className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)]">
                  Pastoral Tax Services
                </h3>
              </div>
              <div className="space-y-5">
                {taxServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 rotate-45 bg-[oklch(0.7432_0.1171_89.51)] group-hover/item:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="font-sans text-[0.9rem] text-[oklch(0.65_0.01_260)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Legal Column */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 lg:p-12 h-full group">
              <div className="flex items-center gap-4 mb-10">
                <div className="luxury-icon w-14 h-14">
                  <Scale className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)]">
                  Legal Extension Services
                </h3>
              </div>
              <div className="space-y-5">
                {legalServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 rotate-45 bg-[oklch(0.7432_0.1171_89.51)] group-hover/item:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="font-sans text-[0.9rem] text-[oklch(0.65_0.01_260)] leading-relaxed">
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
