# Alexandros Hashemakis — Portfolio

A polished, single-page portfolio/CV site with linked case-study pages.
Built with **React + Vite + Tailwind CSS + React Router**. Deploys to Vercel with zero config.

---

## Editing content

**All copy lives in one file:** [`src/content/site.js`](src/content/site.js).
Edit text there without touching any layout code — every section, stat, product,
capability, timeline entry, and case study reads from that file.

Common edits:

| Want to change… | Where |
| --- | --- |
| Any headline / paragraph | `src/content/site.js` |
| Email / LinkedIn / CV links | `contact.links` in `site.js` (marked `PLACEHOLDER`) |
| Case-study body copy | `caseStudyPages` in `site.js` |
| The accent color (whole site) | `--accent` in [`src/index.css`](src/index.css) |

## Adding your assets

Drop these into the **`public/`** folder (filenames matter):

- **`public/portrait.jpg`** — your black-and-white headshot (4:5 portrait crop works best).
  Until it's added, the site shows a tasteful "AH" monogram fallback automatically.
- **`public/og-image.jpg`** — 1200×630 image for link-sharing previews (referenced in `index.html`).
- **`public/Alexandros-Hashemakis-CV.pdf`** — the downloadable CV (linked from Contact).

### Case-study visuals
Each case-study page has clearly-marked image placeholders (cover + per-section).
Replace them by editing [`src/pages/CaseStudy.jsx`](src/pages/CaseStudy.jsx) — swap the
placeholder `<div>`s for `<img>` tags pointing at images you add to `public/`.

## Running locally

Requires Node 18+ (this machine doesn't have it — install from nodejs.org, or just deploy to Vercel).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel → **New Project** → import the repo.
3. Vercel auto-detects Vite. No settings needed — just **Deploy**.

`vercel.json` includes an SPA rewrite so case-study routes (e.g. `/case/turning-stays-around`)
work on direct load and refresh.

## Structure

```
src/
  content/site.js      ← all copy (edit here)
  components/          ← Header, Hero, ProofStrip, WhatIDo, Leadership,
                         Portfolio, CaseStudies, Timeline, About, Contact,
                         Footer, Section, Reveal, Portrait, ScrollManager
  pages/               ← Home, CaseStudy (templated), NotFound
```

## Accessibility & motion

- Semantic HTML, keyboard-focus rings, strong contrast.
- `prefers-reduced-motion` fully respected — scroll reveals, parallax, and smooth
  scrolling all disable for users who ask for reduced motion.
