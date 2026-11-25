const reasons = [
  {
    title: "Work tied to a real goal",
    body: "Each feature is scoped around a business need, so the finished product has a clear job to do.",
  },
  {
    title: "Progress you can follow",
    body: "Design, development, and testing move in visible stages, with decisions discussed as the work takes shape.",
  },
  {
    title: "Built to grow with you",
    body: "The architecture is chosen for the product you need now, with room for the next stage.",
  },
  {
    title: "A direct relationship",
    body: "You work with the person building the product, from discovery through support.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-primary py-20 text-white md:py-28">
      <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-medium text-white/70">Why Lights Digital</p>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-normal leading-[1.04] tracking-[-0.03em]">
            Thoughtful software, built close to the work
          </h2>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="border-t border-white/20 py-5">
              <p className="font-mono text-xs tabular-nums text-white/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
