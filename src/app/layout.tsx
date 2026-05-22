import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NTR } from "next/font/google";
import "./globals.css";

export const dynamic = "force-static";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ntr",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const siteUrl = "https://ai.sunilshrees.com.np";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunil Shrees",
  url: siteUrl,
  jobTitle: "Frontend Developer",
  description:
    "Portfolio of Sunil Shrees, a Next.js developer building fast, beautiful web apps.",
  image: `${siteUrl}/web-app-manifest-512x512.png`,
  email: "sunilshrees371@gmail.com",
  sameAs: [
    "https://github.com/sunilshrees",
    "https://www.linkedin.com/in/sunilshrees/",
  ],
};

export const metadata: Metadata = {
  title: "Sunil Shrees | Portfolio",
  description:
    "Portfolio of Sunil Shrees, a Next.js developer building fast, beautiful web apps.",
  openGraph: {
    title: "Sunil Shrees | Portfolio",
    description:
      "Portfolio of Sunil Shrees, a Next.js developer building fast, beautiful web apps.",
    url: "https://ai.sunilshrees.com.np/",
    siteName: "Sunil Shrees",
    images: [
      {
        url: "/web-app-manifest-512x512",
        width: 1200,
        height: 630,
        alt: "Sunil Shrees | Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={ntr.variable}>
      <body className={ntr.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
