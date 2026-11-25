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
      <div className="editorial-card p-8 text-center md:p-10">
        <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-secondary text-secondary">
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m4 10 4 4 8-8" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-normal text-black">Message sent</h3>
        <p className="mt-2 text-sm leading-6 text-text-muted">
          Thank you for getting in touch. You can also reach us directly on WhatsApp if needed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="editorial-card flex flex-col gap-5 p-6 md:p-8">
      {!configured && (
        <div className="rounded-lg border border-accent-yellow/40 bg-accent-yellow/10 px-4 py-3 text-[13px] text-text">
          Form isn&apos;t wired up yet — set <code className="font-mono text-xs">NEXT_PUBLIC_FORMSPREE_ID</code> in your
          environment (free at formspree.io) to activate it. Until then it won&apos;t submit.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="min-h-11 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-gray-mid focus:border-secondary focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="min-h-11 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-gray-mid focus:border-secondary focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="text-sm font-medium text-text">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="min-h-11 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text focus:border-secondary focus:outline-none"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="budget" className="text-sm font-medium text-text">
          Budget Range (optional)
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          className="min-h-11 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-gray-mid focus:border-secondary focus:outline-none"
          placeholder="e.g. ₦300,000 – ₦500,000"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-32 resize-y rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-text placeholder:text-gray-mid focus:border-secondary focus:outline-none"
          placeholder="What are you trying to build, and what problem is it solving?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || !configured}
        className="button-primary min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          Something went wrong sending your message. Try again, or email{" "}
          <a href="mailto:lightsdigitalsolutions3@gmail.com" className="underline">
            lightsdigitalsolutions3@gmail.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
