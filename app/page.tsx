import React from "react";
import type { Metadata } from "next";
import ScrollReveal from "./components/ScrollReveal";
import QuoteForm from "./components/QuoteForm";

export const metadata: Metadata = {
  title: "Taïga Pura Vida Coffee — Specialty Coffee Catering | Charlottesville, VA",
  description:
    "Farm-to-cup specialty coffee catering for corporate events, weddings, and celebrations in Charlottesville, VA and beyond. Espresso bars, cold brew, and drip service — directly sourced from Costa Rica.",
};

const btnStyle: React.CSSProperties = {
  fontFamily: "var(--font-button)",
  fontWeight: 700,
  fontSize: "var(--font-button-size)",
  textTransform: "uppercase",
  letterSpacing: "var(--font-button-letter-spacing)",
};

const navStyle: React.CSSProperties = {
  fontFamily: "var(--font-navigation)",
  fontWeight: 700,
  fontSize: "var(--font-navigation-size)",
  letterSpacing: "var(--font-navigation-letter-spacing)",
  textTransform: "uppercase",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PhotoStrip />
        <AboutTeaser />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── Navbar ── */

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#2B1608] px-5 sm:px-12 py-4 sm:py-5 flex items-center justify-between">
      <a href="/" aria-label="Taïga Pura Vida Coffee — home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-horizontal.png"
          alt="Taïga Pura Vida Coffee"
          className="h-7 sm:h-9 object-contain brightness-0 invert"
          style={{ width: "auto" }}
        />
      </a>

      <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
        <a href="#about" className="text-[#EDD9B8]/60 hover:text-[#EDD9B8] transition-colors" style={navStyle}>
          About
        </a>
        <a href="#services" className="text-[#EDD9B8]/60 hover:text-[#EDD9B8] transition-colors" style={navStyle}>
          Services
        </a>
      </nav>

      <a
        href="#quote"
        className="bg-[#C4622D] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full sweep-btn"
        style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
      >
        Get a Quote
      </a>
    </header>
  );
}

/* ── Hero ── */

