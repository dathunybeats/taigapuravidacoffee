import React from "react";
import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specialty espresso bars and full-service coffee catering for weddings, corporate events, and celebrations in Charlottesville, VA and beyond. Whole bean coffee, bottled cold brew, and iced lattes by email order.",
  openGraph: {
    title: "Services | Taiga Pura Vida Coffee",
    description:
      "Hand-crafted coffee experiences for every occasion, from intimate gatherings to 500-guest events.",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <SiteNav active="services" />
      <main>
        <ServicesHero />
        <ServiceCards />
        <WhatWeBring />
        <WhatsIncluded />
        <CateringInAction />
        <EventTypes />
        <ServicesCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ── Hero ── */

function ServicesHero() {
  return (
    <section className="relative bg-[#2B1608] flex flex-col justify-center overflow-hidden min-h-[52vh] sm:min-h-[60vh]">
      {/* Right-side photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photo-hand-latte.png"
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
          What We Offer
        </p>
        <h1 className="text-[#EDD9B8] leading-none text-5xl sm:text-6xl lg:text-7xl mb-6">
          Every event deserves<br />exceptional coffee.
        </h1>
        <p className="text-[#EDD9B8]/50 text-base sm:text-lg leading-7 max-w-md font-light">
          From intimate office mornings to 500-guest weddings, we bring the bar, the baristas, and the beans.
        </p>
      </div>
    </section>
  );
}

/* ── Service Cards ── */

const services = [
  {
    number: "01",
    icon: "/icon-latte.png",
    title: "Coffee Catering",
    body: "Our flagship service. A full-service mobile coffee bar with trained baristas, specialty-grade Costa Rican beans, and everything needed for a seamless, memorable experience, from setup to teardown.",
    details: ["Espresso-based drinks", "Seasonal specialties", "Dairy-free & decaf options", "Branded cups available"],
  },
  {
    number: "02",
    icon: "/icon-iced-coffee.png",
    title: "Espresso Bar",
    body: "Hand-crafted drinks made to order. Cortados, lattes, cappuccinos. Elevated, personalized, and made with care for every guest in line. Perfect as a standalone experience or paired with our catering package.",
    details: ["Made-to-order drinks", "Latte art on request", "Signature drink menus", "High-volume capable"],
  },
  {
    number: "03",
    icon: "/icon-cold-brew.png",
    title: "Cold Brew",
    body: "Slow-steeped in-house with our Costa Rican single-origin beans and served straight and dark, no cream, no foam. Bottled and available by email order, alongside our iced lattes and whole bean coffee bags.",
    details: ["Single-origin Costa Rican beans", "Served straight and dark", "Bottled cold brew and iced lattes", "Order by email"],
  },
  {
    number: "04",
    icon: "/icon-drip-coffee.png",
    title: "Drip Coffee",
    body: "Cafe chorreado, Costa Rican drip coffee. Fully black, no foam, brewed from the beans we import directly from the farms.",
    details: ["Cafe chorreado, Costa Rican style", "Fully black, no foam", "Specialty-grade drip coffee", "Brewed from directly imported beans"],
  },
];

function ServiceCards() {
  return (
    <section className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <ScrollReveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">Our Services</p>
            <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight max-w-xl">
              Crafted for your event,<br />built around your guests.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="bg-white border border-[#EDD9B8]/60 rounded-2xl p-7 sm:p-10 h-full flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" aria-hidden="true" className="w-14 h-14 object-contain mb-5 select-none" />
                <p className="text-[#C4622D] text-[10px] tracking-[0.3em] uppercase mb-3">{s.number}</p>
                <h3 className="text-[#2B1608] text-2xl sm:text-3xl mb-3">{s.title}</h3>
                <p className="text-[#5C2D0E]/60 text-sm leading-6 font-light mb-6">{s.body}</p>
                <ul className="mt-auto space-y-2">
                  {s.details.map(d => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-[#5C2D0E]/70 font-light">
                      <span className="w-1 h-1 rounded-full bg-[#C4622D] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What We Bring ── */

const whatWeBringCategories = [
  "Specialty Espresso Bar",
  "Custom Signature Drinks",
  "Branded Event Experiences",
  "Costa Rican Coffee Origin",
];

function WhatWeBring() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">

          <ScrollReveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-cart-front.jpg"
              alt="Taiga branded coffee cart at an event with branded espresso cups"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "center", maxHeight: "560px" }}
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-6">
                What We Bring
              </p>
              <h2 className="text-[#2B1608] leading-tight text-4xl sm:text-5xl mb-6">
                A full specialty<br />bar experience,<br />custom to your event.
              </h2>
              <p className="text-[#5C2D0E]/65 text-base leading-7 font-light mb-8">
                We bring a complete specialty espresso bar to your event, with custom menus designed around your occasion and every bean imported directly from coffee farms owned by friends and family back home in Costa Rica.
              </p>

              <ul className="space-y-3.5 mb-10">
                {whatWeBringCategories.map((cat) => (
                  <li key={cat} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] shrink-0" aria-hidden="true" />
                    <span className="text-[#5C2D0E]/70 text-sm font-light">{cat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="inline-flex items-center bg-[#2B1608] text-[#EDD9B8] px-7 py-3.5 rounded-full sweep-btn"
                style={{ ...btnStyle, "--sweep-bg": "#5C2D0E" } as React.CSSProperties}
              >
                Request a Custom Quote
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── What's Included ── */

const included = [
  { label: "Professional espresso equipment", desc: "Commercial-grade machines, grinders, and tools." },
  { label: "Trained baristas", desc: "Friendly, experienced, and focused on quality." },
  { label: "Specialty-grade beans", desc: "Imported directly from the farms in Costa Rica." },
  { label: "Full setup & teardown", desc: "We arrive early and leave the space spotless." },
  { label: "Cups, lids & napkins", desc: "Everything your guests need, included." },
  { label: "Custom drink menu", desc: "Built around your preferences and event style." },
];

function WhatsIncluded() {
  return (
    <section className="bg-[#2B1608] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">

          <ScrollReveal>
            <div>
              <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-5">Every Booking</p>
              <h2 className="text-[#EDD9B8] text-4xl sm:text-5xl leading-tight mb-4">
                Everything included.<br />Nothing to worry about.
              </h2>
              <p className="text-[#EDD9B8]/45 text-base leading-7 font-light">
                One booking covers it all. We handle the logistics so you can focus on your guests.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {included.map((item, i) => (
                <div key={item.label} className={`border border-[#EDD9B8]/10 rounded-2xl p-5 ${i === included.length - 1 && included.length % 2 !== 0 ? "sm:col-span-2" : ""}`}>
                  <p className="text-[#EDD9B8] text-sm mb-1">{item.label}</p>
                  <p className="text-[#EDD9B8]/35 text-xs leading-5 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Catering In Action ── */

function CateringInAction() {
  return (
    <section className="bg-[#FAF6F0] py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">

        <ScrollReveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">
              The Experience
            </p>
            <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight max-w-xl">
              Bring the café<br />to your event.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-6 gap-3 sm:gap-4">
          {/* Row 1 — three portrait shots */}
          <ScrollReveal delay={0} className="col-span-6 sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-cart-front.jpg"
              alt="Taiga branded coffee cart with La Marzocco espresso machine"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "400px" }}
            />
          </ScrollReveal>
          <ScrollReveal delay={80} className="col-span-6 sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-espresso-pull.jpg"
              alt="Espresso being pulled into a Taiga branded cup"
              className="rounded-2xl w-full object-cover sm:mt-10"
              style={{ aspectRatio: "3/4", objectPosition: "center", maxHeight: "400px" }}
            />
          </ScrollReveal>
          <ScrollReveal delay={160} className="col-span-6 sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-barista-cart.jpg"
              alt="Taiga barista preparing drinks at the coffee cart"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "3/4", objectPosition: "center top", maxHeight: "400px" }}
            />
          </ScrollReveal>
          {/* Row 2 — two landscape shots */}
          <ScrollReveal delay={60} className="col-span-6 sm:col-span-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-service-moment.jpg"
              alt="Barista handing a Taiga cup to a guest at an event"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "4/3", objectPosition: "center", maxHeight: "340px" }}
            />
          </ScrollReveal>
          <ScrollReveal delay={140} className="col-span-6 sm:col-span-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-cart-wide.jpg"
              alt="Full Taiga coffee cart setup with barista and guest"
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "4/3", objectPosition: "center", maxHeight: "340px" }}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={80}>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-[#5C2D0E]/60 text-base leading-7 font-light max-w-lg">
              Our mobile espresso cart arrives fully equipped with specialty-grade beans, a trained barista, and our signature La Marzocco machine. No venue sourcing, no coffee logistics, just an elevated experience for your guests.
            </p>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center bg-[#C4622D] text-white px-7 py-3.5 rounded-full sweep-btn"
              style={{ ...btnStyle, "--sweep-bg": "#E07832" } as React.CSSProperties}
            >
              Get a Quote
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

/* ── Event Types ── */

const eventTypes = [
  {
    tag: "Weddings",
    title: "Your wedding day deserves more than average coffee.",
    desc: "We design a signature drink menu around your palette and event theme, from specialty lattes to seasonal favorites. Guests love the experience; couples love the ease. We handle logistics from delivery to teardown.",
    highlights: ["Signature drink menus", "Latte art on request", "Dairy-free & decaf options", "Branded cups available"],
    img: "/img-wedding.png",
    imgAlt: "Beautiful floral arrangement at a wedding welcome sign",
    imgRight: false,
  },
  {
    tag: "Corporate Events",
    title: "Impress clients. Energize your team.",
    desc: "From product launches to all-hands meetings, an espresso bar changes the energy of any corporate event. We arrive early, set up seamlessly, and serve high-volume drinks without the café line.",
    highlights: ["High-volume service", "Office catering", "Product launches", "Conference & team days"],
    img: "/img-corporate-event.png",
    imgAlt: "Taiga barista serving guests at the coffee cart during a corporate event",
    imgRight: true,
  },
  {
    tag: "Private Parties",
    title: "Any occasion worth celebrating deserves great coffee.",
    desc: "Birthdays, vineyard celebrations, graduations, pop-up markets. We tailor every detail to your event. We serve throughout Central Virginia and the greater Mid-Atlantic region.",
    highlights: ["Flexible setup & sizing", "Outdoor & vineyard events", "University & campus events", "Pop-ups & markets"],
    img: "/img-private-party.png",
    imgAlt: "Guests raising glasses at an intimate private dinner party",
    imgRight: false,
  },
];

function EventTypes() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">

        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">Events We Serve</p>
            <h2 className="text-[#2B1608] text-4xl sm:text-5xl leading-tight">
              The right coffee<br />for every occasion.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-20 sm:space-y-28">
          {eventTypes.map((e, i) => (
            <ScrollReveal key={e.tag} delay={60}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.img}
                  alt={e.imgAlt}
                  className={`rounded-2xl w-full object-cover ${e.imgRight ? "sm:order-last" : ""}`}
                  style={{ aspectRatio: "4/3", maxHeight: "380px" }}
                />
                <div className={e.imgRight ? "sm:order-first" : ""}>
                  <p className="text-[#C4622D] text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-4">{e.tag}</p>
                  <h3 className="text-[#2B1608] text-2xl sm:text-3xl leading-snug mb-4">{e.title}</h3>
                  <p className="text-[#5C2D0E]/60 text-sm leading-7 font-light mb-7">{e.desc}</p>
                  <ul className="space-y-2">
                    {e.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-[#5C2D0E]/70 font-light">
                        <span className="w-1 h-1 rounded-full bg-[#C4622D] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── CTA ── */

function ServicesCTA() {
  return (
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
  );
}
