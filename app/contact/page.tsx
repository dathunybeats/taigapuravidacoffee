import React from "react";
import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";
import QuoteForm from "../components/QuoteForm";
import FAQAccordion from "../components/FAQAccordion";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a custom quote for your wedding, corporate event, or celebration. Taïga Pura Vida Coffee brings specialty espresso catering to Charlottesville, VA and beyond.",
  openGraph: {
    title: "Get a Quote | Taïga Pura Vida Coffee",
    description:
      "Tell us about your event and we'll get back within 24 hours with a custom coffee catering quote.",
    images: [{ url: "/logo-square-brown.png", width: 1080, height: 1080, alt: "Taïga Pura Vida Coffee" }],
  },
};

const btnStyle: React.CSSProperties = {
  fontFamily: "var(--font-button)",
  fontWeight: 700,
  fontSize: "var(--font-button-size)",
  textTransform: "uppercase",
  letterSpacing: "var(--font-button-letter-spacing)",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <SiteNav active="contact" />
      <main>
        <ContactHero />
        <QuoteSection />
        <ProcessStrip />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── Hero ── */

function ContactHero() {
  return (
    <section className="relative bg-[#2B1608] flex flex-col justify-center overflow-hidden min-h-[52vh] sm:min-h-[60vh]">
      {/* Right-side photo desktop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img-cup-branded.jpg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[42%] object-cover object-center hidden sm:block pointer-events-none select-none"
      />
      <div
        className="absolute right-0 top-0 h-full w-[48%] hidden sm:block pointer-events-none"
        style={{ background: "linear-gradient(to right, #2B1608 0%, #2B1608 15%, transparent 65%)" }}
      />

      {/* Mobile jaguar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark-black.png"
        alt=""
        aria-hidden="true"
        className="absolute right-3 bottom-3 brightness-0 invert pointer-events-none select-none sm:hidden"
        style={{ width: "35vw", opacity: 0.07 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-12 py-20 sm:py-28 page-enter">
        <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
          Request a Quote
        </p>
        <h1 className="text-[#EDD9B8] leading-none text-5xl sm:text-6xl lg:text-7xl mb-6">
          Let&apos;s plan<br />your event.
        </h1>
        <p className="text-[#EDD9B8]/50 text-base sm:text-lg leading-7 max-w-md font-light">
          Fill out the form and we&apos;ll get back to you within 24 hours with a custom quote tailored to your event.
        </p>
      </div>
    </section>
  );
}

/* ── Quote Form Section ── */

function QuoteSection() {
  return (
    <section className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-start">

          {/* Left — what we offer */}
          <ScrollReveal>
            <div className="sm:pt-2">
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                What We Offer
              </p>
              <h2 className="text-[#2B1608] text-3xl sm:text-4xl leading-tight mb-8">
                Specialty coffee,<br />crafted for your crowd.
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { label: "Weddings", desc: "Espresso bars, latte art, signature drinks." },
                  { label: "Corporate Events", desc: "Office catering, product launches, team days." },
                  { label: "Private Parties", desc: "Birthdays, graduations, vineyard celebrations." },
                  { label: "University Events", desc: "Campus events across the Charlottesville area." },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C4622D] mt-2.5 shrink-0" />
                    <div>
                      <p className="text-[#2B1608] text-sm font-light">{label}</p>
                      <p className="text-[#5C2D0E]/55 text-sm font-light leading-6">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#EDD9B8]/60 pt-8 space-y-3">
                <p className="text-[#2B1608]/40 text-[10px] tracking-[0.2em] uppercase mb-4">Or reach out directly</p>
                <a
                  href="mailto:info@taigapuravidacoffee.com"
                  className="flex items-center gap-2 text-[#5C2D0E]/60 hover:text-[#C4622D] text-sm transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@taigapuravidacoffee.com
                </a>
                <a
                  href="https://instagram.com/taigapuravidacoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#5C2D0E]/60 hover:text-[#C4622D] text-sm transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @taigapuravidacoffee
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form (matches homepage QuoteForm style) */}
          <ScrollReveal delay={150}>
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#EDD9B8]/60 shadow-sm">
              <p className="text-[#2B1608]/40 text-[10px] tracking-[0.2em] uppercase mb-6">Request a Custom Quote</p>
              <QuoteForm />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── What to Expect ── */

function ProcessStrip() {
  const steps = [
    { num: "01", label: "Submit your request", desc: "Fill out the form with your event details. Takes less than 2 minutes." },
    { num: "02", label: "We respond in 24 hrs", desc: "We review your details and reach out to learn more about your vision." },
    { num: "03", label: "Receive your quote", desc: "Get a custom proposal with pricing, menu options, and logistics." },
    { num: "04", label: "Confirm and celebrate", desc: "Secure your date with a deposit and leave the rest to us." },
  ];

  return (
    <section className="bg-[#2B1608] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">The Process</p>
            <h2 className="text-[#EDD9B8] text-4xl sm:text-5xl leading-tight">What to expect</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div>
                <p className="text-[#C4622D] text-4xl sm:text-5xl font-light mb-4 leading-none" style={{ fontFamily: "var(--font-headline)", opacity: 0.45 }}>
                  {step.num}
                </p>
                <h3 className="text-[#EDD9B8] text-base leading-snug mb-2">{step.label}</h3>
                <p className="text-[#EDD9B8]/40 text-sm leading-6 font-light">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */

function FAQSection() {
  return (
    <section className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-12">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">Common Questions</p>
            <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight">FAQ</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FAQAccordion />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="text-center mt-12">
            <p className="text-[#5C2D0E]/50 text-sm font-light">
              Still have questions?{" "}
              <a href="mailto:info@taigapuravidacoffee.com" className="text-[#C4622D] hover:underline">
                Email us directly.
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
