/*
 * LUXURY UPGRADE — Solution Section
 * Cinematic church interior background, premium counter, glass pillars
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { Church, Crown, Rocket } from "lucide-react";

const CHURCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-church-interior-mkVqhzmZDGxUAhbTefdaBV.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

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
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic church background */}
      <div className="absolute inset-0">
        <img
          src={CHURCH_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.9568_0.0119_79.78_/_0.94)] via-[oklch(0.9568_0.0119_79.78_/_0.88)] to-[oklch(0.9568_0.0119_79.78_/_0.92)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <AnimatedSection>
            <p className="font-sans font-700 text-xs tracking-[0.25em] uppercase text-[oklch(0.565_0.0889_88.97)] mb-5">The Solution</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold leading-[1.1] text-[oklch(0.2177_0.0356_251.29)] mb-6">
              Executive-Level Financial Leadership —{" "}
              <span className="text-[oklch(0.565_0.0889_88.97)]">Without the Full-Time Cost</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex items-end">
            <div>
              <p className="font-sans text-base text-[oklch(0.35_0.01_260)] leading-[1.8] mb-6">
                Accelerate CFO is a fractional CFO firm built exclusively for churches and nonprofits. We bring 40+ years of combined financial, legal, and real estate expertise — so pastors can focus on ministry while we build the financial infrastructure that makes it sustainable.
              </p>
              <div className="h-[2px] bg-gradient-to-r from-[oklch(0.565_0.0889_88.97)] via-[oklch(0.7432_0.1171_89.51_/_0.4)] to-transparent max-w-[160px]" />
            </div>
          </AnimatedSection>
        </div>

        {/* Counter + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Large Counter */}
          <AnimatedSection className="lg:col-span-1">
            <div ref={counterRef} className="flex flex-col items-center lg:items-start justify-center h-full">
              <span className="font-serif text-8xl lg:text-9xl font-bold text-[oklch(0.565_0.0889_88.97)] leading-none tracking-tight">
                {yearsCount}+
              </span>
              <span className="font-sans text-sm tracking-[0.15em] uppercase text-[oklch(0.42_0.02_285)] mt-4 font-600">
                Years Combined Experience
              </span>
            </div>
          </AnimatedSection>

          {/* 3 Pillars */}
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.1 + i * 0.12}>
              <div className="border-t-2 border-[oklch(0.565_0.0889_88.97)] pt-8 h-full group">
                <div className="w-12 h-12 flex items-center justify-center bg-[oklch(0.565_0.0889_88.97_/_0.1)] border border-[oklch(0.565_0.0889_88.97_/_0.25)] mb-6 group-hover:bg-[oklch(0.565_0.0889_88.97_/_0.15)] transition-colors duration-400">
                  <pillar.icon className="w-5 h-5 text-[oklch(0.565_0.0889_88.97)]" strokeWidth={1.5} />
                </div>
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
