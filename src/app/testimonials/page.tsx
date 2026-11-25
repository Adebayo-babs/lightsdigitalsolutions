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
      <section className="bg-white pb-20">
        <div className="site-container flex flex-col items-start gap-4 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            Explore the products that have already been built and click into them yourself.
          </p>
          <Link href="/#case-studies" className="button-secondary">
            View selected projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
