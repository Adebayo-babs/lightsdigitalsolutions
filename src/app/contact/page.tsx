import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lights Digital Solutions",
  description: "Get in touch with Lights Digital Solutions to start your project.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-15 bg-white">
      <div className="text-center max-w-160 mx-auto mb-14">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">Get In Touch</div>
        <h1 className="font-display text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-tight text-black mb-4.5">
          Ready to Build <span className="text-secondary">Something Great?</span>
        </h1>
        <p className="text-[17px] text-text-muted leading-relaxed">
          Fill out the form, or reach out directly — either way you&apos;ll hear back within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 max-w-260 mx-auto items-start">
        <div className="flex flex-col gap-4">
          <a
            href="mailto:lightsdigitalsolutions3@gmail.com"
            className="flex items-center gap-3.5 bg-surface border border-border rounded-xl px-5 py-4 hover:border-secondary/30 transition-colors"
          >
            <span className="text-xl">📧</span>
            <div>
              <div className="text-xs text-text-muted">Email</div>
              <div className="text-sm font-semibold text-black">lightsdigitalsolutions3@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+2348165798543"
            className="flex items-center gap-3.5 bg-surface border border-border rounded-xl px-5 py-4 hover:border-secondary/30 transition-colors"
          >
            <span className="text-xl">📞</span>
            <div>
              <div className="text-xs text-text-muted">Call</div>
              <div className="text-sm font-semibold text-black">+234 816 579 8543</div>
            </div>
          </a>
          <a
            href="https://wa.me/2348165798543"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-surface border border-border rounded-xl px-5 py-4 hover:border-secondary/30 transition-colors"
          >
            <span className="text-xl">💬</span>
            <div>
              <div className="text-xs text-text-muted">WhatsApp</div>
              <div className="text-sm font-semibold text-black">Chat directly</div>
            </div>
          </a>
          <div className="flex items-center gap-3.5 bg-surface border border-border rounded-xl px-5 py-4">
            <span className="text-xl">📍</span>
            <div>
              <div className="text-xs text-text-muted">Based in</div>
              <div className="text-sm font-semibold text-black">Ikeja, Lagos State</div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
