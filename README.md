# Medau Marketing Site

Marketing website for [Medau Health](https://medau.io) — a behavioral health analytics platform built for hospitals and clinics.

## Stack

- **React 19 + TypeScript** — component-based UI
- **Vite 7** — dev server and build tooling
- **Tailwind CSS v4** — CSS-first configuration via `@tailwindcss/vite`
- **Framer Motion** — scroll-triggered fade-in animations
- **Lucide React** — icons
- **nginx** — static file serving in production
- **Fly.io** — deployment (`medau-marketing` app, `sjc` region)

## Project Structure

```
src/
  components/
    Navbar.tsx          # Sticky nav, transparent-on-hero / white-on-scroll
    Hero.tsx            # Full-viewport hero with product screenshot
    ProblemSolution.tsx # 3-column "Why Medau" cards
    Products.tsx        # Alternating product showcase sections
    Trust.tsx           # Compliance & trust badges (dark navy)
    Team.tsx            # Team section
    CTA.tsx             # Final call-to-action
    Footer.tsx          # Nav links, socials, copyright
    AnimatedSection.tsx # Reusable IntersectionObserver fade-in wrapper
  App.tsx
  index.css             # Tailwind v4 import + global styles
public/
  screenshots/          # Product UI screenshots used in the Products section
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0F172A` | Primary background, text |
| Coral | `#E8614D` | Brand accent, all CTAs |
| Warm gray | `#F8F6F3` | Section backgrounds |
| Teal | `#0D9488` | Data/analytics accents |

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output to dist/
npm run preview   # preview production build locally
```

## Deploy

The site runs on Fly.io behind nginx serving the static `dist/` build.

```bash
fly deploy
```

Config: `fly.toml` (256 MB shared VM, port 8080, HTTPS enforced, auto-stop when idle).

## Contact

hello@medau.io
