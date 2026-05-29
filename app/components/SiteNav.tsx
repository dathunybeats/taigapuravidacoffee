"use client";

import React, { useState } from "react";

const navStyle: React.CSSProperties = {
  fontFamily: "var(--font-navigation)",
  fontWeight: 700,
  fontSize: "var(--font-navigation-size)",
  letterSpacing: "var(--font-navigation-letter-spacing)",
  textTransform: "uppercase",
};

const btnStyle: React.CSSProperties = {
  fontFamily: "var(--font-button)",
  fontWeight: 700,
  fontSize: "var(--font-button-size)",
  textTransform: "uppercase",
  letterSpacing: "var(--font-button-letter-spacing)",
};

const links = [
  { href: "/",         label: "Home",     page: "home"     },
  { href: "/about",    label: "About",    page: "about"    },
  { href: "/services", label: "Services", page: "services" },
  { href: "/contact",  label: "Contact",  page: "contact"  },
] as const;

export default function SiteNav({ active }: { active?: "home" | "about" | "services" | "contact" }) {
  const [open, setOpen] = useState(false);

  const linkCls = (page: string) =>
    `transition-colors ${active === page ? "text-[#EDD9B8]" : "text-[#EDD9B8]/60 hover:text-[#EDD9B8]"}`;

  return (
    <header className="sticky top-0 z-50 bg-[#2B1608]">
      {/* ── Top bar ── */}
      <div className="px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between">
        <a href="/" aria-label="Taïga Pura Vida Coffee — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-horizontal.png"
            alt="Taïga Pura Vida Coffee"
            className="h-7 sm:h-9 object-contain brightness-0 invert"
            style={{ width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ href, label, page }) => (
            <a key={page} href={href} className={linkCls(page)} style={navStyle}>
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden sm:block bg-[#C4622D] text-white px-7 py-2.5 rounded-full sweep-btn"
          style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
        >
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-[2px] bg-[#EDD9B8] rounded transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : "w-6"}`} />
          <span className={`block h-[2px] bg-[#EDD9B8] rounded transition-all duration-200 ${open ? "opacity-0 w-6" : "w-5"}`} />
          <span className={`block h-[2px] bg-[#EDD9B8] rounded transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : "w-6"}`} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <nav
          className="sm:hidden border-t border-[#EDD9B8]/10 px-5 pb-6 flex flex-col"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label, page }) => (
            <a
              key={page}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-4 border-b border-[#EDD9B8]/10 text-sm ${linkCls(page)}`}
              style={navStyle}
            >
              {label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 text-center bg-[#C4622D] text-white py-4 rounded-full sweep-btn"
            style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
