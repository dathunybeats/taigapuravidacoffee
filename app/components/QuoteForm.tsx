"use client";

import React, { useState, FormEvent } from "react";

// Add NEXT_PUBLIC_GHL_WEBHOOK_URL to .env.local once Sebastian provisions the GHL sub-account
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ?? "";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      if (!WEBHOOK_URL) throw new Error("Webhook not configured");
      const res = await fetch(WEBHOOK_URL, {
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

  const inputCls =
    "w-full bg-white border border-[#EDD9B8] rounded-xl px-4 py-3 text-[#2B1608] text-sm placeholder:text-[#2B1608]/30 focus:outline-none focus:border-[#C4622D] transition-colors";
  const labelCls =
    "block text-[#2B1608]/50 text-[10px] tracking-[0.2em] uppercase mb-1.5";

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-full bg-[#C4622D]/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-5 h-5 text-[#C4622D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-[#2B1608] text-xl mb-2" style={{ fontFamily: "var(--font-headline)" }}>
          Request received!
        </p>
        <p className="text-[#5C2D0E]/60 text-sm leading-6">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input
            type="text"
            className={inputCls}
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input
            type="email"
            className={inputCls}
            placeholder="jane@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone</label>
          <input
            type="tel"
            className={inputCls}
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>Event Type *</label>
          <select
            className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232B1608' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center]`}
            value={form.eventType}
            onChange={(e) => set("eventType", e.target.value)}
            required
          >
            <option value="">Select type…</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate">Corporate</option>
            <option value="Party">Party</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Event Date *</label>
        <input
          type="date"
          className={inputCls}
          value={form.eventDate}
          onChange={(e) => set("eventDate", e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelCls}>Tell us about your event</label>
        <textarea
          className={`${inputCls} resize-none`}
          rows={4}
          placeholder="Number of guests, location, any special requests…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:info@taigapuravidacoffee.com" className="underline">
            info@taigapuravidacoffee.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#C4622D] text-white py-4 rounded-full sweep-btn disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
        style={{
          fontFamily: "var(--font-button)",
          fontWeight: 700,
          fontSize: "var(--font-button-size)",
          textTransform: "uppercase",
          letterSpacing: "var(--font-button-letter-spacing)",
          "--sweep-bg": "#E07832",
        } as React.CSSProperties}
      >
        {status === "loading" ? "Sending…" : "Request a Quote"}
      </button>

      <p className="text-[#2B1608]/35 text-xs text-center">
        We respond within 24 hours · No commitment required
      </p>
    </form>
  );
}
