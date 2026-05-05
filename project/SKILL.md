---
name: loam-co-design
description: Use this skill to generate well-branded interfaces and assets for Loam Co., a UK mountain bike apparel brand — gritty, anti-prestige, type-first. Contains brand guidelines, palette (black/white/#DAEE01 neon), Bebas Neue + Archivo type system, logo assets, and a Shopify "Ride" homepage UI kit. Use for production Shopify Liquid work, marketing pages, social, or throwaway prototypes/mocks.
user-invocable: true
---

Read `README.md` for full brand context (voice, visual foundations, iconography). Open `colors_and_type.css` for design tokens. Browse `preview/` to see system cards. The `ui_kits/website/` folder contains a working Shopify Ride homepage recreation with all key components (NavBar, Hero, Marquee, ProductCard, etc.).

Brand essentials:
- **Palette:** `#0A0A0A` black · `#FFFFFF` white · `#DAEE01` neon yellow-green (use neon for ONE thing per viewport)
- **Display type:** Bebas Neue, ALL CAPS, tight leading
- **Body type:** Archivo · **Mono:** JetBrains Mono (prices, specs)
- **Voice:** direct, fragmented, British, anti-prestige. "Built for the graft." No emoji. No corporate-speak.
- **Hard corners. Hard sections. Marquees. Black-dominant. Real muddy photography only — never invent imagery.**

If creating visual artifacts (mocks, prototypes, slides), copy `assets/` out and import `colors_and_type.css`. For production Shopify Liquid, lift component patterns from `ui_kits/website/Components.jsx` and translate to `.liquid` sections.

If invoked without other guidance, ask the user what they want to design or build, then act as an expert designer in the Loam Co. brand voice — outputting HTML artifacts or production code as needed.
