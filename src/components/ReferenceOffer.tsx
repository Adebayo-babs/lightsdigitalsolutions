export default function ReferenceOffer() {
  return (
    <section className="bg-white pt-35 md:pt-40 pb-10 px-6 md:px-15">
      <div className="text-center">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">Client Reviews</div>
        <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
          Ask Before You Hire.
          <br />
          We Encourage It.
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed max-w-140 mx-auto mb-10">
          We&apos;re not going to fill this page with quotes you can&apos;t verify. Here&apos;s something more useful.
        </p>
      </div>

      <div className="max-w-160 mx-auto text-center bg-surface border-[1.5px] border-border rounded-[20px] p-9 md:p-12">
        <div className="text-4xl mb-4">☎️</div>
        <h3 className="font-display text-xl md:text-2xl font-extrabold text-black mb-3">
          Want to talk to a past client directly?
        </h3>
        <p className="text-[15px] text-text-muted leading-relaxed mb-6">
          Tell us which kind of project you&apos;re considering — e-commerce, an Android app, an internal system —
          and we&apos;ll connect you with a client who&apos;s had one built, so you can ask them yourself how the
          process went. No script, no filter.
        </p>
        <a
          href="https://wa.me/2348165798543?text=Hi%2C%20I'd%20like%20to%20be%20connected%20with%20a%20past%20client%20as%20a%20reference."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-7.5 py-3.5 rounded-[10px] font-bold text-[15px] shadow-[0_4px_20px_rgba(0,67,255,0.25)] hover:-translate-y-0.5 transition-all"
        >
          Request a Reference →
        </a>
      </div>
    </section>
  );
}
