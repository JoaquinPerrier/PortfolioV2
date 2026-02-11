import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Joaquín Perrier | Fullstack Developer",
  description:
    "Fullstack Developer specializing in TypeScript, Node.js, React & Next.js. Building high-performance, user-centric web applications.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased noise-bg grid-bg`}
      >
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
