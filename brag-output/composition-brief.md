# Hyperframes Composition Brief: BIYY Tech

## Objective

A 23-second launch-style brag video for BIYY Tech: the spreadsheet dies, a real dashboard answers, the same product reshapes per trade, the website gets the business found, and the viewer is asked to book a free demo.

## Output

- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080, 30fps
- Duration: 23s

## Source Material

- Project roots: `C:\Users\ianga\BIYY-Tech` (site), `C:\Users\ianga\costwise` (dashboard MVP)
- Primary files read: `src/lib/site.js`, `src/lib/ui.js`, `src/components/Hero.jsx`, `~/.claude/profile/business.md`, `~/.claude/profile/brand.md`, costwise `src/pages/Dashboard.jsx`, `src/lib/rules.js`, `src/lib/workspaces.js`, `DESIGN.md`
- Product name: BIYY Tech
- Strongest claim: "Retire the spreadsheet. Keep the business."
- Key UI to recreate: the Costwise Verdict card, the four-up KPI row, and the "Needs attention" alert rows, on the real Costwise shell (ink-950 sidebar, light content surface)

### Copy that must appear verbatim

- Retire the spreadsheet.
- Keep the business.
- RM 12,480 a month is recoverable
- Ranked by money at stake
- Laid out for your industry.
- SEO · GEO · AEO
- Built into every page.
- Book a free demo.
- Thirty minutes, no slides.

### Copy rules (non-negotiable)

- No fact about the business beyond `~/.claude/profile/business.md`. No customer counts, no revenue figures, no growth percentages, no named logos, no testimonials.
- Dashboard figures are demo data from the Costwise MVP. A `SAMPLE DATA` pill stays on screen for every dashboard scene so no number reads as a customer claim.
- No em dashes anywhere on screen.
- Never "AI-powered" as a claim. AI is not in this video at all.
- The search scene must not imitate Google, ChatGPT or any other brand: no logos, no brand colours, no product chrome. A neutral field and a neutral listing.

## Creative Direction

- Tone preset: `polished`
- Creative direction: a quiet operator film, shot in the brand's own six colours
- Interpretation: fast entrances (0.3-0.5s), long settled holds, no bounce, no zoom, no confetti. Three to four beats per scene, never six. The numbers carry the video.
- Angle: kill the spreadsheet in the first three seconds, then spend the rest of the film on what replaced it: a working dashboard that names the leak, prices it, and ranks it by money. Then the site that gets the business found, then the one ask.
- Hook: a paper-white spreadsheet filling in cell by cell, four tabs named `final` through `FINAL_use_this(2)`, one cell resolving to `#REF!`, an ink veil, and the line **Retire the spreadsheet.**
- Outro: ink ground, BIYY mark, **Book a free demo.**
- Avoid: generic SaaS language, abstract filler, any redesign of either product's visual identity.

## Visual Identity

Two palettes, deliberately split.

**BIYY frame** — scenes 1, 4 overlay, 5, 6
- Paper `#ffffff`, ink `#0b0b0c`, accent `#1b4de4`, second accent `#4c79f2`, muted `#9ca3af` (dark grounds only), hairline `#e5e7eb`
- Radius: `999px` pills or `2px` panels, nothing between
- Display type set tight (`-0.04em`), labels set wide (`0.2em`, uppercase). Weight caps at 600. No italics.
- Bans: gradients, texture overlays, side-stripe borders, gradient text, glassmorphism, emoji, filled highlight blocks

**Costwise dashboard** — scenes 2, 3, and the bed under 4
Reproduced as the product actually looks, which is the point of showing it. Its own tokens and radii (`rounded-xl` cards, `rounded-full` pills) apply inside the dashboard only.
- Surface `#f6f7f9`, cards `#ffffff`, sidebar `#0f1319`
- Text `#1b212a` / `#4d5a6e` / `#64748b`; brand green `#1fa270`
- Severity: amber `#b45309`, red `#dc2626` (permitted: this is a dashboard state, not marketing)
- Series colours: revenue `#1b212a`, profit `#12825b`, cost `#f97316`, labour `#2563eb`
- Tabular numerals on every figure

