/*
 * LUXURY UPGRADE — Service Lines Section
 * Glassmorphism cards with gold glow, luxury icon containers, cinematic depth
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { BarChart3, Calculator, MapPin, Building, Gavel, Shield, ChevronDown, ChevronUp } from "lucide-react";

const GOLD_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/luxury-gold-texture-Uj6QjQgmD77ZwYxtLRmUqx.webp";
const BRAND_PATTERN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-chevron-pattern_0089c0eb.png";

const services = [
  {
    icon: BarChart3,
    title: "Fractional CFO Services",
    headline: "Executive Financial Strategy for Ministry Growth",
    bullets: [
      "Annual and multi-year budgeting with scenario modeling",
      "Monthly financial reporting and board-ready packages",
      "Cash flow management and 90-day forecasting",
      "Recurring giving strategy and stewardship campaign design",
      "Chart of accounts optimization for nonprofits",
      "Bookkeeper and accountant oversight and coordination",
      "Capital campaign financial structuring",
      "Financial dashboard design and KPI tracking",
    ],
  },
  {
    icon: Calculator,
    title: "Pastoral Tax & Compliance",
    headline: "Protecting Every Lawful Benefit for Clergy",
    bullets: [
      "Housing allowance structuring and documentation",
      "Minister self-employment tax (SE) optimization",
      "Dual-status tax planning (employee + self-employed)",
      "Quarterly estimated tax planning",
      "Parsonage exemption compliance",
      "Annual tax return preparation for clergy",
    ],
  },
  {
    icon: MapPin,
    title: "Venue Search & Location",
    headline: "Strategic Site Selection for Ministry Impact",
    bullets: [
      "Market and demographic analysis",
      "Commercial site identification and evaluation",
      "Lease vs. buy financial modeling",
      "Zoning and permitting guidance",
      "Lease negotiation and review",
      "Multi-campus expansion planning",
    ],
  },
  {
    icon: Building,
    title: "Real Estate Investment",
    headline: "Building Portfolios That Fund the Mission",
    bullets: [
      "Property acquisition strategy",
      "Building portfolio management",
      "Investment ROI modeling",
      "Debt structuring and refinancing",
      "Capital improvement planning",
      "Asset valuation and optimization",
    ],
  },
  {
    icon: Gavel,
    title: "Legal Extension",
    headline: "Governance Infrastructure for Kingdom Organizations",
    bullets: [
      "501(c)(3) application and formation",
      "Nonprofit bylaws and governance documents",
      "State registration and annual compliance",
      "Employment law guidance for ministry staff",
      "Board governance structure and policy",
      "Risk management and liability review",
    ],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    headline: "Fortifying Your Ministry Against Exposure",
    bullets: [
      "Audit preparation and readiness",
      "Insurance review and optimization",
      "Financial policy development",
      "Internal controls assessment",
      "Regulatory compliance monitoring",
      "Fiduciary responsibility training",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="glass-card p-8 lg:p-10 h-full group relative overflow-hidden">
        {/* Subtle gold glow on top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.7432_0.1171_89.51)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="luxury-icon mb-6 group-hover:shadow-[0_0_25px_oklch(0.7432_0.1171_89.51_/_0.2)] transition-all duration-500">
          <service.icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.9568_0.0119_79.78)] mb-2">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-[oklch(0.7432_0.1171_89.51)] font-500 mb-6 tracking-wide">
          {service.headline}
        </p>

        {/* Bullets */}
        <ul className="space-y-3">
          {service.bullets.slice(0, expanded ? undefined : 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[oklch(0.7432_0.1171_89.51_/_0.6)] mt-1.5 shrink-0" />
              <span className="font-sans text-sm text-[oklch(0.65_0.01_260)] leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {service.bullets.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 mt-6 font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.7432_0.1171_89.51)] hover:text-[oklch(0.82_0.1_89.51)] transition-colors"
          >
            {expanded ? "Show Less" : `+${service.bullets.length - 4} More`}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
      </div>
    </AnimatedSection>
  );
}

export function ServiceLinesSection() {
  return (
    <section id="services" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Cinematic gold texture background */}
      <div className="absolute inset-0">
        <img
          src={GOLD_TEXTURE}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2177_0.0356_251.29_/_0.95)] via-[oklch(0.2177_0.0356_251.29_/_0.92)] to-[oklch(0.2177_0.0356_251.29_/_0.96)]" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url(${BRAND_PATTERN})`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20 text-center max-w-3xl mx-auto">
          <p className="section-label mb-5">Service Lines</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[oklch(0.9568_0.0119_79.78)] leading-[1.1] mb-8">
            A Full-Spectrum CFO Firm{" "}
            <span className="gold-shimmer-text">Built for Ministry</span>
          </h2>
          <div className="gold-rule max-w-[160px] mx-auto" />
        </AnimatedSection>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
