# CLAUDE.md — Medau Marketing Site

Marketing website for [Medau Health](https://medau.io), a behavioral health analytics platform for hospitals and inpatient psychiatric units.

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js`) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Server | nginx (static file serving) |
| Hosting | Fly.io (`medau-marketing` app, `sjc` region) |

## Project Structure

```
src/
  components/
    Navbar.tsx          # Sticky nav — transparent over hero, white bg on scroll
    Hero.tsx            # Full-viewport hero, product screenshot in browser frame
    ProblemSolution.tsx # 3-column "What changes when your unit runs on Medau"
    Products.tsx        # Alternating image/text product showcase
    Team.tsx            # Photo cards for leadership + team
    Trust.tsx           # Compliance badges on dark navy bg
    CTA.tsx             # Contact section (coral gradient)
    Footer.tsx          # Nav links, socials, copyright
    AnimatedSection.tsx # Reusable scroll-triggered fade-in wrapper
  App.tsx               # Renders sections in order, no router
  index.css             # Tailwind v4 import + @theme tokens + global styles
  main.tsx              # React root mount
public/
  screenshots/          # Product UI screenshots (dashboard, safety-check, assessments, points)
  team/                 # Headshots: alex-au.jpg, jon-froemming.jpg, etc.
  favicon.png           # Orange origami bird logo
docs/
  copy-audit.md         # Copywriting decisions and rationale for all sections
```

## Design Tokens

Defined in `src/index.css` under `@theme {}` — these become Tailwind utility classes (`bg-navy`, `text-coral`, etc.).

| Token | CSS variable | Hex | Usage |
|-------|-------------|-----|-------|
| Navy | `--color-navy` | `#0F172A` | Primary text and dark backgrounds |
| Navy light | `--color-navy-light` | `#1E293B` | Secondary dark surfaces |
| Coral | `--color-coral` | `#E8614D` | Brand accent — **all CTAs use coral** |
| Coral dark | `--color-coral-dark` | `#D4503E` | Coral hover state |
| Surface | `--color-surface` | `#F8F6F3` | Warm gray section backgrounds |
| Teal | `--color-teal` | `#0D9488` | Data/analytics accents, checkmarks |
| White | `--color-white` | `#FFFFFF` | Card backgrounds |

Font: Inter (loaded via Google Fonts in `index.html`).

## Tailwind v4 — Important Differences

This project uses Tailwind v4, which differs significantly from v3:

- **No `tailwind.config.js`** — configuration is done in CSS via `@theme {}` in `src/index.css`
- Import is `@import "tailwindcss";` not `@tailwind base; @tailwind components; @tailwind utilities;`
- The `@tailwindcss/vite` plugin handles everything — no PostCSS config needed
- Custom color tokens defined in `@theme {}` automatically generate utilities like `bg-coral`, `text-navy`, `border-teal`

## Component Conventions

### AnimatedSection

Every content block that should animate on scroll should be wrapped in `<AnimatedSection>`. It uses Framer Motion's `whileInView` with `viewport={{ once: true }}` so animations only fire once.

```tsx
import { AnimatedSection } from './AnimatedSection'

<AnimatedSection delay={0.1}>
  {/* content */}
</AnimatedSection>
```

- Default: `opacity: 0, y: 32` → `opacity: 1, y: 0` over 600ms
- Use `delay` (seconds) to stagger sibling elements
- The `margin: '-80px'` viewport setting triggers 80px before the element enters view

### Hero Animations

The Hero component uses direct `motion.div` with `animate` (not `whileInView`) because it's above the fold and plays on load. Other sections use `AnimatedSection`.

### Products — Alternating Layout

`Products.tsx` uses CSS `direction: rtl` on odd-indexed items to reverse the image/text order without duplicating markup. The inner content always resets `direction: ltr` to keep text readable.

### Navbar Scroll Behavior

`Navbar.tsx` listens to `window.scroll` and sets `scrolled` state at `scrollY > 40px`. Below that threshold: transparent background. Above: `bg-white/95 backdrop-blur-md`.

## Section Anchor IDs

| Section | ID |
|---------|----|
| Products | `#products` |
| Team | `#team` |
| Trust/About | `#trust` |
| CTA/Contact | `#contact` |

Nav links and internal `href` attributes must use these IDs. `scroll-behavior: smooth` is set globally in `index.css`.

## Copywriting Conventions

The full rationale for all copy decisions is in `docs/copy-audit.md`. Key rules:

- **Audience**: Hospital administrators, clinical directors, behavioral health program managers — skeptical, outcomes-focused
- **Avoid generic SaaS language**: "powered by data," "actionable insights," "refuse to settle," "complete toolkit"
- **Use behavioral health specificity**: "inpatient units," "observation levels," "treatment teams," "bedside," "charge nurses"
- **Don't fabricate metrics** — the Trust section intentionally has no statistics (see comment in `Trust.tsx`)
- The "Built by X. Y by Z." sentence pattern was already used in the hero badge and trust heading — avoid repeating it a third time

## Public Assets

All images are served from `/public/` — no import needed, just use paths like `/screenshots/dashboard.png`.

| Path | Used in |
|------|---------|
| `/screenshots/dashboard.png` | Hero browser frame |
| `/screenshots/safety-check.png` | Products: Safety Monitoring |
| `/screenshots/assessments.png` | Products: Center Point Mood Map |
| `/screenshots/points.png` | Products: Point System |
| `/team/*.jpg` / `/team/*.png` | Team section photo cards |
| `/favicon.png` | Navbar logo, Footer logo, browser tab |

## Development

```bash
npm install
npm run dev       # Vite dev server at http://localhost:5173
npm run build     # TypeScript check + Vite build → dist/
npm run preview   # Serve dist/ locally
npm run lint      # ESLint with typescript-eslint
```

No test suite exists. Type checking (`tsc -b`) runs as part of `npm run build`.

## Deployment

**Production flow:**

1. Push to `main` → GitHub Actions runs `.github/workflows/deploy.yml`
2. Workflow: `npm ci` → `npm run build` → `flyctl deploy --remote-only`
3. Fly.io builds the Docker image (`Dockerfile`): nginx:alpine + `nginx.conf` + `dist/`
4. nginx serves on port 8080; Fly.io enforces HTTPS and auto-stops idle machines

**Manual deploy:**
```bash
npm run build
fly deploy
```

**Fly.io config** (`fly.toml`): 256 MB shared VM, `sjc` region, auto-stop when idle, `force_https: true`.

**nginx config** (`nginx.conf`): SPA fallback (`try_files $uri /index.html`), 1-year cache on `/assets/`, gzip enabled.

`FLY_API_TOKEN` must be set as a GitHub Actions secret for CI deployment to work.

## Contact

- Site contact / demo requests: `team@medau.io`
- Brand contact: `hello@medau.io`
