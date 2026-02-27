export function Footer() {
  return (
    <footer className="bg-[oklch(0.04_0.01_260)] border-t border-[oklch(0.75_0.12_85_/_0.08)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-lg font-bold text-[oklch(0.97_0.008_85)]">ACCELERATE</span>
              <span className="font-serif text-lg font-bold text-[oklch(0.75_0.12_85)]">CFO</span>
            </div>
            <p className="font-sans text-sm text-[oklch(0.55_0.01_260)] leading-relaxed max-w-xs">
              Experienced Financial Leadership to Accelerate What God Has Called You to Do.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-[oklch(0.75_0.12_85)] mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Services", "Why Us", "How We Engage", "Leadership", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block font-sans text-sm text-[oklch(0.55_0.01_260)] hover:text-[oklch(0.75_0.12_85)] transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-[oklch(0.75_0.12_85)] mb-6">
              Contact
            </h4>
            <div className="space-y-3 font-sans text-sm text-[oklch(0.55_0.01_260)]">
              <p>Wesley Chapel, FL</p>
              <a href="tel:2053811555" className="block hover:text-[oklch(0.75_0.12_85)] transition-colors">(205) 381-1555</a>
              <a href="mailto:info@acceleratecfo.com" className="block hover:text-[oklch(0.75_0.12_85)] transition-colors">info@acceleratecfo.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-rule mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[oklch(0.4_0.01_260)]">
            &copy; {new Date().getFullYear()} Accelerate CFO. All rights reserved.
          </p>
          <p className="font-sans text-xs text-[oklch(0.4_0.01_260)] tracking-[0.1em]">
            40+ Years Experience &bull; Faith-Driven &bull; Kingdom-Focused
          </p>
        </div>
      </div>
    </footer>
  );
}
