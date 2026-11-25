import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="site-container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Start a conversation</p>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.02] tracking-[-0.035em] text-black">
            Tell us what needs to work better
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">
            Share the process you want to improve. We&apos;ll talk through what a useful first step could look like.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href="mailto:lightsdigitalsolutions3@gmail.com?subject=Project%20Inquiry&body=Hello%20Lights%20Digital%20Solutions,%0A%0AI'd%20like%20to%20discuss%20a%20project."
            className="button-primary"
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+2348165798543" className="button-secondary">
            Call +234 816 579 8543
          </a>
        </div>

        <div className="grid gap-5 border-t border-border pt-5 sm:grid-cols-3 lg:col-span-2 lg:gap-10">
          <div>
            <p className="text-xs text-text-muted">Email</p>
            <a href="mailto:lightsdigitalsolutions3@gmail.com" className="mt-1 inline-block text-sm font-medium text-text hover:text-secondary">
              lightsdigitalsolutions3@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-text-muted">Location</p>
            <p className="mt-1 text-sm font-medium text-text">Ikeja, Lagos State</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Website</p>
            <Link href="/" className="mt-1 inline-block text-sm font-medium text-text hover:text-secondary">
              lightsdigitalsolutions.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
