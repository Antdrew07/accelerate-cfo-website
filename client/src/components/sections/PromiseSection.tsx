/*
 * LUXURY UPGRADE — Our Promise Section
 * Cinematic sunrise with vignette, glassmorphism value cards, premium depth
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Heart, Eye, Users, Zap } from "lucide-react";

const SUNRISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/promise-sunrise-MnfrkxLYhchwTTSERNJM56.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

const values = [
  {
    icon: Heart,
    title: "Stewardship",
    description: "Every dollar honored as sacred trust.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description: "Real-time financial visibility at all times.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We serve alongside you, not above you.",
  },
  {
    icon: Zap,
    title: "Acceleration",
    description: "Removing barriers to Kingdom momentum.",
  },
];

export function PromiseSection() {
  return (
    <section id="promise" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img
          src={SUNRISE_IMG}
          alt="Sunrise over pastoral landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2177_0.0356_251.29_/_0.88)] via-[oklch(0.2177_0.0356_251.29_/_0.82)] to-[oklch(0.2177_0.0356_251.29_/_0.92)]" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 60px oklch(0.1947 0.0363 257.71 / 0.5)" }} />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-5">Our Promise</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-10 max-w-3xl mx-auto">
            We Exist to Help Pastors Accelerate What God Has Called Them{" "}
            <span className="gold-shimmer-text">to Do</span>
          </h2>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-3xl mx-auto mb-20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[oklch(0.7432_0.1171_89.51_/_0.2)] font-serif text-6xl leading-none">"</div>
            <blockquote className="font-serif text-lg lg:text-xl italic text-[oklch(0.72_0.01_260)] leading-[1.8] pt-4">
              Too many pastors are spending 40% of their time on finances, facilities, and legal fires. Our job is to take that weight — so they can lead, preach, and multiply with confidence.
            </blockquote>
          </div>
          <div className="luxury-divider max-w-[200px] mx-auto mb-20" />
        </AnimatedSection>

        {/* Values Grid — Glassmorphism */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={0.3 + i * 0.1}>
              <div className="glass-card p-6 lg:p-8 text-center group">
                <div className="luxury-icon w-14 h-14 mx-auto mb-5">
                  <value.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[oklch(0.9568_0.0119_79.78)] mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-[oklch(0.6_0.01_260)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
