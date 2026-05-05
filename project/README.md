# Loam Co. Design System

> Built for the graft. No prestige tax.

Loam Co. is a UK-based mountain bike apparel brand making premium-grade streetwear and technical MTB gear (jerseys, t-shirts, trousers, hats, socks) at a fair price. The brand is **gritty, authentic, community-focused, and openly rebellious against high "prestige" markups**. Target rider: someone who spends weekends in the mud and wants kit that survives crashes without costing a week's wages.

This system supports the **Loam Co. Shopify storefront** (theme: **Ride**) and any supporting marketing material — landing pages, social, packaging copy.

---

## Source materials provided

- **Logo:** `uploads/LOAM-CO-LOGO-1.0.png` (1024×1024, transparent PNG, black wordmark "LOAM" with "CO." offset right)
- **Brand colors:** Pure black, white, and `#DAEE01` (electric neon yellow-green) — confirmed by founder
- **Shopify theme:** **Ride** (section-based, type-forward — pairs naturally with this palette)
- **Brand persona + audience + mission brief** (provided in chat — see "Voice" below)
- **SEO homepage layout** with confirmed H1/H2 structure, taglines, and category list

No codebase, Figma, or existing design system was attached, so visual decisions below are derived from the brief, the logo's typographic personality, and the Ride theme's known characteristics (large type, full-bleed media, hard section breaks).

---

## Index

| File / Folder | What's in it |
|---|---|
| `README.md` | This document — brand context, voice, visual foundations, iconography |
| `colors_and_type.css` | Design tokens: colors, type scale, spacing, radii, motion |
| `assets/` | Logos (black, white, neon variants) and brand image placeholders |
| `preview/` | Design system cards rendered in the Design System tab |
| `ui_kits/website/` | Shopify "Ride" homepage UI kit — components + interactive index |
| `SKILL.md` | Skill manifest (compatible with Agent Skills / Claude Code) |

### UI kits available
- **`ui_kits/website/`** — Shopify "Ride" homepage. Open `ui_kits/website/index.html` for the interactive demo, `Components.jsx` for the component library.

---

## Content fundamentals — voice & tone

Loam Co. writes like a mate at the trailhead, not a marketing department. The voice is **direct, working-class British, irreverent, and proud of being unpretentious**. It is **never** corporate, never sustainability-jargon-heavy, never premium-luxury-coded.

### Voice rules

- **Short. Sharp. Sentences.** Fragments are encouraged. Use full stops as percussion.
- **Second person.** "You" — speaking to the rider directly. Never "we believe" cliché openings; if "we" appears, it's the brand standing next to the rider, not above them.
- **British English.** *kit, trousers, mate, graft, mud, RRP, postcode, knackered.* Never *pants, gear up, awesome, folks*.
- **Anti-prestige throughout.** The competition is named obliquely ("£180 jerseys with a logo tax"). Pricing is presented as an honest comparison: `£65` next to a struck-through `£180 RRP elsewhere`.
- **Trail-rooted nouns.** *mud, loam, roots, berms, descents, climbs, the graft, the dirt.* Avoid *adventure, journey, lifestyle, curated.*
- **No emoji** in body copy or product copy. (Internal section dividers in marketing crops, like `· `, are fine.)
- **All-caps for impact** — only for headers, marquees, and stamps. Never in body copy.
- **Numbers do the talking.** Specifics over adjectives: "200gsm fleece-lined" beats "ultra-warm". "3x cheaper than the household name" beats "great value".

### Casing

| Context | Style | Example |
|---|---|---|
| Page-level headers (H1, H2) | ALL CAPS, Bebas Neue | `BUILT FOR THE GRAFT` |
| Section eyebrows | ALL CAPS, tracked-out body | `THE MANIFESTO` |
| Body copy | Sentence case | `These aren't show pieces.` |
| Buttons / CTAs | ALL CAPS | `SHOP THE KIT`, `JOIN THE DIRT CULT` |
| Product names | Title Case | `Loam Trail Tee`, `Graft Jersey` |
| Prices | Bold mono, £ first | `£65` |

### Sample copy

> **Hero H1:** RIDE HARD. STAY COMFORTABLE. LOOK GOOD.
> **Subhead:** UK-built mountain bike kit, priced for riders — not for posers. No prestige tax. No logo markup. Just gear that survives the descent.
> **CTA:** SHOP THE KIT
>
> **Manifesto:** Some brands charge you £180 for a jersey because of the badge. We don't. Same fabric. Same factory standards. Half the price. The rest of the money stays in your pocket — buy more bike parts. Or another beer.
>
> **Product card:** *Graft Jersey* — `£65` — *Long-sleeve, 200gsm, mud-shedding weave. Tested in the Tweed Valley.* `RRP elsewhere £180`

