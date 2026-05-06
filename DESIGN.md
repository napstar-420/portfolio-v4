---
version: alpha
name: Zohaib Portfolio
description: A clean, minimal developer portfolio for a full-stack MERN engineer. The design communicates technical credibility and precision — no noise, no decoration, just content.
colors:
  primary: "#0A0A0A"
  secondary: "#6B7280"
  tertiary: "#111827"
  neutral: "#F9FAFB"
  surface: "#FFFFFF"
  border: "#E5E7EB"
  border-subtle: "#F3F4F6"
  accent: "#2563EB"
  accent-muted: "#EFF6FF"
  success: "#16A34A"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.03em
  h2:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.01em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  2xl: 80px
components:
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    padding: 24px 48px
  nav-link-hover:
    textColor: "{colors.primary}"
  nav-cta:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 8px 18px
  nav-cta-hover:
    backgroundColor: "{colors.border-subtle}"
  badge-available:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 10px 22px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
  button-ghost-hover:
    textColor: "{colors.primary}"
  tech-tag:
    backgroundColor: "{colors.border-subtle}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 4px 10px
  section-divider:
    backgroundColor: "{colors.border}"
    height: 1px
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  project-card-hover:
    backgroundColor: "{colors.border-subtle}"
  skill-category:
    backgroundColor: "{colors.border-subtle}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  experience-entry:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    padding: 32px 0
  contact-link:
    backgroundColor: "{colors.border-subtle}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  contact-link-hover:
    backgroundColor: "{colors.border}"
  stat-value:
    textColor: "{colors.primary}"
  stat-label:
    textColor: "{colors.secondary}"

## Overview

Architectural minimalism for a technical audience. The portfolio of Zohaib — a full-stack MERN developer based in Lahore — communicates precision and confidence through restraint. No hero images, no gradients, no decorative flourishes. The design trusts the work to speak.

The aesthetic is drawn from high-end editorial and developer tooling: tight typography, generous whitespace, hairline borders, and a single accent color used sparingly for interactive states only. Every layout decision should reinforce the impression of someone who writes clean, deliberate code.

The site is a single-page portfolio with five sections: Hero, Skills, Projects, Experience, and Contact. Navigation is sticky at the top. Sections are separated by horizontal rules, not cards or boxes.

## Colors

The palette is built on near-black and warm grays, with a white surface and a single blue accent. Color is not used decoratively — only to communicate state or availability.

