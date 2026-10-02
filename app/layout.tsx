import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Cyber India — Cyber Intelligence & OSINT Platform",
  description:
    "The Cyber India is an independent cybersecurity platform for OSINT, digital investigation, security research, tools and cyber awareness. Built by Hariom Singh.",
  keywords: [
    "cybersecurity",
    "OSINT",
    "digital investigation",
    "cybercrime",
    "India",
    "cyber intelligence",
    "Hariom Singh",
    "The Cyber India",
    "security research",
  ],
  authors: [{ name: "Hariom Singh" }],
  creator: "Hariom Singh",
  openGraph: {
    title: "The Cyber India — An Independent Cybersecurity & Intelligence Platform",
    description:
      "OSINT • Digital Investigation • Security Research • Cyber Awareness",
    url: "https://thecyberindia.me",
    siteName: "The Cyber India",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
