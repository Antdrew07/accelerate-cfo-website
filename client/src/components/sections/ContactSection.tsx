/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Final CTA: Dark section with contact form
 * Gold button, minimal, clean, elegant
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";

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
    <section id="contact" className="relative py-28 lg:py-36 bg-[oklch(0.1947_0.0363_257.71)] overflow-hidden">
      {/* Brand pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-pattern-c8kwd3myRUP9zeadcbsnNo.webp)`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.7432_0.1171_89.51_/_0.5)] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-label mb-4">Get Started</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.9568_0.0119_79.78)] leading-tight mb-6">
            Let's Build the Financial Foundation{" "}
            <span className="text-[oklch(0.7432_0.1171_89.51)]">Your Ministry Deserves.</span>
          </h2>
          <p className="font-sans text-base text-[oklch(0.55_0.02_285)] max-w-xl mx-auto">
            Schedule your complimentary discovery call. No obligation, no pressure — just a conversation about your church's financial future.
          </p>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.55_0.02_285)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[oklch(0.2659_0.0559_254.82)] border border-[oklch(0.3266_0.0687_255.83)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.55_0.02_285)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[oklch(0.2659_0.0559_254.82)] border border-[oklch(0.3266_0.0687_255.83)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.55_0.02_285)] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[oklch(0.2659_0.0559_254.82)] border border-[oklch(0.3266_0.0687_255.83)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51)] focus:outline-none transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.55_0.02_285)] mb-2">
                  Church / Organization
                </label>
                <input
                  type="text"
                  value={formData.church}
                  onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                  className="w-full bg-[oklch(0.2659_0.0559_254.82)] border border-[oklch(0.3266_0.0687_255.83)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51)] focus:outline-none transition-colors"
                  placeholder="Your church name"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.55_0.02_285)] mb-2">
                Tell Us About Your Needs
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[oklch(0.2659_0.0559_254.82)] border border-[oklch(0.3266_0.0687_255.83)] text-[oklch(0.9568_0.0119_79.78)] font-sans text-sm px-5 py-4 focus:border-[oklch(0.7432_0.1171_89.51)] focus:outline-none transition-colors resize-none"
                placeholder="What financial challenges is your church facing?"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-gold w-full sm:w-auto">
                Schedule Your Complimentary Discovery Call
              </button>
            </div>
          </form>
        </AnimatedSection>

        {/* Trust line */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="text-center">
            <div className="gold-rule max-w-[80px] mx-auto mb-6" />
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-[oklch(0.42_0.02_285)]">
              40+ Years Experience
              <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">&bull;</span>
              Faith-Driven
              <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">&bull;</span>
              Kingdom-Focused
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
