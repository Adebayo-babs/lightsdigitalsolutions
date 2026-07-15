export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "A standard website takes about 2–4 weeks depending on scope. E-commerce platforms and Android apps usually run 5–8 weeks. Intranet and automation systems vary the most since they're built around your existing workflow — you'll get a specific timeline before any work starts, not after.",
  },
  {
    question: "Do I own the code after the project is done?",
    answer:
      "Yes. Once the project is paid for and delivered, the code and the deployed product are yours. You're not locked into paying us to keep it running, though ongoing support is available if you want it.",
  },
  {
    question: "What happens if something breaks after launch?",
    answer:
      "You reach out — directly, not through a ticket system — and it gets fixed. Every project includes a support window after launch, and continued maintenance is available afterward if you want it.",
  },
  {
    question: "How does payment work?",
    answer:
      "A 60% deposit is required before work begins, with the remaining 40% due before final deployment and handover. That split is standard across every project and confirmed in writing before work starts.",
  },
  {
    question: "Can you work with a fixed budget?",
    answer:
      "Usually, yes. Tell us the budget upfront and we'll scope what's realistically achievable within it, rather than quoting a build you can't afford and letting you find out later.",
  },
  {
    question: "I'm not sure exactly what I need — can we still talk?",
    answer:
      "That's normal, and it's what the discovery call is for. Most clients arrive with a business problem, not a technical spec. Part of the job is helping you figure out what to actually build.",
  },
  {
    question: "Do you only work with businesses in Lagos?",
    answer:
      "No — Lagos is home base, but projects are handled remotely over WhatsApp and calls, so location isn't a barrier.",
  },
];
