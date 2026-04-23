# Design Brief

## Direction

The Real Realty — Premium emerald-and-gold real estate advisory consulting website for South Bopal, Ahmedabad. Positioning luxury trust and authority through restrained elegance, not flashy listing aggregation.

## Tone

Refined luxury minimalism — calm, authoritative, high-trust aesthetic inspired by premium consulting (Stripe + Linear applied to real estate advisory). Soft cream with emerald dominance and gold accents.

## Differentiation

Consulting-first positioning eliminates property-listing noise; emerald-gold color system + scroll reveals + gold underline hover effects create distinctive, unforgettable advisory experience.

## Color Palette

| Token            | OKLCH           | Role                                    |
| ---------------- | --------------- | --------------------------------------- |
| background       | 0.97 0.01 80    | Soft cream base, warm and inviting       |
| foreground       | 0.08 0.02 160   | Charcoal text, deep contrast            |
| primary          | 0.25 0.15 160   | Deep emerald, authority and trust       |
| accent           | 0.65 0.12 75    | Rich gold, premium highlights           |
| secondary        | 0.18 0.08 160   | Dark forest, section headers            |
| muted            | 0.92 0.01 80    | Light cream, subtle backgrounds         |
| card             | 1.0 0.005 80    | Pure white for elevated cards           |
| destructive      | 0.55 0.22 25    | Red for alerts (minimal use)            |

## Typography

- Display: Instrument Serif (italic) — prestige headings, hero text, section titles
- Body: General Sans — clear, refined body copy, UI labels, forms
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold tracking-tighter`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

White cards on cream with minimal shadows (no drop-shadow, only subtle insets); emerald sections have zero shadow; gold accents float via underline hover, no glow or blur effects.

## Structural Zones

| Zone    | Background                  | Border            | Notes                                      |
| ------- | --------------------------- | ----------------- | ------------------------------------------ |
| Header  | `bg-primary` (emerald)      | none              | Gold text, consultation CTA                |
| Hero    | `bg-primary` + grain layer  | none              | Animated texture, full-viewport            |
| Content | `bg-background` (cream)     | —                 | Alternating `bg-muted` every other section |
| Cards   | `bg-card` (white)           | minimal (1px)     | 8px radiuses, cream border                 |
| Footer  | `bg-secondary` (dark)       | `border-t`        | Gold typography, location emphasis        |

## Spacing & Rhythm

Spacious 32px–48px section gaps; 16px–24px card padding; 8px micro-spacing for typography. Cream backgrounds breathe; emerald sections feel solid and grounded.

## Component Patterns

- Buttons: `bg-accent text-secondary`, 8px radius, `underline-accent` hover effect, gold on emerald / dark on cream
- Cards: 8px radiuses, white on cream, minimal 1px cream border, no shadow
- Badges: small caps, gold text on cream bg, or white text on emerald bg
- Consultation form: cream bg, emerald inputs, gold submit, clear progressive disclosure

## Motion

- Entrance: scroll-reveal (fade + translateY), 700ms ease-out; hero grain subtle animated loop (2–3% position shift)
- Hover: underline-accent gold expansion (300ms), text-accent transition
- Decorative: no bounces, no spins; only fades and line animations; WhatsApp and action bar subtle fade-in on load

## Constraints

- Never use raw hex, rgb(), or arbitrary colors; OKLCH tokens only
- No aggressive CTAs, no popup overlays, no email capture forms (consultation only)
- Emerald primacy on mobile sticky action bar; WhatsApp floating button with gold accent
- All fonts via bundled .woff2 (Instrument Serif + General Sans); no system fallbacks

## Signature Detail

Emerald-to-gold gradient underline hover on CTA links: a simple, refined interaction that signals luxury interactivity without breaking the calm aesthetic.
