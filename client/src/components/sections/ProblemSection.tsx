/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Problem Section: Dark background, gold accent lines, 4 luxury cards
 * Emotional + Strategic tone
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { AlertTriangle, Building2, TrendingUp, UserX } from "lucide-react";

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
    <section className="relative py-28 lg:py-36 bg-[oklch(0.08_0.02_260)] grain-overlay overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 max-w-3xl">
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.008_85)] leading-tight mb-6">
            Most Churches Are Financially Underserved{" "}
            <span className="text-[oklch(0.75_0.12_85)]">and Overexposed</span>
          </h2>
          <div className="gold-rule max-w-[120px]" />
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {problems.map((problem, i) => (
            <AnimatedSection key={problem.title} delay={i * 0.1}>
              <div className="gold-card bg-[oklch(0.1_0.02_260)] p-8 lg:p-10 h-full">
                <problem.icon className="w-8 h-8 text-[oklch(0.75_0.12_85)] mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.97_0.008_85)] mb-4">
                  {problem.title}
                </h3>
                <p className="font-sans text-[oklch(0.6_0.01_260)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Quote */}
        <AnimatedSection>
          <p className="font-serif text-lg italic text-[oklch(0.75_0.12_85)] text-center max-w-2xl mx-auto">
            Pastors were called to shepherd — not to be their own CFO, attorney, and real estate advisor.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
