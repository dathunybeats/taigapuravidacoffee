import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Review — Version 1 (Current)",
  robots: { index: false },
};

const btn: React.CSSProperties = {
  fontFamily: "var(--font-button)",
  fontWeight: 700,
  fontSize: "var(--font-button-size)",
  textTransform: "uppercase",
  letterSpacing: "var(--font-button-letter-spacing)",
};

const services = [
  { number: "01", icon: "/icon-latte.png", title: "Coffee Catering", body: "From intimate office gatherings to large corporate events, we bring a full-service espresso bar, trained baristas, and specialty-grade beans — all in one booking." },
  { number: "02", icon: "/icon-iced-coffee.png", title: "Espresso Bar", body: "Hand-crafted drinks made to order. Cortados, lattes, cappuccinos — elevated, personalized, and made with care for every guest in line." },
  { number: "03", icon: "/icon-cold-brew.png", title: "Cold Brew", body: "Slow-steeped in-house with our Costa Rican single-origin beans. Rich, smooth, and served on tap or in bulk — perfect for warm weather events." },
  { number: "04", icon: "/icon-latte.png", title: "Drip Coffee", body: "Classic, consistent, never an afterthought. Our drip service delivers quality at scale so every attendee gets a cup worth drinking." },
];

const whatWeBring = ["Specialty Espresso Bar", "Custom Signature Drinks", "Branded Event Experiences", "Costa Rican Coffee Origin"];

