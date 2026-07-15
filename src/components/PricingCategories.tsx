"use client";

import { useState } from "react";
import { serviceCategories } from "@/data/pricing";

export default function PricingCategories() {
  const [active, setActive] = useState(serviceCategories[0].key);
  const category = serviceCategories.find((c) => c.key === active)!;

  return (
    <section className="bg-white py-20 md:py-25 px-6 md:px-15">
      <div className="text-center mb-12 max-w-160 mx-auto">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">Pricing</div>
        <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
          What Things Actually Cost
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">
          Starting prices, straight from our official rate card — so you&apos;re not calling blind. Every quote is
          confirmed after a free scoping call, before anything is signed.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {serviceCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border-[1.5px] transition-all ${
              active === c.key
                ? "bg-secondary border-secondary text-white"
                : "bg-white border-border text-text-muted hover:border-secondary/40 hover:text-secondary"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="max-w-180 mx-auto">
        <p className="text-sm text-text-muted text-center mb-7 max-w-140 mx-auto">{category.blurb}</p>
        <div className="bg-surface border border-border rounded-2xl overflow-hidden">
          {category.services.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${
                i !== category.services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-[14.5px] text-text font-medium">{s.name}</span>
              <span className="text-[14.5px] font-bold text-secondary whitespace-nowrap">
                {/^\d/.test(s.price) ? `₦${s.price}` : s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
