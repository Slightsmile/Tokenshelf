# TokenShelf Design System

## Visual Theme

A person researching free AI access on a laptop during the day needs a calm, bright interface that makes comparison easy. Use softly tinted light surfaces, crisp typography, a restrained blue accent, and generous but purposeful spacing.

## Color Strategy

Restrained: neutral page and card surfaces, blue for primary actions and selected states. Provider marks may use muted individual colors.

- Page: `oklch(0.985 0.003 255)`
- Surface: `oklch(0.998 0.002 255)`
- Ink: `oklch(0.25 0.02 255)`
- Secondary text: `oklch(0.49 0.018 255)`
- Borders: `oklch(0.91 0.009 255)`
- Accent: `oklch(0.53 0.19 260)`
- Hero: `oklch(0.96 0.017 255)`

## Typography

One modern sans-serif family with a native system fallback. Clear weight contrast, readable 14–16px body text, and compact labels. A 60px desktop hero heading is separate from the 32px page heading and 24px section heading. Monospace is reserved for redeem codes and API addresses.

## Layout

Content width up to 1120px. A compact shared header. Homepage: spacious hero with a visual stack of real offer passes, three featured offers, a compact recently checked list, category navigation, and a small submission call to action. Detail pages: primary reading column and a narrower factual sidebar. Mobile collapses structurally into one column.

## Components

- Rounded, clearly labeled buttons with consistent hover and focus states.
- Offer cards show provider, reward, a short description, and a details link.
- Compact offer rows for larger collections.
- Search and explicit category filters with live result counts.
- Persistent bookmarks shared between all pages.
- Numbered claim steps, copyable codes, and linked sources on detail pages.

## Motion

Motion should make the quiet interface feel responsive and alive. Use a short, lightly staggered hero entrance and one-time scroll reveals for homepage content. Keep hover and press feedback at 160–240ms with a strong ease-out curve. The hero offer shelf can follow a fine mouse pointer with a small tilt, and featured cards can lift a few pixels. Animate transforms and opacity, not layout. Keep all content visible without JavaScript, stop motion for reduced-motion preferences, and avoid moving keyboard-focused controls. No perpetual decorative loops.
