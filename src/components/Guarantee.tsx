const points = [
  {
    icon: "💬",
    title: "You talk to the person building it",
    body: "No account manager relaying messages to a dev team you never meet. You reach the founder directly, on WhatsApp or call, from day one.",
  },
  {
    icon: "🔗",
    title: "You get to see it working, not just slides",
    body: "Every case study is a live link, not a mockup. You can click into real, running projects before you commit to anything.",
  },
  {
    icon: "🛠️",
    title: "We stay after launch",
    body: "Support and fixes don't stop the day your invoice is paid. If something breaks, you have a direct line to get it fixed.",
  },
  {
    icon: "🇳🇬",
    title: "Built for how business actually works here",
    body: "Paystack, Naira pricing, WhatsApp workflows, local hosting realities — the build accounts for the environment it runs in.",
  },
];

export default function Guarantee() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-25 px-6 md:px-15">
      <div className="text-center mb-14">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">
          What You Can Expect
        </div>
        <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
          Working With Us, In Plain Terms
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed max-w-140 mx-auto">
          No agency jargon. Here&apos;s what actually happens when you hire Lights Digital Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((p) => (
          <div
            key={p.title}
            className="bg-surface border-[1.5px] border-border rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,67,255,0.08)]"
          >
            <div className="text-3xl mb-4">{p.icon}</div>
            <h4 className="font-display text-base font-bold text-black mb-2">{p.title}</h4>
            <p className="text-sm text-text-muted leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
