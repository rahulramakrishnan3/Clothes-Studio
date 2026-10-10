# Sutra Studio — Landing Page App

> **Bespoke Stitching & Hand Embroidery** — A beautifully crafted, single-page marketing website for Sutra Studio, built with Angular 22 and deployed on Vercel.

---

## 📋 Project Overview

| Property         | Detail                                              |
|------------------|-----------------------------------------------------|
| **Project Name** | `landing-page-app`                                  |
| **Brand**        | Sutra Studio                                        |
| **Type**         | Single-page marketing / landing page                |
| **Framework**    | Angular 22 (standalone component architecture)      |
| **Language**     | TypeScript 6                                        |
| **Styling**      | Pure CSS (component-scoped + global)                |
| **Deployment**   | Vercel                                              |
| **Node Version** | ^26.11.1                                            |
| **Last Audited** | October 10, 2026                                    |

---

## 🗂️ Project Structure

```
landing-page-app/
├── public/                        # Static assets served at root
│   ├── embroidery-still-life.svg  # Hero & craft section background image
│   ├── atelier-hoop.svg           # Process section background image
│   └── favicon.ico                # Browser tab icon
│
├── src/
│   ├── index.html                 # Root HTML shell (SEO meta tags, title)
│   ├── main.ts                    # App bootstrap entry point
│   ├── styles.css                 # Global CSS (design tokens, typography, header/wordmark)
│   └── app/
│       ├── app.component.ts       # Root Angular component (title: 'Sutra Studio')
│       ├── app.component.html     # Full landing page template (155 lines)
│       ├── app.component.css      # Component-scoped styles (806 lines)
│       ├── app.config.ts          # Angular app configuration (router + ZoneChangeDetection)
│       └── app.routes.ts          # Router config (empty — single page, no routes)
│
├── angular.json                   # Angular CLI workspace config
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript base config
├── tsconfig.app.json              # App-specific TypeScript config
├── tsconfig.spec.json             # Test TypeScript config
├── vercel.json                    # Vercel deployment config
└── .gitignore                     # Git ignore rules
```

---

## 🧱 Architecture

### Framework & Pattern
- **Angular 22** using the **standalone component** pattern (bootstrapped via `bootstrapApplication`)
- **No NgModules** — modern Angular functional approach
- **Single component** (`AppComponent`) serves as the entire application — no child components, no routes
- Router is configured but has an **empty routes array** (no routing needed for a single-page landing site)
- ZoneChangeDetection is enabled with **event coalescing** for performance

### Rendering Strategy
- **Client-side rendering (CSR)** — standard Angular SPA
- No SSR / pre-rendering configured
- Vercel handles static hosting of the compiled output at `dist/landing-page-app/browser`

---

## 🎨 Design System

### Color Palette (CSS Custom Properties)

| Token           | Value       | Usage                                      |
|-----------------|-------------|--------------------------------------------|
| `--paper`       | `#f8f6ef`   | Page background (warm off-white)           |
| `--forest`      | `#214c3b`   | Primary brand color (deep green)           |
| `--ink`         | `#2d3930`   | Body text                                  |
| `--muted`       | `#73776d`   | Secondary / descriptive text               |
| `--terracotta`  | `#bf6854`   | Accent color (buttons, highlights, em tags)|
| `--olive`       | `#d6d99c`   | Secondary accent (stamps, borders)         |
| `--line`        | `#e4e1d7`   | Divider / border lines                     |

### Typography

| Token      | Value                                   | Usage           |
|------------|-----------------------------------------|-----------------|
| `--serif`  | `"Playfair Display", Georgia, serif`    | Headings, quotes, decorative text |
| `--sans`   | `"DM Sans", Arial, sans-serif`          | Body text, navigation, UI         |

**Fonts loaded via Google Fonts:**
- `DM Sans` — weights: 400, 500, 600, 700, 800
- `Playfair Display` — italic & regular, weights: 500, 600

### Responsive Breakpoints

| Breakpoint     | Target Devices            | Key Changes                                      |
|----------------|---------------------------|--------------------------------------------------|
| `≤ 1000px`    | Small desktops / tablets  | Reduced padding, smaller font sizes              |
| `≤ 720px`     | Mobile landscape / large  | Single-column layout, nav hidden, stacked sections|
| `≤ 390px`     | Small phones (iPhone SE)  | Tighter padding, smaller fonts                   |
| `prefers-reduced-motion` | Accessibility | All transitions & scroll-behavior disabled      |

---

## 📄 Page Sections

The landing page is structured as a single scrollable document with five key sections:

