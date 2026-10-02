import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE CYBER INDIA — Cyber Intelligence & OSINT Platform",
  description: "India's premier cyber intelligence platform. OSINT, Digital Investigation, IP Forensics, Army Cyber Cell Technical Support. Founded by Hariom Singh.",
  keywords: ["cybersecurity", "OSINT", "digital investigation", "cybercrime", "India", "cyber intelligence", "Hariom Singh", "Army Cyber Cell"],
  authors: [{ name: "Hariom Singh" }],
  openGraph: {
    title: "THE CYBER INDIA — Cyber Intelligence Platform",
    description: "OSINT • Digital Investigation • IP Forensics • Army Cyber Cell Support",
    url: "https://thecyberindia.me",
    siteName: "The Cyber India",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
