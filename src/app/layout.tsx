import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jai Lakhmani — Full Stack Developer | Python, React.js & AI Agents",
  description: "Full Stack Developer with hands-on experience building REST APIs, full-stack web applications, and AI-powered agents using Python, React.js, and Next.js.",
  keywords: [
    "Jai Lakhmani",
    "Full Stack Developer",
    "Python",
    "React.js",
    "Next.js",
    "TypeScript",
    "AI Agents",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Software Engineer",
  ],
  authors: [{ name: "Jai Lakhmani" }],
  creator: "Jai Lakhmani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jailakhmani.com",
    title: "Jai Lakhmani — Full Stack Developer | Python, React.js & AI Agents",
    description: "Full Stack Developer with hands-on experience building REST APIs, full-stack web applications, and AI-powered agents using Python, React.js, and Next.js.",
    siteName: "Jai Lakhmani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Lakhmani — Full Stack Developer | Python, React.js & AI Agents",
    description: "Full Stack Developer with hands-on experience building REST APIs, full-stack web applications, and AI-powered agents using Python, React.js, and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0a0a] text-zinc-50 font-sans antialiased selection:bg-neon/20 selection:text-neon">
        {children}
      </body>
    </html>
  );
}