### 1. 🔝 Header (`.site-header`)
- **Wordmark** — "S" logo + "Sutra Studio" brand mark
- **Navigation** — links to `#craft`, `#services`, `#process`
- **Tagline** — "Made slowly, made for you"
- Nav is **hidden on mobile** (`≤ 720px`)

### 2. 🦸 Hero Section (`#home`)
- Large serif headline: *"Clothes with a little more **you** in them."*
- Description paragraph
- **WhatsApp CTA button** — pre-filled enquiry message link (`wa.me`)
- "Get to know our craft" scroll anchor link
- Decorative note: *"Good clothes hold a story. Let's stitch yours in."*
- Hero art panel with `embroidery-still-life.svg` background, rotated stamp overlay, and image caption

### 3. ✂️ Our Craft Section (`#craft`)
- Section index label: `01 — Our point of view`
- Heading: *"The loveliest things are **never** in a hurry."*
- Philosophy paragraph + handwritten-style italic quote
- Full-width image strip (`embroidery-still-life.svg`) with "Made to be kept / Not just worn" label

### 4. 🪡 Services Section (`#services`) — Dark Panel
- Dark forest green (`--forest`) background
- Section index: `02 — Made by hand`
- Three service cards (grid layout):
  - **01 — Made to measure** — custom tailoring
  - **02 — Hand embroidery** — personal motifs and heirloom work
  - **03 — Thoughtful mending** — repairs and alterations
- Cards have hover interaction (subtle background shift + padding)

### 5. 🧵 The Process Section (`#process`)
- Two-column layout: image left, steps right
- `atelier-hoop.svg` background image
- Section index: `03 — From first thought to final stitch`
- Three numbered steps:
  1. **Tell us your idea** — via WhatsApp
  2. **We plan it together** — fabric, details, finishing
  3. **Made just for you** — hand-stitched and finished

### 6. 💌 Closing / CTA Section (`#enquire`)
- Olive background (`--olive`)
- Centered call-to-action: *"Shall we make something lovely?"*
- Signoff: *"With care, Sutra Studio"*

### 7. 🔚 Footer (`.site-footer`)
- Footer wordmark (links back to `#home`)
- Italic tagline: *"Made slowly, with care."*
- "Back to the beginning ↑" anchor link
- On mobile, the italic tagline is hidden

---

## 🛠️ Tech Stack

| Layer             | Technology                          |
|-------------------|-------------------------------------|
| Framework         | Angular 22                          |
| Language          | TypeScript ~6.0.3                   |
| Styling           | Vanilla CSS (no preprocessor)       |
| Fonts             | Google Fonts (DM Sans, Playfair Display) |
| State Management  | None (static content only)          |
| Routing           | Angular Router (no routes defined)  |
| Change Detection  | Zone.js ~0.16.3                     |
| Reactive          | RxJS ~7.8.0                         |
| Testing           | Karma + Jasmine                     |
| Build Tool        | `@angular-devkit/build-angular`     |
| Deployment        | Vercel                              |

---

## 📦 Dependencies

### Production

| Package                            | Version    | Purpose                        |
|------------------------------------|------------|--------------------------------|
| `@angular/common`                  | ^22.2.2    | Angular core utilities         |
| `@angular/compiler`                | ^22.2.2    | Template compiler              |
| `@angular/core`                    | ^22.2.2    | Core DI / component engine     |
| `@angular/forms`                   | ^22.2.2    | Forms support (included, unused)|
| `@angular/platform-browser`        | ^22.2.2    | DOM rendering                  |
| `@angular/platform-browser-dynamic`| ^22.2.2    | JIT compilation support        |
| `@angular/router`                  | ^22.2.2    | Client-side routing            |
| `rxjs`                             | ~7.8.0     | Reactive programming           |
| `zone.js`                          | ~0.16.3    | Change detection               |
| `tslib`                            | ^2.3.0     | TypeScript runtime helpers     |
| `node`                             | ^26.11.1   | Node.js engine constraint      |

### Development

| Package                          | Version   | Purpose                           |
|----------------------------------|-----------|-----------------------------------|
| `@angular-devkit/build-angular`  | ^22.2.2   | Build tooling                     |
| `@angular/cli`                   | ^22.2.2   | CLI commands                      |
| `@angular/compiler-cli`          | ^22.2.2   | AOT compiler                      |
| `typescript`                     | ~6.0.3    | TypeScript compiler               |
| `@types/jasmine`                 | ~5.1.0    | Jasmine type definitions          |
| `jasmine-core`                   | ~5.6.0    | Testing framework                 |
| `karma`                          | ~6.4.0    | Test runner                       |
| `karma-chrome-launcher`          | ~3.2.0    | Chrome test runner                |
| `karma-coverage`                 | ~2.2.0    | Code coverage                     |
| `karma-jasmine`                  | ~5.1.0    | Karma + Jasmine integration       |
| `karma-jasmine-html-reporter`    | ~2.1.0    | HTML test reports                 |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `^26.11.1`
- npm

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm start
# or
ng serve
```
Runs at `http://localhost:4200/`. The app auto-reloads on file changes.

