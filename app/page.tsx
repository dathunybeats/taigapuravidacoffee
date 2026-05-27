import React from "react";
import ScrollReveal from "./components/ScrollReveal";

export default function DesignDeck() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans">

      {/* Header */}
      <header className="bg-[#2B1608] px-5 sm:px-12 py-5 sm:py-8 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Taïga Pura Vida Coffee" className="h-10 w-10 sm:h-16 sm:w-16 object-contain brightness-0 invert opacity-90" />
          <div>
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-0.5 sm:mb-1">Design Deck</p>
            <h1 className="text-[#EDD9B8] text-base sm:text-2xl font-light tracking-widest uppercase">Taïga Pura Vida Coffee</h1>
          </div>
        </div>
        <p className="text-[#EDD9B8]/40 text-xs sm:text-sm tracking-widest hidden sm:block">v1.0</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24 page-enter">

        {/* 01 Brand Essence */}
        <ScrollReveal>
          <section>
            <SectionLabel>01 — Brand Essence</SectionLabel>

            <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase mt-8 mb-4">Lockups</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Square · Brown</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-square-brown.png" alt="Square brown lockup" className="w-full object-contain" />
              </div>
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Square · Amber</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-square-amber.png" alt="Square amber lockup" className="w-full object-contain" />
              </div>
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Square · Inverted</span>
                <div className="bg-[#2B1608] rounded-xl p-4 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-square-brown.png" alt="Square inverted lockup" className="w-full object-contain brightness-0 invert" />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Horizontal lockup</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-horizontal.png" alt="Horizontal lockup" className="w-full object-contain" />
              </div>
              <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#EDD9B8]/40 text-[10px] tracking-[0.25em] uppercase">Horizontal · Dark bg</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-horizontal.png" alt="Horizontal lockup dark" className="w-full object-contain brightness-0 invert" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Wordmark</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-wordmark.png" alt="Wordmark" className="w-full object-contain" />
              </div>
              <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-8 flex flex-col gap-3">
                <span className="text-[#EDD9B8]/40 text-[10px] tracking-[0.25em] uppercase">Wordmark · Dark bg</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-wordmark.png" alt="Wordmark dark" className="w-full object-contain brightness-0 invert" />
              </div>
            </div>

            <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase mt-8 mb-4">Jaguar mark — standalone</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Black</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark-black.png" alt="Jaguar mark black" className="w-20 h-16 sm:w-32 sm:h-24 object-contain" />
              </div>
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Amber</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark-amber.png" alt="Jaguar mark amber" className="w-20 h-16 sm:w-32 sm:h-24 object-contain" />
              </div>
              <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3">
                <span className="text-[#2B1608]/40 text-[10px] tracking-[0.25em] uppercase">Cream</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark-cream.png" alt="Jaguar mark cream" className="w-20 h-16 sm:w-32 sm:h-24 object-contain" />
              </div>
              <div className="bg-[#2B1608] rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3">
                <span className="text-[#EDD9B8]/40 text-[10px] tracking-[0.25em] uppercase">White</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark-black.png" alt="Jaguar mark white" className="w-20 h-16 sm:w-32 sm:h-24 object-contain brightness-0 invert" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <EssenceCard title="Wild" body="The jaguar. Untamed, proud, rooted in the forest. The brand carries nature's quiet confidence." />
              <EssenceCard title="Warm" body="Cocoa tones, amber light, the smell of fresh roast. Every touchpoint should feel like a warm welcome." />
              <EssenceCard title="Pura Vida" body="Costa Rican for 'pure life.' Unhurried, joyful, authentic. Not just coffee — a way of being." />
            </div>
          </section>
        </ScrollReveal>

        {/* 02 Color Palette */}
        <ScrollReveal>
          <section>
            <SectionLabel>02 — Color Palette</SectionLabel>
            <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-5">
              <ColorSwatch bg="#2B1608" name="Espresso" hex="#2B1608" role="Primary" />
              <ColorSwatch bg="#5C2D0E" name="Dark Roast" hex="#5C2D0E" role="Secondary" />
              <ColorSwatch bg="#C4622D" name="Amber" hex="#C4622D" role="Accent" />
              <ColorSwatch bg="#EDD9B8" name="Cream" hex="#EDD9B8" role="Highlight" dark />
              <ColorSwatch bg="#FAF6F0" name="Linen" hex="#FAF6F0" role="Background" dark border />
            </div>
          </section>
        </ScrollReveal>

        {/* 03 Typography */}
        <ScrollReveal>
          <section>
            <SectionLabel>03 — Typography</SectionLabel>
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-10 border border-[#EDD9B8]/60 space-y-8 sm:space-y-10">
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Display — El Hidrant · Headline</p>
                <h1 className="text-[#2B1608] leading-none text-5xl sm:text-7xl">
                  Pure Life.<br />Perfect Cup.
                </h1>
              </div>
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Heading — El Hidrant · H2</p>
                <h2 className="text-[#2B1608] text-3xl sm:text-4xl">Sourced from the heart of Costa Rica</h2>
              </div>
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Subheading — El Hidrant · H3</p>
                <h3 className="text-[#2B1608] text-xl sm:text-2xl">Small batch. Big flavour.</h3>
              </div>
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Body — GT Flexa Light · 300 · 1.6 line-height</p>
                <p className="text-[#5C2D0E]/70 text-base leading-7" style={{ fontFamily: "var(--font-base)", fontWeight: 400 }}>
                  Every batch is small-roasted to order, honouring the farmers and the land that made it possible. No shortcuts. No compromises.
                </p>
              </div>
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Label / Caption — GT Flexa Light · 0.3em tracking</p>
                <p className="text-[#2B1608] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-base)", fontWeight: 500 }}>
                  Single Origin · Washed Process · Light Roast
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 04 UI Components */}
        <ScrollReveal>
          <section>
            <SectionLabel>04 — UI Components</SectionLabel>
            <div className="mt-8 space-y-6">

              {/* Buttons */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EDD9B8]/60">
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6 sm:mb-8">Buttons</p>
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                  <button className="bg-[#2B1608] text-[#EDD9B8] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full sweep-btn" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)", "--sweep-bg": "#5C2D0E" } as React.CSSProperties}>
                    Order Now
                  </button>
                  <button className="bg-[#C4622D] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full sweep-btn" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)", "--sweep-bg": "#5C2D0E" } as React.CSSProperties}>
                    Explore Menu
                  </button>
                  <button className="border border-[#2B1608] text-[#2B1608] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full sweep-btn hover:text-[#EDD9B8] transition-[color]" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)", "--sweep-bg": "#2B1608" } as React.CSSProperties}>
                    Learn More
                  </button>
                  <button className="text-[#C4622D] underline underline-offset-4 hover:text-[#2B1608] transition-colors" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }}>
                    See All →
                  </button>
                </div>
              </div>

              {/* Nav */}
              <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-8">
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-4 sm:mb-6">Navigation</p>
                <nav className="flex items-center justify-between gap-4">
                  <div className="flex items-center shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-horizontal.png" alt="Taïga" className="h-8 sm:h-10 object-contain brightness-0 invert" />
                  </div>
                  <div className="hidden sm:flex gap-8">
                    {["Menu", "Story", "Brew", "Find us"].map((item) => (
                      <span key={item} className="text-[#EDD9B8]/70 cursor-pointer hover:text-[#EDD9B8] transition-colors" style={{ fontFamily: "var(--font-navigation)", fontWeight: "var(--font-navigation-weight)" as never, fontSize: "var(--font-navigation-size)", letterSpacing: "var(--font-navigation-letter-spacing)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <button style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)", "--sweep-bg": "#E07832" } as React.CSSProperties} className="bg-[#C4622D] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full sweep-btn shrink-0">
                    Order
                  </button>
                </nav>
              </div>

              {/* Menu Cards */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EDD9B8]/60">
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6 sm:mb-8">Menu / Product Cards</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <MenuCard name="Flat White" origin="Costa Rica · Tarrazu" price="$5.50" note="Smooth, nutty, caramel finish" />
                  <MenuCard name="Cold Brew" origin="Guatemala · Huehuetenango" price="$6.00" note="Dark chocolate, stone fruit" dark />
                  <MenuCard name="Pour Over" origin="Ethiopia · Yirgacheffe" price="$7.00" note="Floral, bright, jasmine" />
                </div>
              </div>

              {/* Badges */}
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EDD9B8]/60">
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6 sm:mb-8">Badges & Tags</p>
                <div className="flex flex-wrap gap-3">
                  <Badge label="Single Origin" />
                  <Badge label="Small Batch" />
                  <Badge label="Ethically Sourced" />
                  <Badge label="Light Roast" amber />
                  <Badge label="Seasonal" amber />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 05 Page Layouts */}
        <ScrollReveal>
          <section>
            <SectionLabel>05 — Page Layouts</SectionLabel>
            <div className="mt-8 space-y-4">

              {/* NAVBAR */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Navbar — wordmark</p>
                <div className="bg-[#2B1608] rounded-2xl px-5 sm:px-10 py-4 sm:py-5 flex items-center justify-between gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-horizontal.png" alt="Taïga" className="h-8 sm:h-10 object-contain brightness-0 invert shrink-0" />
                  <div className="hidden sm:flex gap-8">
                    {["Menu", "Story", "Brew", "Find us"].map((item) => (
                      <span key={item} className="text-[#EDD9B8]/70 text-sm cursor-pointer hover:text-[#EDD9B8] transition-colors" style={{ fontFamily: "var(--font-navigation)", fontWeight: 700 }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <button className="bg-[#C4622D] text-[#EDD9B8] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs shrink-0" style={{ fontFamily: "var(--font-button)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                    Order
                  </button>
                </div>
              </div>

              {/* HERO */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Hero — black mark as watermark</p>
                <div className="bg-[#2B1608] rounded-2xl relative overflow-hidden" style={{ minHeight: 300 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark-black.png" alt="" className="absolute -right-16 -bottom-8 brightness-0 invert opacity-[0.07]" style={{ height: 340 }} />
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-12" style={{ minHeight: 300 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-wordmark.png" alt="Taïga" className="h-5 object-contain object-left brightness-0 invert mb-6 opacity-50" style={{ width: 120 }} />
                    <h2 className="text-[#EDD9B8] leading-none mb-5 text-4xl sm:text-6xl">
                      Where the wild<br />meets the cup.
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-[#C4622D] text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs" style={{ fontFamily: "var(--font-button)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                        Explore menu
                      </div>
                      <div className="border border-[#EDD9B8]/30 text-[#EDD9B8] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs" style={{ fontFamily: "var(--font-button)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                        Our story
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VALUES */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Values strip — amber mark as icon</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "Direct Trade", body: "We work directly with farmers in Costa Rica, paying above fair-trade prices." },
                    { title: "Small Batch", body: "Roasted fresh to order so every bag you receive is at peak flavour." },
                    { title: "Come As You Are", body: "A space for everyone. Great coffee doesn't need a dress code." },
                  ].map((f) => (
                    <div key={f.title} className="bg-white border border-[#EDD9B8]/60 rounded-2xl p-6 sm:p-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/logo-mark-amber.png" alt="" className="h-10 w-16 object-contain object-left mb-5" />
                      <h3 className="text-[#2B1608] mb-2">{f.title}</h3>
                      <p className="text-[#5C2D0E]/60 text-sm leading-6 font-light">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ABOUT STRIP */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">About strip — horizontal lockup</p>
                <div className="bg-[#FAF6F0] border border-[#EDD9B8]/60 rounded-2xl p-8 sm:p-12 flex flex-col items-center gap-6 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-horizontal.png" alt="Taïga Pura Vida Coffee" className="h-14 sm:h-20 object-contain" />
                  <p className="text-[#5C2D0E]/70 text-base leading-7 max-w-xl font-light">
                    Born in the wild, brewed with intention. Every cup is a small act of pura vida — pure life — shared between the land, the farmer, and you.
                  </p>
                </div>
              </div>

              {/* DARK CTA */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">CTA section — cream mark on dark</p>
                <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-12 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark-cream.png" alt="" className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-20 hidden sm:block" style={{ height: 260 }} />
                  <div className="relative z-10">
                    <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase mb-3">Ready to visit?</p>
                    <h2 className="text-[#EDD9B8] text-3xl sm:text-4xl">Come find us.</h2>
                  </div>
                  <div className="relative z-10 flex flex-col gap-3 items-start sm:items-end">
                    <button className="bg-[#EDD9B8] text-[#2B1608] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "2px" }}>
                      Get directions
                    </button>
                    <p className="text-[#EDD9B8]/40 text-xs tracking-wider">123 Jungle St, San José, CR</p>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div>
                <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Footer — square lockup</p>
                <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 sm:justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-square-brown.png" alt="Taïga" className="h-14 w-14 sm:h-20 sm:w-20 object-contain brightness-0 invert opacity-80" />
                  <div className="flex flex-wrap gap-4 sm:gap-10">
                    {["Menu", "Story", "Brew", "Find us", "Instagram"].map((item) => (
                      <span key={item} className="text-[#EDD9B8]/50 text-xs cursor-pointer hover:text-[#EDD9B8] transition-colors" style={{ fontFamily: "var(--font-navigation)", fontWeight: 700, textTransform: "uppercase" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#EDD9B8]/25 text-xs">© 2026 Taïga</p>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* 06 Spacing & Shape */}
        <ScrollReveal>
          <section>
            <SectionLabel>06 — Spacing & Shape</SectionLabel>
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-10 border border-[#EDD9B8]/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
                <div>
                  <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6">Border Radius</p>
                  <div className="space-y-5">
                    {[
                      { label: "Buttons / Badges", r: "9999px", tw: "rounded-full" },
                      { label: "Cards / Panels", r: "16px", tw: "rounded-2xl" },
                      { label: "Inputs / Small elements", r: "8px", tw: "rounded-lg" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-5">
                        <div className={`w-20 h-10 bg-[#2B1608] ${item.tw} shrink-0`} />
                        <div>
                          <p className="text-[#2B1608] text-sm font-medium">{item.label}</p>
                          <p className="text-[#5C2D0E]/40 text-xs">{item.r}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6">Spacing Scale (base-8)</p>
                  <div className="space-y-3">
                    {[8, 16, 24, 32, 48, 64, 96].map((s) => (
                      <div key={s} className="flex items-center gap-4">
                        <div className="bg-[#EDD9B8] h-3 rounded-full shrink-0" style={{ width: s * 1.2 }} />
                        <p className="text-[#5C2D0E]/50 text-xs">{s}px</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal>
          <section className="pb-8">
            <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 sm:justify-between">
              <div>
                <p className="text-[#EDD9B8] text-base sm:text-lg tracking-widest uppercase font-light">Taïga Pura Vida Coffee</p>
                <p className="text-[#EDD9B8]/40 text-xs tracking-[0.25em] uppercase mt-1">Design System · 2026</p>
              </div>
              <p className="text-[#C4622D] text-xs tracking-[0.2em] uppercase">Ready to Build →</p>
            </div>
          </section>
        </ScrollReveal>

      </main>
    </div>
  );
}

/* ── Sub-components ── */

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[#2B1608] text-lg sm:text-xl font-medium tracking-tight shrink-0">{children}</p>
      <div className="flex-1 h-px bg-[#EDD9B8]" />
    </div>
  );
}

function EssenceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#2B1608] rounded-2xl p-6 sm:p-8">
      <h3 className="text-[#C4622D] text-xs tracking-[0.3em] uppercase mb-3">{title}</h3>
      <p className="text-[#EDD9B8]/70 text-sm leading-6 font-light">{body}</p>
    </div>
  );
}

function ColorSwatch({ bg, name, hex, role, dark, border }: {
  bg: string; name: string; hex: string; role: string; dark?: boolean; border?: boolean;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden ${border ? "border border-[#EDD9B8]" : ""}`}>
      <div className="h-20 sm:h-28" style={{ backgroundColor: bg }} />
      <div className="bg-white border-x border-b border-[#EDD9B8]/40 rounded-b-2xl p-3 sm:p-4">
        <p className="text-[#2B1608] text-sm font-medium">{name}</p>
        <p className="text-[#5C2D0E]/50 text-xs mt-0.5 font-mono">{hex}</p>
        <p className="text-[#C4622D] text-[10px] tracking-[0.2em] uppercase mt-1">{role}</p>
      </div>
    </div>
  );
}

function MenuCard({ name, origin, price, note, dark }: {
  name: string; origin: string; price: string; note: string; dark?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-5 sm:p-6 ${dark ? "bg-[#2B1608]" : "bg-[#FAF6F0] border border-[#EDD9B8]/60"}`}>
      <div className={`w-10 h-10 rounded-full mb-4 ${dark ? "bg-[#5C2D0E]" : "bg-[#EDD9B8]"}`} />
      <p className="text-[#C4622D] text-[10px] tracking-[0.25em] uppercase mb-1">{origin}</p>
      <h4 className={`text-lg font-medium tracking-tight mb-1 ${dark ? "text-[#EDD9B8]" : "text-[#2B1608]"}`}>{name}</h4>
      <p className={`text-xs leading-5 mb-4 font-light ${dark ? "text-[#EDD9B8]/50" : "text-[#5C2D0E]/60"}`}>{note}</p>
      <div className="flex items-center justify-between">
        <span className={`text-base font-medium ${dark ? "text-[#EDD9B8]" : "text-[#2B1608]"}`}>{price}</span>
        <button className="bg-[#C4622D] text-white text-xs px-4 py-1.5 rounded-full tracking-wider sweep-btn" style={{ "--sweep-bg": "#5C2D0E" } as React.CSSProperties}>
          Add
        </button>
      </div>
    </div>
  );
}

function Badge({ label, amber }: { label: string; amber?: boolean }) {
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs tracking-[0.15em] uppercase border ${
      amber
        ? "border-[#C4622D] text-[#C4622D] bg-[#C4622D]/5"
        : "border-[#2B1608]/20 text-[#2B1608] bg-[#2B1608]/5"
    }`}>
      {label}
    </span>
  );
}
