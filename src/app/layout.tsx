import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { displayName, PROFILE } from "@/lib/profile";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const name = displayName(PROFILE);

export const metadata: Metadata = {
  title: `${name} — Mechanical Engineering Portfolio`,
  description:
    "Interactive project portfolio for Zaid Alsalihi — mechanical design, robotics, and hands-on builds for employers and internship applications.",
  openGraph: {
    title: `${name} — Mechanical Engineering Portfolio`,
    description: PROFILE.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
