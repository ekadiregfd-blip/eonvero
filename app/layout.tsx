import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eonvero.dev"),
  title: "EONvero — Web Development & Digital Experiences",
  description:
    "EONvero is an independent digital studio crafting modern websites, full-stack web applications, and experimental digital experiences. Founded by Erdem Kadir.",
  keywords: [
    "web development",
    "full-stack developer",
    "digital experiences",
    "Next.js",
    "React",
    "TypeScript",
    "web design",
    "EONvero",
    "Erdem Kadir",
  ],
  authors: [{ name: "Erdem Kadir" }],
  creator: "EONvero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eonvero.dev",
    siteName: "EONvero",
    title: "EONvero — Web Development & Digital Experiences",
    description:
      "Independent digital studio crafting modern websites, full-stack applications, and experimental digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EONvero — Web Development & Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EONvero — Web Development & Digital Experiences",
    description:
      "Independent digital studio crafting modern websites, full-stack applications, and experimental digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo-white.png",
    shortcut: "/images/logo-white.png",
    apple: "/images/logo-white.png",
  },
  other: {
    google: "notranslate",
  },
};

import CalComInit from "@/components/ui/CalComInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`notranslate ${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <CalComInit />
        {children}
      </body>
    </html>
  );
}
