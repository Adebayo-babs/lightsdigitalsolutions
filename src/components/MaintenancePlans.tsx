import Link from "next/link";
import { maintenancePlans, pricingTerms } from "@/data/pricing";

export default function MaintenancePlans() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow mb-3">After launch</p>
            <h2 className="font-display text-[clamp(38px,5vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
              Support that keeps the work moving
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-text-muted">
            Every project includes a warranty period for launch-related bug fixes. These plans cover ongoing care beyond that period.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {maintenancePlans.map((plan) => (
            <article
              key={plan.key}
              className={`flex h-full flex-col border-t-2 p-6 md:p-7 ${
                plan.highlighted
                  ? "border-secondary bg-white"
                  : "border-border bg-white/60"
              }`}
            >
              <h3 className="font-display text-2xl font-normal text-black">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-normal tabular-nums text-text">{plan.price}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={plan.highlighted ? "button-primary mt-7 w-full" : "button-secondary mt-7 w-full"}
              >
                Ask about this plan
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm text-text-muted">
          Custom enterprise SLAs are available for hospitals, schools, and government platforms on request.
        </p>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h3 className="font-display text-3xl font-normal text-black">How payment works</h3>
          <ol className="grid gap-4 sm:grid-cols-2">
            {pricingTerms.map((term, index) => (
              <li key={term} className="flex gap-4 border-t border-border pt-3">
                <span className="font-mono text-xs tabular-nums text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6 text-text-muted">{term}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
