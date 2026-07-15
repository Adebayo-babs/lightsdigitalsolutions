const steps = [
  { num: "01", title: "Discovery", body: "We deep-dive into your business goals, challenges, and target users to define the right solution." },
  { num: "02", title: "Design", body: "We create wireframes and high-fidelity designs aligned with your brand before writing a single line of code." },
  { num: "03", title: "Build", body: "Development happens with clean, scalable code — with continuous testing at every stage." },
  { num: "04", title: "Launch", body: "We deploy your product with a smooth go-live plan and monitor performance closely post-launch." },
  { num: "05", title: "Grow", body: "Ongoing support, updates, and feature additions keep your digital product evolving with your business." },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-primary py-20 md:py-25 px-6 md:px-15">
      <div className="text-xs font-bold tracking-[3px] uppercase text-white/60 mb-3.5">How We Work</div>
      <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-white mb-4.5">
        Our Proven Process
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 mt-16 relative">
        <div className="hidden lg:block absolute top-8 left-15 right-15 h-px bg-white/15" />
        {steps.map((s) => (
          <div key={s.num} className="text-center px-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/12 border-2 border-white/25 flex items-center justify-center font-display text-xl font-extrabold text-white mx-auto mb-4.5">
              {s.num}
            </div>
            <h4 className="font-display text-base font-bold text-white mb-2">{s.title}</h4>
            <p className="text-[13px] text-white/65 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
