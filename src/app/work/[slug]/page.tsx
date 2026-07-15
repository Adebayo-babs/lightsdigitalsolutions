import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study — Lights Digital Solutions`,
    description: cs.problem,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-8 px-6 md:px-15 bg-white">
        <Link href="/#case-studies" className="text-sm font-semibold text-text-muted hover:text-secondary transition-colors">
          ← All projects
        </Link>
        <div className="mt-6 max-w-180">
          <span
            className={`inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-wide uppercase mb-4 ${
              cs.kind === "mobile" ? "bg-[#7C3AED]/8 text-[#7C3AED]" : "bg-secondary/8 text-secondary"
            }`}
          >
            {cs.tagLabel}
          </span>
          <h1 className="font-display text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-5">
            {cs.title}
          </h1>
          <div className="flex gap-2 flex-wrap mb-2">
            {cs.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-border text-text-muted bg-surface">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-15 pb-8">
        <div className="relative w-full max-w-260 mx-auto aspect-video rounded-2xl overflow-hidden border border-border shadow-[0_24px_60px_rgba(0,67,255,0.12)]">
          <Image src={cs.image} alt={cs.title} fill sizes="100vw" className="object-cover object-top" priority />
        </div>
      </section>

      <section className="px-6 md:px-15 py-12">
        <div className="max-w-180 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
          <div>
            <div className="text-[10px] font-bold tracking-wide uppercase text-secondary mb-2">The Problem</div>
            <p className="text-[15px] text-text-muted leading-relaxed">{cs.problem}</p>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-wide uppercase text-secondary mb-2">What We Built</div>
            <p className="text-[15px] text-text-muted leading-relaxed">{cs.solution}</p>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-wide uppercase text-secondary mb-2">
              {cs.result ? "The Result" : "Status"}
            </div>
            <p className="text-[15px] text-text-muted leading-relaxed">{cs.result ?? cs.statusLabel}</p>
          </div>
        </div>

        <div className="max-w-180 mx-auto flex gap-3.5 flex-wrap">
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-6.5 py-3 rounded-[10px] font-bold text-sm shadow-[0_4px_20px_rgba(0,67,255,0.25)] hover:-translate-y-0.5 transition-all"
            >
              Visit Live Project ↗
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text px-6.5 py-3 rounded-[10px] font-semibold text-sm hover:-translate-y-0.5 transition-all"
          >
            Start a Similar Project →
          </Link>
        </div>
      </section>

      {others.length > 0 && (
        <section className="px-6 md:px-15 pb-16">
          <div className="max-w-260 mx-auto">
            <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-5">More Work</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group bg-white border border-border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,67,255,0.1)]"
                >
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image src={o.image} alt={o.title} fill sizes="50vw" className="object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-black group-hover:text-secondary transition-colors">
                      {o.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
