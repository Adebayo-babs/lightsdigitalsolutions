const points = [
  {
    title: "Talk to the person building it",
    body: "Reach the founder directly on WhatsApp or by phone, from the first conversation through delivery.",
  },
  {
    title: "See working projects",
    body: "The case studies link to real products, so you can explore the work before deciding what comes next.",
  },
  {
    title: "Support after launch",
    body: "A direct line stays open after delivery for support, fixes, and the next stage of the product.",
  },
  {
    title: "Built for local operations",
    body: "Payment providers, Naira pricing, WhatsApp workflows, and local hosting realities are part of the brief.",
  },
];

export default function Guarantee() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-3">What to expect</p>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
            Straight answers. Work you can inspect.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-text-muted">
            A practical partnership, with clear communication before, during, and after the build.
          </p>
        </div>

        <div className="grid gap-x-8 sm:grid-cols-2">
          {points.map((point, index) => (
            <div key={point.title} className="border-t border-border py-5">
              <p className="font-mono text-xs tabular-nums text-secondary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium text-text">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
