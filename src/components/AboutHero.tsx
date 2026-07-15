"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const shots = [
  { src: "/images/e-commerce.png", alt: "ShopEase e-commerce platform", label: "ShopEase" },
  { src: "/images/trackzon.png", alt: "Trackzone Energy dashboard", label: "Trackzone Energy" },
  { src: "/images/e-learning.png", alt: "Virtual classroom platform", label: "Virtual Classroom Platform" },
  { src: "/images/meditrack.png", alt: "MediTrack mobile app", label: "MediTrack" },
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => setCurrent(((idx % shots.length) + shots.length) % shots.length);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % shots.length), 3800);
  };
  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pt-32 md:pt-28 pb-16 md:pb-20 px-6 md:px-15 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-140 h-140 rounded-full bg-[radial-gradient(circle,rgba(0,67,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-secondary/7 border border-secondary/15 px-3.5 py-1.5 rounded-full mb-6 text-xs font-bold tracking-wider uppercase text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
            Who We Are
          </div>
          <h1 className="font-display text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.12] tracking-tight text-black mb-5">
            One Developer.
            <br />
            <span className="text-secondary">Real, Working Projects.</span>
          </h1>
          <p className="text-[16.5px] text-text-muted leading-[1.8] max-w-125 mb-4">
            Lights Digital Solutions isn&apos;t a large agency with a big team photo — it&apos;s built and run by
            one person, end to end. Rather than show you stock office photos, here&apos;s what actually represents
            us: real products, live right now, that real people use.
          </p>
          <p className="text-[16.5px] text-text-muted leading-[1.8] max-w-125 mb-8">
            Every screenshot here is something you can click into. That&apos;s the introduction that matters most.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-6.5 py-3 rounded-[10px] font-bold text-sm shadow-[0_4px_20px_rgba(0,67,255,0.25)] hover:-translate-y-0.5 transition-all"
            >
              See the Projects ↗
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text px-6.5 py-3 rounded-[10px] font-semibold text-sm hover:-translate-y-0.5 transition-all"
            >
              Talk to Us →
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col gap-4 items-center">
          <div
            className="w-full rounded-2xl overflow-hidden border border-border shadow-[0_24px_60px_rgba(0,67,255,0.14)] relative"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
              stopAuto();
            }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
              startAuto();
            }}
          >
            <div className="relative w-full aspect-[4/3]">
              {shots.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover object-top transition-opacity duration-500 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              <div className="absolute bottom-3 left-3 bg-black/55 backdrop-blur text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full pointer-events-none">
                {shots[current].label}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => { stopAuto(); goTo(current - 1); startAuto(); }}
              className="w-9 h-9 rounded-full bg-white border-[1.5px] border-border flex items-center justify-center text-text-muted shadow-sm hover:border-secondary hover:text-secondary hover:scale-105 transition-all"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5" /></svg>
            </button>
            <div className="flex gap-1.5">
              {shots.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => { stopAuto(); goTo(i); startAuto(); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "w-5 bg-secondary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => { stopAuto(); goTo(current + 1); startAuto(); }}
              className="w-9 h-9 rounded-full bg-white border-[1.5px] border-border flex items-center justify-center text-text-muted shadow-sm hover:border-secondary hover:text-secondary hover:scale-105 transition-all"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3l5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
