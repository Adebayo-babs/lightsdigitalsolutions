import type { Metadata } from "next";
import PricingCategories from "@/components/PricingCategories";
import MaintenancePlans from "@/components/MaintenancePlans";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing — Lights Digital Solutions",
  description:
    "Starting prices for websites, e-commerce, mobile apps, business software, AI automation, and ongoing support plans.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-18" />
      <PricingCategories />
      <MaintenancePlans />
      <FAQSection />
      <CTA />
    </>
  );
}
