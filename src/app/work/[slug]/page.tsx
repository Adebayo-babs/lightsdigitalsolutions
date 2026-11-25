import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study — Lights Digital Solutions`,
    description: study.problem,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <section className="bg-white pt-32 pb-10 md:pt-40">
        <div className="site-container">
          <Link href="/#case-studies" className="text-sm text-text-muted transition-colors hover:text-secondary">
            ← All projects
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">{study.tagLabel}</p>
            <h1 className="mt-3 font-display text-[clamp(42px,5.5vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
              {study.title}
            </h1>
            <p className="mt-5 text-sm text-text-muted">
              <span className="font-medium text-text">Built with</span> {study.tech.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="site-container">
          <div className="relative mx-auto aspect-[16/9] max-w-[1360px] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className={study.kind === "mobile" ? "object-contain p-8" : "object-cover object-top"}
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-container">
          <div className="grid gap-8 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-secondary">The problem</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">{study.problem}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">What we built</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">{study.solution}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary">{study.result ? "The result" : "Current status"}</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">{study.result ?? study.statusLabel}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {study.liveUrl && (
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                Visit live project
                <span aria-hidden="true">↗</span>
              </a>
            )}
            <Link href="/contact" className="button-secondary">
              Discuss a similar project
            </Link>
          </div>
        </div>
      </section>

      {otherStudies.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <div className="site-container">
            <p className="eyebrow mb-3">More selected work</p>
            <div className="grid gap-5 md:grid-cols-2">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/work/${other.slug}`}
                  className="group grid grid-cols-[120px_1fr] items-center gap-5 border-t border-border py-5 sm:grid-cols-[180px_1fr]"
                >
                  <span className="relative aspect-[4/3] overflow-hidden rounded-md bg-white">
                    <Image
                      src={other.image}
                      alt=""
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span>
                    <span className="block text-xs text-text-muted">{other.tagLabel}</span>
                    <span className="mt-1 block font-display text-xl text-black transition-colors group-hover:text-secondary">
                      {other.title}
                    </span>
                  </span>
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