### Production Build
```bash
npm run build
```
Output: `dist/landing-page-app/browser/`

### Watch Mode (Dev Build)
```bash
npm run watch
```

### Run Tests
```bash
npm test
```

---

## ☁️ Deployment

This project is deployed on **Vercel** using the following configuration ([`vercel.json`](./vercel.json)):

```json
{
  "framework": "angular",
  "buildCommand": "npm run build",
  "outputDirectory": "dist/landing-page-app/browser"
}
```

Push to the connected Git branch to trigger an automatic Vercel deployment.

---

## ♿ Accessibility (A11y)

The template includes thoughtful accessibility considerations:

- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` on landmark elements (nav, header logo, WhatsApp button)
- `aria-labelledby` linking each section heading to its `<section>`
- `aria-hidden="true"` on purely decorative elements (icons, symbols, SVGs)
- `role="img"` on decorative `<div>` image panels with `aria-label` descriptions
- `rel="noopener noreferrer"` on all external links
- `focus-visible` outline (terracotta) on interactive elements
- `prefers-reduced-motion` media query disables all transitions and smooth scroll

---

## ✏️ Notable Design Details

- **WhatsApp CTA**: The enquiry button links to `wa.me` with a pre-filled message — no backend required
- **SVG Illustrations**: Both background images (`embroidery-still-life.svg`, `atelier-hoop.svg`) are inline SVG files in `/public`, served as static assets
- **Decorative stamp**: A rotated circular badge ("Made with intention") overlays the hero image
- **No JavaScript interactions**: The page is entirely static — no Angular logic, no state, no API calls
- **Fluid typography**: `clamp()` used throughout for headings to scale smoothly across viewport widths
- **Offset border effect**: The hero art panel uses a `::before` pseudo-element to create a classic offset border shadow

---

## 📊 Build Budget Thresholds

As configured in `angular.json`:

| Type              | Warning  | Error  |
|-------------------|----------|--------|
| Initial bundle    | 500 kB   | 1 MB   |
| Component styles  | 11 kB    | 12 kB  |

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| [`src/index.html`](./src/index.html) | HTML shell, SEO title & meta description |
| [`src/main.ts`](./src/main.ts) | Bootstrap entry point |
| [`src/styles.css`](./src/styles.css) | Global design tokens, typography, header styles |
| [`src/app/app.component.html`](./src/app/app.component.html) | Full page template (all sections) |
| [`src/app/app.component.css`](./src/app/app.component.css) | All layout & visual styles |
| [`src/app/app.component.ts`](./src/app/app.component.ts) | Root Angular component |
| [`src/app/app.config.ts`](./src/app/app.config.ts) | Angular providers / app config |
| [`angular.json`](./angular.json) | CLI build / serve / test config |
| [`vercel.json`](./vercel.json) | Vercel deployment settings |
| [`public/embroidery-still-life.svg`](./public/embroidery-still-life.svg) | Hero & craft background SVG |
| [`public/atelier-hoop.svg`](./public/atelier-hoop.svg) | Process section background SVG |

---

## 🔍 Observations & Recommendations

### ✅ Strengths
- Clean, modern Angular 22 setup with standalone components
- Excellent use of CSS custom properties for a consistent design system
- Responsive design covers 4 breakpoints including reduced-motion preference
- Good semantic HTML and accessibility attributes
- Lean architecture — no unnecessary dependencies or complexity for a marketing page
- Ready for Vercel deployment out of the box

### ⚠️ Things to Consider
1. **`@angular/forms` is included but unused** — consider removing it from dependencies to reduce bundle size
2. **`@angular/router` is included** but has no routes — if routing is never needed, `provideRouter(routes)` can be removed from `app.config.ts`
3. **No meta OG/Twitter tags** in `index.html` — adding Open Graph tags would improve social media link previews
4. **WhatsApp number is missing** — the `wa.me` URL has no phone number (`https://wa.me/?text=...`). A number should be added: `https://wa.me/91XXXXXXXXXX?text=...`
5. **No favicon as PNG/SVG** — only `favicon.ico` is present; adding a 192×192 and 512×512 PNG would improve PWA/mobile home screen display
6. **No `<link rel="canonical">` tag** — helpful for SEO if the page is accessible via multiple URLs
7. **Tests are skipped by default** for all schematics (`skipTests: true` in `angular.json`) — acceptable for a simple landing page but worth noting

---

*README generated on October 10, 2026.*
