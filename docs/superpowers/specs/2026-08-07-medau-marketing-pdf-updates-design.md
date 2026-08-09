# Medau Marketing PDF Updates Design

## Goal

Apply the four website updates requested in `1-Medau-marketing-changed-.pdf` while preserving the existing Medau visual system, layout, and responsive behavior.

## Scope

### Center Point Mood Map image

- Use the user-supplied full-resolution `Screen Shot 2026-08-05 at 2.49.24 PM 5.45.08 PM.png` (1393 x 630) as the Due Assessments dashboard screenshot.
- Save it as `public/screenshots/due-assessments.png`.
- Replace the Center Point Mood Map product image reference in `src/components/Products.tsx` with the new asset.
- Update the image alternative text so it accurately describes the Due Assessments interface.
- Do not change the images used by the other product sections.

### Administrator copy

- In the “Less charting, more care” card in `src/components/ProblemSolution.tsx`, replace “Charge nurses” with “Administrators.”
- Preserve the rest of the sentence and the card’s layout.

### Demo CTA copy

- In `src/components/CTA.tsx`, change the heading to: “See how Medau fits your unit”.
- Change the supporting paragraph to: “Book a 30-minute walkthrough tailored to your facility’s workflows, priorities, and care model.”
- Remove the claims about loading a unit’s configuration and “No slides, no fluff.”
- Preserve the CTA badge, buttons, contact details, supporting note, colors, spacing, and responsive layout.

### Alex Au bio

- In `src/components/Team.tsx`, replace Dr. Alex Au’s bio with the exact approved source copy: “Board-certified psychiatrist, innovator, and advocate for mental health. He has a background in clinical informatics from the University of Utah. He is dedicated to innovative technology aimed to address issues in behavioral health.”
- Preserve his name, title, photo, card order, and card presentation.

## Implementation Approach

Use a focused content-and-asset update. Reuse the existing React component structure and Tailwind styling; no component refactors, new dependencies, or design-system changes are required. Use the supplied full-resolution PNG directly so the product screenshot retains its original clarity.

## Verification

- Run `npm run build` to verify TypeScript and the production bundle.
- Run `npm run lint` to verify the edited source files satisfy repository lint rules.
- Inspect the updated page at 375px, 768px, and 1440px widths.
- Confirm the Center Point Mood Map image is sharp and uncropped, the new copy wraps cleanly, and no neighboring section changed unexpectedly.

## Out of Scope

- Changing other product imagery or copy.
- Redesigning any section.
- Changing contact email addresses, links, navigation, animations, or site-wide styles.
- Deploying the website.
