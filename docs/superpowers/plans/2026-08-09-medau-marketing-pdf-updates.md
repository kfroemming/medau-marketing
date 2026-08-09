# Medau Marketing PDF Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the four approved Medau marketing updates using the supplied full-resolution Due Assessments screenshot.

**Architecture:** Keep the existing single-page React component structure unchanged. Add one static image asset under `public/screenshots/`, update the product data that references it, and replace three isolated copy strings in their existing components.

**Tech Stack:** React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, static PNG assets

## Global Constraints

- Preserve the existing Medau visual system, layout, component structure, animations, links, and responsive behavior.
- Use the supplied 1393 x 630 PNG directly as `public/screenshots/due-assessments.png`.
- Use the approved CTA heading and body verbatim.
- Use the supplied Alex Au bio verbatim.
- Do not add dependencies, refactor components, redesign sections, change contact details, or deploy.

---

### Task 1: Apply and verify the approved marketing updates

**Files:**
- Create: `public/screenshots/due-assessments.png`
- Modify: `src/components/Products.tsx`
- Modify: `src/components/ProblemSolution.tsx`
- Modify: `src/components/CTA.tsx`
- Modify: `src/components/Team.tsx`

**Interfaces:**
- Consumes: Vite public asset path `/screenshots/due-assessments.png` and the existing component-local data objects.
- Produces: Updated static marketing content rendered through the unchanged `Products`, `ProblemSolution`, `CTA`, and `Team` component exports.

- [x] **Step 1: Run desired-state checks and confirm they fail before implementation**

```bash
test -f public/screenshots/due-assessments.png
rg -F "image: '/screenshots/due-assessments.png'" src/components/Products.tsx
rg -F "Administrators stop wrestling with paper logs." src/components/ProblemSolution.tsx
rg -F "See how Medau fits your unit" src/components/CTA.tsx
rg -F "Book a 30-minute walkthrough tailored to your facility’s workflows, priorities, and care model." src/components/CTA.tsx
rg -F "Board-certified psychiatrist, innovator, and advocate for mental health." src/components/Team.tsx
```

Expected: At least the first command fails because the new image has not been added, and the later searches find none of the complete desired-state strings.

- [x] **Step 2: Add the exact supplied PNG asset**

Copy `/Users/karstenfroemming/Downloads/Screen Shot 2026-08-05 at 2.49.24 PM 5.45.08 PM.png` byte-for-byte to `public/screenshots/due-assessments.png`. Verify it remains a 1393 x 630 PNG:

```bash
cmp '/Users/karstenfroemming/Downloads/Screen Shot 2026-08-05 at 2.49.24 PM 5.45.08 PM.png' public/screenshots/due-assessments.png
sips -g pixelWidth -g pixelHeight public/screenshots/due-assessments.png
```

Expected: `cmp` exits 0, and `sips` reports `pixelWidth: 1393` and `pixelHeight: 630`.

- [x] **Step 3: Update product imagery and approved copy**

In `src/components/Products.tsx`, set the Center Point Mood Map product fields to:

```ts
image: '/screenshots/due-assessments.png',
imageAlt: 'Due Assessments dashboard showing scheduled mood assessments by patient',
```

In `src/components/ProblemSolution.tsx`, set the “Less charting, more care” description to:

```ts
'Administrators stop wrestling with paper logs. Digital check-ins auto-populate — accurate, timestamped, done.',
```

In `src/components/CTA.tsx`, use:

```tsx
<h2>See how Medau fits your unit</h2>
<p>Book a 30-minute walkthrough tailored to your facility’s workflows, priorities, and care model.</p>
```

Keep the existing JSX class names on both elements.

In `src/components/Team.tsx`, set Alex Au’s bio to:

```ts
bio: 'Board-certified psychiatrist, innovator, and advocate for mental health. He has a background in clinical informatics from the University of Utah. He is dedicated to innovative technology aimed to address issues in behavioral health.',
```

- [x] **Step 4: Run source, asset, build, and lint verification**

```bash
test -f public/screenshots/due-assessments.png
cmp '/Users/karstenfroemming/Downloads/Screen Shot 2026-08-05 at 2.49.24 PM 5.45.08 PM.png' public/screenshots/due-assessments.png
rg -F "image: '/screenshots/due-assessments.png'" src/components/Products.tsx
rg -F "Administrators stop wrestling with paper logs." src/components/ProblemSolution.tsx
rg -F "See how Medau fits your unit" src/components/CTA.tsx
rg -F "Book a 30-minute walkthrough tailored to your facility’s workflows, priorities, and care model." src/components/CTA.tsx
rg -F "Board-certified psychiatrist, innovator, and advocate for mental health." src/components/Team.tsx
npm run build
npm run lint
```

Expected: Every source and asset assertion exits 0; the build and lint commands complete successfully.

- [x] **Step 5: Perform responsive visual QA**

Run the Vite development server and inspect the page at 375px, 768px, and 1440px widths. Confirm:

- The full Due Assessments screenshot appears inside the existing browser frame without clipping or distortion.
- The administrator sentence wraps within its card without overflow.
- The CTA heading and paragraph remain centered and readable.
- Alex Au’s bio fits the existing card without overlap or truncation.
- No neighboring section or product image changed unexpectedly.

- [x] **Step 6: Commit the implementation**

```bash
git add public/screenshots/due-assessments.png src/components/Products.tsx src/components/ProblemSolution.tsx src/components/CTA.tsx src/components/Team.tsx docs/superpowers/plans/2026-08-09-medau-marketing-pdf-updates.md
git commit -m "feat: apply requested marketing updates"
```
