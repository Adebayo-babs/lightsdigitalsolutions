const principles = [
  {
    key: "purpose",
    label: "Purpose",
    title: "Make day-to-day work easier",
    body: "To help businesses and organizations simplify operations, improve efficiency, and create room for sustainable growth.",
  },
  {
    key: "mission",
    label: "Mission",
    title: "Replace manual processes with useful software",
    body: "To build reliable applications and intranet solutions around the way an organization needs to work.",
  },
  {
    key: "vision",
    label: "Vision",
    title: "Help more organizations work digitally",
    body: "To become a trusted partner for organizations using technology to improve how they operate.",
  },
];

export default function AboutContent() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-black">
              Technology should make useful work easier
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-base leading-7 text-text-muted">
            <p>
              We build software applications and internal platforms that help organizations move from scattered manual processes to clear, dependable digital systems.
            </p>
            <p>
              The work is practical: strengthen communication, improve productivity, reduce errors, and give teams tools that fit the way they operate.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-border">
          {principles.map((principle, index) => (
            <article
              key={principle.key}
              className="grid gap-3 border-b border-border py-6 md:grid-cols-[72px_180px_1fr] md:gap-8 md:py-8"
            >
              <span className="font-mono text-sm tabular-nums text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium text-text-muted">{principle.label}</p>
              <div>
                <h3 className="font-display text-2xl font-normal leading-tight text-black">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">{principle.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
