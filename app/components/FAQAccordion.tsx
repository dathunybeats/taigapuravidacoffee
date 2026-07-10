"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2-4 weeks ahead for smaller events, and 6-8 weeks for weddings or large corporate events. That said, reach out regardless. We'll always do our best to accommodate.",
  },
  {
    q: "How many guests can you serve?",
    a: "Our espresso bar comfortably serves 50-500+ guests depending on service duration and setup. We tailor the staffing and equipment to your headcount.",
  },
  {
    q: "What's included in the service?",
    a: "Every booking includes professional espresso equipment, a trained barista, specialty-grade beans, full setup and teardown, cups, lids, and napkins. We design the drink menu around your preferences.",
  },
  {
    q: "Do you travel outside of Charlottesville?",
    a: "Yes, we serve events throughout Central Virginia and the greater Mid-Atlantic region. Travel fees may apply depending on distance. Just ask when you request a quote.",
  },
  {
    q: "Can I customize the drinks menu?",
    a: "Absolutely. From signature drinks named after your brand to seasonal specialties, we work with you to design a menu that fits your event. Dairy-free and decaf options are always available.",
  },
  {
    q: "How long does setup take?",
    a: "We typically need 45-60 minutes for setup before your event starts. We'll coordinate arrival time with your venue so everything is ready before the first guest arrives.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes, a deposit is required to secure your date. Full payment details are included in your custom quote.",
  },
  {
    q: "What if my event date changes?",
    a: "Life happens, we get it. We'll work with you to reschedule whenever possible. Our rescheduling and cancellation policy is included in your booking agreement.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#EDD9B8]/60 rounded-2xl overflow-hidden bg-white">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[#2B1608] text-sm sm:text-base font-light leading-snug group-hover:text-[#C4622D] transition-colors">
              {faq.q}
            </span>
            <span className="text-[#C4622D] text-xl leading-none shrink-0 w-5 text-center select-none">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 border-t border-[#EDD9B8]/40 pt-4">
              <p className="text-[#5C2D0E]/65 text-sm leading-7 font-light">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
