import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://www.lightsdigitalsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  manifest: "/site.webmanifest",
  title: {
    default: "Lights Digital Solutions — Software for real work",
    template: "%s",
  },
  description:
    "Websites, mobile apps, and operational software built around the way businesses work. Based in Ikeja, Lagos.",
  openGraph: {
    title: "Lights Digital Solutions",
    description:
      "Websites, mobile apps, and operational software built around the way businesses work.",
    url: BASE_URL,
    siteName: "Lights Digital Solutions",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lights Digital Solutions",
    description:
      "Websites, mobile apps, and operational software built around the way businesses work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactWidget />
      </body>
    </html>
  );
}
