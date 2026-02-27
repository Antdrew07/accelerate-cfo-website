/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Executive Bio: Dark section with editorial layout
 * Nathan Byrd's credentials and background
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Award, Shield, BookOpen, Swords } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "CPA, Dual-Licensed",
    detail: "Alabama & Florida",
  },
  {
    icon: BookOpen,
    title: "Ernst & Young (EY)",
    detail: "Big 4 Audit Foundation",
  },
  {
    icon: Shield,
    title: "Master of Accountancy",
    detail: "University of Alabama",
  },
  {
    icon: Swords,
    title: "U.S. Marine Corps Veteran",
    detail: "Operation Iraqi Freedom",
  },
];

const careerHighlights = [
  "Ernst & Young (EY) — Big 4 public accounting, financial statement audits across multiple industries",
  "Alabama Power Company — $5B+ utility, accounting research and regulatory compliance",
  "BL Harbert International — $1B+ construction firm, Assistant Controller",
  "ProAssurance Corporation — Internal audit and corporate accounting during major acquisitions",
  "The Gathering Place Church — Finance Director, built financial reporting from the ground up",
  "Mettler-Toledo — Business Area Controller, current corporate leadership role",
];

export function ExecutiveBioSection() {
  return (
    <section id="leadership" className="relative py-28 lg:py-36 bg-[oklch(0.06_0.015_260)] grain-overlay overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="section-label mb-4">Leadership</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.97_0.008_85)] leading-tight mb-6">
            Meet Your <span className="text-[oklch(0.75_0.12_85)]">CFO</span>
          </h2>
          <div className="gold-rule max-w-[120px]" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio Content */}
          <AnimatedSection className="lg:col-span-3" delay={0.1}>
            <div>
              <h3 className="font-serif text-3xl font-bold text-[oklch(0.97_0.008_85)] mb-2">
                Nathan S. Byrd
              </h3>
              <p className="font-sans text-sm tracking-[0.15em] uppercase text-[oklch(0.75_0.12_85)] mb-6">
                CPA &bull; Founder & Managing Director
              </p>
              <p className="font-sans text-base text-[oklch(0.65_0.01_260)] leading-relaxed mb-6">
                Nathan Byrd is a CPA with 15+ years of combined experience in corporate and public accounting, spanning Big 4 audit, Fortune 500 companies, billion-dollar construction firms, regulated utilities, and nonprofit ministry. He has managed teams, led financial transformations, and served in executive leadership across industries that demand precision, integrity, and strategic clarity.
              </p>
              <p className="font-sans text-base text-[oklch(0.65_0.01_260)] leading-relaxed mb-6">
                As Finance Director at The Gathering Place Church, Nathan built the financial reporting and budgeting infrastructure from the ground up — creating dashboards, managing staff and volunteers, and serving as the bridge between church leadership and financial stewardship. That experience, combined with his corporate career, gave him a unique vantage point: churches need the same caliber of financial leadership as any Fortune 500 company, but with a team that understands the mission.
              </p>
              <p className="font-sans text-base text-[oklch(0.65_0.01_260)] leading-relaxed mb-8">
                Nathan is a proud veteran of the United States Marine Corps, having served a combat tour in Operation Iraqi Freedom. His military discipline, combined with his financial expertise and heart for ministry, drives the Accelerate CFO mission: to help pastors lead with confidence by removing the financial weight from their shoulders.
              </p>

              {/* Career Highlights */}
              <h4 className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-[oklch(0.75_0.12_85)] mb-5">
                Career Highlights
              </h4>
              <div className="space-y-3 mb-8">
                {careerHighlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="w-5 h-[1px] bg-[oklch(0.75_0.12_85)] mt-3 shrink-0 group-hover:w-8 transition-all duration-300" />
                    <span className="font-sans text-sm text-[oklch(0.55_0.01_260)] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Credentials Sidebar */}
          <AnimatedSection className="lg:col-span-2" delay={0.3}>
            <div className="space-y-6">
              {credentials.map((cred, i) => (
                <div key={i} className="gold-card bg-[oklch(0.1_0.02_260)] p-6">
                  <div className="flex items-center gap-4">
                    <cred.icon className="w-6 h-6 text-[oklch(0.75_0.12_85)] shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-serif text-base font-bold text-[oklch(0.97_0.008_85)]">
                        {cred.title}
                      </h4>
                      <p className="font-sans text-xs text-[oklch(0.55_0.01_260)]">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quote Card */}
              <div className="bg-[oklch(0.1_0.02_260)] border-l-2 border-[oklch(0.75_0.12_85)] p-6 mt-8">
                <blockquote className="font-serif text-base italic text-[oklch(0.75_0.12_85)] leading-relaxed">
                  "I've seen what happens when churches don't have the right financial infrastructure. My job is to make sure that never happens on my watch."
                </blockquote>
                <p className="font-sans text-xs text-[oklch(0.55_0.01_260)] mt-3">
                  — Nathan S. Byrd, CPA
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
