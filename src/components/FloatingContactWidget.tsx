"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-7.5 right-7.5 z-9999 flex flex-col items-center gap-3"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className={`transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-5 scale-70 pointer-events-none"
          }`}
        >
          <a
            href="tel:+2348165798543"
            aria-label="Call"
            className="group relative w-13.5 h-13.5 rounded-full bg-[#4CAF82] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.18)] hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 fill-white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.68-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.34.02.73-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="pointer-events-none absolute right-full mr-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Call Us
            </span>
          </a>
        </div>
        <div
          className={`transition-all duration-300 delay-75 ${
            open
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-5 scale-70 pointer-events-none"
          }`}
        >
          <a
            href="https://wa.me/2348165798543?text=Hello%2C%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group relative w-13.5 h-13.5 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.18)] hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="pointer-events-none absolute right-full mr-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/85 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact options"
        aria-expanded={open}
        className={`relative w-15 h-15 rounded-full flex items-center justify-center shadow-[0_6px_22px_rgba(0,0,0,0.18)] transition-all hover:scale-107 ${
          open ? "bg-[#888]" : "bg-[#25D366]"
        }`}
      >
        {!open && (
          <span className="pointer-events-none absolute -inset-1.5 rounded-full border-2 border-[#25D366]/40 animate-fcw-pulse" />
        )}
        <svg
          viewBox="0 0 24 24"
          className={`w-7 h-7 fill-white absolute transition-all duration-200 ${
            open ? "opacity-0 rotate-90 scale-60" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className={`w-7 h-7 fill-white absolute transition-all duration-200 ${
            open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-60"
          }`}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}