function Hero() {
  return (
    <section className="relative bg-[#2B1608] flex flex-col justify-center overflow-hidden h-[calc(100vh-60px)] sm:h-[calc(100vh-76px)]">
      {/* Branded cup — right side, desktop only */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img-cup-branded.jpg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[45%] object-cover object-center hidden sm:block pointer-events-none select-none"
      />
      {/* Gradient fade from dark left into the photo */}
      <div className="absolute right-0 top-0 h-full w-[50%] hidden sm:block pointer-events-none"
        style={{ background: "linear-gradient(to right, #2B1608 0%, #2B1608 20%, transparent 70%)" }} />

      {/* Jaguar watermark — mobile only, natural aspect ratio */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark-black.png"
        alt=""
        aria-hidden="true"
        className="absolute right-4 bottom-4 brightness-0 invert pointer-events-none select-none sm:hidden"
        style={{ width: "38vw", opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-12 page-enter">
        <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5 sm:mb-6">
          Charlottesville, VA · Coffee Catering
        </p>

        <h1 className="text-[#EDD9B8] leading-none text-5xl sm:text-6xl lg:text-7xl mb-5 sm:mb-6">
          Farm-to-Cup<br />Coffee<br />Catering.
        </h1>

        <p className="text-[#EDD9B8]/50 text-base sm:text-lg leading-7 max-w-lg mb-7 sm:mb-8 font-light">
          Specialty espresso bars, cold brew stations, and full-service coffee setups for corporate events, weddings, and celebrations.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#quote"
            className="bg-[#C4622D] text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full sweep-btn"
            style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
          >
            Get a Quote
          </a>
          <a
            href="#about"
            className="border border-[#EDD9B8]/25 text-[#EDD9B8] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full sweep-btn"
            style={{ ...btnStyle, "--sweep-bg": "rgba(255,255,255,0.07)" } as React.CSSProperties}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */

const services = [
  {
    number: "01",
    icon: "/icon-latte.png",
    title: "Coffee Catering",
    body: "From intimate office gatherings to large corporate events, we bring a full-service espresso bar, trained baristas, and specialty-grade beans — all in one booking.",
  },
  {
    number: "02",
    icon: "/icon-iced-coffee.png",
    title: "Espresso Bar",
    body: "Hand-crafted drinks made to order. Cortados, lattes, cappuccinos — elevated, personalized, and made with care for every guest in line.",
  },
  {
    number: "03",
    icon: "/icon-cold-brew.png",
    title: "Cold Brew",
    body: "Slow-steeped in-house with our Costa Rican single-origin beans. Rich, smooth, and served on tap or in bulk — perfect for warm weather events.",
  },
  {
    number: "04",
    icon: "/icon-latte.png",
    title: "Drip Coffee",
    body: "Classic, consistent, never an afterthought. Our drip service delivers quality at scale so every attendee gets a cup worth drinking.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <ScrollReveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4 sm:mb-5">
              What We Offer
            </p>
            <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight">
              Every event deserves<br className="hidden sm:block" /> exceptional coffee.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="bg-white border border-[#EDD9B8]/60 rounded-2xl p-7 sm:p-10 h-full flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" aria-hidden="true" className="w-16 h-16 object-contain mb-5 select-none" />
                <p className="text-[#C4622D] text-[10px] tracking-[0.3em] uppercase mb-3">{s.number}</p>
                <h3 className="text-[#2B1608] text-2xl sm:text-3xl mb-3">{s.title}</h3>
                <p className="text-[#5C2D0E]/60 text-sm leading-6 font-light">{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Photo strip ── */

function PhotoStrip() {
  return (
    <section className="bg-[#FAF6F0] pb-20 sm:pb-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-outdoor.png"
              alt="Steaming coffee and croissant at an outdoor café table"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "320px" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-table.png"
              alt="Coffee and croissant on a wooden café table"
              className="rounded-2xl w-full object-cover mt-8"
              style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "320px" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-hand-latte.png"
              alt="Hand holding a beautifully crafted latte"
              className="rounded-2xl w-full object-cover hidden sm:block"
              style={{ aspectRatio: "3/4", objectPosition: "center top", maxHeight: "320px" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── About teaser ── */

function AboutTeaser() {
  return (
    <section id="about" className="bg-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">

          <ScrollReveal>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-6">
                Our Roots
              </p>
              <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight mb-6">
                Sourced from<br />Costa Rica&apos;s<br />highlands.
              </h2>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                Our beans come directly from a family-owned finca in Costa Rica&apos;s renowned coffee-growing region — traceable, ethical, and extraordinary. What begins as a relationship between family and farmers becomes the coffee your guests remember.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-10">
                Taïga Pura Vida Coffee brings the warmth of Costa Rican pura vida and the precision of specialty craft to Charlottesville, VA and beyond.
              </p>
              <a
                href="#quote"
                className="inline-flex items-center bg-[#2B1608] text-[#EDD9B8] px-7 py-3.5 rounded-full sweep-btn"
                style={{ ...btnStyle, "--sweep-bg": "#5C2D0E" } as React.CSSProperties}
              >
                Work With Us
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-lifestyle-mountains.jpg"
                alt="Taïga iced drink held up against the Blue Ridge mountains"
                className="rounded-2xl w-full object-cover object-top"
                style={{ aspectRatio: "1/1", maxHeight: "480px" }}
              />
              {/* Floating inset photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-kids-cups.jpg"
                alt="Community enjoying Taïga coffee"
                className="absolute -bottom-6 -left-4 sm:-left-8 w-2/5 rounded-xl object-cover border-4 border-white shadow-lg"
                style={{ aspectRatio: "1" }}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Quote section ── */

function QuoteSection() {
  return (
    <section id="quote" className="bg-[#2B1608] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-start">

          <ScrollReveal>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-6">
                Get a Quote
              </p>
              <h2 className="text-[#EDD9B8] text-4xl sm:text-5xl leading-tight mb-5">
                Let&apos;s plan<br />your event.
              </h2>
              <p className="text-[#EDD9B8]/45 text-base leading-7 font-light mb-10">
                Tell us about your event and we&apos;ll respond within 24 hours with a custom quote.
              </p>
              <ul className="space-y-3.5">
                {[
                  "Weddings & private celebrations",
                  "Corporate events & office setups",
                  "Markets, pop-ups & festivals",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] shrink-0" aria-hidden="true" />
                    <span className="text-[#EDD9B8]/55 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8">
              <QuoteForm />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */

function SiteFooter() {
  const linkCls =
    "text-[#EDD9B8]/45 hover:text-[#EDD9B8] text-[10px] tracking-[0.2em] uppercase transition-colors";

  return (
    <footer className="bg-[#2B1608] border-t border-[#EDD9B8]/10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.png"
              alt="Taïga Pura Vida Coffee"
              className="h-7 object-contain brightness-0 invert opacity-70 mb-3"
              style={{ width: "auto" }}
            />
            <p className="text-[#EDD9B8]/30 text-[10px] tracking-[0.25em] uppercase">
              Directly From the Farm to Your Cup
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 sm:gap-8" aria-label="Footer navigation">
            <a href="#about" className={linkCls} style={navStyle}>About</a>
            <a href="#services" className={linkCls} style={navStyle}>Services</a>
            <a href="#quote" className={linkCls} style={navStyle}>Get a Quote</a>
            {/* TODO: confirm Instagram handle before launch */}
            <a
              href="https://instagram.com/taigapuravidacoffee"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
              style={navStyle}
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="border-t border-[#EDD9B8]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[#EDD9B8]/20 text-xs">
            © 2026 Taïga Pura Vida Coffee · Charlottesville, VA
          </p>
          {/* TODO: update email once Zoho is set up */}
          <a
            href="mailto:info@taigapuravidacoffee.com"
            className="text-[#EDD9B8]/20 hover:text-[#EDD9B8]/50 text-xs transition-colors"
          >
            info@taigapuravidacoffee.com
          </a>
        </div>

      </div>
    </footer>
  );
}
