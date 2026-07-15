const reasons = [
  { icon: "🎯", title: "Goal-Oriented Development", body: "Every feature we build is tied to a specific business outcome. No fluff — only what moves your metrics." },
  { icon: "⚡", title: "Fast, Reliable Delivery", body: "We respect your timelines. Our process ensures predictable delivery without sacrificing quality." },
  { icon: "🔐", title: "Scalable & Secure Architecture", body: "Built to grow with your business. Systems that handle increased traffic without breaking a sweat." },
  { icon: "🤝", title: "Long-Term Partnership", body: "Not just a vendor — a digital growth partner, invested in your success long after launch." },
];

export default function WhyUs() {
  return (
    <section className="bg-surface py-20 md:py-25 px-6 md:px-15">
      <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">Why Choose Us</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-14">
        <div>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-9">
            We Don&apos;t Just Build —
            <br />
            We Deliver Results.
          </h2>
          <div className="flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4.5 items-start">
                <div className="w-12 h-12 shrink-0 bg-secondary/8 rounded-xl flex items-center justify-center text-xl">
                  {r.icon}
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-black mb-1">{r.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary rounded-[20px] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-15 -right-15 w-50 h-50 rounded-full bg-white/8" />
          <div className="font-display text-6xl md:text-8xl font-extrabold text-white leading-none relative z-10">98%</div>
          <div className="text-[15px] text-white/80 mt-1.5 relative z-10">Client Satisfaction Rate</div>
          <div className="grid grid-cols-2 gap-4 mt-9 text-left relative z-10">
            {[["100+","Projects Delivered"],["5+","Years Experience"],["50+","Active Clients"],["24h","Support Response"]].map(([n,l]) => (
              <div key={l} className="bg-white/10 rounded-xl p-4.5">
                <div className="font-display text-2xl font-extrabold text-white">{n}</div>
                <div className="text-[11px] text-white/70 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
