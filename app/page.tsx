export default function DesignDeck() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans">

      {/* Header */}
      <header className="bg-[#2B1608] px-12 py-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Taïga Pura Vida Coffee" className="h-16 w-16 object-contain brightness-0 invert opacity-90" />
          <div>
            <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase mb-1">Design Deck</p>
            <h1 className="text-[#EDD9B8] text-2xl font-light tracking-widest uppercase">Taïga Pura Vida Coffee</h1>
          </div>
        </div>
        <p className="text-[#EDD9B8]/40 text-sm tracking-widest">v1.0</p>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16 space-y-24">

        {/* 01 Brand Essence */}
        <section>
          <SectionLabel>01 — Brand Essence</SectionLabel>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {/* Logo showcase */}
            <div className="bg-white rounded-2xl border border-[#EDD9B8]/60 p-12 flex flex-col items-center justify-center gap-8">
              <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase self-start">Logo — Light background</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Taïga Pura Vida Coffee" className="w-52 h-52 object-contain" />
            </div>
            <div className="bg-[#2B1608] rounded-2xl p-12 flex flex-col items-center justify-center gap-8">
              <p className="text-[#C4622D] text-xs tracking-[0.3em] uppercase self-start">Logo — Dark background</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Taïga Pura Vida Coffee" className="w-52 h-52 object-contain brightness-0 invert" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <EssenceCard title="Wild" body="The jaguar. Untamed, proud, rooted in the forest. The brand carries nature's quiet confidence." />
            <EssenceCard title="Warm" body="Cocoa tones, amber light, the smell of fresh roast. Every touchpoint should feel like a warm welcome." />
            <EssenceCard title="Pura Vida" body="Costa Rican for 'pure life.' Unhurried, joyful, authentic. Not just coffee — a way of being." />
          </div>
        </section>

        {/* 02 Color Palette */}
        <section>
          <SectionLabel>02 — Color Palette</SectionLabel>
          <div className="grid grid-cols-2 gap-6 mt-8 md:grid-cols-5">
            <ColorSwatch bg="#2B1608" name="Espresso" hex="#2B1608" role="Primary" />
            <ColorSwatch bg="#5C2D0E" name="Dark Roast" hex="#5C2D0E" role="Secondary" />
            <ColorSwatch bg="#C4622D" name="Amber" hex="#C4622D" role="Accent" />
            <ColorSwatch bg="#EDD9B8" name="Cream" hex="#EDD9B8" role="Highlight" dark />
            <ColorSwatch bg="#FAF6F0" name="Linen" hex="#FAF6F0" role="Background" dark border />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6">
            <GradientSwatch from="#C4622D" to="#E07832" name="Ember Gradient" use="CTAs, highlights, hover states" />
            <GradientSwatch from="#2B1608" to="#5C2D0E" name="Roast Gradient" use="Hero overlays, section backgrounds" />
            <GradientSwatch from="#FAF6F0" to="#EDD9B8" name="Cream Gradient" use="Cards, light section backgrounds" />
          </div>
        </section>

        {/* 03 Typography */}
        <section>
          <SectionLabel>03 — Typography</SectionLabel>
          <div className="mt-8 bg-white rounded-2xl p-10 border border-[#EDD9B8]/60 space-y-10">
            <div>
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Display — El Hidrant · Headline</p>
              <h1 className="text-[#2B1608] leading-none" style={{ fontSize: 64 }}>
                Pure Life.<br />Perfect Cup.
              </h1>
            </div>
            <div>
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Heading — El Hidrant · H2</p>
              <h2 className="text-[#2B1608]" style={{ fontSize: 36 }}>Sourced from the heart of Costa Rica</h2>
            </div>
            <div>
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-3">Subheading — El Hidrant · H3</p>
              <h3 className="text-[#2B1608]" style={{ fontSize: 24 }}>Small batch. Big flavour.</h3>
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

        {/* 04 UI Components */}
        <section>
          <SectionLabel>04 — UI Components</SectionLabel>
          <div className="mt-8 space-y-6">

            {/* Buttons */}
            <div className="bg-white rounded-2xl p-10 border border-[#EDD9B8]/60">
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-8">Buttons</p>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#2B1608] text-[#EDD9B8] px-8 py-3.5 rounded-full hover:bg-[#5C2D0E] transition-colors" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }}>
                  Order Now
                </button>
                <button className="bg-gradient-to-r from-[#C4622D] to-[#E07832] text-white px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }}>
                  Explore Menu
                </button>
                <button className="border border-[#2B1608] text-[#2B1608] px-8 py-3.5 rounded-full hover:bg-[#2B1608] hover:text-[#EDD9B8] transition-colors" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }}>
                  Learn More
                </button>
                <button className="text-[#C4622D] underline underline-offset-4 hover:text-[#2B1608] transition-colors" style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }}>
                  See All →
                </button>
              </div>
            </div>

            {/* Nav */}
            <div className="bg-[#2B1608] rounded-2xl p-8">
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-6">Navigation</p>
              <nav className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Taïga" className="h-10 w-10 object-contain brightness-0 invert" />
                  <div>
                    <p className="text-[#EDD9B8] text-sm font-medium tracking-widest uppercase">Taïga</p>
                    <p className="text-[#EDD9B8]/40 text-[10px] tracking-[0.25em] uppercase">Pura Vida Coffee</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  {["Menu", "Story", "Brew", "Find Us"].map((item) => (
                    <span key={item} className="text-[#EDD9B8]/70 cursor-pointer hover:text-[#EDD9B8] transition-colors" style={{ fontFamily: "var(--font-navigation)", fontWeight: "var(--font-navigation-weight)" as never, fontSize: "var(--font-navigation-size)", textTransform: "uppercase", letterSpacing: "var(--font-navigation-letter-spacing)" }}>
                      {item}
                    </span>
                  ))}
                </div>
                <button style={{ fontFamily: "var(--font-button)", fontWeight: "var(--font-button-weight)" as never, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)" }} className="bg-[#C4622D] text-white px-6 py-2.5 rounded-full hover:bg-[#E07832] transition-colors">
                  Order
                </button>
              </nav>
            </div>

            {/* Menu Cards */}
            <div className="bg-white rounded-2xl p-10 border border-[#EDD9B8]/60">
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-8">Menu / Product Cards</p>
              <div className="grid grid-cols-3 gap-6">
                <MenuCard name="Flat White" origin="Costa Rica · Tarrazu" price="$5.50" note="Smooth, nutty, caramel finish" />
                <MenuCard name="Cold Brew" origin="Guatemala · Huehuetenango" price="$6.00" note="Dark chocolate, stone fruit" dark />
                <MenuCard name="Pour Over" origin="Ethiopia · Yirgacheffe" price="$7.00" note="Floral, bright, jasmine" />
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl p-10 border border-[#EDD9B8]/60">
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-8">Badges & Tags</p>
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

        {/* 05 Page Layouts */}
        <section>
          <SectionLabel>05 — Page Layouts</SectionLabel>
          <div className="mt-8 space-y-6">

            {/* Hero mockup */}
            <div>
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-4">Hero Section</p>
              <div
                className="h-80 rounded-2xl relative flex items-end p-12 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1A0D04 0%, #2B1608 55%, #5C2D0E 100%)" }}
              >
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 72% 38%, #C4622D44 0%, transparent 55%)" }} />
                <div className="relative z-10 max-w-lg">
                  <p className="text-[#C4622D] text-xs tracking-[0.35em] uppercase mb-4">Taïga Pura Vida Coffee</p>
                  <h2 className="text-[#EDD9B8] leading-tight mb-6" style={{ fontSize: 48 }}>
                    Where the wild<br />meets the cup.
                  </h2>
                  <div className="flex gap-4">
                    <div className="bg-gradient-to-r from-[#C4622D] to-[#E07832] text-white px-7 py-3 rounded-full text-xs tracking-[0.2em] uppercase">
                      Explore Menu
                    </div>
                    <div className="border border-[#EDD9B8]/30 text-[#EDD9B8] px-7 py-3 rounded-full text-xs tracking-[0.2em] uppercase">
                      Our Story
                    </div>
                  </div>
                </div>
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="" className="w-56 h-56 object-contain brightness-0 invert" />
                </div>
              </div>
            </div>

            {/* Feature strip */}
            <div>
              <p className="text-[#C4622D] text-xs tracking-[0.25em] uppercase mb-4">Feature Strip</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "◈", title: "Direct Trade", body: "We work directly with farmers in Costa Rica, paying above fair-trade prices." },
                  { icon: "◉", title: "Small Batch", body: "Roasted fresh to order so every bag you receive is at peak flavour." },
                  { icon: "◎", title: "Come As You Are", body: "A space for everyone. Great coffee doesn't need a dress code." },
                ].map((f) => (
                  <div key={f.title} className="bg-white border border-[#EDD9B8]/60 rounded-2xl p-8">
                    <span className="text-[#C4622D] text-2xl">{f.icon}</span>
                    <h3 className="text-[#2B1608] font-medium mt-4 mb-2 tracking-tight">{f.title}</h3>
                    <p className="text-[#5C2D0E]/60 text-sm leading-6 font-light">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 Spacing & Shape */}
        <section>
          <SectionLabel>06 — Spacing & Shape</SectionLabel>
          <div className="mt-8 bg-white rounded-2xl p-10 border border-[#EDD9B8]/60">
            <div className="grid grid-cols-2 gap-16">
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

        {/* Footer */}
        <section className="pb-8">
          <div className="bg-[#2B1608] rounded-2xl p-10 flex items-center justify-between">
            <div>
              <p className="text-[#EDD9B8] text-lg tracking-widest uppercase font-light">Taïga Pura Vida Coffee</p>
              <p className="text-[#EDD9B8]/40 text-xs tracking-[0.25em] uppercase mt-1">Design System · 2026</p>
            </div>
            <p className="text-[#C4622D] text-xs tracking-[0.2em] uppercase">Ready to Build →</p>
          </div>
        </section>

      </main>
    </div>
  );
}