---

## Visual foundations

### Palette

A **three-colour system, full stop**: black, white, neon. No greys *as colours* — only as functional tints inside black surfaces.

| Token | Hex | Role |
|---|---|---|
| `--loam-black` | `#0A0A0A` | Primary background, primary type |
| `--loam-off-black` | `#1A1A1A` | Card / section elevation on black |
| `--loam-charcoal` | `#2E2E2E` | Borders, dividers on black |
| `--loam-graphite` | `#5A5A5A` | Inactive, struck-through prices |
| `--loam-ash` | `#9A9A9A` | Secondary text on black |
| `--loam-bone` | `#E8E6E1` | Optional warm paper background |
| `--loam-white` | `#FFFFFF` | Inverse background, type on black |
| `--loam-neon` | `#DAEE01` | THE accent — used for emphasis only |
| `--loam-neon-dim` | `#B8C800` | Hover/pressed state for neon |

**Neon usage rules:** Treat it like a highlighter, not a paint. Use it for ONE thing per viewport — a CTA, a price tag, a marquee strip, a single highlighted word in a headline. Cover too much and the brand reads "rave flyer", not "trail kit".

### Type

- **Display:** **Bebas Neue** — tall, condensed, all-caps. Carries every H1/H2 and the marquee. Single weight. The logo is set in this same character of letterform (geometric sans, heavy weight, slight squareness).
- **Body:** **Archivo** — utilitarian grotesque, takes weight down to 400 and up to 900 cleanly. Used for paragraphs, subheads, eyebrows.
- **Narrow:** **Archivo Narrow** — for tightly-stacked metadata strips, table data, navigation.
- **Mono:** **JetBrains Mono** — for prices, sizes, spec callouts. Reinforces the "honest engineering" tone.

> ⚠️ **Font substitution flag:** No font files were attached. We're loading **Bebas Neue + Archivo + JetBrains Mono from Google Fonts**. If your Shopify Ride theme uses a specific commercial face for Loam Co. (e.g. a custom condensed display), please attach the .woff2/.ttf files and we'll swap them in. Bebas Neue is a strong free stand-in — it matches the logo's geometry and condensed proportions.

Type rules:
- Headings: **uppercase, tight leading (0.92), small positive tracking (+1%)**.
- Eyebrows: uppercase body weight 700, tracked +18%.
- Body: sentence case, leading 1.45, never below 16px.
- **Set headlines BIG** — hero H1 reaches `clamp(72px, 14vw, 220px)`. The brand earns scale because it has so few colours.

### Layout & structure

- **Black-dominant pages.** Background is `#0A0A0A`. Sections alternate by inserting full-bleed slabs of `#FFFFFF` (paper) or `#DAEE01` (neon) — never gradients, never card backgrounds in subtle off-blacks. Hard switches.
- **Section dividers are SLABS, not lines.** Big horizontal stripes of one solid colour stacking on the next. Marquees ride between them.
- **Generous max-width: 1440px** with **48–96px gutters**. Hero text often breaks the grid (left- or full-bleed flush).
- **Asymmetric grids preferred** over polite symmetric four-up. e.g. one large product card next to a column of two smaller ones.
- **Marquees** (horizontally scrolling text strips) are a brand signature: thick black band with neon all-caps text reading "NO PRESTIGE TAX · BUILT FOR THE GRAFT · MUD APPROVED · ".

### Backgrounds & imagery

- Photography: **muddy, real, action-first**. Riders mid-descent, mid-crash, mid-laugh. Trails wet and dark — Tweed Valley / Peaks / Welsh weather. Never studio-clean.
- **Grain.** A subtle film grain over hero imagery is on-brand. Not heavy — 6–10% noise overlay.
- **Tonal grading:** Cool greens-and-greys, never warm/golden. Highlights crushed slightly. The neon is the only saturated note in the frame.
- **No stock illustrations, no isometric vectors, no gradient meshes, no AI-glow.** If imagery is missing, leave a labelled black or paper placeholder — never invent.
- **Full-bleed hero photography** is the rule. Crop tight. Faces are fine; logos on kit even better.

### Borders, radii, shadow

- **Hard corners.** Default radius: **0**. Tags and small pills get **2px** at most. Avoid rounded cards entirely — Loam Co. doesn't soften.
- **Borders are structural.** 2px white/neon borders define cards on black. 6px slab borders define hero zones. No 1px hairlines except inside dense data lists.
- **Shadows are nearly absent.** The brand is flat. The only "shadow" used is a **neon glow** on hovered CTAs (`0 0 24px rgba(218,238,1,0.35)`) — and it's optional, not default.

