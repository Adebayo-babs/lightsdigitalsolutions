import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://www.lightsdigitalsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  manifest: "/site.webmanifest",
  title: {
    default: "Lights Digital Solutions — Digital Transformation Experts",
    template: "%s",
  },
  description:
    "We build websites, mobile apps, and internal systems that replace manual work with something that just runs. Based in Lagos, Nigeria.",
  openGraph: {
    title: "Lights Digital Solutions",
    description:
      "Websites, mobile apps, and internal systems that replace manual work with something that just runs.",
    url: BASE_URL,
    siteName: "Lights Digital Solutions",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lights Digital Solutions",
    description:
      "Websites, mobile apps, and internal systems that replace manual work with something that just runs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactWidget />
      </body>
    </html>
  );
}
