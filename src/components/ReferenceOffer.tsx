export default function ReferenceOffer() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Client references</p>
          <h1 className="font-display text-[clamp(40px,5.4vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
            Ask before you hire
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
            Rather than publish quotes you can&apos;t verify, we&apos;ll connect you with a past client who has worked on a similar project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-text-muted">A direct conversation, in their own words</p>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-black">
              Want to speak with a past client?
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              Tell us what you&apos;re considering—an online store, a mobile app, or an internal system—and we&apos;ll find a relevant reference where possible.
            </p>
          </div>
          <a
            href="https://wa.me/2348165798543?text=Hi%2C%20I'd%20like%20to%20be%20connected%20with%20a%20past%20client%20as%20a%20reference."
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Request a reference
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
