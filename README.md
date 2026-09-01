# BIYY Tech marketing site

Next.js 15 (App Router) marketing site for BIYY Tech. Business-professional
minimalist layout modelled on the section rhythm of sudu.ai, with parallax,
scroll-reveal, split-word headlines, count-up stats and a dependency-free
scroll-snap carousel.
 
## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Dependencies are deliberately minimal: `next`, `react`, `react-dom`,
`tailwindcss`, `postcss`, `autoprefixer`. Every animation is hand-rolled:
no motion library.

## Structure

```
src/
  app/
    layout.jsx              <html>, fonts, splash, site-wide structured data
    _pages/                 each page defined once: metadata + structured data
                            + composition, taking a locale
    (en)/                   English tree, served from / (route group, no prefix)
    zh/                     Chinese tree, served from /zh
    globals.css             Tailwind layers, @font-face, motion primitives
    icon.png                favicon (BIYY mark)
  components/
    Shell.jsx               nav, footer, assistant and consent, in one locale
    motion.jsx              shared scroll engine: Reveal, Parallax, SplitWords,
                            CountUp, useInView
    HeroFrame.jsx           the inset hero card that unfolds to full bleed
    Hero.jsx                video-stack hero with scroll-linked veil
    Nav.jsx                 sticky nav, full-width product mega-menu, mobile sheet
    BackToTop.jsx           scroll-to-top with a progress ring
    Chatbot.jsx             rule-based assistant (launcher + panel)
    Mascot.jsx              the BIYY Bot blob, in pure CSS
    JsonLd.jsx              server-rendered structured-data block
    ProductSection.jsx      alternating product block with parallax visual
    Sections.jsx            stats, pillars, industries, testimonials,
                            comparison, rollout, FAQ, closing CTA
    Carousel.jsx            scroll-snap carousel (drag, arrows, dots, autoplay)
    ContactForm.jsx         enquiry form
    Logo.jsx                logo + bare mark
  lib/site.js               all copy and data, edit this, not the components
  lib/site.zh.js            the Chinese translation of the same, merged by index
  lib/routes.js             locale prefixes: / for English, /zh for Chinese
  lib/meta.js               per-locale <title> and <meta description>
  lib/chat.js               the assistant's keyword rules and answers
  lib/seo.js                metadata helper and schema.org builders
public/llms.txt             plain-text site summary for model crawlers
public/
  brand/                    transparent logo marks (white + black, 512 + full)
  fonts/                    self-hosted webfonts
  media/img/                37 photographs, Pexels + 3 CC0 (8 MB)
  media/video/              3 Pexels clips (24 MB)
```

**All copy lives in `src/lib/site.js`.** Products, bullets, stats, FAQ,
testimonials and the comparison table are data, change them there and every
page updates.

## Two languages, two URL trees

English is served from the root and Chinese from `/zh`, and both are statically
generated in their own language. The locale is a property of the URL, not of the
browser: `/zh/products/dashboards` is Chinese for everyone, which is what makes it
indexable. Every page carries a canonical URL plus an `hreflang` set pointing at
its twin, and the sitemap lists both with the same alternates.

- Add a page by writing it once in `src/app/_pages/`, then mounting it from a
  two-line route file in `(en)/` and another in `zh/`.
- Write internal links against the English path (`/contact`) and import `Link`
  from `@/components/Link`, which adds the prefix for the tree it renders in.
- The language toggle is a navigation between the trees, and it stores the
  choice so the homepage stops redirecting Chinese-preferring browsers.

## Typeface

The site is set in **Aeonik**. Aeonik is a licensed font from CoType Foundry
and is not redistributable, so the repo ships an open-source stand-in
(General Sans, SIL OFL) under the same family name.

To switch to real Aeonik, drop these files into `public/fonts/`:

```
Aeonik-Light.woff2
Aeonik-Regular.woff2
Aeonik-Medium.woff2
Aeonik-Semibold.woff2
Aeonik-Bold.woff2
```

Nothing else changes. Each `@font-face` in `globals.css` already lists the
Aeonik file first and falls through to the stand-in when it is missing.

## Logos

`public/brand/` holds the supplied marks with their PNG backgrounds removed:
alpha is derived from luminance so the antialiased line work stays clean, and
each file is cropped square to the artwork.

| File | Use |
| --- | --- |
| `yiy-mark-white-512.png` | on dark surfaces (nav over hero, footer) |
| `yiy-mark-black-512.png` | on light surfaces |
| `yiy-mark-white.png` / `yiy-mark-black.png` | full-resolution originals |

## Media

