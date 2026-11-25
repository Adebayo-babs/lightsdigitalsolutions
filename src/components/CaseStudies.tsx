import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-surface py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
            Products built for the work behind the business
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">
            Explore the project examples and the practical problems behind them. Each case study explains its context, build, and current status.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className={`group overflow-hidden rounded-xl border border-border bg-white ${
                index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-gray-light ${
                  index === 0 ? "aspect-[16/9] lg:aspect-auto lg:min-h-[380px]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 50vw"}
                  className={`${
                    study.kind === "mobile" ? "object-contain p-6" : "object-cover object-top"
                  }`}
                />
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <p className="text-sm text-text-muted">{study.tagLabel}</p>
                <h3 className="mt-2 font-display text-3xl font-normal leading-tight text-black">
                  {study.title}
                </h3>
                <div className="mt-6 grid gap-4">
                  <div>
                    <p className="text-xs font-semibold text-secondary">The problem</p>
                    <p className="mt-1 text-sm leading-6 text-text-muted">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary">What we built</p>
                    <p className="mt-1 text-sm leading-6 text-text-muted">{study.solution}</p>
                  </div>
                  {study.result && (
                    <div>
                      <p className="text-xs font-semibold text-secondary">The result</p>
                      <p className="mt-1 text-sm leading-6 text-text-muted">{study.result}</p>
                    </div>
                  )}
                </div>

                <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-text-muted">
                  <span className="font-medium text-text">Built with</span> {study.tech.join(" · ")}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {study.liveUrl ? (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-secondary underline-offset-4 hover:underline"
                    >
                      View live project
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : (
                    <span className="text-sm text-text-muted">{study.statusLabel}</span>
                  )}
                  <Link
                    href={`/work/${study.slug}`}
                    className="text-sm font-medium text-text-muted underline-offset-4 transition-colors hover:text-secondary hover:underline"
                  >
                    Read case study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-secondary pl-5 text-sm leading-6 text-text-muted">
          <strong className="font-semibold text-text">Considering a similar build?</strong>{" "}
          <span>Ask us to point you to a project close to your needs.</span>
        </div>
      </div>
    </section>
  );
}
