# Lights Digital Solutions — Website

Next.js 15 + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. vercel.com → New Project → import the repo → Deploy (auto-detected, no config needed).

## Before you launch — things that need real values

- **Contact form**: sign up free at formspree.io, create a form, and set the env var
  `NEXT_PUBLIC_FORMSPREE_ID` (in `.env.local` locally, and in Vercel → Project → Settings →
  Environment Variables for production). Until this is set, the form shows a warning and won't submit.
- **Pricing** (`src/data/pricing.ts`): the numbers in there are placeholders. Replace with your
  real figures from your price catalogue before this goes live — don't launch with placeholder prices.
- **Images** in `public/images/` — replace the solid-color placeholders with real screenshots/logo.
- **Domain**: `src/app/sitemap.ts`, `robots.ts`, and `layout.tsx` all reference
  `https://www.lightsdigitalsolutions.com` — update if your actual domain differs.
- **Legal pages** (`/privacy`, `/terms`): these are honest, plain-language starting points, not
  reviewed by a lawyer. Fine to launch with, worth a proper legal review eventually.

## What's in this build

- `/` — homepage: hero, case studies, process, trust section, FAQ, CTA
- `/about` — carousel of real project screenshots + brand story
- `/services` — service grid with proof links into case studies
- `/pricing` — pricing tiers + FAQ
- `/testimonials` — honest "request a reference" page instead of fake quotes
- `/contact` — working contact form (Formspree) + direct contact methods
- `/work/[slug]` — a dedicated page per case study (auto-generated from `src/data/caseStudies.ts`)
- `/privacy`, `/terms` — plain-language legal pages
- `sitemap.xml`, `robots.txt`, dynamic Open Graph image — SEO basics wired in

## Project structure

```
src/
  app/            → routes
  components/     → all UI components, one file each
  data/           → typed content (case studies, services, pricing, FAQ) — edit here, not in components
  types/          → shared TypeScript interfaces
```
