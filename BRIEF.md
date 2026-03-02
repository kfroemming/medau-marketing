# Medau Marketing Site — Build Brief

## Brand
- **Company:** Medau Health (medau.io)
- **What:** Behavioral health analytics platform for hospitals & clinics
- **Tagline:** "Advanced Behavioral Health Analytics"
- **Built by physicians, HIPAA-compliant**
- **Logo:** Orange origami bird icon. Use text "Medau" with a stylized mark.

## Design System
- **Primary:** Deep navy `#0F172A` — trust, authority
- **Accent/CTA:** Warm coral/orange `#E8614D` — the Medau brand color, ALL CTAs use this
- **Surface:** Soft warm gray `#F8F6F3` — approachable, not clinical
- **Teal:** `#0D9488` — data/analytics accent moments
- **Cards:** White with subtle shadow on soft backgrounds
- **Typography:** Inter (import from Google Fonts) — modern, clean
- **Style:** Clean, warm, confident. Stripe meets Calm. NO stock photos. NO generic healthcare imagery.
- **Animations:** Subtle fade-in on scroll using framer-motion. Not overdone.

## Tech Stack (already scaffolded)
- React + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite plugin) 
- Lucide React for icons
- Framer Motion for animations
- Single page app, no router needed

## Tailwind v4 Setup
In vite.config.ts, add the tailwind plugin:
```ts
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
In src/index.css, use:
```css
@import "tailwindcss";
```
NO tailwind.config.js needed — Tailwind v4 uses CSS-based config.

## Page Sections (top to bottom)

### 1. Navbar (sticky)
- Logo left ("Medau" text + small icon)
- Links: Products, About, Contact
- CTA button right: "Request a Demo" (coral/orange)
- Transparent on hero, white bg on scroll

### 2. Hero (full viewport height)
- **Left side:**
  - Small pill badge: "Built by Physicians • HIPAA Compliant"
  - H1: "Smarter behavioral health care, powered by data"
  - Subtitle: "Turn daily check-ins into actionable clinical insights. Real-time monitoring, mood analytics, and patient engagement — built for facilities that refuse to settle."
  - Two buttons: "Request a Demo" (coral filled) + "See Products" (outline)
- **Right side:**
  - Floating product UI mockup — use the dashboard screenshot from /screenshots/dashboard.png in a browser-frame style container with rounded corners and shadow
- **Background:** Very subtle gradient from white to warm gray, maybe a faint grid pattern

### 3. Problem/Solution (3 columns)
- Heading: "Why facilities choose Medau"
- Three cards with icons (from lucide-react):
  1. **Icon: ClipboardCheck** — "Reduce Documentation Burden" / "Smart automation cuts paperwork while improving accuracy. Your staff spends time on care, not clipboards."
  2. **Icon: BarChart3** — "See the Full Picture" / "Unified analytics across mood, safety, and behavior. Spot trends before they become crises."  
  3. **Icon: Users** — "Personalized Patient Care" / "No two patients are alike. Our tools adapt to individual patterns and needs."

### 4. Products Section
- Section heading: "A complete behavioral health toolkit"
- Three product blocks, alternating left/right layout:

**Product 1: Center Point Mood Map**
- Screenshot: /screenshots/assessments.png  
- Title: "Center Point Mood Map"
- Description: "Visualize emotional and behavioral patterns over time. Track mood, energy, and mental focus — then transform check-ins into meaningful clinical insights with automated summaries."
- 3 feature bullets with checkmark icons:
  - "Interactive mood trend visualization"
  - "Automated summaries tied to diagnostic data"  
  - "Real-time alerting for significant changes"

**Product 2: In-Patient Safety Monitoring**
- Screenshot: /screenshots/safety-check.png
- Title: "In-Patient Safety Monitoring"  
- Description: "Transform routine safety checks into real-time care insights. Digital observation with smart automation, custom alerting, and seamless facility workflows."
- 3 bullets:
  - "Configurable observation levels and intervals"
  - "Overdue alerts and escalation tracking"
  - "Mobile-friendly for bedside documentation"

**Product 3: Patient Point System**
- Screenshot: /screenshots/points.png
- Title: "Patient Point System & Token Economy"
- Description: "Motivate patients with a rewards-based system that drives engagement and simplifies operations. Track, reward, and empower — all in one platform."
- 3 bullets:
  - "Automated point tracking and redemption"
  - "Customizable reward tiers per facility"
  - "Real-time engagement analytics"

### 5. Trust / Compliance Section
- Dark navy background
- Heading: "Built for healthcare. Trusted by facilities."
- Grid of trust badges/items:
  - HIPAA Compliant (Shield icon)
  - Built by Physicians (Stethoscope icon)
  - EMR Integration Ready (Plug icon)
  - Real-time Analytics (Activity icon)
  - SOC 2 Compliant (Lock icon)
  - 24/7 Support (Headphones icon)

### 6. CTA Section  
- Warm gradient background (coral to orange, subtle)
- Heading: "Ready to transform your facility's behavioral health program?"
- Subtitle: "Join forward-thinking facilities using Medau to deliver better, data-driven care."
- Large "Schedule a Demo" button (white on coral)
- Below: "Or email us at hello@medau.io"

### 7. Footer
- Navy background
- Logo + tagline
- Links: Products, About, Contact, Privacy Policy, Terms of Service
- "© 2026 Medau Health. All rights reserved."
- Social icons (placeholder hrefs)

## Important Notes
- All product screenshots exist in /public/screenshots/ — use them as <img> tags
- Make it look PREMIUM — this is a B2B healthcare product selling to hospital administrators
- Mobile responsive — test at 375px, 768px, 1440px
- Smooth scroll for anchor links
- Every section should have good vertical padding/breathing room
- Use framer-motion for fade-in-up animations on scroll (IntersectionObserver pattern)
- The coral/orange CTA color should POP against the otherwise muted palette

When completely finished, run this command to notify me:
openclaw system event --text "Done: Built Medau marketing site — all sections complete, responsive, animated" --mode now
