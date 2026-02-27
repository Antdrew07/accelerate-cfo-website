/*
 * Design: "The Vault" — Dark Editorial Luxury
 * Leadership Section: Barry Howton (CEO) with headshot + Nathan Byrd (Executive CFO)
 * Dark section with editorial layout, gold accents
 */

import { AnimatedSection } from "@/components/AnimatedSection";
import { Award, Shield, BookOpen, Swords, Building2, Users, Globe, TrendingUp } from "lucide-react";

const barryCredentials = [
  {
    icon: Building2,
    title: "CEO, Consolidated Pipe & Supply",
    detail: "Birmingham, AL — Major national corporation",
  },
  {
    icon: Award,
    title: "BBJ CFO Award Nominee",
    detail: "2021 Birmingham Business Journal",
  },
  {
    icon: Globe,
    title: "Church of the Highlands Trustee",
    detail: "One of America's largest churches",
  },
  {
    icon: Users,
    title: "A18 Network Board of Directors",
    detail: "Global Kingdom leadership network",
  },
];

const nathanCredentials = [
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

const BARRY_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/barry-howton-headshot_47649274.jpeg";

export function ExecutiveBioSection() {
  return (
    <section id="leadership" className="relative py-28 lg:py-36 bg-[oklch(0.1706_0.0284_267.36)] grain-overlay overflow-hidden">
      {/* Brand pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-pattern-c8kwd3myRUP9zeadcbsnNo.webp)`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Leadership</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.9568_0.0119_79.78)] leading-tight mb-6">
            The Team Behind{" "}
            <span className="text-[oklch(0.7432_0.1171_89.51)]">Your Mission</span>
          </h2>
          <div className="gold-rule max-w-[120px]" />
        </AnimatedSection>

        {/* ===== BARRY HOWTON — CEO ===== */}
        <AnimatedSection delay={0.1} className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="absolute -inset-3 border border-[oklch(0.7432_0.1171_89.51_/_0.2)] pointer-events-none" />
                <img
                  src={BARRY_PHOTO}
                  alt="Barry Howton, CEO of Accelerate CFO"
                  className="w-full aspect-[3/4] object-cover object-top grayscale-[20%] contrast-[1.05]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[oklch(0.1706_0.0284_267.36)] to-transparent h-24" />
              </div>
              <p className="font-sans text-[0.65rem] text-[oklch(0.42_0.02_285)] mt-3 tracking-wide">
                Photo: David Lundgren
              </p>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-sans text-[0.65rem] font-700 tracking-[0.2em] uppercase text-[oklch(0.7432_0.1171_89.51)] bg-[oklch(0.7432_0.1171_89.51_/_0.1)] px-3 py-1">
                  Chief Executive Officer
                </span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[oklch(0.9568_0.0119_79.78)] mb-6">
                Barry Howton
              </h3>

              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-5">
                Barry Howton is a seasoned executive leader with decades of experience at the highest levels of corporate finance and strategic leadership. As CEO of Consolidated Pipe & Supply Co. — a major national corporation headquartered in Birmingham, Alabama — Barry has led large-scale operations, directed multi-million-dollar investments, and shaped the strategic direction of an organization with a national footprint.
              </p>
              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-5">
                Barry's financial acumen earned him a nomination for the 2021 Birmingham Business Journal CFO Award, recognizing his exceptional leadership in corporate finance. But what sets Barry apart is the intersection of executive-level business expertise and deep Kingdom commitment. He serves as a Trustee at Church of the Highlands — one of the largest and most influential churches in America — and sits on the Board of Directors for the A18 Network, a global association of churches and ministries.
              </p>
              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-8">
                Barry is widely regarded as a strategic networker, connecting pastors and movement leaders across the globe. His passion for the Great Commission, combined with his corporate leadership experience, uniquely positions him to lead Accelerate CFO's mission: bringing Fortune 500-caliber financial leadership to the churches and ministries that need it most.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {barryCredentials.map((cred, i) => (
                  <div key={i} className="gold-card bg-[oklch(0.2177_0.0356_251.29)] p-5">
                    <div className="flex items-center gap-3">
                      <cred.icon className="w-5 h-5 text-[oklch(0.7432_0.1171_89.51)] shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[oklch(0.9568_0.0119_79.78)]">
                          {cred.title}
                        </h4>
                        <p className="font-sans text-xs text-[oklch(0.5_0.02_285)]">
                          {cred.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 border-l-2 border-[oklch(0.7432_0.1171_89.51)] pl-6">
                <blockquote className="font-serif text-base italic text-[oklch(0.7432_0.1171_89.51)] leading-relaxed">
                  "Churches deserve the same caliber of financial leadership as any Fortune 500 company — but with a team that understands the mission."
                </blockquote>
                <p className="font-sans text-xs text-[oklch(0.5_0.02_285)] mt-2">
                  — Barry Howton, CEO
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="gold-rule max-w-[200px] mx-auto mb-28" />

        {/* ===== NATHAN BYRD — EXECUTIVE CFO ===== */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Bio Content */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-sans text-[0.65rem] font-700 tracking-[0.2em] uppercase text-[oklch(0.7432_0.1171_89.51)] bg-[oklch(0.7432_0.1171_89.51_/_0.1)] px-3 py-1">
                  Executive CFO
                </span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[oklch(0.9568_0.0119_79.78)] mb-6">
                Nathan S. Byrd, CPA
              </h3>

              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-5">
                Nathan Byrd is a CPA with 15+ years of combined experience in corporate and public accounting, spanning Big 4 audit at Ernst & Young, Fortune 500 companies, billion-dollar construction firms, regulated utilities, and nonprofit ministry. He has managed teams, led financial transformations, and served in executive leadership across industries that demand precision, integrity, and strategic clarity.
              </p>
              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-5">
                As Finance Director at The Gathering Place Church, Nathan built the financial reporting and budgeting infrastructure from the ground up — creating dashboards, managing staff and volunteers, and serving as the bridge between church leadership and financial stewardship. That experience, combined with his corporate career at Alabama Power ($5B+ utility), BL Harbert International ($1B+ construction), and ProAssurance Corporation, gave him a unique vantage point: churches need the same caliber of financial leadership as any Fortune 500 company, but with a team that understands the mission.
              </p>
              <p className="font-sans text-base text-[oklch(0.6387_0.0237_285.71)] leading-relaxed mb-8">
                Nathan is a proud veteran of the United States Marine Corps, having served a combat tour in Operation Iraqi Freedom. His military discipline, combined with his financial expertise and heart for ministry, drives the Accelerate CFO mission every day.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nathanCredentials.map((cred, i) => (
                  <div key={i} className="gold-card bg-[oklch(0.2177_0.0356_251.29)] p-5">
                    <div className="flex items-center gap-3">
                      <cred.icon className="w-5 h-5 text-[oklch(0.7432_0.1171_89.51)] shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[oklch(0.9568_0.0119_79.78)]">
                          {cred.title}
                        </h4>
                        <p className="font-sans text-xs text-[oklch(0.5_0.02_285)]">
                          {cred.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monogram / Visual Block */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative bg-[oklch(0.2177_0.0356_251.29)] border border-[oklch(0.7432_0.1171_89.51_/_0.15)] aspect-[3/4] flex items-center justify-center">
                {/* Icon mark as visual element */}
                <div className="text-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/logo-icon-mark-9oQXfiLfCWcdBX6nMqvJnG.webp"
                    alt=""
                    className="w-24 h-24 object-contain mx-auto opacity-20 mb-4"
                  />
                  <span className="font-serif text-5xl font-bold text-[oklch(0.7432_0.1171_89.51_/_0.2)] leading-none block">
                    NB
                  </span>
                  <div className="w-12 h-[1px] bg-[oklch(0.7432_0.1171_89.51_/_0.3)] mx-auto mt-4 mb-3" />
                  <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.5_0.02_285)]">
                    Executive CFO
                  </span>
                </div>
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[oklch(0.7432_0.1171_89.51_/_0.3)]" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[oklch(0.7432_0.1171_89.51_/_0.3)]" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[oklch(0.7432_0.1171_89.51_/_0.3)]" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[oklch(0.7432_0.1171_89.51_/_0.3)]" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
