"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const shots = [
  { src: "/images/e-commerce.png", alt: "ShopEase e-commerce platform", label: "ShopEase", category: "E-commerce" },
  { src: "/images/trackzon.png", alt: "Trackzone Energy dashboard", label: "Trackzone Energy", category: "Operations" },
  { src: "/images/e-learning.png", alt: "Virtual classroom platform", label: "Virtual Classroom Platform", category: "Education" },
  { src: "/images/meditrack.png", alt: "MediTrack mobile app", label: "MediTrack", category: "Mobile health" },
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => setCurrent(((index % shots.length) + shots.length) % shots.length);

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => setCurrent((index) => (index + 1) % shots.length), 5000);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white pt-[112px] pb-16 md:pt-32 md:pb-24">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-5">About Lights Digital</p>
          <h1 className="font-display text-[clamp(42px,5.5vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
            One developer. Real, working projects.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
            Lights Digital Solutions is built and run by one person, end to end. Rather than show you stock office photos, here&apos;s the work itself: real products and interfaces, with context for what they were built to do.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
            Explore the product captures and read the context behind each build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#case-studies" className="button-primary">
              Explore the projects
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contact" className="button-secondary">
              Discuss a project
            </Link>
          </div>
        </div>

        <div>
          <div
            className="overflow-hidden rounded-xl border border-border bg-surface"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            onFocusCapture={stopAuto}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) startAuto();
            }}
            onTouchStart={(event) => {
              touchX.current = event.touches[0].clientX;
              stopAuto();
            }}
            onTouchEnd={(event) => {
              const distance = event.changedTouches[0].clientX - touchX.current;
              if (Math.abs(distance) > 40) goTo(current + (distance < 0 ? 1 : -1));
              startAuto();
            }}
            role="region"
            aria-label="Project previews"
            aria-roledescription="carousel"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                key={shots[current].src}
                src={shots[current].src}
                alt={shots[current].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={current === 3 ? "object-contain p-4" : "object-cover object-top"}
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/65 px-5 py-4 text-white">
                <div>
                  <p className="text-xs text-white/75">{shots[current].category}</p>
                  <p className="mt-1 text-lg font-medium">{shots[current].label}</p>
                </div>
                <span className="font-mono text-xs tabular-nums text-white/75">
                  {String(current + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {shots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  aria-label={`Show ${shot.label} project`}
                  aria-current={index === current}
                  onClick={() => {
                    stopAuto();
                    goTo(index);
                    startAuto();
                  }}
                  className={`h-1.5 w-3 rounded-full transition-colors duration-150 ${
                    index === current ? "bg-secondary" : "bg-border hover:bg-gray-mid"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => {
                  stopAuto();
                  goTo(current - 1);
                  startAuto();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-secondary hover:text-secondary"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => {
                  stopAuto();
                  goTo(current + 1);
                  startAuto();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-secondary hover:text-secondary"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
