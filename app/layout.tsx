import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "./context/LangContext";

/* ─── SEO & Open Graph Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://asrap.dev"),
  title: "Andi",
  description:
    "Portfolio of Andi Asyraful Amal Ilham — Frontend Developer specialized in React and Next.js. Building fast, accessible, and production-grade web applications from Makassar, Indonesia.",
  keywords: [
    "Andi Asyraful Amal Ilham",
    "Andi Asyraful",
    "Asrap",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "web developer portfolio",
    "Makassar",
    "SMK Telkom Makassar",
    "Ashari Tech",
    "software engineering student",
    "UI developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Andi Asyraful Amal Ilham", url: "https://github.com/asrapul" }],
  creator: "Andi Asyraful Amal Ilham",
  icons: {
    icon: "/Icon_web.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asrap.dev",
    siteName: "Andi Asyraful — Portfolio",
    title: "Andi Asyraful — Frontend Developer & React / Next.js Specialist",
    description:
      "I build fast, accessible, and production-grade web applications using React and Next.js. Clean code, purposeful design, real-world results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andi Asyraful — Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andi Asyraful — Frontend Developer",
    description:
      "Building fast, accessible web applications with React & Next.js. Available for internships and freelance projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
