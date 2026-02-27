/*
 * LUXURY UPGRADE — Hero Section
 * Dramatic full-viewport cinematic with vignette, gold shimmer headline,
 * floating logo, premium CTA buttons with glow
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/hero-skyline-UUdRwQgMaiuw8vRThwgFcY.webp";
const LOGO_CIRCLE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-circle-logo_83362397.png";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <img
          src={HERO_IMG}
          alt="City skyline at golden hour"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Multi-layer overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1947_0.0363_257.71_/_0.95)] via-[oklch(0.2177_0.0356_251.29_/_0.82)] to-[oklch(0.2177_0.0356_251.29_/_0.5)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1947_0.0363_257.71)] via-transparent to-[oklch(0.1947_0.0363_257.71_/_0.3)]" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 60px oklch(0.1947 0.0363 257.71 / 0.6)" }} />
      {/* Brand pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${BRAND_PATTERN})`,
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Floating circle logo watermark */}
      <motion.div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden lg:block"
        animate={{ y: [-12, 12, -12], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={LOGO_CIRCLE}
          alt=""
          className="w-[550px] h-[550px] object-contain"
        />
      </motion.div>

      {/* Ambient gold glow — top left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,oklch(0.7432_0.1171_89.51_/_0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28 w-full">
        <div className="max-w-3xl">
          {/* Section Label */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[oklch(0.7432_0.1171_89.51)]" />
              <p className="section-label">
                Fractional CFO Services for Churches & Nonprofits
              </p>
            </div>
          </AnimatedSection>

          {/* Headline — dramatic sizing */}
          <AnimatedSection delay={0.4}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.02] tracking-tight text-[oklch(0.9568_0.0119_79.78)] mb-10">
              Your Church Deserves a CFO Who Understands{" "}
              <span className="gold-shimmer-text">the Mission.</span>
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.6}>
            <p className="font-sans text-lg md:text-xl text-[oklch(0.72_0.02_260)] leading-[1.7] max-w-2xl mb-12">
              Fractional CFO Services, Tax Strategy, Real Estate & Legal Infrastructure — Built Exclusively for Churches & Nonprofits.
            </p>
          </AnimatedSection>

          {/* CTAs with gold glow */}
          <AnimatedSection delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-5 mb-20">
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
              <div className="w-16 h-[2px] bg-gradient-to-r from-[oklch(0.7432_0.1171_89.51)] to-transparent" />
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-[oklch(0.55_0.02_260)] font-500">
                40+ Years of Combined Experience
                <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">◆</span>
                Faith-Driven
                <span className="mx-3 text-[oklch(0.7432_0.1171_89.51)]">◆</span>
                Kingdom-Focused
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.55_0.02_260)]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[oklch(0.7432_0.1171_89.51)] to-transparent" />
      </motion.div>
    </section>
  );
}
