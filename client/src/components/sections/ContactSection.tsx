/*
 * LUXURY UPGRADE — Contact Section
 * Glassmorphism form container, cinematic background, gold glow effects
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";

const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";
const LOGO_CIRCLE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-circle-logo_83362397.png";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    church: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours to schedule your discovery call.");
    setFormData({ name: "", email: "", phone: "", church: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[oklch(0.1947_0.0363_257.71)]" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${BRAND_PATTERN})`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,oklch(0.7432_0.1171_89.51_/_0.04)_0%,transparent_70%)] pointer-events-none" />
      {/* Floating logo watermark */}
      <div className="absolute right-[-5%] bottom-[-10%] opacity-[0.03] pointer-events-none hidden lg:block">
        <img src={LOGO_CIRCLE} alt="" className="w-[400px] h-[400px] object-contain" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-label mb-5">Get Started</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            Let's Build the Financial Foundation{" "}
            <span className="gold-shimmer-text">Your Ministry Deserves.</span>
          </h2>
          <p className="font-sans text-base text-[oklch(0.6_0.01_260)] max-w-xl mx-auto leading-relaxed">
            Schedule your complimentary discovery call. No obligation, no pressure — just a conversation about your church's financial future.
          </p>
        </AnimatedSection>

        {/* Glassmorphism Form Container */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card p-8 lg:p-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[oklch(0.2177_0.0356_251.29_/_0.5)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51_/_0.5)] focus:shadow-[0_0_15px_oklch(0.7432_0.1171_89.51_/_0.1)] focus:outline-none transition-all duration-300 placeholder:text-[oklch(0.45_0.01_260)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[oklch(0.2177_0.0356_251.29_/_0.5)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51_/_0.5)] focus:shadow-[0_0_15px_oklch(0.7432_0.1171_89.51_/_0.1)] focus:outline-none transition-all duration-300 placeholder:text-[oklch(0.45_0.01_260)]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[oklch(0.2177_0.0356_251.29_/_0.5)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51_/_0.5)] focus:shadow-[0_0_15px_oklch(0.7432_0.1171_89.51_/_0.1)] focus:outline-none transition-all duration-300 placeholder:text-[oklch(0.45_0.01_260)]"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] mb-3">
                    Church / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.church}
                    onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                    className="w-full bg-[oklch(0.2177_0.0356_251.29_/_0.5)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51_/_0.5)] focus:shadow-[0_0_15px_oklch(0.7432_0.1171_89.51_/_0.1)] focus:outline-none transition-all duration-300 placeholder:text-[oklch(0.45_0.01_260)]"
                    placeholder="Your church name"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] mb-3">
                  Tell Us About Your Needs
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[oklch(0.2177_0.0356_251.29_/_0.5)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51_/_0.5)] focus:shadow-[0_0_15px_oklch(0.7432_0.1171_89.51_/_0.1)] focus:outline-none transition-all duration-300 resize-none placeholder:text-[oklch(0.45_0.01_260)]"
                  placeholder="What financial challenges is your church facing?"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  Schedule Your Complimentary Discovery Call
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* Trust line */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="text-center">
            <div className="luxury-divider max-w-[200px] mx-auto mb-6" />
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-[oklch(0.45_0.01_260)]">
              40+ Years Experience
              <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">◆</span>
              Faith-Driven
              <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">◆</span>
              Kingdom-Focused
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