export default function V1() {
  return (
    <div className="min-h-screen" style={{ background: "#FAF6F0" }}>

      {/* ── Comparison bar ── */}
      <div className="sticky top-0 z-50 flex items-center justify-between gap-4 px-5 py-3 border-b" style={{ background: "#2B1608", borderColor: "rgba(237,217,184,0.12)" }}>
        <div className="flex items-center gap-3">
          <span className="rounded-full px-3 py-1 text-white text-[10px] tracking-[0.2em] uppercase" style={{ ...btn, background: "#C4622D" }}>
            Version 1
          </span>
          <span className="text-xs tracking-wider hidden sm:block" style={{ color: "rgba(237,217,184,0.45)" }}>
            Current site · espresso brown + orange
          </span>
        </div>
        <a href="/design/v2" className="text-xs tracking-[0.2em] uppercase transition-colors hover:opacity-100" style={{ ...btn, color: "rgba(237,217,184,0.5)" }}>
          See Version 2 →
        </a>
      </div>

      {/* ── Nav ── */}
      <nav style={{ background: "#2B1608" }} className="px-5 sm:px-12 py-4 flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-horizontal.png" alt="Taïga Pura Vida Coffee" className="h-8 object-contain brightness-0 invert" style={{ width: "auto" }} />
        <div className="hidden sm:flex gap-8">
          {["Services", "About", "Contact"].map(l => (
            <span key={l} className="text-sm" style={{ ...btn, color: "rgba(237,217,184,0.6)" }}>{l}</span>
          ))}
        </div>
        <span className="rounded-full px-5 py-2.5 text-white text-sm" style={{ ...btn, background: "#C4622D" }}>Get a Quote</span>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex flex-col justify-center overflow-hidden" style={{ background: "#2B1608", minHeight: "72vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img-cup-branded.jpg" alt="" aria-hidden="true" className="absolute right-0 top-0 h-full w-[45%] object-cover object-center hidden sm:block pointer-events-none select-none" />
        <div className="absolute right-0 top-0 h-full w-[50%] hidden sm:block pointer-events-none" style={{ background: "linear-gradient(to right, #2B1608 0%, #2B1608 20%, transparent 70%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-12 py-20 sm:py-28">
          <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#C4622D" }}>Charlottesville, VA · Coffee Catering</p>
          <h1 className="leading-none text-5xl sm:text-6xl lg:text-7xl mb-5" style={{ color: "#EDD9B8" }}>
            Farm-to-Cup<br />Coffee<br />Catering.
          </h1>
          <p className="text-base sm:text-lg leading-7 max-w-lg mb-8 font-light" style={{ color: "rgba(237,217,184,0.5)" }}>
            Specialty espresso bars, cold brew stations, and full-service coffee setups for corporate events, weddings, and celebrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="rounded-full px-9 py-4 text-white" style={{ ...btn, background: "#C4622D" }}>Get a Quote</span>
            <span className="rounded-full px-9 py-4" style={{ ...btn, border: "1px solid rgba(237,217,184,0.25)", color: "#EDD9B8" }}>Our Story</span>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 sm:py-32" style={{ background: "#FAF6F0" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="mb-14 sm:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#C4622D" }}>What We Offer</p>
            <h2 className="text-4xl sm:text-5xl leading-tight" style={{ color: "#2B1608" }}>Every event deserves<br className="hidden sm:block" /> exceptional coffee.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {services.map(s => (
              <div key={s.title} className="rounded-2xl p-7 sm:p-10 flex flex-col" style={{ background: "#fff", border: "1px solid rgba(237,217,184,0.6)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" aria-hidden="true" className="w-16 h-16 object-contain mb-5 select-none" />
                <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#C4622D" }}>{s.number}</p>
                <h3 className="text-2xl sm:text-3xl mb-3" style={{ color: "#2B1608" }}>{s.title}</h3>
                <p className="text-sm leading-6 font-light" style={{ color: "rgba(92,45,14,0.6)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Bring ── */}
      <section className="py-20 sm:py-32" style={{ background: "#2B1608" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo-cart-front.jpg" alt="Taïga coffee cart at an event" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "4/5", objectPosition: "center", maxHeight: "560px" }} />
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C4622D" }}>What We Bring</p>
              <h2 className="leading-tight text-4xl sm:text-5xl mb-6" style={{ color: "#EDD9B8" }}>
                A full specialty<br />bar experience,<br />custom to your event.
              </h2>
              <p className="text-base leading-7 font-light mb-8" style={{ color: "rgba(237,217,184,0.5)" }}>
                We bring a complete specialty espresso bar to your event — custom menus designed around your occasion, with every bean sourced directly from family-owned fincas in Costa Rica.
              </p>
              <ul className="space-y-3.5 mb-10">
                {whatWeBring.map(cat => (
                  <li key={cat} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C4622D" }} aria-hidden="true" />
                    <span className="text-sm font-light" style={{ color: "rgba(237,217,184,0.7)" }}>{cat}</span>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center rounded-full px-7 py-3.5 text-white" style={{ ...btn, background: "#C4622D" }}>
                Request a Custom Quote
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-20 sm:py-32" style={{ background: "#FAF6F0" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo-outdoor.png" alt="Steaming coffee at an outdoor café" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "320px" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo-table.png" alt="Coffee on a wooden café table" className="rounded-2xl w-full object-cover mt-8" style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "320px" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo-hand-latte.png" alt="Hand holding a latte" className="rounded-2xl w-full object-cover hidden sm:block" style={{ aspectRatio: "3/4", objectPosition: "center top", maxHeight: "320px" }} />
          </div>
        </div>
      </section>

      {/* ── Corporate Events ── */}
      <section className="py-20 sm:py-32" style={{ background: "#FAF6F0" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="mb-14 sm:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#C4622D" }}>Corporate Events</p>
            <h2 className="text-4xl sm:text-5xl leading-tight" style={{ color: "#2B1608" }}>Bring the café<br className="hidden sm:block" /> to your office.</h2>
          </div>
          <div className="grid grid-cols-6 gap-3 sm:gap-4">
            <div className="col-span-6 sm:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo-cart-front.jpg" alt="Taïga coffee cart at a corporate venue" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "400px" }} />
            </div>
            <div className="col-span-6 sm:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo-espresso-pull.jpg" alt="Espresso being pulled" className="rounded-2xl w-full object-cover sm:mt-10" style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "400px" }} />
            </div>
            <div className="col-span-6 sm:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo-barista-cart.jpg" alt="Barista at the coffee cart" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "3/4", objectPosition: "center top", maxHeight: "400px" }} />
            </div>
            <div className="col-span-6 sm:col-span-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo-service-moment.jpg" alt="Barista handing a cup to a guest" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "4/3", objectPosition: "center", maxHeight: "340px" }} />
            </div>
            <div className="col-span-6 sm:col-span-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo-cart-wide.jpg" alt="Full Taïga coffee cart setup" className="rounded-2xl w-full object-cover" style={{ aspectRatio: "4/3", objectPosition: "center", maxHeight: "340px" }} />
            </div>
          </div>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-base leading-7 font-light max-w-lg" style={{ color: "rgba(92,45,14,0.6)" }}>
              Our mobile espresso cart arrives fully equipped — specialty-grade beans, a trained barista, and our signature La Marzocco machine. No venue sourcing, no coffee hassle, just an elevated experience for your team or guests.
            </p>
            <span className="shrink-0 inline-flex items-center rounded-full px-7 py-3.5 text-white" style={{ ...btn, background: "#C4622D" }}>Get a Quote</span>
          </div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="py-20 sm:py-32" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C4622D" }}>Our Roots</p>
              <h2 className="text-4xl sm:text-5xl leading-tight mb-6" style={{ color: "#2B1608" }}>Sourced from<br />Costa Rica&apos;s<br />highlands.</h2>
              <p className="text-base leading-7 font-light mb-5" style={{ color: "rgba(92,45,14,0.65)" }}>
                Our beans come directly from a family-owned finca in Costa Rica&apos;s renowned coffee-growing region — traceable, ethical, and extraordinary.
              </p>
              <p className="text-base leading-7 font-light mb-10" style={{ color: "rgba(92,45,14,0.65)" }}>
                Taïga Pura Vida Coffee brings the warmth of Costa Rican pura vida and the precision of specialty craft to Charlottesville, VA and beyond.
              </p>
              <span className="inline-flex items-center rounded-full px-7 py-3.5" style={{ ...btn, background: "#2B1608", color: "#EDD9B8" }}>Work With Us</span>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img-lifestyle-mountains.jpg" alt="Taïga iced drink against the Blue Ridge mountains" className="rounded-2xl w-full object-cover object-top" style={{ aspectRatio: "1/1", maxHeight: "480px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img-kids-cups.jpg" alt="Community enjoying Taïga coffee" className="absolute -bottom-6 -left-4 sm:-left-8 w-2/5 rounded-xl object-cover border-4 border-white shadow-lg" style={{ aspectRatio: "1" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote / CTA ── */}
      <section className="py-20 sm:py-32" style={{ background: "#2B1608" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "#C4622D" }}>Get a Quote</p>
              <h2 className="text-4xl sm:text-5xl leading-tight mb-5" style={{ color: "#EDD9B8" }}>Let&apos;s plan<br />your event.</h2>
              <p className="text-base leading-7 font-light mb-10" style={{ color: "rgba(237,217,184,0.45)" }}>
                Tell us about your event and we&apos;ll respond within 24 hours with a custom quote.
              </p>
              <ul className="space-y-3.5">
                {["Weddings & private celebrations", "Corporate events & office setups", "Markets, pop-ups & festivals"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C4622D" }} aria-hidden="true" />
                    <span className="text-sm font-light" style={{ color: "rgba(237,217,184,0.55)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#FAF6F0" }}>
              <p className="text-sm font-light mb-4" style={{ color: "rgba(43,22,8,0.4)" }}>Quote form lives here</p>
              <div className="space-y-3">
                {["Your name", "Email address", "Event date", "Guest count"].map(f => (
                  <div key={f} className="rounded-lg px-4 py-3 text-sm font-light" style={{ background: "#fff", border: "1px solid rgba(237,217,184,0.6)", color: "rgba(43,22,8,0.3)" }}>{f}</div>
                ))}
                <div className="rounded-full px-7 py-3.5 text-center text-white text-sm mt-2" style={{ ...btn, background: "#C4622D" }}>Send Request</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 sm:py-16" style={{ background: "#2B1608", borderTop: "1px solid rgba(237,217,184,0.1)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-horizontal.png" alt="Taïga Pura Vida Coffee" className="h-7 object-contain brightness-0 invert opacity-70" style={{ width: "auto" }} />
          <p className="text-xs" style={{ color: "rgba(237,217,184,0.2)" }}>© 2026 Taïga Pura Vida Coffee · Charlottesville, VA</p>
        </div>
      </footer>

    </div>
  );
}
