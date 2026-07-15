import Hero from "@/components/Hero";
import ClientsStrip from "@/components/ClientsStrip";
import CaseStudies from "@/components/CaseStudies";
import ProcessSteps from "@/components/ProcessSteps";
import Guarantee from "@/components/Guarantee";
import WhyUs from "@/components/WhyUs";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <CaseStudies />
      <ProcessSteps />
      <Guarantee />
      <WhyUs />
      <FAQSection />
      <CTA />
    </>
  );
}