/* ── Sub-components ── */

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[#2B1608] text-xl font-medium tracking-tight shrink-0">{children}</p>
      <div className="flex-1 h-px bg-[#EDD9B8]" />
    </div>
  );
}

function EssenceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#2B1608] rounded-2xl p-8">
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
      <div className="h-28" style={{ backgroundColor: bg }} />
      <div className="bg-white border-x border-b border-[#EDD9B8]/40 rounded-b-2xl p-4">
        <p className="text-[#2B1608] text-sm font-medium">{name}</p>
        <p className="text-[#5C2D0E]/50 text-xs mt-0.5 font-mono">{hex}</p>
        <p className="text-[#C4622D] text-[10px] tracking-[0.2em] uppercase mt-1">{role}</p>
      </div>
    </div>
  );
}

function GradientSwatch({ from, to, name, use }: { from: string; to: string; name: string; use: string }) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="h-20" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
      <div className="bg-white border-x border-b border-[#EDD9B8]/40 rounded-b-2xl p-4">
        <p className="text-[#2B1608] text-sm font-medium">{name}</p>
        <p className="text-[#5C2D0E]/50 text-xs mt-1 leading-5">{use}</p>
      </div>
    </div>
  );
}

function MenuCard({ name, origin, price, note, dark }: {
  name: string; origin: string; price: string; note: string; dark?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 ${dark ? "bg-[#2B1608]" : "bg-[#FAF6F0] border border-[#EDD9B8]/60"}`}>
      <div className={`w-10 h-10 rounded-full mb-4 ${dark ? "bg-[#5C2D0E]" : "bg-[#EDD9B8]"}`} />
      <p className="text-[#C4622D] text-[10px] tracking-[0.25em] uppercase mb-1">{origin}</p>
      <h4 className={`text-lg font-medium tracking-tight mb-1 ${dark ? "text-[#EDD9B8]" : "text-[#2B1608]"}`}>{name}</h4>
      <p className={`text-xs leading-5 mb-4 font-light ${dark ? "text-[#EDD9B8]/50" : "text-[#5C2D0E]/60"}`}>{note}</p>
      <div className="flex items-center justify-between">
        <span className={`text-base font-medium ${dark ? "text-[#EDD9B8]" : "text-[#2B1608]"}`}>{price}</span>
        <button className="bg-gradient-to-r from-[#C4622D] to-[#E07832] text-white text-xs px-4 py-1.5 rounded-full tracking-wider">
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
