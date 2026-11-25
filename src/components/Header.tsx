"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSubOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/95"
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-6">
        <Link href="/" onClick={closeMenu} className="relative z-10 inline-flex items-center">
          <BrandMark />
        </Link>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-border text-text lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
        >
          <span className="h-px w-4 bg-current" />
          <span className="h-px w-4 bg-current" />
          <span className="h-px w-4 bg-current" />
        </button>

        <ul
          id="primary-links"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-white px-6 py-4 shadow-sm lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.href} className="group relative">
                <button
                  type="button"
                  className="flex min-h-10 items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-secondary lg:min-h-9"
                  onClick={() => setMobileSubOpen((value) => !value)}
                  aria-expanded={mobileSubOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    viewBox="0 0 12 12"
                    className={`h-3 w-3 transition-transform duration-150 lg:group-hover:rotate-180 ${
                      mobileSubOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M2.5 4.5L6 8l3.5-3.5" />
                  </svg>
                </button>

                <div className="invisible absolute left-0 top-full z-20 hidden min-w-40 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 lg:block">
                  <div className="rounded-lg border border-border bg-white py-1 shadow-[0_8px_24px_rgba(32,31,27,0.08)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        className="block px-4 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface hover:text-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-150 lg:hidden ${
                    mobileSubOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="flex min-h-0 flex-col overflow-hidden border-l border-border pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        className="py-2 text-sm text-text-muted transition-colors hover:text-secondary"
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
                  onClick={closeMenu}
                  className="flex min-h-10 items-center text-sm font-medium text-text-muted transition-colors hover:text-secondary lg:min-h-9"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <Link href="/contact" className="button-primary header-project-link min-h-10 px-4 text-sm">
          Start a project
        </Link>
      </div>
    </nav>
  );
}
