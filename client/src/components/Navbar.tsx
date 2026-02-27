import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_ICON = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/logo-icon-mark-9oQXfiLfCWcdBX6nMqvJnG.webp";
const LOGO_WORDMARK = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/logo-primary-dark-7zEKYmnGztiNkgphVHgQvn.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How We Engage", href: "#engage" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.1706_0.0284_267.36_/_0.85)] backdrop-blur-xl border-b border-[oklch(0.7432_0.1171_89.51_/_0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — icon mark + wordmark image */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={LOGO_ICON}
              alt="Accelerate CFO icon"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={LOGO_WORDMARK}
              alt="Accelerate CFO"
              className="h-6 object-contain hidden sm:block"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[0.75rem] font-600 tracking-[0.15em] uppercase text-[oklch(0.7_0.02_285)] hover:text-[oklch(0.7432_0.1171_89.51)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold text-[0.7rem] py-3 px-6 inline-block"
            >
              Schedule a Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[oklch(0.7432_0.1171_89.51)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.08_0.02_260_/_0.98)] backdrop-blur-xl border-t border-[oklch(0.7432_0.1171_89.51_/_0.1)]">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm font-600 tracking-[0.15em] uppercase text-[oklch(0.7_0.02_285)] hover:text-[oklch(0.7432_0.1171_89.51)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold text-[0.7rem] py-3 px-6 inline-block mt-4"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
