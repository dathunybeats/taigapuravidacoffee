"use client";

import React, { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string; email: string; phone: string;
  eventType: string; eventDate: string; guestCount: string; location: string;
  message: string;
}

const STEPS = ["Your Info", "Event Details", "Message"];

export default function MultiStepForm() {
  const [step, setStep]     = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm]     = useState<FormData>({
    name: "", email: "", phone: "",
    eventType: "", eventDate: "", guestCount: "", location: "",
    message: "",
  });

  function set(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function advance(e: FormEvent) {
    e.preventDefault();
    setStep(s => s + 1);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full bg-[#FAF6F0] border border-[#EDD9B8] rounded-xl px-4 py-3 text-[#2B1608] text-sm placeholder:text-[#2B1608]/30 focus:outline-none focus:border-[#C4622D] transition-colors";
  const labelCls = "block text-[#EDD9B8]/60 text-[10px] tracking-[0.2em] uppercase mb-1.5";

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-full bg-[#C4622D]/15 flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-[#C4622D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#EDD9B8] text-2xl mb-3" style={{ fontFamily: "var(--font-headline)" }}>
          Request received!
        </h3>
        <p className="text-[#EDD9B8]/50 text-sm leading-6 max-w-sm mx-auto">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll get back to you within 24 hours with a custom quote.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center gap-0 mb-10">
        {STEPS.map((label, i) => (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                i < step  ? "bg-[#C4622D] text-white"
                : i === step ? "bg-[#C4622D] text-white"
                : "bg-[#EDD9B8]/15 text-[#EDD9B8]/40"
              }`} style={{ fontFamily: "var(--font-button)", fontWeight: 700 }}>
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`text-[10px] tracking-[0.15em] uppercase whitespace-nowrap ${
                i <= step ? "text-[#EDD9B8]/70" : "text-[#EDD9B8]/30"
              }`} style={{ fontFamily: "var(--font-button)", fontWeight: 700 }}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-5 transition-colors ${i < step ? "bg-[#C4622D]" : "bg-[#EDD9B8]/15"}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1 — Your Info */}
      {step === 0 && (
        <form onSubmit={advance} className="space-y-4">
          <div>
            <label className={labelCls}>Full Name *</label>
            <input type="text" className={inputCls} placeholder="Jane Smith" value={form.name} onChange={e => set("name", e.target.value)} required />
          </div>
          <div>
            <label className={labelCls}>Email *</label>
            <input type="email" className={inputCls} placeholder="jane@company.com" value={form.email} onChange={e => set("email", e.target.value)} required />
          </div>
          <div>
            <label className={labelCls}>Phone</label>
            <input type="tel" className={inputCls} placeholder="(555) 000-0000" value={form.phone} onChange={e => set("phone", e.target.value)} />
          </div>
          <StepButton label="Next: Event Details" />
        </form>
      )}

      {/* Step 2 — Event Details */}
      {step === 1 && (
        <form onSubmit={advance} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Event Type *</label>
              <select
                className={`${inputCls} appearance-none`}
                value={form.eventType}
                onChange={e => set("eventType", e.target.value)}
                required
              >
                <option value="">Select type…</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate</option>
                <option value="Party">Party</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Event Date *</label>
              <input type="date" className={inputCls} value={form.eventDate} onChange={e => set("eventDate", e.target.value)} required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Guest Count</label>
              <input type="number" className={inputCls} placeholder="e.g. 150" min="1" value={form.guestCount} onChange={e => set("guestCount", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Event Location</label>
              <input type="text" className={inputCls} placeholder="Venue or city" value={form.location} onChange={e => set("location", e.target.value)} />
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={() => setStep(0)} className="flex-1 border border-[#EDD9B8]/25 text-[#EDD9B8]/60 py-3.5 rounded-full hover:text-[#EDD9B8] hover:border-[#EDD9B8]/50 transition-colors text-sm" style={{ fontFamily: "var(--font-button)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
              Back
            </button>
            <StepButton label="Next: Message" className="flex-[2]" />
          </div>
        </form>
      )}

      {/* Step 3 — Message */}
      {step === 2 && (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className={labelCls}>Tell us about your event</label>
            <textarea className={`${inputCls} resize-none`} rows={5} placeholder="Any special requests, drink preferences, or details we should know…" value={form.message} onChange={e => set("message", e.target.value)} />
          </div>
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Email us at{" "}
              <a href="mailto:info@taigapuravidacoffee.com" className="underline">info@taigapuravidacoffee.com</a>
            </p>
          )}
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={() => setStep(1)} className="flex-1 border border-[#EDD9B8]/25 text-[#EDD9B8]/60 py-3.5 rounded-full hover:text-[#EDD9B8] hover:border-[#EDD9B8]/50 transition-colors text-sm" style={{ fontFamily: "var(--font-button)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
              Back
            </button>
            <StepButton label={status === "loading" ? "Sending…" : "Submit Request"} className="flex-[2]" disabled={status === "loading"} />
          </div>
          <p className="text-[#EDD9B8]/25 text-xs text-center">We respond within 24 hours · No commitment required</p>
        </form>
      )}
    </div>
  );
}

function StepButton({ label, className = "", disabled }: { label: string; className?: string; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`bg-[#C4622D] text-white py-3.5 rounded-full sweep-btn w-full disabled:opacity-60 disabled:cursor-not-allowed transition-opacity ${className}`}
      style={{ fontFamily: "var(--font-button)", fontWeight: 700, fontSize: "var(--font-button-size)", textTransform: "uppercase", letterSpacing: "var(--font-button-letter-spacing)", "--sweep-bg": "#E07832" } as React.CSSProperties}
    >
      {label}
    </button>
  );
}
