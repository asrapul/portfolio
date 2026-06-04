# Agent Role & Project Context
You are an expert full-stack developer, UI/UX designer, and creative technologist. You are building a high-end, premium personal portfolio website for a professional Web Development Service.

## Core Branding
- Main Brand Name: "ANDI ASYRAFUL Amal Ilham" (Strictly use this casing: uppercase for first two words, capitalized for the rest).
- Location Base: Makassar, Indonesia.

## Design System & Aesthetics (REVISED: Monochrome Theme)
- Theme: Ultra-minimalist Premium Monochrome (Black, White, and Grays).
- Primary Background: Pure Deep Black (`#000000` or `#0A0A0A`)
- Secondary / Card Background / Borders: Dark Grays (`#1A1A1A` or `#262626`)
- Accent / Muted Elements: Medium to Light Grays (`#737373` or `#E5E5E5`)
- Text Colors: Pure White (`#FFFFFF`) for headings, Muted Light Gray (`#A3A3A3`) for body.
- Design Style: High-contrast typography, heavy reliance on whitespace, brutalist-minimalism, and elite motion design.

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animation Library: GSAP (GreenSock Animation Platform) + `useGSAP` hook
- Premium Plugin: GSAP SplitText (External CDN: https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js)
- Icons: Lucide React

## Animation & Motion Guidelines (REVISED: SplitText Integration)
Implement high-end, cinematic animations using GSAP:
1. **Hero SplitText Reveal:** For the main headline text in the Hero Section, use the GSAP SplitText plugin (loaded via Next.js Script component or external CDN). Split the text into characters/words and animate them with a staggered, smooth reveal from below (y: 100%, opacity: 0, ease: "power4.out", duration: 1.2).
2. **Scroll-Driven Reveals:** Use GSAP ScrollTrigger to fade/slide in section headers and grid cards (Services & Projects) smoothly as the user scrolls.
3. **Magnetic Buttons:** Apply a subtle "magnetic effect" on primary CTA buttons and social media links using GSAP quickTo for mouse-tracking.
4. **Hover Micro-interactions:** Interactive monochrome elements should have high-contrast micro-animations (e.g., solid white inversion on hover, or slick border expands).

## Key Features & Structure
1. **Bilingual Support (ID/EN):** Toggle switch (ID/EN) in the Navbar. All UI text must dynamically switch between Indonesian and English.
2. **Hero Section:** High-converting headline using the GSAP SplitText effect, clear value proposition, and prominent monochrome CTAs.
3. **About & Tech Stack:** Highlighting professional skills (Next.js, React, TypeScript, Tailwind, GSAP).
4. **Services Offered:** Clean grid cards detailing website creation packages (Landing Pages, E-commerce, Company Profile).
5. **Portfolio/Projects:** Grid showcasing past works with high-contrast hover states.
6. **Interactive Guestbook (Comment Feature):** A discussion section where users can input their name and leave comments/feedback.

## Coding Guidelines
- For SplitText, ensure the external script is safely loaded and registered (`gsap.registerPlugin(SplitText)`) before executing the animation hook to prevent undefined errors in Next.js.
- Ensure 100% responsiveness (Mobile-first approach).
- Create mockup data for projects and initial guestbook comments.