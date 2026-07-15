import type { Metadata } from "next";
import ReferenceOffer from "@/components/ReferenceOffer";
import Guarantee from "@/components/Guarantee";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Client Reviews — Lights Digital Solutions",
  description: "Ask to talk to a real past client instead of reading unverifiable quotes.",
};

export default function TestimonialsPage() {
  return (
    <>
      <ReferenceOffer />
      <Guarantee />
      <section className="text-center px-6 pb-20 flex flex-col items-center gap-4.5">
        <p className="text-[15px] text-text-muted">In the meantime, you can see exactly what&apos;s been built and click into it yourself.</p>
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text px-7.5 py-3.5 rounded-[10px] font-semibold text-[15px] hover:-translate-y-0.5 transition-all"
        >
          View Real Projects ↗
        </Link>
      </section>
      <CTA />
    </>
  );
}
