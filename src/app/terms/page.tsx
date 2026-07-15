import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lights Digital Solutions",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-15 max-w-180 mx-auto">
      <h1 className="font-display text-3xl md:text-4xl font-extrabold text-black mb-3">Terms of Service</h1>
      <p className="text-sm text-text-muted mb-10">Last updated: {new Date().getFullYear()}</p>

      <div className="flex flex-col gap-7 text-[15px] text-text-muted leading-relaxed">
        <p>
          This is a general outline of how projects with Lights Digital Solutions work. It&apos;s not a substitute
          for a signed contract — every project is governed by a specific written agreement covering scope,
          pricing, and delivery, agreed before work starts.
        </p>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Project scope</h2>
          <p>
            Every project begins with a discovery conversation to define what&apos;s being built. A fixed quote
            and timeline is agreed before any development work begins, based on that scope.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Payment</h2>
          <p>
            A 60% deposit is required before work begins, with the remaining 40% balance due before final
            deployment and handover. Third-party costs — domain, hosting, SMS/OTP credits, payment gateway fees,
            app store fees — are billed separately unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Ownership</h2>
          <p>
            Once a project is paid for in full and delivered, the resulting code and product belong to the client.
            You are not required to continue paying for ongoing access to what was built for you.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Changes to scope</h2>
          <p>
            Requests that fall outside the agreed scope are treated as change requests and quoted separately,
            rather than absorbed silently into the original price.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Support after launch</h2>
          <p>
            Projects include a support window after delivery for fixing issues related to the original build.
            Ongoing maintenance beyond that window is available separately.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-black mb-2">Questions</h2>
          <p>
            Reach out to{" "}
            <a href="mailto:lightsdigitalsolutions3@gmail.com" className="text-secondary font-semibold hover:underline">
              lightsdigitalsolutions3@gmail.com
            </a>{" "}
            for anything not covered here — every project agreement can be discussed directly before signing.
          </p>
        </div>
      </div>
    </section>
  );
}
