/*
 * Design: "The Vault" — Dark Editorial Luxury
 * How We Engage: Cream document section with vertical gold timeline
 * 4 elegant steps with smooth scroll animation
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, ClipboardCheck, Settings, Handshake } from "lucide-react";

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
    <section id="engage" className="document-section py-28 lg:py-36 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center">
          <p className="section-label mb-4">How We Engage</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            A Simple, Scalable Model{" "}
            <span className="text-[oklch(0.65_0.12_85)]">Designed for Churches</span>
          </h2>
        </AnimatedSection>

        {/* Timeline Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="flex gap-6 lg:gap-10">
                {/* Timeline Column */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Node */}
                  <div className="w-10 h-10 rounded-full border-2 border-[oklch(0.65_0.12_85)] flex items-center justify-center bg-[oklch(0.97_0.008_85)]">
                    <span className="font-sans text-xs font-700 text-[oklch(0.65_0.12_85)]">{step.number}</span>
                  </div>
                  {/* Line */}
                  {i < steps.length - 1 && (
                    <div className="w-[1px] flex-1 min-h-[80px] bg-gradient-to-b from-[oklch(0.65_0.12_85)] to-[oklch(0.65_0.12_85_/_0.2)]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-16 lg:pb-20 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-[oklch(0.65_0.12_85)]" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl lg:text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-[oklch(0.4_0.01_260)] leading-relaxed max-w-lg">
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
