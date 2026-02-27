/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Service Lines: Dark bg, 6 premium service blocks with gold top borders
 * Each block has authority headline + bullet breakdowns
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { BarChart3, Calculator, MapPin, Building, Gavel, Shield, ChevronDown, ChevronUp } from "lucide-react";

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
      <div className="gold-card bg-[oklch(0.1_0.02_260)] p-8 lg:p-10 h-full">
        <service.icon className="w-8 h-8 text-[oklch(0.75_0.12_85)] mb-5" strokeWidth={1.5} />
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-[oklch(0.97_0.008_85)] mb-2">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-[oklch(0.75_0.12_85)] font-500 mb-5 tracking-wide">
          {service.headline}
        </p>

        {/* Bullets — show first 4 always, rest on expand */}
        <ul className="space-y-3">
          {service.bullets.slice(0, expanded ? undefined : 4).map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.75_0.12_85)] mt-2 shrink-0" />
              <span className="font-sans text-sm text-[oklch(0.6_0.01_260)] leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {service.bullets.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 mt-5 font-sans text-xs font-600 tracking-[0.1em] uppercase text-[oklch(0.75_0.12_85)] hover:text-[oklch(0.82_0.1_85)] transition-colors"
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
    <section id="services" className="relative py-28 lg:py-36 bg-[oklch(0.06_0.015_260)] grain-overlay overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
          <p className="section-label mb-4">Service Lines</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.008_85)] leading-tight mb-6">
            A Full-Spectrum CFO Firm{" "}
            <span className="text-[oklch(0.75_0.12_85)]">Built for Ministry</span>
          </h2>
          <div className="gold-rule max-w-[120px] mx-auto" />
        </AnimatedSection>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
