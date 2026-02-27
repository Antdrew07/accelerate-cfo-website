/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Hero: Cinematic full-viewport with diagonal split feel
 * Typography: EB Garamond headlines, Source Sans 3 body
 * Colors: True black bg, gold accents, ivory text
 * Brand: Icon mark watermark, brand pattern overlay
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/hero-skyline-UUdRwQgMaiuw8vRThwgFcY.webp";
const ICON_MARK = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/logo-icon-mark-9oQXfiLfCWcdBX6nMqvJnG.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-pattern-c8kwd3myRUP9zeadcbsnNo.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="City skyline at golden hour"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient — left side darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1706_0.0284_267.36_/_0.92)] via-[oklch(0.1706_0.0284_267.36_/_0.8)] to-[oklch(0.1706_0.0284_267.36_/_0.55)]" />
        {/* Bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1706_0.0284_267.36)] via-transparent to-transparent" />
        {/* Brand pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "600px 600px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Floating icon mark watermark — right side */}
      <motion.div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={ICON_MARK}
          alt=""
          className="w-[500px] h-[500px] object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Section Label */}
          <AnimatedSection delay={0.2}>
            <p className="section-label mb-8">
              Fractional CFO Services for Churches & Nonprofits
            </p>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.4}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[oklch(0.9568_0.0119_79.78)] mb-8">
              Your Church Deserves a CFO Who Understands{" "}
              <span className="text-[oklch(0.7432_0.1171_89.51)]">the Mission.</span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.6}>
            <p className="font-sans text-lg md:text-xl text-[oklch(0.7_0.02_285)] leading-relaxed max-w-2xl mb-10">
              Fractional CFO Services, Tax Strategy, Real Estate & Legal Infrastructure — Built Exclusively for Churches & Nonprofits.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#contact" className="btn-gold text-center">
                Schedule a Discovery Call
              </a>
              <a href="#services" className="btn-outline-gold text-center">
                Explore Our Services
              </a>
            </div>
          </AnimatedSection>

          {/* Trust Badge */}
          <AnimatedSection delay={1.0}>
            <div className="flex items-center gap-6">
              <div className="gold-rule flex-1 max-w-[60px]" />
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-[oklch(0.55_0.02_285)]">
                40+ Years of Combined Experience
                <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">&bull;</span>
                Faith-Driven
                <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">&bull;</span>
                Kingdom-Focused
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[oklch(0.7432_0.1171_89.51)] to-transparent" />
      </motion.div>
    </section>
  );
}
