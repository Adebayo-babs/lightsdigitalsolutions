import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-28 md:py-25 px-6 md:px-15">
      <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
        <div>
          <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">What We Do</div>
          <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-black">
            Engineering
            <br />
            Digital Excellence.
          </h2>
        </div>
        <p className="text-[17px] text-text-muted leading-relaxed max-w-110">
          From custom web platforms to powerful mobile apps — we build the digital systems your organization needs to thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white border-[1.5px] border-border rounded-2xl p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,67,255,0.1)] hover:border-secondary/20 relative overflow-hidden"
          >
            <div className="w-13 h-13 bg-secondary/8 rounded-xl flex items-center justify-center text-2xl mb-5">
              {s.icon}
            </div>
            <h3 className="font-display text-lg font-bold text-black mb-2.5">{s.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{s.description}</p>
            {s.proofLabel && s.proofHref && (
              <Link href={s.proofHref} className="inline-block mt-3.5 text-[13px] font-bold text-secondary hover:underline">
                {s.proofLabel}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