Photography and footage are from [Pexels](https://www.pexels.com) under the
Pexels licence (free for commercial use, no attribution required, though the footer
credits them anyway). Files are committed under `public/media/`.

Video files are the original Pexels renders and are large (3–12 MB each). The
hero mounts only the clip it is about to play, so first load pulls one file,
but before going to production, transcode them down anyway:

```bash
ffmpeg -i input.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -an -movflags +faststart out.mp4
```

and add a WebM sibling for smaller payloads.

## Assistant (BIYY Bot)

`Chatbot.jsx` is a rule-based assistant with no model, no network call, nothing to
bill. `lib/chat.js` holds an array of rules; each has a keyword list and an
answer with optional quick-reply chips and in-app links. Input is scored
against every rule (multi-word phrases weigh 3, single words 1) and the highest
scorer wins, with a chip-menu fallback when nothing matches.

**To extend it**, add a rule to `RULES` in `lib/chat.js`. That is the whole API.

It opens from the floating launcher, or programmatically from anywhere:

```js
import { openChat } from '@/components/Chatbot';
openChat();
```

**The mascot is original.** The brief referenced bloub.vercel.app, but that
project is an explicit recreation of x.ai's bot avatar, and shipping it would put
another company's brand mark on a commercial site. `Mascot.jsx` is a
from-scratch equivalent in the same spirit: one black blob whose border-radius,
squash and two-dot face morph between `idle`, `thinking`, `talking`, `happy`
and `wave`. Pure CSS, no SVG library, no borrowed artwork.

## Motion

- `Reveal`: fade + rise on intersection, optional blur-in, `delay` for stagger
- `SplitWords`: headline assembles word by word with a 3D tilt
- `Parallax`: subscribes to one shared rAF loop; `speed` is total px travel
  across a viewport of scroll, negative moves against the scroll
- `CountUp`: quartic ease-out, fires once in view
- Interaction defaults live in `globals.css`: `.btn:active` press-scale, arrow
  nudge on hover for `.btn` and `.lead-arrow`, `.link-underline` draw-in, and a
  visible `:focus-visible` ring on every interactive element

## The hero frame

Every page's hero uses `HeroFrame`. At rest it is an inset card, 10px radius,
sitting on a paper surround with the media and copy inside, and it unfolds to
full bleed as you scroll, easing padding to zero and radius to zero over about
0.6 of a viewport.

```jsx
<HeroFrame fullHeight>   {/* fullHeight only on the home page */}
  …media, veils, copy…
</HeroFrame>
```

Padding and radius are written straight to `style` from the shared scroll loop,
so scrolling never triggers a React render. The pre-hydration state comes from
the Tailwind classes on the wrapper, which match the resting values. Under
`prefers-reduced-motion` the frame renders full-bleed immediately.

Because the surround is paper, the nav is always dark-on-light: transparent
over white at rest, a white blur bar once scrolled.

## SEO, GEO and AEO

Three overlapping jobs: rank in classic search, be quotable by generative
engines, and be liftable as a direct answer.

**Metadata.** `lib/seo.js` exposes `pageMeta()`, which every route calls. It
produces the title, a description written to stand alone as a summary, a
canonical URL, Open Graph and Twitter cards. The root layout sets
`metadataBase`, locale, `robots` directives (`max-snippet: -1`,
`max-image-preview: large`) and the default social image at
`public/brand/og-default.png`.

**Structured data.** `JsonLd.jsx` renders schema.org JSON-LD into the server
HTML, so crawlers that do not run JavaScript still see it. Builders live in
`lib/seo.js`:

| Page | Emits |
| --- | --- |
| every page | `Organization`, `WebSite` |
| home | `ItemList` of products, `FAQPage` |
| product | `SoftwareApplication` with `featureList` and offer terms, `BreadcrumbList` |
| blog index | `Blog`, `BreadcrumbList` |
| blog post | `BlogPosting` with author, `reviewedBy`, `dateModified`, citations, plus `FAQPage` and `BreadcrumbList` |
| contact | `ContactPage` |

**GEO.** `public/llms.txt` is a plain-text summary for model crawlers: what the
products do, how pricing works, and a "facts worth quoting accurately" block so
a model paraphrasing the site lands on the correct claims. Keep it in sync when
product copy changes.

**AEO.** Every blog post carries an `answer` field, rendered at the top as "the
short answer" and mapped to schema `abstract`. It is written to be a complete,
correct response on its own, without the surrounding article. Posts also carry
a `takeaways` list and a per-post `faq` array that feeds `FAQPage`.

**E-E-A-T.** Posts name an author with the hands-on role that qualifies them, a
reviewer, a publish date and a review date. Any number is accompanied by a
"How we measured this" section stating sample size and method, a limits section
saying where the advice does not apply, and a sources list. The editorial
policy lives at `/blog#editorial`.

> **Before going live:** the metrics throughout the site and blog are
> placeholders shaped like real findings. Replace them with your actual
> deployment data, or delete the claims. Publishing invented figures under
> E-E-A-T framing is worse than publishing none.

## Design system

- **Radius is 2px everywhere.** The Tailwind `borderRadius` scale is overridden
  wholesale in `tailwind.config.js`, so `rounded-sm` through `rounded-full` all
  resolve to 2px. Change that one block to reshape the entire site.
- **Container is `max-w-shell` (1520px)**, applied by the `.shell` class.
- No decorative background grid. Surfaces are flat paper, warm paper, or ink.

Everything respects `prefers-reduced-motion`: reveals resolve to their final
state, parallax transforms are dropped, marquees stop.

## Careers

`roles` in `lib/site.js` is an empty array, so the page renders a "no vacancies"
panel with a speculative-application route. Push objects into `roles` and the
listing renders itself. Each needs `slug`, `title`, `team`, `type`, `location`,
`blurb` and a `wants` array. If you add real vacancies, add `JobPosting`
structured data at the same time.

## Not wired yet

The contact form has no backend. It composes a `mailto:` so no enquiry is
silently dropped. Replace `onSubmit` in `ContactForm.jsx` with a `POST` to a
route handler when the API exists.
