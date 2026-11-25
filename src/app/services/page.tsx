import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services — Lights Digital Solutions",
  description: "Website development, Android apps, intranet solutions, and process automation.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <CTA />
    </>
  );
}
