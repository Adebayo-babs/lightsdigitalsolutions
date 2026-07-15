"use client";

import { useState, FormEvent } from "react";

// Sign up free at https://formspree.io, create a form, and drop the ID below
// (or set NEXT_PUBLIC_FORMSPREE_ID in your .env.local / Vercel project settings).
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xlgqdydl";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Website",
  "E-Commerce Platform",
  "Android App",
  "Intranet / Internal System",
  "Process Automation",
  "Something Else",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const configured = FORMSPREE_ID.length > 0;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border-[1.5px] border-border rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-display text-xl font-extrabold text-black mb-2">Message sent</h3>
        <p className="text-sm text-text-muted">
          Thanks — this goes straight through. Expect a reply within 24 hours, or reach out on WhatsApp if it&apos;s urgent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border-[1.5px] border-border rounded-2xl p-7 md:p-9 flex flex-col gap-5">
      {!configured && (
        <div className="bg-accent-yellow/15 border border-accent-yellow/40 text-[13px] text-black/80 rounded-lg px-4 py-3">
          Form isn&apos;t wired up yet — set <code className="font-mono text-xs">NEXT_PUBLIC_FORMSPREE_ID</code> in your
          environment (free at formspree.io) to activate it. Until then it won&apos;t submit.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-bold text-text uppercase tracking-wide">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-text uppercase tracking-wide">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="text-xs font-bold text-text uppercase tracking-wide">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 bg-white"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="budget" className="text-xs font-bold text-text uppercase tracking-wide">
          Budget Range (optional)
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          className="border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15"
          placeholder="e.g. ₦300,000 – ₦500,000"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold text-text uppercase tracking-wide">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 resize-none"
          placeholder="What are you trying to build, and what problem is it solving?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || !configured}
        className="bg-secondary hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-[10px] font-bold text-sm shadow-[0_4px_20px_rgba(0,67,255,0.25)] transition-all"
      >
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          Something went wrong sending that — try again, or email{" "}
          <a href="mailto:lightsdigitalsolutions3@gmail.com" className="underline">
            lightsdigitalsolutions3@gmail.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
