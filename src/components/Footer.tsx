import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/adebayo.jamiu.33",
    hoverBg: "hover:bg-secondary",
    path: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lightsdigitalsolutions/",
    hoverBg: "hover:bg-secondary",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lightsdigitalsolutions?is_from_webapp=1&sender_device=pc",
    hoverBg: "hover:bg-secondary",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/LightsDigitals",
    hoverBg: "hover:bg-secondary",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lights-digital-solutions-471803408/",
    hoverBg: "hover:bg-secondary",
    path: "M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.556V9h3.563v11.452z",
  },
];

const serviceLinks = [
  "Website Development",
  "Android App Development",
  "Intranet Solutions",
  "Professional Branding",
  "Process Automation",
  "Digital Strategy",
  "Maintenance & Support",
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/#case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Process", href: "/#process" },
  { label: "Client Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-text">
      <div className="site-container grid grid-cols-1 gap-10 border-b border-border py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <Link href="/" className="inline-block">
            <BrandMark />
          </Link>
          <p className="mt-4 max-w-[280px] text-sm leading-6 text-text-muted">
            Digital products and operational systems, designed around the way businesses work.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-secondary ${s.hoverBg}`}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-text-muted transition-colors group-hover:text-white">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-medium text-text">
            Services
          </h2>
          <div className="flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <Link
                key={s}
                href="/services"
                className="text-sm text-text-muted transition-colors hover:text-secondary"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-medium text-text">
            Company
          </h2>
          <div className="flex flex-col gap-3">
            {companyLinks.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="text-sm text-text-muted transition-colors hover:text-secondary"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-medium text-text">
            Contact
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:lightsdigitalsolutions3@gmail.com"
              className="text-sm text-text-muted transition-colors hover:text-secondary"
            >
              lightsdigitalsolutions3@gmail.com
            </a>
            <a
              href="tel:+2348165798543"
              className="text-sm text-text-muted transition-colors hover:text-secondary"
            >
              +234 816 579 8543
            </a>
            <a
              href="https://wa.me/2348165798543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-secondary"
            >
              WhatsApp
            </a>
            <span className="text-sm text-text-muted">Ikeja, Lagos State</span>
            <span className="text-sm text-text-muted">www.lightsdigitalsolutions.com</span>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col justify-between gap-4 py-5 text-center text-xs text-text-muted md:flex-row md:text-left">
        <div>
          © {new Date().getFullYear()} Lights Digital Solutions. All rights reserved.
        </div>
        <div className="flex justify-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-secondary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-secondary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
