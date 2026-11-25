import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lights Digital Solutions",
};

export default function PrivacyPage() {
  return (
    <section className="site-container max-w-3xl pt-32 pb-20 md:pt-40">
      <p className="eyebrow mb-3">Policies</p>
      <h1 className="font-display text-[clamp(38px,5vw,56px)] font-normal leading-tight text-black">Privacy Policy</h1>
      <p className="mt-3 text-sm text-text-muted">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 flex flex-col gap-7 text-[15px] leading-7 text-text-muted">
        <p>
          This is a general-purpose policy covering how Lights Digital Solutions handles information submitted
          through this website. It&apos;s written in plain terms — it isn&apos;t a substitute for formal legal
          advice, and you should have it reviewed by a lawyer before relying on it for a business with specific
          compliance needs (e.g. handling health or financial data).
        </p>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">What we collect</h2>
          <p>
            When you contact us through the form on this site, by email, or by WhatsApp, we collect what you send
            us directly — typically your name, email address, phone number, and details about your project. We
            don&apos;t collect anything beyond what you choose to share.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">How we use it</h2>
          <p>
            Information you submit is used only to respond to your inquiry and, if you become a client, to deliver
            the project you&apos;ve hired us for. We don&apos;t sell, rent, or share your information with third
            parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Cookies &amp; analytics</h2>
          <p>
            This site may use basic, privacy-respecting analytics to understand traffic (e.g. which pages get
            visited). This doesn&apos;t involve tracking you personally across other sites.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Your rights</h2>
          <p>
            You can ask, at any time, what information we hold about you and request it be deleted. Reach out via{" "}
            <a href="mailto:lightsdigitalsolutions3@gmail.com" className="font-medium text-secondary underline-offset-4 hover:underline">
              lightsdigitalsolutions3@gmail.com
            </a>{" "}
            and we&apos;ll handle it directly.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-2xl font-normal text-black">Questions</h2>
          <p>
            If anything here is unclear, ask — this policy is meant to be read and understood, not buried in
            boilerplate.
          </p>
        </div>
      </div>
    </section>
  );
}
