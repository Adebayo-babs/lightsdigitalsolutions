import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-surface py-20 md:py-25 px-6 md:px-15">
      <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">
        Proof, Not Promises
      </div>
      <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
        Real Projects.
        <br />
        Real Problems Solved.
      </h2>
      <p className="text-[17px] text-text-muted leading-relaxed max-w-140">
        No stock photos, no invented case studies. Here&apos;s actual work you can click into and use right now.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14">
        {caseStudies.map((cs) => (
          <article
            key={cs.slug}
            className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,67,255,0.12)] hover:border-secondary/25"
          >
            {/* Image — full width, always on top, no nested frames shrinking it down */}
            <div
              className={`relative w-full ${
                cs.kind === "mobile" ? "aspect-[16/10]" : "aspect-video"
              } bg-gray-100`}
            >
              <Image
                src={cs.image}
                alt={cs.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cs.kind === "mobile" ? "object-cover object-top" : "object-cover object-top"}
              />
            </div>

            <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
              <span
                className={`inline-block self-start px-2.5 py-1 rounded text-[10px] font-bold tracking-wide uppercase ${
                  cs.kind === "mobile" ? "bg-[#7C3AED]/8 text-[#7C3AED]" : "bg-secondary/8 text-secondary"
                }`}
              >
                {cs.tagLabel}
              </span>
              <h3 className="font-display text-xl font-extrabold text-black -mt-1">{cs.title}</h3>

              <div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-secondary">The problem</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed mt-0.5">{cs.problem}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wide uppercase text-secondary">What we built</span>
                <p className="text-[13.5px] text-text-muted leading-relaxed mt-0.5">{cs.solution}</p>
              </div>
              {cs.result && (
                <div>
                  <span className="text-[10px] font-bold tracking-wide uppercase text-secondary">The result</span>
                  <p className="text-[13.5px] text-text-muted leading-relaxed mt-0.5">{cs.result}</p>
                </div>
              )}

              <div className="flex gap-1.5 flex-wrap mt-1">
                {cs.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full border border-border text-text-muted bg-surface">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-2 flex items-center gap-4 flex-wrap">
                {cs.liveUrl ? (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-secondary hover:underline"
                  >
                    View live project ↗
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-gray-mid">{cs.statusLabel}</span>
                )}
                <Link href={`/work/${cs.slug}`} className="text-sm font-semibold text-text-muted hover:text-secondary transition-colors">
                  Full case study →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Honest, ready-to-fill trust slot. Replace with 2-3 REAL client quotes once collected. */}
      <div className="mt-8 text-center text-sm text-text-muted bg-white border-[1.5px] border-dashed border-border rounded-2xl p-5">
        <strong className="text-black">Working on something similar?</strong> Ask us — we&apos;re happy to point you to a project close to what you need.
      </div>
    </section>
  );
}