- **Primary (#0A0A0A):** Near-black for all headings and critical text. Slightly warmer than pure black.
- **Secondary (#6B7280):** Mid gray for body text, captions, labels, and nav links. The default text color for anything that isn't a heading or CTA.
- **Tertiary (#111827):** Dark ink used for button hover states.
- **Neutral (#F9FAFB):** The page background — a barely-there warm off-white. Not pure white.
- **Surface (#FFFFFF):** Pure white for cards and elevated elements.
- **Border (#E5E7EB):** Hairline dividers and card borders. Always 1px, never thicker.
- **Border-subtle (#F3F4F6):** Background for tags, chips, hover states — the lightest possible surface treatment.
- **Accent (#2563EB):** Blue, used only for: the "available" badge, link hover states, and focus rings. Never use for decoration.
- **Accent-muted (#EFF6FF):** The background fill for the availability badge only.
- **Success (#16A34A):** The dot inside the availability badge only.

## Typography

All type is set in Inter (sans-serif) except for inline code which uses JetBrains Mono. Inter should be loaded from Google Fonts at weights 400 and 500 only — do not load 600 or 700.

Headings use negative letter-spacing to feel editorial. Body text uses generous line-height for readability. All labels are 12px/500 — never uppercase, never tracked out.

The hero h1 is the largest type on the page at 3rem/500. It should be set across 2–3 lines, with a line of secondary-colored text (the "filler" phrase) sandwiched between two primary-colored lines to create visual rhythm. Example:

```
Full-stack developer        ← primary color
building things that        ← secondary color
actually ship.              ← primary color
```

## Layout

The layout is a single centered column with a max-width of 1100px and horizontal padding of 48px on desktop, 24px on mobile. There is no sidebar.

**Navigation:** Fixed/sticky at top. Logo (first name + period) on the left. Nav links (Work, Skills, Experience) in the center. A ghost CTA button ("Get in touch") on the right. Border-bottom hairline separates it from content. Height: ~72px.

**Hero section:** Left-aligned text block, max-width 720px. Top-to-bottom: availability badge → h1 (3 lines) → body paragraph (1–2 sentences) → two CTAs side by side → stats row → tech stack tags → scroll hint. Bottom padding 72px. No right-side column or image.

**Skills section:** Section label + h2 heading, then a grid of skill category cards. 3 columns on desktop, 2 on tablet, 1 on mobile. Each card has a category title and a list of skills as inline text (comma-separated), not bullet points.

**Projects section:** Section label + h2 heading, then a 2-column card grid on desktop, 1-column on mobile. Each project card contains: project title, one-line description, a row of tech tags, and a row of icon links (GitHub, live demo). Cards have a subtle hover state (background shifts to border-subtle).

**Experience section:** Section label + h2 heading, then a vertical timeline list. Each entry: role title (h3) + company + date range on one line, then 2–3 bullet points of impact. Entries are separated by a hairline border. No timeline dots or decorative connectors.

**Contact section:** Centered. Short headline + one sentence. Then a row of 3–4 contact link buttons (Email, GitHub, LinkedIn, Resume). Section has generous top and bottom padding. This is the footer — no separate footer element needed.

## Elevation & Depth

There are no shadows anywhere in this design. Depth is communicated through background color contrast alone:

- Page background: neutral (#F9FAFB)
- Cards and nav: surface (#FFFFFF)
- Tags, hover states: border-subtle (#F3F4F6)

Do not add `box-shadow` to any element. The only exception permitted is a `box-shadow: 0 0 0 3px` focus ring in accent blue on interactive elements for accessibility.

## Shapes

Minimal rounding throughout. Cards use `rounded.lg` (12px). Buttons and tags use `rounded.md` (8px). The availability badge uses `rounded.full` (pill shape). Dividers are always sharp (0px radius).

## Components

**Availability badge:** A pill-shaped badge near the top of the hero. Contains a small green dot (6px circle, success color) followed by "Available for new opportunities" in label type. Background accent-muted, text accent.

**Primary button:** Filled, near-black background, white text, 8px radius. Used for the main hero CTA ("View my work"). On hover, background shifts to tertiary.

**Ghost/text button:** No background, no border. Secondary text color with a trailing arrow icon. Used for secondary CTAs ("Download CV →"). On hover, text shifts to primary.

**Tech tag:** Small pill with border-subtle background and secondary text. 8px radius, 4px/10px padding. Used in the hero stack row and on project cards. Not interactive.

**Project card:** White surface card with 1px border, 12px radius, 24px padding. On hover, background shifts to border-subtle. Contains: title (h3), description (body-sm, secondary color), tech tags row, and links row.

**Stat block:** Three stats side by side in the hero. Each has a large number (22px/500, primary) and a label below (13px, secondary/tertiary). Separated by generous horizontal spacing, not borders.

**Experience entry:** No card wrapper. Role and company in h3, date range in label type (secondary). Bullet points as standard `<ul>` with 2–3 items max. Each entry separated from the next by a hairline top border.

**Section label:** A small all-lowercase label (12px/500, secondary color) sits above each section's h2 as a category indicator. Example: "what i've built" above Projects, "where i've worked" above Experience.

## Do's and Don'ts

**Do:**
- Use whitespace generously — sections should breathe, not stack tightly.
- Keep the accent blue to availability badge, focus rings, and link hover only.
- Use the hero h1 across exactly 3 lines with the middle line in secondary color.
- Keep project descriptions to a single sentence — let the tech tags do the rest.
- Use `font-weight: 500` for all headings and labels — never 600 or 700.
- Load Inter from Google Fonts: `?family=Inter:wght@400;500` only.

**Don't:**
- Don't add gradients, shadows, blur, or any decorative background effects.
- Don't use images anywhere — no avatar, no project screenshots, no icons beyond Tabler outline icons.
- Don't use uppercase or tracked-out letter-spacing on labels.
- Don't use more than two colors in close proximity — the palette only works through restraint.
- Don't add animations or transitions except a simple `color 0.15s ease` on hover states.
- Don't use `font-weight: 700` or `bold` anywhere in the design.
