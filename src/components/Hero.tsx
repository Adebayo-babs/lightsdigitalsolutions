"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Slide {
  url: string;
  label: string;
  render: React.ReactNode;
}

const slides: Slide[] = [
  {
    url: "lightsdigitalsolutions.com/work/shopease",
    label: "E-Commerce Platform",
    render: (
      <div className="h-full flex flex-col bg-gradient-to-br from-[#f8f4ff] to-[#eef0ff]">
        <div className="flex items-center justify-between bg-white px-5 py-2.5 border-b border-black/5 shrink-0">
          <span className="font-extrabold text-sm text-[#1a1a2e]">ShopEase</span>
          <div className="hidden sm:flex gap-4 text-[11px] text-gray-500">
            <span>Products</span>
            <span>Deals</span>
            <span>About</span>
          </div>
          <span className="bg-[#7C3AED] text-white text-[10px] font-bold px-3 py-1.5 rounded-md">Shop Now</span>
        </div>
        <div className="flex-1 p-5 flex gap-4 items-center">
          <div className="flex-1">
            <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-[9px] font-bold tracking-wider px-2 py-1 rounded-full mb-2">NEW ARRIVALS</span>
            <div className="text-lg font-extrabold text-[#1a1a2e] leading-tight mb-2">Shop the Best Deals Online</div>
            <div className="text-[10px] text-gray-500 leading-relaxed mb-3">Thousands of products at your fingertips. Fast delivery across Nigeria.</div>
            <span className="inline-block bg-[#7C3AED] text-white text-[10px] font-bold px-4 py-1.5 rounded-md">Browse Collection →</span>
          </div>
          <div className="w-35 h-32 rounded-xl bg-gradient-to-br from-[#7C3AED22] to-[#7C3AED44] border-2 border-[#7C3AED26] flex items-center justify-center text-5xl shrink-0">🛒</div>
        </div>
        <div className="flex gap-2 px-5 pb-4">
          {[["👟","Air Runners","₦24,500"],["👜","Tote Bag","₦12,000"],["⌚","Smart Watch","₦89,000"]].map(([icon,name,price]) => (
            <div key={name} className="flex-1 bg-white rounded-lg p-2 shadow-sm">
              <div className="w-full h-12 bg-[#f5f5ff] rounded-md flex items-center justify-center text-xl mb-1.5">{icon}</div>
              <div className="text-[9px] font-bold text-[#1a1a2e]">{name}</div>
              <div className="text-[9px] text-[#7C3AED] font-semibold">{price}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    url: "lightsdigitalsolutions.com/work/trackzone-energy",
    label: "Operations Dashboard",
    render: (
      <div className="h-full bg-[#0f172a] relative">
        <div className="absolute left-0 top-0 bottom-0 w-14 bg-[#1e293b] flex flex-col items-center py-4 gap-4">
          {["📊","👥","📦","⚙️"].map((ic, i) => (
            <div key={ic} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === 0 ? "bg-secondary" : "bg-white/8"}`}>{ic}</div>
          ))}
        </div>
        <div className="ml-14 h-full p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Energy Operations Dashboard</span>
            <span className="text-[10px] text-slate-500">2026</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[["Production","Live"],["Sites","Multi"],["Alerts","Auto"]].map(([label,val]) => (
              <div key={label} className="bg-[#1e293b] rounded-lg p-2.5">
                <div className="text-[9px] text-slate-500 mb-1">{label}</div>
                <div className="text-base font-extrabold text-white">{val}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#1e293b] rounded-lg p-2.5 flex-1">
            <div className="text-[9px] text-slate-500 mb-2">Production Trend</div>
            <div className="flex items-end gap-1.5 h-25">
              {[40,55,48,70,62,85,75,90,80,100,88,95].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t min-h-2.5 ${i % 3 === 1 ? "bg-secondary" : "bg-secondary/30"}`} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    url: "lightsdigitalsolutions.com/work/trackzone-energy",
    label: "Corporate + Operations Website",
    render: (
      <div className="h-full bg-white flex flex-col">
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-black/5">
          <div className="flex items-center gap-1.5">
            <div className="w-5.5 h-5.5 bg-secondary rounded-md flex items-center justify-center text-white text-[11px] font-extrabold">T</div>
            <span className="text-xs font-bold text-[#1a1a2e]">Trackzone Energy</span>
          </div>
          <div className="hidden sm:flex gap-3.5 text-[10px] text-gray-500">
            <span>Services</span><span>About</span><span>Contact</span>
          </div>
          <span className="bg-secondary text-white text-[9px] font-bold px-3 py-1.5 rounded-md">Get Quote</span>
        </div>
        <div className="flex-1 grid grid-cols-2">
          <div className="p-5 flex flex-col justify-center">
            <span className="inline-block bg-[#EFF6FF] text-secondary text-[9px] font-bold tracking-wider px-2 py-1 rounded-full mb-2.5 w-fit">OIL & ENERGY RESOURCES</span>
            <div className="text-base font-extrabold text-[#1a1a2e] leading-snug mb-2">Monitoring Production &amp; Resource Allocation</div>
            <div className="text-[10px] text-gray-500 leading-relaxed mb-3.5">A centralized operations dashboard giving real-time visibility into energy production and resource use.</div>
            <div className="flex gap-2">
              <span className="bg-secondary text-white text-[9px] font-bold px-3.5 py-1.5 rounded-md">Get Started</span>
              <span className="border border-gray-200 text-gray-700 text-[9px] font-semibold px-3.5 py-1.5 rounded-md">Our Services</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center text-6xl">🛢️</div>
        </div>
        <div className="flex gap-6 px-5 py-2.5 border-t border-black/5">
          {[["Live","Production Data"],["24/7","Monitoring"],["Multi","Site Coverage"]].map(([n,l]) => (
            <div key={l}>
              <div className="text-[13px] font-extrabold text-secondary">{n}</div>
              <div className="text-[9px] text-gray-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    url: "lightsdigitalsolutions.com/work/meditrack",
    label: "Mobile Health App",
    render: (
      <div className="h-full bg-gradient-to-b from-[#F0FDF4] to-[#ECFDF5] flex flex-col">
        <div className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-[#f0fdf4]">
          <span className="text-[13px] font-extrabold text-[#065F46]">MediTrack</span>
          <span className="bg-[#D1FAE5] text-[#065F46] text-[9px] font-bold px-2.5 py-1 rounded-full">Book Appointment</span>
        </div>
        <div className="flex-1 grid grid-cols-2">
          <div className="p-4">
            <span className="inline-block bg-[#D1FAE5] text-[#059669] text-[9px] font-bold tracking-wide px-2 py-1 rounded-full mb-2.5">HEALTH MANAGEMENT</span>
            <div className="text-base font-extrabold text-[#064E3B] leading-tight mb-2">Your Health, Tracked Smart</div>
            <div className="text-[10px] text-gray-500 leading-relaxed mb-3">Medication reminders, doctor consultations, and health tracking — all in one place.</div>
            <span className="inline-block bg-[#059669] text-white text-[10px] font-bold px-4 py-1.5 rounded-md">Get Started Free</span>
          </div>
          <div className="p-4 flex flex-col gap-2 justify-center">
            <div className="bg-white rounded-lg p-2.5 shadow-sm flex items-center gap-2">
              <div className="w-7.5 h-7.5 bg-[#D1FAE5] rounded-lg flex items-center justify-center text-sm shrink-0">💊</div>
              <div>
                <div className="text-[10px] font-bold text-[#1a1a2e]">Medication Reminder</div>
                <div className="text-[9px] text-gray-500">Amoxicillin — 8:00 AM</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2.5 shadow-sm flex items-center gap-2">
              <div className="w-7.5 h-7.5 bg-[#D1FAE5] rounded-lg flex items-center justify-center text-sm shrink-0">❤️</div>
              <div>
                <div className="text-[10px] font-bold text-[#1a1a2e]">Heart Rate</div>
                <div className="text-[9px] text-gray-500">72 bpm — Normal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    url: "lightsdigitalsolutions.com/work/elearning",
    label: "E-Learning Platform",
    render: (
      <div className="h-full bg-[#FFF7ED] flex flex-col">
        <div className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-[#FED7AA]">
          <span className="text-xs font-extrabold text-[#C2410C]">E-Learning Platform</span>
          <span className="bg-[#EA580C] text-white text-[9px] font-bold px-3 py-1.5 rounded-md">Start Learning</span>
        </div>
        <div className="flex-1 p-4 flex gap-4 items-center">
          <div className="flex-1">
            <span className="inline-block bg-[#FED7AA] text-[#C2410C] text-[9px] font-bold px-2 py-1 rounded-full mb-2">VIRTUAL CLASSROOM</span>
            <div className="text-base font-extrabold text-[#1a1a2e] leading-snug mb-2">Classes, Assessments &amp; Progress Tracking</div>
            <div className="text-[10px] text-gray-500 leading-relaxed mb-3">A complete digital learning platform for virtual classes, course management, and student progress tracking.</div>
            <span className="inline-block bg-[#EA580C] text-white text-[10px] font-bold px-4 py-1.5 rounded-md">Browse Courses →</span>
          </div>
          <div className="w-30 h-30 rounded-xl bg-gradient-to-br from-[#FED7AA] to-[#FDBA74] flex items-center justify-center text-5xl shrink-0">🎓</div>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setCurrent(((idx % slides.length) + slides.length) % slides.length);
  };

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3800);
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
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-15 px-6 md:px-15 pt-28 lg:pt-20 pb-15 relative overflow-hidden">
      <div className="absolute -top-50 -right-50 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(0,67,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-25 -left-25 w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(249,198,35,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="fade-in inline-flex items-center gap-2 bg-secondary/7 border border-secondary/15 px-3.5 py-1.5 rounded-full mb-7 text-xs font-bold tracking-wider uppercase text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-blink shrink-0" />
          Digital Transformation Experts — Lagos, Nigeria
        </div>
        <h1 className="fade-in delay-1 font-display text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.08] tracking-tight text-black mb-5.5">
          We Build the <span className="text-secondary">Systems</span> Your Business{" "}
          <span className="text-accent-yellow relative">Runs On.</span>
        </h1>
        <p className="fade-in delay-2 text-[17px] text-text-muted leading-[1.75] max-w-120 mb-10">
          Websites, mobile apps, and internal systems that replace manual work with something that just runs — built and shipped by a team that stays on after launch, not one that disappears with your deposit.
        </p>
        <div className="fade-in delay-3 flex gap-3.5 flex-wrap mb-14">
          <Link href="#case-studies" className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-7.5 py-3.5 rounded-[10px] font-bold text-[15px] shadow-[0_4px_20px_rgba(0,67,255,0.25)] hover:shadow-[0_8px_28px_rgba(0,67,255,0.35)] hover:-translate-y-0.5 transition-all">
            See Real Projects ↗
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text px-7.5 py-3.5 rounded-[10px] font-semibold text-[15px] hover:-translate-y-0.5 transition-all">
            Talk to Us →
          </Link>
        </div>
        <div className="fade-in delay-4 grid grid-cols-3 md:flex gap-5 md:gap-10">
          {[["100","+","Projects Delivered"],["5","+","Years Building"],["24","h","Support Response"]].map(([n,s,l], i) => (
            <div key={l} className="flex items-center gap-5 md:gap-10">
              <div>
                <div className="font-display text-2xl md:text-4xl font-extrabold text-black leading-none">
                  {n}<span className="text-secondary">{s}</span>
                </div>
                <div className="text-[11px] md:text-xs text-text-muted mt-1 font-medium">{l}</div>
              </div>
              {i < 2 && <div className="hidden md:block w-px h-10 bg-border" />}
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in delay-5 relative z-10 flex flex-col gap-3.5 items-center">
        <div className="w-full max-w-140">
          <div
            className="rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(0,67,255,0.18),0_8px_24px_rgba(0,0,0,0.08)] border border-white/80 bg-white"
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
            <div className="bg-[#F0F0F2] px-4 pt-3 pb-2.5 flex items-center gap-2.5 border-b border-[#e0e0e4]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 h-6.5 bg-white rounded-md border border-[#E0E0E4] flex items-center px-2.5 text-[11px] text-gray-400 gap-1.5 overflow-hidden">
                <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 fill-gray-300 shrink-0"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.4C4.5 14.4 1.6 11.5 1.6 8S4.5 1.6 8 1.6 14.4 4.5 14.4 8 11.5 14.4 8 14.4z"/></svg>
                <span className="truncate">{slides[current].url}</span>
              </div>
            </div>
            <div className="h-70 overflow-hidden relative">
              {slides[current].render}
              <div className="absolute bottom-3 left-3 bg-black/55 backdrop-blur text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full pointer-events-none">
                {slides[current].label}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-1">
          <button
            aria-label="Previous"
            onClick={() => { stopAuto(); goTo(current - 1); startAuto(); }}
            className="w-9 h-9 rounded-full bg-white border-[1.5px] border-border flex items-center justify-center text-text-muted shadow-sm hover:border-secondary hover:text-secondary hover:scale-105 transition-all"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
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
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
