/*
 * LUXURY UPGRADE — Problem Section
 * Cinematic boardroom background, glassmorphism cards, gold glow effects
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { AlertTriangle, Building2, TrendingUp, UserX } from "lucide-react";

const BOARDROOM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-boardroom-QJUDZGS3Jg2AvyLN97Mmc8.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

const problems = [
  {
    icon: UserX,
    title: "No Strategic CFO",
    description: "Pastors carry the weight of financial decisions without executive-level financial counsel. Critical choices about budgets, debt, and growth are made without the expertise they demand.",
  },
  {
    icon: AlertTriangle,
    title: "Tax & Compliance Risk",
    description: "Housing allowances, ministerial exemptions, and 501(c)(3) requirements are mishandled or ignored — exposing pastors and their organizations to serious liability.",
  },
  {
    icon: Building2,
    title: "Facility Traps",
    description: "Churches sign leases and purchase buildings without financial modeling, market analysis, or exit strategies. One bad deal can cripple a ministry for a decade.",
  },
  {
    icon: TrendingUp,
    title: "Growth Without Infrastructure",
    description: "Revenue increases but there are no dashboards, forecasts, or stewardship systems to sustain it. Growth without infrastructure is a recipe for collapse.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={BOARDROOM_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1947_0.0363_257.71_/_0.92)] via-[oklch(0.2177_0.0356_251.29_/_0.88)] to-[oklch(0.1947_0.0363_257.71_/_0.95)]" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 max-w-3xl">
          <p className="section-label mb-5">The Problem</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            Most Churches Are Financially Underserved{" "}
            <span className="gold-shimmer-text">and Overexposed</span>
          </h2>
          <div className="gold-rule max-w-[160px]" />
        </AnimatedSection>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {problems.map((problem, i) => (
            <AnimatedSection key={problem.title} delay={i * 0.12}>
              <div className="glass-card p-8 lg:p-10 h-full group">
                <div className="luxury-icon mb-7 group-hover:shadow-[0_0_20px_oklch(0.7432_0.1171_89.51_/_0.2)] transition-shadow duration-500">
                  <problem.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)] mb-4">
                  {problem.title}
                </h3>
                <p className="font-sans text-[oklch(0.65_0.01_260)] leading-relaxed text-[0.95rem]">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Quote */}
        <AnimatedSection>
          <div className="text-center">
            <div className="luxury-divider max-w-[200px] mx-auto mb-8" />
            <p className="font-serif text-xl lg:text-2xl italic text-[oklch(0.7432_0.1171_89.51)] max-w-2xl mx-auto leading-relaxed">
              Pastors were called to shepherd — not to be their own CFO, attorney, and real estate advisor.
            </p>
            <div className="luxury-divider max-w-[200px] mx-auto mt-8" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
