"use client";

import { useState } from "react";
import { serviceCategories } from "@/data/pricing";

export default function PricingCategories() {
  const [active, setActive] = useState(serviceCategories[0].key);
  const category = serviceCategories.find((item) => item.key === active)!;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Pricing guide</p>
          <h1 className="font-display text-[clamp(40px,5.4vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
            Know where a project starts
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
            These starting prices come from our rate card. The final scope and quote are agreed after a free scoping conversation, before work begins.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto border-b border-border pb-3"
          role="tablist"
          aria-label="Service categories"
        >
          {serviceCategories.map((item) => (
            <button
              key={item.key}
              id={`pricing-tab-${item.key}`}
              type="button"
              role="tab"
              aria-selected={active === item.key}
              aria-controls="pricing-panel"
              onClick={() => setActive(item.key)}
              className={`shrink-0 border-b-2 px-3 py-2 text-sm transition-colors ${
                active === item.key
                  ? "border-secondary font-semibold text-secondary"
                  : "border-transparent text-text-muted hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${category.key}`}
          className="mt-6 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <p className="max-w-md text-sm leading-6 text-text-muted">{category.blurb}</p>
          <div className="border-t border-border">
            {category.services.map((service) => (
              <div
                key={service.name}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-border py-3.5"
              >
                <span className="text-sm text-text">{service.name}</span>
                <span className="whitespace-nowrap text-sm font-medium tabular-nums text-text">
                  {/^\d/.test(service.price) ? `₦${service.price}` : service.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
