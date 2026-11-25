const steps = [
  { num: "01", title: "Discovery", body: "We clarify your business goals, existing workflow, and the people the solution needs to serve." },
  { num: "02", title: "Design", body: "We map the experience and agree on the direction before development begins." },
  { num: "03", title: "Build", body: "Your product is developed in clear stages, with testing throughout." },
  { num: "04", title: "Launch", body: "We prepare the release, deploy the product, and monitor it after go-live." },
  { num: "05", title: "Support", body: "Updates and ongoing support help your product keep pace with the business." },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
            A clear path from idea to release
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => (
            <li key={step.num} className="border-t border-border pt-5">
              <span className="font-mono text-sm tabular-nums text-secondary">{step.num}</span>
              <h3 className="mt-5 font-display text-2xl font-normal text-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
