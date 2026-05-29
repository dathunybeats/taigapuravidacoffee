import React from "react";
import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn how Taïga Pura Vida Coffee was born from a Costa Rican finca and a love of craft — and why that matters for your next event.",
  openGraph: {
    title: "Our Story | Taïga Pura Vida Coffee",
    description:
      "Born in the wild, brewed with intention. The story behind Taïga Pura Vida Coffee and our direct-trade Costa Rican roots.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <SiteNav active="about" />
      <main>
        <AboutHero />
        <StorySection />
        <OriginSection />
        <FounderSection />
        <CommunityCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── Hero ── */

function AboutHero() {
  return (
    <section className="relative bg-[#2B1608] flex flex-col justify-center overflow-hidden min-h-[60vh] sm:min-h-[70vh]">
      {/* Large jaguar watermark — right side, all screens */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark-amber.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ width: "44vw", maxWidth: "520px", opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-12 py-20 sm:py-28 page-enter">
        <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
          Our Story
        </p>
        <h1 className="text-[#EDD9B8] leading-none text-5xl sm:text-6xl lg:text-7xl mb-6">
          Born in the wild.<br />Brewed with<br />intention.
        </h1>
        <p className="text-[#EDD9B8]/50 text-base sm:text-lg leading-7 max-w-md font-light">
          Taïga Pura Vida Coffee is a specialty coffee catering company rooted in Costa Rican heritage and driven by craft.
        </p>
      </div>
    </section>
  );
}

/* ── Brand Story ── */

function StorySection() {
  return (
    <section className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">
          <ScrollReveal>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                The Difference
              </p>
              <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight mb-6">
                Pura vida isn&apos;t just a phrase. It&apos;s how we make coffee.
              </h2>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                Pura vida — pure life — is the Costa Rican philosophy of living simply, warmly, and with intention. It&apos;s the spirit behind every cup we pour.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                Taïga Pura Vida Coffee was born from a love of extraordinary coffee and a deep connection to the land that grows it. We source our beans directly from family-owned fincas in Costa Rica&apos;s renowned highlands — no middlemen, no compromises.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light">
                When we show up at your event, we bring more than equipment and baristas. We bring a story.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-cup-branded.jpg"
                alt="Taïga branded marbled iced coffee cup"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "1/1" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-hand-latte.png"
                alt="Hand holding a latte art coffee"
                className="rounded-2xl w-full object-cover mt-8"
                style={{ aspectRatio: "1/1", objectPosition: "center top" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Costa Rica Origin ── */

function OriginSection() {
  return (
    <section className="bg-[#2B1608] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-outdoor.png"
                alt="Steaming coffee and croissant at an outdoor café"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "300px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-table.png"
                alt="Coffee on a wooden table"
                className="rounded-2xl w-full object-cover mt-8"
                style={{ aspectRatio: "3/4", maxHeight: "300px" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                The Source
              </p>
              <h2 className="text-[#EDD9B8] text-4xl sm:text-5xl leading-tight mb-6">
                Directly from the farm to your cup.
              </h2>
              <p className="text-[#EDD9B8]/55 text-base leading-7 font-light mb-5">
                Our coffee begins in Costa Rica&apos;s renowned highland growing region — where volcanic soil, mountain altitude, and a careful hand produce some of the world&apos;s most distinctive beans.
              </p>
              <p className="text-[#EDD9B8]/55 text-base leading-7 font-light mb-5">
                We work directly with the farmers who grow them. Every variety reflects its terroir: bright acidity from the altitude, sweetness from the volcanic soil, complexity from careful processing.
              </p>
              <p className="text-[#EDD9B8]/55 text-base leading-7 font-light">
                It&apos;s specialty coffee with a real story behind every sip — and we love sharing that story at your event.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Founder ── */

function FounderSection() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">

          <ScrollReveal>
            {/* Placeholder for owner photo */}
            <div
              className="relative rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#EDD9B8]/60 flex items-center justify-center"
              style={{ aspectRatio: "4/5", maxHeight: "520px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark-amber.png" alt="" aria-hidden="true" className="w-1/3 opacity-[0.15] pointer-events-none" />
              <p className="absolute bottom-5 left-5 text-[#2B1608]/25 text-[10px] tracking-[0.25em] uppercase">
                Photo · Coming soon
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                The Maker
              </p>
              <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight mb-6">
                Meet Tayna.
              </h2>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                Tayna is the heart behind Taïga Pura Vida Coffee. With roots in Costa Rica and a passion for bringing people together over exceptional coffee, she built Taïga to share what she loves most — the warmth of pura vida, one cup at a time.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                Based in Charlottesville, VA, she brings her carrito to corporate events, weddings, and celebrations across the region — creating coffee experiences that guests remember long after the last sip.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-10 italic">
                &ldquo;Great coffee is a bridge — between cultures, between farmers and guests, between a moment and a memory.&rdquo;
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-[#2B1608] text-[#EDD9B8] px-7 py-3.5 rounded-full sweep-btn"
                style={{ ...btnStyle, "--sweep-bg": "#5C2D0E" } as React.CSSProperties}
              >
                Work With Us
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Community + CTA ── */

function CommunityCTA() {
  return (
    <>
      {/* Charlottesville strip */}
      <section className="bg-[#FAF6F0] py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">

            <ScrollReveal>
              <div>
                <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                  Our Home
                </p>
                <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight mb-6">
                  Proud to call Charlottesville home.
                </h2>
                <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                  Nestled in Virginia&apos;s Blue Ridge foothills, Charlottesville is a city that values craft, community, and quality. It&apos;s the perfect home for Taïga Pura Vida Coffee.
                </p>
                <p className="text-[#5C2D0E]/65 text-base leading-7 font-light">
                  From university events to vineyard celebrations to corporate gatherings, we&apos;ve had the privilege of serving this incredible community — and we&apos;re just getting started.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-charlottesville.png"
                alt="Downtown Charlottesville, Virginia — the heart of our community"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "1/1", maxHeight: "460px" }}
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2B1608] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-12">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">
                  Ready to book?
                </p>
                <h2 className="text-[#EDD9B8] text-3xl sm:text-4xl leading-tight">
                  Bring Taïga to your next event.
                </h2>
              </div>
              <a
                href="/contact"
                className="bg-[#C4622D] text-white px-8 py-4 rounded-full sweep-btn shrink-0"
                style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
              >
                Get a Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
