"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavChild {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Overview" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between h-[72px] px-6 md:px-15 bg-white/92 backdrop-blur-xl border-b border-border transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,67,255,0.08)]" : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-2.5 z-10">
        <Image
          src="/images/logo.png"
          alt="Lights Digital Solutions"
          width={140}
          height={40}
          style={{ height: "auto" }}
          className="w-[110px] md:w-[140px]"
          priority
        />
      </Link>

      <button
        className="md:hidden text-secondary text-3xl z-10"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex absolute md:static top-[70px] left-0 right-0 md:top-auto flex-col md:flex-row gap-5 md:gap-8 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 border-border shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:shadow-none list-none`}
      >
        {navLinks.map((link) =>
          link.children ? (
            <li key={link.href} className="group relative">
              <button
                className="flex items-center gap-1 text-text-muted hover:text-secondary text-sm font-medium transition-colors md:cursor-default"
                onClick={() => setMobileSubOpen((v) => !v)}
                aria-expanded={mobileSubOpen}
              >
                {link.label}
                <svg
                  viewBox="0 0 12 12"
                  className={`w-3 h-3 transition-transform md:group-hover:rotate-180 ${
                    mobileSubOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2.5 4.5L6 8l3.5-3.5" />
                </svg>
              </button>

              {/* Desktop dropdown */}
              <div className="hidden md:block absolute top-full left-0 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
                <div className="bg-white border border-border rounded-xl shadow-[0_16px_40px_rgba(0,67,255,0.12)] py-2 min-w-[160px]">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-text-muted hover:text-secondary hover:bg-surface transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile submenu */}
              <div className={`md:hidden overflow-hidden transition-all ${mobileSubOpen ? "max-h-40 mt-2" : "max-h-0"}`}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-border">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileSubOpen(false);
                      }}
                      className="text-text-muted hover:text-secondary text-sm font-medium transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-text-muted hover:text-secondary text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      <Link
        href="/contact"
        className="hidden md:inline-flex bg-secondary hover:bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
      >
        Get Started →
      </Link>
    </nav>
  );
}