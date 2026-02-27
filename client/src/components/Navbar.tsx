import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_CIRCLE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029617589/giAicM8DdHK2T5b4mXbReT/brand-circle-logo_83362397.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[oklch(0.1947_0.0363_257.71_/_0.92)] backdrop-blur-2xl shadow-[0_4px_30px_oklch(0_0_0_/_0.3),0_1px_0_oklch(0.7432_0.1171_89.51_/_0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* Gold accent line at top */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-full bg-gradient-to-r from-transparent via-[oklch(0.7432_0.1171_89.51_/_0.4)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={LOGO_CIRCLE}
              alt="Accelerate CFO"
              className="h-12 w-12 object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_oklch(0.7432_0.1171_89.51_/_0.3)]"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-[1rem] font-bold tracking-[0.08em] text-[oklch(0.9568_0.0119_79.78)] leading-tight uppercase">
                Accelerate CFO
              </span>
              <span className="font-sans text-[0.55rem] font-500 tracking-[0.2em] text-[oklch(0.7432_0.1171_89.51)] uppercase">
                Fractional CFO Services
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-sans text-[0.75rem] font-600 tracking-[0.15em] uppercase text-[oklch(0.7_0.02_260)] hover:text-[oklch(0.7432_0.1171_89.51)] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[oklch(0.7432_0.1171_89.51)] group-hover:w-full transition-all duration-300" />
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[oklch(0.1947_0.0363_257.71_/_0.98)] backdrop-blur-2xl border-t border-[oklch(0.7432_0.1171_89.51_/_0.1)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-sans text-sm font-600 tracking-[0.15em] uppercase text-[oklch(0.7_0.02_260)] hover:text-[oklch(0.7432_0.1171_89.51)] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gold text-[0.7rem] py-3 px-6 inline-block mt-4"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
