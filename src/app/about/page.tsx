import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Lights Digital Solutions",
  description: "Meet the founder behind Lights Digital Solutions and what the company stands for.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
