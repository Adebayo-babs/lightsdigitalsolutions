"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-25 px-6 md:px-15">
      <div className="max-w-180 mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">
            Questions
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black">
            Before You Ask
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`border-[1.5px] rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-secondary/30 bg-surface" : "border-border bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display text-[15.5px] font-bold text-black">{faq.question}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border-[1.5px] border-border flex items-center justify-center text-secondary transition-transform ${
                      isOpen ? "rotate-45 border-secondary" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
