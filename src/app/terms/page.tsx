import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lights Digital Solutions",
};

export default function TermsPage() {
  return (
    <section className="site-container max-w-3xl pt-32 pb-20 md:pt-40">
      <p className="eyebrow mb-3">Policies</p>
      <h1 className="font-display text-[clamp(38px,5vw,56px)] font-normal leading-tight text-black">Terms of Service</h1>
      <p className="mt-3 text-sm text-text-muted">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 flex flex-col gap-7 text-[15px] leading-7 text-text-muted">
        <p>
          This is a general outline of how projects with Lights Digital Solutions work. It&apos;s not a substitute
          for a signed contract — every project is governed by a specific written agreement covering scope,
          pricing, and delivery, agreed before work starts.
        </p>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Project scope</h2>
          <p>
            Every project begins with a discovery conversation to define what&apos;s being built. A fixed quote
            and timeline is agreed before any development work begins, based on that scope.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Payment</h2>
          <p>
            A 60% deposit is required before work begins, with the remaining 40% balance due before final
            deployment and handover. Third-party costs — domain, hosting, SMS/OTP credits, payment gateway fees,
            app store fees — are billed separately unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Ownership</h2>
          <p>
            Once a project is paid for in full and delivered, the resulting code and product belong to the client.
            You are not required to continue paying for ongoing access to what was built for you.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Changes to scope</h2>
          <p>
            Requests that fall outside the agreed scope are treated as change requests and quoted separately,
            rather than absorbed silently into the original price.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Support after launch</h2>
          <p>
            Projects include a support window after delivery for fixing issues related to the original build.
            Ongoing maintenance beyond that window is available separately.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Questions</h2>
          <p>
            Reach out to{" "}
            <a href="mailto:lightsdigitalsolutions3@gmail.com" className="font-medium text-secondary underline-offset-4 hover:underline">
              lightsdigitalsolutions3@gmail.com
            </a>{" "}
            for anything not covered here — every project agreement can be discussed directly before signing.
          </p>
        </div>
      </div>
    </section>
  );
}
