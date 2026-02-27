/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Our Promise: Dark section with sunrise background image
 * Emotional + Faith Anchored, core values
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Heart, Eye, Users, Zap } from "lucide-react";

const SUNRISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/promise-sunrise-MnfrkxLYhchwTTSERNJM56.webp";

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
    <section id="promise" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={SUNRISE_IMG}
          alt="Sunrise over pastoral landscape with church steeple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.06_0.015_260_/_0.85)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-4">Our Promise</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.008_85)] leading-tight mb-8 max-w-3xl mx-auto">
            We Exist to Help Pastors Accelerate What God Has Called Them{" "}
            <span className="text-[oklch(0.75_0.12_85)]">to Do</span>
          </h2>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.2}>
          <blockquote className="font-serif text-lg lg:text-xl italic text-[oklch(0.7_0.01_260)] leading-relaxed max-w-3xl mx-auto mb-16">
            "Too many pastors are spending 40% of their time on finances, facilities, and legal fires. Our job is to take that weight — so they can lead, preach, and multiply with confidence."
          </blockquote>
          <div className="gold-rule max-w-[80px] mx-auto mb-16" />
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={0.3 + i * 0.1}>
              <div className="text-center">
                <value.icon className="w-8 h-8 text-[oklch(0.75_0.12_85)] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-[oklch(0.97_0.008_85)] mb-2">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-[oklch(0.55_0.01_260)]">
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
