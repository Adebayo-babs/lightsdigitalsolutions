const mvp = [
  {
    key: "purpose",
    icon: "🎯",
    label: "Purpose",
    labelColor: "text-accent-yellow",
    title: "Why We Exist",
    body: "To empower businesses and organizations with smart digital solutions that simplify operations, improve efficiency, and create opportunities for sustainable growth in an increasingly digital world.",
  },
  {
    key: "mission",
    icon: "🚀",
    label: "Mission",
    labelColor: "text-secondary",
    title: "What We Do",
    body: "To provide reliable, scalable, and innovative software applications and intranet solutions that help businesses transition from manual processes to fully automated digital systems.",
  },
  {
    key: "vision",
    icon: "🔭",
    label: "Vision",
    labelColor: "text-accent-orange",
    title: "Where We're Going",
    body: "To become a trusted leader in digital transformation, enabling organizations of all sizes to thrive through technology-driven solutions.",
  },
];

const personality = [
  "Professional", "Approachable", "Friendly", "Comfort", "Confident",
  "Premium", "Reliable", "Connection"
];

export default function AboutContent() {
  return (
    <section className="bg-surface py-16 md:py-20 px-6 md:px-15">
      <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
        Driving Digital Transformation Through{" "}
        <span className="bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent font-extrabold">
          Innovation
        </span>
      </h2>
      <p className="text-[17px] text-text-muted leading-relaxed max-w-140">
        We empower businesses and organizations with reliable, scalable, and innovative digital solutions that
        simplify operations and unlock sustainable growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-16">
        <div className="flex flex-col gap-4.5 text-[16px] text-text-muted leading-[1.85]">
          <p>
            We specialize in software application development and intranet solutions that help organizations
            transition from manual processes to fully automated digital systems.
          </p>
          <p>
            Our solutions strengthen communication, improve productivity, reduce errors, and enable businesses to
            operate smarter in today&apos;s digital world.
          </p>
          <p>We believe technology should not only solve problems but also create opportunities for sustainable growth.</p>
        </div>

        <div className="bg-gradient-to-br from-primary to-secondary rounded-[20px] p-11 md:p-9 text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-45 h-45 rounded-full bg-white/6" />
          <h3 className="font-display text-2xl font-extrabold mb-3.5 relative z-10">Our Brand</h3>
          <p className="text-[15px] text-white/82 leading-relaxed relative z-10">
            Our brand stands for reliability, scalability, and smart innovation—empowering organizations to move
            beyond manual processes into fully automated, productive digital systems.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 relative z-10">
            {["Reliable", "Scalable", "Innovative", "Technology-Driven"].map((p) => (
              <span key={p} className="bg-white/14 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {mvp.map((m) => (
          <div key={m.key} className="bg-white border border-border rounded-2xl p-8 transition-transform hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,67,255,0.1)]">
            <div className="text-3xl mb-4.5">{m.icon}</div>
            <div className={`text-[10px] font-extrabold tracking-[3px] uppercase mb-2.5 ${m.labelColor}`}>{m.label}</div>
            <h3 className="font-display text-lg font-extrabold text-black mb-3">{m.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5 mt-10 pt-10 border-t border-border items-center">
        <span className="text-xs text-text-muted font-semibold tracking-wider uppercase mr-1">Brand Personality</span>
        {personality.map((p) => (
          <span key={p} className="px-4 py-1.5 rounded-full text-sm font-semibold border-[1.5px] border-border text-text-muted bg-white hover:bg-secondary/6 hover:border-secondary/30 hover:text-secondary transition-all">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