### Motion

- **Snap, don't ease.** Transitions are 120–220ms, on `cubic-bezier(0.85, 0, 0.15, 1)` (sharp in/out). No bounce, no spring.
- **Marquee scrolls** at constant linear speed — ~30s per loop.
- **Hover states:** Buttons invert (black→neon-bg, neon-text→black-text) instantly. Product cards reveal a 1px neon outline. No scale, no lift.
- **Press states:** Background drops to `--loam-neon-dim` (`#B8C800`); no scale change.
- **Page transitions:** Hard cuts. No fade-in-on-scroll choreography. The brand is direct.

### Transparency & blur

- **Avoid both.** No glass-morphism. No semi-transparent overlays except for image legibility scrims (`linear-gradient(180deg, transparent, rgba(0,0,0,0.7))` at the bottom of hero images).
- Sticky nav uses `rgba(10,10,10,0.92)` only when overlapping imagery — not as a stylistic choice.

### Cards

- Product card: **2px white border, black background, square corners, sharp shadow-free edges.** Image fills top half, copy + price + "RRP elsewhere" stacks below. On hover: border switches to neon.
- Manifesto / quote cards: **off-black `#1A1A1A` block, 6px neon left bar, white type.** This is the only "left-bar accent" in the system and only used for testimonials and pull quotes — never for generic info cards.
- Trust-feature card: **just type and a number** (`01`, `02`...) in neon Bebas — no card chrome at all. Just typography on black.

### Hierarchy of emphasis

1. Bebas Neue at huge sizes, in white.
2. Bebas Neue at huge sizes, with **one word** swapped for a black-on-neon block (e.g. `RIDE HARD. STAY [COMFORTABLE]. LOOK GOOD.`).
3. Eyebrow + body pairing.
4. Mono callouts for prices/specs.

---

## Iconography

**Loam Co. is type-first, not icon-first.** The brand signals through letterforms, marquees, and bold numerical data ("01", "02", "200gsm", "£65") rather than illustrative icon systems.

When icons are needed (cart, search, account, social, navigation chevrons):

- **Library:** **Lucide Icons** (CDN: `lucide.dev`) — strict 2px stroke, geometric, open style. Pairs naturally with Archivo + Bebas. Substituted in for the (unprovided) production icon set.
- **Sizing:** 20px in nav and inline; 24px in product chrome; 32px+ for feature highlights.
- **Stroke:** 2px, never filled — except for the cart badge (filled neon circle with mono digit).
- **Color:** white default, neon on hover/active.
- **Never use emoji** in product/marketing copy. Emoji **may** appear in the SEO meta brief (the `🏔️` from the user's brief was for note-taking, not for UI).

> ⚠️ **Icon substitution flag:** Loam Co. has no documented production icon set. Lucide is a clean default for now. If there's a specific bespoke icon kit (or you want a heavier/grittier set like **Tabler Filled** or a custom-drawn one), please attach.

### Brand marks (in `assets/`)

| File | Use |
|---|---|
| `assets/loam-co-logo.png` | Original — black on transparent, full 1024² canvas |
| `assets/loam-co-logo-cropped.png` | Tight-cropped version for inline use |
| `assets/loam-co-logo-white.png` | White version for dark backgrounds |
| `assets/loam-co-logo-neon.png` | Neon version for special moments — sparingly |

**Never re-colour the logo to anything outside these three.** Never apply effects (drop shadow, outline, gradient) to the logo.

---

## Component principles

- **Inversion is a UI pattern.** Buttons flip black↔neon on hover. Hero words flip white↔neon-on-black. This *is* the interaction language.
- **Strip the chrome.** Inputs are bottom-borders only on black backgrounds, full-borders on paper. No fills, no inner shadows.
- **Tags are the workhorses.** "NEW", "RESTOCKED", "LAST SIZES", "RRP ELSEWHERE £180" — small mono/Bebas tags carry information density without breaking layout.

---

## Quick-reference do's and don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Black backgrounds dominant | Mid-grey or off-white as primary |
| Bebas Neue for ALL display type | Mix in serifs, scripts, or other display faces |
| Use neon for ONE thing per viewport | Paint sections in neon |
| Hard corners (radius 0–2px) | Pill-shaped cards, soft shadows |
| Bold mono prices: `£65` | Decorative pricing tickers, slashes everywhere |
| Real muddy action photography | Stock studio shots, AI imagery, gradient meshes |
| British English: "kit, trousers, graft" | Americanisms: "pants, gear, lifestyle" |
| Marquees, slabs, asymmetric grids | Centred symmetric four-up safe layouts |
| Direct, fragmented voice | Marketing-speak, "we believe", "journey" |
