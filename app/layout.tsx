import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andi Asyraful",
  description:
    "Portfolio of Andi Asyraful Amal Ilham, a Frontend Developer & Software Engineering Student from Makassar, Indonesia. Building modern, fast, and impactful web experiences with React, Next.js, and more.",
  keywords: [
    "Andi Asyraful Amal Ilham",
    "Andi Asyraful",
    "Asrap",
    "frontend developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "Makassar",
    "SMK Telkom Makassar",
    "software engineering student",
  ],
  authors: [{ name: "Andi Asyraful Amal Ilham" }],
  openGraph: {
    title: "Andi Asyraful Amal Ilham — Frontend Developer Portfolio",
    description: "Membangun pengalaman digital yang modern, cepat, dan bermanfaat bagi banyak orang.",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}

