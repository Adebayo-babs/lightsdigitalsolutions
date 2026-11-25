"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Slide {
  image: string;
  label: string;
  alt: string;
  category: string;
  fit: "cover" | "contain";
}

const slides: Slide[] = [
  {
    image: "/images/e-commerce.png",
    label: "ShopEase",
    alt: "ShopEase online store with product listings and live auction details",
    category: "E-commerce",
    fit: "cover",
  },
  {
    image: "/images/trackzon.png",
    label: "Trackzone Energy",
    alt: "Trackzone Energy operations dashboard and company website",
    category: "Operations",
    fit: "cover",
  },
  {
    image: "/images/e-learning.png",
    label: "Virtual Classroom Platform",
    alt: "Virtual classroom website for course and student management",
    category: "Education",
    fit: "cover",
  },
  {
    image: "/images/meditrack.png",
    label: "MediTrack",
    alt: "MediTrack mobile health app showing a medication schedule and health readings",
    category: "Mobile health",
    fit: "contain",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white pt-[72px]">
      <div className="site-container grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-16">
        <div className="max-w-[600px]">
          <p className="eyebrow mb-5">Independent software studio · Lagos, Nigeria</p>
          <h1 className="font-display text-[clamp(44px,6.1vw,76px)] font-normal leading-[0.99] tracking-[-0.035em] text-black">
            Digital systems for the way your business works
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-text-muted md:text-lg md:leading-8">
            Websites, mobile apps and internal platforms built around real workflows—so your team can spend less time on manual work and more time moving forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#case-studies" className="button-primary">
              Explore selected work
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/contact" className="button-secondary">
              Discuss a project
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3 border-t border-border pt-5 text-sm text-text-muted">
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
            <span>Built in Ikeja. Working across Nigeria.</span>
          </div>
        </div>

        <div className="min-w-0">
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
            aria-label="Selected project previews"
            aria-roledescription="carousel"
          >
            <div className="relative aspect-[2/1] overflow-hidden">
              <Image
                key={slides[current].image}
                src={slides[current].image}
                alt={slides[current].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className={slides[current].fit === "contain" ? "object-contain p-4" : "object-cover object-top"}
                priority
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-text-muted">{slides[current].category}</p>
              <p className="mt-1 text-base font-medium text-text">{slides[current].label}</p>
            </div>
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Show ${slide.label} project`}
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
            <span className="sr-only" aria-live="polite">
              Project {current + 1} of {slides.length}: {slides[current].label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
