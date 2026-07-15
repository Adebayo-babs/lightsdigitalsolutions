import Link from "next/link";
import { maintenancePlans, pricingTerms } from "@/data/pricing";

export default function MaintenancePlans() {
  return (
    <section className="bg-surface py-20 md:py-25 px-6 md:px-15">
      <div className="text-center mb-12 max-w-160 mx-auto">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">
          After Launch
        </div>
        <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
          Ongoing Support Plans
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed">
          Every project includes a warranty period for bug fixes at launch. Beyond that, these plans keep things
          running.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-260 mx-auto items-start">
        {maintenancePlans.map((plan) => (
          <div
            key={plan.key}
            className={`relative bg-white rounded-2xl p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${
              plan.highlighted
                ? "border-2 border-secondary shadow-[0_20px_50px_rgba(0,67,255,0.15)]"
                : "border border-border shadow-sm hover:shadow-[0_16px_40px_rgba(0,67,255,0.08)]"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-8 bg-secondary text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-lg font-extrabold text-black mb-1">{plan.name}</h3>
            <div className="font-display text-3xl font-extrabold text-secondary mb-5">{plan.price}</div>
            <ul className="flex flex-col gap-2.5 mb-7 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-text">
                  <span className="text-secondary font-bold shrink-0 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`text-center py-3 rounded-[10px] font-bold text-sm transition-all ${
                plan.highlighted
                  ? "bg-secondary hover:bg-primary text-white shadow-[0_4px_20px_rgba(0,67,255,0.25)]"
                  : "border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-muted text-center mt-6">
        Custom enterprise SLAs are available for hospitals, schools, and government platforms on request.
      </p>

      <div className="max-w-160 mx-auto mt-16 pt-10 border-t border-border">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-5 text-center">
          How Payment Works
        </div>
        <ul className="flex flex-col gap-3">
          {pricingTerms.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed">
              <span className="text-secondary font-bold shrink-0 mt-0.5">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
