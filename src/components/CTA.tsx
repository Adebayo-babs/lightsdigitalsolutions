export default function CTA() {
  return (
    <section id="contact" className="bg-white py-20 md:py-25 px-6 md:px-15 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-[radial-gradient(ellipse,rgba(0,67,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-xs font-bold tracking-[3px] uppercase text-secondary mb-3.5">Get In Touch</div>
        <h2 className="font-display text-[clamp(32px,4.5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-black mb-5">
          Ready to Build
          <br />
          <span className="text-secondary">Something Great?</span>
        </h2>
        <p className="text-[17px] text-text-muted mb-10">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="mailto:lightsdigitalsolutions3@gmail.com?subject=Project%20Inquiry&body=Hello%20Lights%20Digital%20Solutions,%0A%0AI'd%20like%20to%20discuss%20a%20project."
            className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-7.5 py-3.5 rounded-[10px] font-bold text-[15px] shadow-[0_4px_20px_rgba(0,67,255,0.25)] hover:-translate-y-0.5 transition-all"
          >
            Start a Project →
          </a>
          <a
            href="tel:+2348165798543"
            className="inline-flex items-center gap-2 border-[1.5px] border-border hover:border-secondary hover:text-secondary text-text px-7.5 py-3.5 rounded-[10px] font-semibold text-[15px] hover:-translate-y-0.5 transition-all"
          >
            📞 Call Us
          </a>
        </div>

        <div className="flex justify-center gap-10 mt-14 flex-wrap pt-10 border-t border-border">
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span className="text-lg">📧</span>
            <span>lightsdigitalsolutions3@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span className="text-lg">🌐</span>
            <span>lightsdigitalsolutions.com</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span className="text-lg">📍</span>
            <span>Ikeja, Lagos State</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span className="text-lg">📞</span>
            <span>+234 816 579 8543</span>
          </div>
        </div>
      </div>
    </section>
  );
}
