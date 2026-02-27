/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Solution Section: Cream "document" section with authority positioning
 * 3 pillars: Experience, Faith-Driven, Accelerator Mindset
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { Church, Crown, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Crown,
    title: "40+ Years Experience",
    description: "Seasoned financial leadership across corporate, nonprofit, and ministry sectors — including Big 4 accounting, Fortune 500, and billion-dollar construction firms.",
  },
  {
    icon: Church,
    title: "Faith-Driven Firm",
    description: "We don't just serve churches — we understand the Kingdom mandate behind every dollar. Our team has served in ministry leadership firsthand.",
  },
  {
    icon: Rocket,
    title: "Accelerator Mindset",
    description: "We exist to help pastors accelerate what God has called them to do through experienced financial leadership that removes barriers to Kingdom momentum.",
  },
];

export function SolutionSection() {
  const { ref: counterRef, isInView: counterVisible } = useInView();
  const yearsCount = useCountUp(40, 2000, counterVisible);

  return (
    <section className="document-section py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <AnimatedSection>
            <p className="section-label mb-4">The Solution</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Executive-Level Financial Leadership —{" "}
              <span className="text-[oklch(0.565_0.0889_88.97)]">Without the Full-Time Cost</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex items-end">
            <div>
              <p className="font-sans text-base text-[oklch(0.35_0.01_260)] leading-relaxed mb-6">
                Accelerate CFO is a fractional CFO firm built exclusively for churches and nonprofits. We bring 40+ years of combined financial, legal, and real estate expertise — so pastors can focus on ministry while we build the financial infrastructure that makes it sustainable.
              </p>
              <div className="h-[1px] bg-gradient-to-r from-[oklch(0.565_0.0889_88.97)] via-[oklch(0.65_0.12_85_/_0.3)] to-transparent max-w-[120px]" />
            </div>
          </AnimatedSection>
        </div>

        {/* Counter + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Large Counter */}
          <AnimatedSection className="lg:col-span-1">
            <div ref={counterRef} className="flex flex-col items-center lg:items-start justify-center h-full">
              <span className="font-serif text-7xl lg:text-8xl font-bold text-[oklch(0.565_0.0889_88.97)] leading-none">
                {yearsCount}+
              </span>
              <span className="font-sans text-sm tracking-[0.15em] uppercase text-[oklch(0.42_0.02_285)] mt-3">
                Years Combined Experience
              </span>
            </div>
          </AnimatedSection>

          {/* 3 Pillars */}
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.1 + i * 0.1}>
              <div className="border-t-2 border-[oklch(0.565_0.0889_88.97)] pt-8 h-full">
                <pillar.icon className="w-7 h-7 text-[oklch(0.565_0.0889_88.97)] mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-bold text-[oklch(0.2177_0.0356_251.29)] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-[oklch(0.42_0.02_285)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
