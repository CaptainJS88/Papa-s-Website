import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pharmaceutical Consulting | 35+ Years of Expertise",
    template: "%s | Pharmaceutical Consulting"
  },
  description: "Expert pharmaceutical consulting services with 35+ years of experience in regulatory affairs, manufacturing, technology transfer, and quality systems.",
  keywords: ["pharmaceutical consulting", "regulatory affairs", "FDA compliance", "manufacturing consulting", "pharma consultant"],
  authors: [{ name: "Pharmaceutical Consultant" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pharmaceutical Consulting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