**Fonts:** General Sans, shipped locally at `assets/fonts/GeneralSans-{Regular,Medium,Semibold}.woff2` (copied from `BIYY-Tech/public/fonts/`), declared with in-file `@font-face`. Aeonik is the brand face but is a licensed CoType font with no CDN, so General Sans is the declared fallback and is what the live site renders.

**Logo:** `assets/img/biyy-mark-white-512.png`, white strokes on ink. Never recoloured, never on the accent.

Minimum on-screen text size 20px; body copy 22-30px; display 72-96px. Every text colour must clear WCAG at its size.

## Storyboard

The creative contract is `brag-output/brag-plan.md`. Scene summary:

1. **The spreadsheet** — 0 to 3.4s — grid fills, `#REF!` resolves, ink veil, "Retire the spreadsheet." then "Keep the business."
2. **The swap** — 3.3 to 7.6s — Costwise shell and Verdict card land: ring at 68, "RM 12,480 a month is recoverable", three pillar bars, `SAMPLE DATA` pill.
3. **The dashboard working** — 7.6 to 11.9s — four KPI tiles, then three "Needs attention" rows one by one under the eyebrow RANKED BY MONEY AT STAKE.
4. **Laid out for your industry** — 11.9 to 15.5s — the dashboard dims, three trade cards cross it: Restaurants, E-commerce, Property.
5. **The site that gets you found** — 15.4 to 19.6s — a neutral search field types `barber shop near KLCC`, a neutral listing resolves, SEO · GEO · AEO tick on, "Built into every page."
6. **Book a free demo** — 19.5 to 23.0s — ink ground, BIYY mark, the ask, and a wide-tracked meta line.

## Audio

- Audio role: steady clean bed with sparse professional accents
- Audio arc: the bed runs from frame 0, accents mark the swap and the three trade cards, everything drains under the final CTA so the last line reads in near-silence
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: `data-volume="0.32"` from 0, tweened down to 0.04 across 19.6 to 22.2 so the outro lands quiet
- Music cue guidance: preset at `assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`, 109.96 BPM, beat grid roughly 0.545s apart. Two strong-cue locks only: the Verdict card landing (3.82s) and the outro mark (19.66s). Beat-grid the alert rows at every other beat (8.74 / 9.83 / 10.93) so each line holds its read, and the trade cards on consecutive beats (12.55 / 13.11 / 13.64) with all three held together afterwards.
- Audio-reactive treatment: subtle if available; the Verdict card's shadow presence and the outro mark's weight may breathe on RMS. No waveform, no equalizer, no pulsing text. Skip and note it if extraction is unavailable.
- Audio-coupled moments:
  - `#REF!` resolve (1.45s) — one quiet interface click
  - Verdict card landing (3.82s) — one soft impact, beat-locked
  - Alert rows (8.74 / 9.83 / 10.93s) — one light click each at 0.38
  - Trade cards (12.55 / 13.11 / 13.64s) — one card slide each at 0.42
  - Outro mark (19.66s) — one deep bell, beat-locked, left to ring as the music falls away
- SFX selection guidance: low high-frequency-risk files only. Chosen: `interface/click_003`, `interface/click_005`, `impact/impactSoft_medium_001`, `casino/card-slide-1`, `impact/impactBell_heavy_003`. All copied into `assets/sfx/`.
- SFX analysis guidance: `~/.claude/plugins/cache/brag/brag/0.2.2/skills/brag/assets/sfx/sfx-analysis.md`
- Volume policy: music 0.32, SFX 0.38-0.55, nothing above 0.6. Music bed on track-index 10, SFX from 11 up, no shared index between overlapping clips.

## Hyperframes Instructions

Build with the Hyperframes domain skills (`hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`). This is the `/brag` workflow, not the generic promo workflow.

Requirements:
- Show the real Costwise dashboard UI, reproduced from its own source.
- Every line holds long enough to read: short label ~0.8s settled, sentence ~0.3s per word.
- Total duration 23s.
- `npx hyperframes check` must pass with zero errors before render.
- Local assets only. No absolute paths, no network media.
