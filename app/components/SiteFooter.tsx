import React from "react";

const navStyle: React.CSSProperties = {
  fontFamily: "var(--font-navigation)",
  fontWeight: 700,
};

export default function SiteFooter() {
  const linkCls = "text-[#EDD9B8]/45 hover:text-[#EDD9B8] text-[10px] tracking-[0.2em] uppercase transition-colors";

  return (
    <footer className="bg-[#2B1608] border-t border-[#EDD9B8]/10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.png"
              alt="Taiga Pura Vida Coffee"
              className="h-7 object-contain brightness-0 invert opacity-70 mb-3"
              style={{ width: "auto" }}
            />
            <p className="text-[#EDD9B8]/30 text-[10px] tracking-[0.25em] uppercase">
              Directly From the Farm to Your Cup
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 sm:gap-8" aria-label="Footer navigation">
            <a href="/about"   className={linkCls} style={navStyle}>About</a>
            <a href="/services" className={linkCls} style={navStyle}>Services</a>
            <a href="/contact" className={linkCls} style={navStyle}>Get a Quote</a>
            <a href="https://instagram.com/taigapuravidacoffee" target="_blank" rel="noopener noreferrer" className={linkCls} style={navStyle}>Instagram</a>
          </nav>
        </div>

        <div className="border-t border-[#EDD9B8]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[#EDD9B8]/20 text-xs">© 2026 Taiga Pura Vida Coffee · Charlottesville, VA</p>
          <a href="mailto:info@taigapuravidacoffee.com" className="text-[#EDD9B8]/20 hover:text-[#EDD9B8]/50 text-xs transition-colors">
            info@taigapuravidacoffee.com
          </a>
        </div>
      </div>
    </footer>
  );
}
