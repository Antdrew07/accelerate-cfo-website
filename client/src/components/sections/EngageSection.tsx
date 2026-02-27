/*
 * LUXURY UPGRADE — How We Engage Section
 * Navy silk background, glass timeline nodes with gold glow, premium depth
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, ClipboardCheck, Settings, Handshake } from "lucide-react";

const SILK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-abstract-navy-33MqPhj925Aeodj2WYbf8u.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We learn your church's vision, financial health, and immediate needs. This is a no-pressure conversation to understand where you are and where you want to go.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "30-Day Financial Assessment",
    description: "A comprehensive audit of your books, tax status, compliance posture, and facilities. We identify risks, opportunities, and the financial infrastructure gaps holding you back.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Custom Engagement",
    description: "A tailored scope designed for your church — monthly CFO retainer, project-based tax and legal work, or a full-spectrum partnership covering every financial need.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Ongoing Partnership",
    description: "Monthly reporting, quarterly strategy sessions, and year-round support as your church grows. We scale with you — from launch to multi-campus.",
  },
];

export function EngageSection() {
  return (
    <section id="engage" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic navy silk background */}
      <div className="absolute inset-0">
        <img
          src={SILK_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2177_0.0356_251.29_/_0.92)] via-[oklch(0.2177_0.0356_251.29_/_0.88)] to-[oklch(0.2177_0.0356_251.29_/_0.94)]" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
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
          <p className="section-label mb-5">How We Engage</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            A Simple, Scalable Model{" "}
            <span className="gold-shimmer-text">Designed for Churches</span>
          </h2>
          <div className="gold-rule max-w-[160px] mx-auto" />
        </AnimatedSection>

        {/* Timeline Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="flex gap-8 lg:gap-12">
                {/* Timeline Column */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Glass Node */}
                  <div className="w-14 h-14 flex items-center justify-center bg-[oklch(0.2177_0.0356_251.29_/_0.6)] backdrop-blur-md border border-[oklch(0.7432_0.1171_89.51_/_0.4)] shadow-[0_0_20px_oklch(0.7432_0.1171_89.51_/_0.1)]">
                    <span className="font-sans text-sm font-700 text-[oklch(0.7432_0.1171_89.51)]">{step.number}</span>
                  </div>
                  {/* Gold gradient line */}
                  {i < steps.length - 1 && (
                    <div className="w-[1px] flex-1 min-h-[80px] bg-gradient-to-b from-[oklch(0.7432_0.1171_89.51_/_0.5)] via-[oklch(0.7432_0.1171_89.51_/_0.2)] to-[oklch(0.7432_0.1171_89.51_/_0.05)]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-16 lg:pb-20 pt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="luxury-icon w-10 h-10">
                      <step.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)]">{step.title}</h3>
                  </div>
                  <p className="font-sans text-[0.95rem] text-[oklch(0.65_0.01_260)] leading-relaxed max-w-lg pl-14">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
