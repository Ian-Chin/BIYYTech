# DESIGN.md

> Generated from `tailwind.config.js`, `src/app/globals.css` and the existing
> components. This documents the system as built.

## Color

Committed monochrome. Ink on paper, one accent used almost nowhere.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B0B0C` | Body text, dark sections, buttons, the mark |
| `ink-soft` | `#16171A` | Long-form prose |
| `ink-mute` | `#5B5F66` | Secondary copy, list items |
| `ink-faint` | `#8A8F98` | Eyebrows, metadata, captions |
| `paper` | `#FFFFFF` | Default surface |
| `paper-warm` | `#F6F6F4` | Alternating section surface |
| `paper-dim` | `#EDEDEA` | Reserved; currently unused |
| `accent` | `#1B4DE4` | Focus rings and the assistant status dot only |

Dark sections invert to `text-white` with `white/55`, `white/45`, `white/35`
for the descending tiers. The rhythm across a page is
paper → paper-warm → ink → paper, never two of the same in a row.

**The accent is not a brand color.** It appears in `:focus-visible` outlines and
one 6px status square. Do not promote it to buttons or links.

## Theme

Light, single theme, no dark mode. The scene: an owner checking the site on a
phone in a bright shop or on a laptop in a back office during trading hours.
Dark surfaces are used as *editorial punctuation* between light sections, not as
a mode.

## Typography

Aeonik, with General Sans bundled as the fallback — `@font-face` lists both
sources per weight so dropping the licensed files into `/public/fonts` upgrades
every weight automatically. Self-hosted, `font-display: swap`, Regular and
Semibold preloaded.

- `.display` — Semibold, `tracking-tightest` (-0.045em), `leading-[1.02]`, with
  `padding-bottom: 0.06em` so descenders clear clipping ancestors.
- Headings — Semibold, `tracking-tighter` (-0.03em), `text-wrap: balance`.
- Body — Regular, `leading-relaxed`, `text-wrap: pretty`.
- `.eyebrow` — 11px, uppercase, `tracking-[0.18em]`, preceded by a 24px rule.
- Numerals and indices — `font-mono`, 10px, `tracking-[0.2em]`.

Sizing is fluid `clamp()` throughout. Display headlines run
`clamp(1.9rem, 4.2vw, 3.25rem)` at section level and up to
`clamp(2.1rem, 5.4vw, 4.25rem)` in the closing CTA.

Measure is held with `max-w-[NNch]` on headlines (17–22ch) and `max-w-xl` /
`max-w-2xl` on body.

## Geometry

**Every radius is 2px.** The Tailwind scale is overridden end to end, `none`
through `full`. This is the single strongest identity decision in the system —
sharp corners everywhere, including on things named `rounded-full`. Borders are
hairline: `border-ink/10` on light, `border-white/15` on dark.

## Layout

`.shell` — `max-w-shell` (1520px), `px-6 md:px-10 xl:px-14`.

Sections run `py-20 md:py-28` for secondary pages and `py-24 md:py-32` for the
homepage. Grids are asymmetric on purpose: `[0.85fr_1.15fr]`,
`[minmax(0,1.35fr)_minmax(0,1fr)]`, `[1.4fr_1fr_1fr_1fr]` — never a plain
even split.

Hairline grids are built with `gap-px` over a `bg-ink/10` parent so the cells
themselves draw the rules.

`HeroFrame` is the signature: every hero opens as an inset card on a paper
surround (26px padding, 10px radius) and unfolds to full bleed as you scroll.

## Motion

One shared rAF loop and one passive scroll listener for the entire page
(`src/components/motion.jsx`). Components subscribe; nothing measures the
document independently.

- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` — exponential ease-out, exposed as
  `--ease-smooth` and the `ease-smooth` Tailwind utility. No bounce, no elastic.
- `Reveal` — 26px rise + fade, 0.9s/1s, optional 10px blur.
- `SplitWords` — per-word rise with `rotateX(-26deg)`, 32–38ms stagger.
- `Parallax` — translate3d only, ±26 to ±62px of travel.
- Hover transitions run 500–700ms; image scale on hover runs 1400ms.
- `prefers-reduced-motion` is honoured in CSS *and* in JS (`prefersReducedMotion()`
  short-circuits Parallax, CountUp and HeroFrame).

## Components

- `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-invert` — 2px "pills",
  `px-6 py-3`, arrows inside translate 3px on hover, `scale(0.965)` on press.
- `.card` — 2px radius, hairline border, lifts 4px with a long soft shadow.
- `.link-underline` — 1px underline that draws in from the left over 0.5s.
- `.noise` — SVG fractal-noise overlay at 0.35 opacity, `mix-blend-mode: overlay`,
  used on every dark hero.
- `Carousel` — native scroll-snap, controls on the *left* so the fixed assistant
  launcher in the bottom-right can never cover them.
- `Mascot` — one CSS blob, morphing border-radius, two-dot face, five states.
  No SVG morphing, no animation library.

## Rules

- Never `#000` or `#fff` for text — use `ink` and `paper` tokens.
- Never introduce a radius other than 2px.
- Never animate layout properties. Transform and opacity only.
- Never add a third-party script, font CDN, or analytics tag.
- Dark sections get `.noise`; light sections never do.
