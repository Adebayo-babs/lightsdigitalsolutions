import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lights Digital Solutions",
  description: "Get in touch with Lights Digital Solutions to start your project.",
};

const contactOptions = [
  {
    label: "Email",
    value: "lightsdigitalsolutions3@gmail.com",
    href: "mailto:lightsdigitalsolutions3@gmail.com",
  },
  { label: "Phone", value: "+234 816 579 8543", href: "tel:+2348165798543" },
  {
    label: "WhatsApp",
    value: "Start a direct conversation",
    href: "https://wa.me/2348165798543",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="font-display text-[clamp(42px,5.5vw,68px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
            Tell us what you&apos;re working on
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
            Share a little about the project or the process you want to improve. You can also reach out directly.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-normal text-black">Direct contact</h2>
            <div className="mt-5 border-t border-border">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="flex items-start justify-between gap-5 border-b border-border py-4 transition-colors hover:text-secondary"
                >
                  <span className="text-sm text-text-muted">{option.label}</span>
                  <span className="text-right text-sm font-medium text-text">{option.value}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 border-l-2 border-secondary pl-4">
              <p className="text-xs text-text-muted">Based in</p>
              <p className="mt-1 text-sm font-medium text-text">Ikeja, Lagos State</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
