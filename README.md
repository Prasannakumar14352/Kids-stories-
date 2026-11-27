# 50 Kids Stories Mega Bundle — Landing Page

A single-page, high-conversion sales landing page for the "50 Kids Stories Mega
Bundle" digital product. Fully static — no backend, no database, no auth. Every
CTA links out to an external checkout URL. Styled in the ProdX Store brand:
black backgrounds, orange gradient accents.

Stack: **Vite + React + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a fully static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Where to paste your links

### 1. Checkout URL

Open `src/constants.ts` and replace the placeholder with your Gumroad /
SuperProfile checkout link:

```ts
export const CHECKOUT_URL = "CHECKOUT_URL"; // ← paste your real link here
```

Every "Buy" / CTA button on the page (header, hero, value stack, pricing card,
final banner, sticky mobile bar) reads from this single constant and opens it
in a new tab.

### 2. Meta Pixel ID (optional)

Open `index.html` and find:

```html
window.META_PIXEL_ID = "META_PIXEL_ID";
```

Replace `"META_PIXEL_ID"` with your real Pixel ID. If you leave it empty
(`""`) or as the placeholder, the pixel script simply never fires — no
console errors, no broken requests.

When a real ID is set, the page:
- Fires `PageView` automatically on load.
- Fires `Lead` or `InitiateCheckout` (see `pixelEvent` prop per button in the
  source) whenever a visitor clicks any checkout CTA.

## Project structure

```
index.html                 Meta Pixel snippet + fonts + page shell
src/
  main.tsx                 App entry point
  App.tsx                  Assembles all sections in order
  constants.ts             CHECKOUT_URL + product copy constants
  index.css                Tailwind entry + smooth-scroll
  lib/pixel.ts              trackPixelEvent() helper (safe no-op if no Pixel ID)
  components/
    PromoBar.tsx             Slim orange launch-price announcement bar
    Header.tsx              Sticky dark header w/ desktop nav + mobile compact CTA
    Hero.tsx                 Above-the-fold hero + price anchor
    TrustStrip.tsx           Quick badge row
    ProblemSolution.tsx      Problem → solution section
    ValueStack.tsx           "What's inside" card grid + CTA
    SamplePreview.tsx        Sample page gallery (swipeable on mobile)
    WhyParents.tsx           3-column benefits
    Testimonials.tsx         Parent quotes + star ratings
    PricingCard.tsx          Dark pricing "close" card
    Guarantee.tsx            7-day guarantee blurb
    Faq.tsx                  Accordion FAQ
    FinalCta.tsx             Orange gradient closing banner
    Footer.tsx               Logo, tagline, links
    StickyMobileCta.tsx      Fixed bottom bar, mobile only
    CtaButton.tsx            Shared CTA link (handles target/rel + pixel event)
    Divider.tsx              Thin orange divider + dot (brand accent)
    FadeIn.tsx               IntersectionObserver-based scroll fade-in
scripts/
  gen-placeholders.mjs      One-off script that generated the placeholder PNGs
```

## Logo

`public/logo.svg` (full lockup with tagline, used in the footer) and
`public/logo-compact.svg` (wordmark only, used in the sticky header where
there isn't room for the tagline to stay legible) are a hand-built SVG
recreation of the ProdX Store logo — black/white/orange wordmark, orange "X",
thin gradient underline with a dot, uppercase tagline. If you have the exact
source logo file, drop it in as `public/logo.svg` and `public/logo-compact.svg`
(same filenames, any raster or vector format works) — no code changes needed.

## Placeholder images

`public/hero-mockup.png` and `public/sample-1.png` through `sample-6.png` are
simple generated placeholders so the project runs and looks structured out of
the box. Swap them with your real hero mockup and sample story pages — keep
the same filenames and the page needs no code changes. Recommended sizes:

- `hero-mockup.png` — ~900×700, product/stack mockup
- `sample-1.png` … `sample-6.png` — ~640×800 (portrait, 4:5), story page previews

## Deploy

This is a static site — deploy the contents of `dist/` anywhere:

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

**Vercel**
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages**
- Run `npm run build`, then publish the `dist/` folder (e.g. via the
  `gh-pages` package or a GitHub Actions workflow that uploads `dist/` as a
  Pages artifact).

## Notes

- No forms, no cart, no server code — the only conversion action is clicking
  a CTA, which opens `CHECKOUT_URL` in a new tab.
- Images use `loading="lazy"` (except the hero image) and there are no heavy
  libraries or autoplaying video, keeping the page fast on mobile data.
- Legal copy (Terms, Refund Policy) in the footer are placeholder `#` anchors
  — link them to real pages before launch.
