import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Services</p>
            <h1 className="font-display text-[clamp(40px,5.4vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
              Software shaped around your work
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-text-muted">
            From websites and mobile apps to internal platforms, we build the digital systems your organization needs to operate with less friction.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="border-t border-border py-6 md:py-7">
              <div className="flex items-start gap-5">
                <span className="pt-1 font-mono text-sm tabular-nums text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-normal text-black">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{service.description}</p>
                  {service.proofLabel && service.proofHref && (
                    <Link
                      href={service.proofHref}
                      className="mt-3 inline-flex text-sm font-medium text-secondary underline-offset-4 hover:underline"
                    >
                      {service.proofLabel}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
