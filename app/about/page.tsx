import React from "react";
import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Taiga Pura Vida Coffee, two sisters from Costa Rica sharing specialty coffee catering with Charlottesville, VA.",
  openGraph: {
    title: "Our Story | Taiga Pura Vida Coffee",
    description:
      "Born in the wild, brewed with intention. The story behind Taiga Pura Vida Coffee and our Costa Rican roots.",
    images: [{ url: "/logo-square-brown.png", width: 1080, height: 1080, alt: "Taiga Pura Vida Coffee" }],
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
          Taiga Pura Vida Coffee is a specialty coffee catering company rooted in Costa Rican heritage and driven by craft.
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
                Our Story
              </p>
              <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight mb-6">
                Two sisters from Costa Rica.
              </h2>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-5">
                We are two sisters from Costa Rica, born and raised in the beautiful Caribbean region of our country. Our roots run deep in coffee farming. Our grandparents worked on coffee farms, and we grew up surrounded by the values of hard work, humility, and dedication. We were also inspired by our father and uncle, who built our family&apos;s first business, teaching us the importance of honesty, loyalty, entrepreneurship, and serving our community.
              </p>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light">
                A few years ago, we moved to Virginia. After studying coffee and barista craft and spending time visiting coffee farms owned by friends and family back home, we decided to bring a piece of Costa Rica with us. We began importing coffee directly from the farms and sharing our passion for specialty coffee through every cup we serve. Today, Taiga Coffee is our way of sharing the warmth, tradition, and Pura Vida spirit of Costa Rica with every customer who visits us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            {/*
              Sisters photo grid. The two smaller slots below the childhood photo
              are placeholders for the photos Tayna will send from her Costa Rica
              trip: swap the src on the two <img> tags, no layout changes needed.
            */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-sisters-childhood.jpg"
                alt="Tayna and Gaudy as little girls in Costa Rica"
                className="col-span-2 rounded-2xl w-full object-cover"
                style={{ aspectRatio: "4/3", objectPosition: "center" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-farm-cherries.jpg"
                alt="Picking ripe coffee cherries at a coffee farm in Costa Rica"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "center" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-farm-harvest.jpg"
                alt="Harvesting coffee cherries by hand in Costa Rica"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "center" }}
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
                src="/photo-farm-field.jpg"
                alt="Standing among the coffee plants at a coffee farm in Costa Rica"
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "300px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-farm-picking.jpg"
                alt="Picking coffee at a coffee farm in Costa Rica"
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
                We import our coffee directly from coffee farms owned by friends and family back home in Costa Rica.
              </p>
              <p className="text-[#EDD9B8]/55 text-base leading-7 font-light">
                It&apos;s specialty coffee with a real story behind every sip, and we love sharing that story at your event.
              </p>
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
                  Nestled in Virginia&apos;s Blue Ridge foothills, Charlottesville is a city that values craft, community, and quality. It&apos;s the perfect home for Taiga Pura Vida Coffee.
                </p>
                <p className="text-[#5C2D0E]/65 text-base leading-7 font-light">
                  From university events to vineyard celebrations to corporate gatherings, we&apos;ve had the privilege of serving this incredible community, and we&apos;re just getting started.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-charlottesville.png"
                alt="Downtown Charlottesville, Virginia, the heart of our community"
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
                  Bring Taiga to your next event.
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
