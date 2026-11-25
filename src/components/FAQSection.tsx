"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
            Before we begin
          </h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <article key={faq.question} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-base font-medium text-text">{faq.question}</span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 text-secondary transition-transform duration-150 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-6 text-text-muted"
                >
                  {faq.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
