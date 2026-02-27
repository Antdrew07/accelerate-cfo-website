import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
          ? "bg-[oklch(0.06_0.015_260_/_0.85)] backdrop-blur-xl border-b border-[oklch(0.75_0.12_85_/_0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-xl font-bold tracking-wide text-[oklch(0.97_0.008_85)]">
              ACCELERATE
            </span>
            <span className="font-serif text-xl font-bold tracking-wide text-[oklch(0.75_0.12_85)]">
              CFO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[0.75rem] font-600 tracking-[0.15em] uppercase text-[oklch(0.75_0.01_260)] hover:text-[oklch(0.75_0.12_85)] transition-colors duration-300"
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
            className="lg:hidden text-[oklch(0.75_0.12_85)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.08_0.02_260_/_0.98)] backdrop-blur-xl border-t border-[oklch(0.75_0.12_85_/_0.1)]">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm font-600 tracking-[0.15em] uppercase text-[oklch(0.75_0.01_260)] hover:text-[oklch(0.75_0.12_85)] transition-colors"
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
