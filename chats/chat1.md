# Shop Button States

_Started 2026-05-05 21:32 UTC_

---

## User



## Assistant

_[tool: update_todos]_

Let me start exploring what we have.

_[tool: list_files]_

_[tool: set_project_title]_

Just the logo file. Let me look at it and check its metadata.

_[tool: view_image]_

_[tool: image_metadata]_

Logo extracted. Let me set up the project structure now.

_[tool: copy_files]_

_[tool: run_script]_

Now let me create the foundation files.

_[tool: write_file]_

_[tool: write_file]_

Now let me build the design system preview cards.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: register_assets]_

Now I'll build the UI kit for the Shopify Ride homepage.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: show_html]_

_[tool: register_assets]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

The Loam Co. Design System is in place. Open the **Design System** tab to review the 17 cards (Brand · Colors · Type · Spacing · Components).

### Caveats
- **No imagery provided** — hero, category, product, and journal images are intentionally rendered as labelled black placeholders. Per the brand rule of "never invent imagery", these need real action photography from the founder before any production launch.
- **Font substitution** — Bebas Neue + Archivo + JetBrains Mono are loaded from Google Fonts as strong stand-ins. If Loam Co. has a bespoke condensed display face, please attach the `.woff2`/`.ttf` files.
- **Icon substitution** — Using Lucide-style stroke icons inline. If you have a specific bespoke icon set, attach it.
- **No codebase / Figma was attached** — the system was derived from your brief, the logo's letterforms, and Ride theme conventions. If you have an existing Liquid theme or Figma file, attaching it would let me tighten the kit to match exactly.

### What I'd love to iterate on next — your call

1. **Real photography** — drop 3–5 hero/product/lifestyle shots into `assets/` and I'll wire them into the homepage.
2. **Convert the homepage UI kit into actual Shopify Liquid** (`sections/`, `snippets/`, `settings_data.json` colour config for the Ride theme).
3. **Add a Product Detail Page UI kit** — gallery, size selector, fabric specs, shipping info, related products.
4. **Add a Cart / Checkout / Account UI kit.**
5. **Write the full About page + size guide copy** in the Loam Co. voice.

**Which of those would you like first?**

## User

Regenerate "Buttons": Shop All, Add to Cart

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: show_to_user]_

Updated "Buttons" — now shows **SHOP ALL** (primary, with arrow) and **ADD TO CART** (outlined) plus a small variant of each.

## User

Regenerate "Website Homepage": At the top of the page, take away the ride hard. stay comfortable. look good statement, leave this top space for a banner video

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: show_to_user]_

Hero section updated — the "Ride hard. Stay comfortable. Look good." headline is removed and replaced with a full-bleed banner video placeholder ready for an `.mp4` autoplay loop. Only the small "UK-owned · Rider-run" eyebrow stamp and a "Scroll" affordance remain at the bottom edges so the video stays the focus.

## User

make the website smaller, we need a banner at the top, shop a collection, about us, why riders choose loam co, trail notes, what the riders say and join loam co. i would also like an ambassadors page where riders can sign up to be an affiliate and earn money from creating ads and sales

## Assistant

_[tool: snip]_

_[tool: read_file]_

I'll restructure the homepage to the requested section list, add the Ambassadors page, and update navigation.

_[tool: str_replace_edit]_

Now let me update the components: shrink hero/sections, add ShopCollection, AboutUs, Ambassadors, and update nav.

_[tool: read_file]_

I'll shrink the hero and add the new sections in a tighter rewrite.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now let me shrink the section paddings and add the new sections.

_[tool: run_script]_

Now let me add the new sections (ShopCollection, AboutUs, Ambassadors) and remove the unused ones.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

Page restructured to your spec — tighter overall, with the requested section flow:

1. **Banner** (top — video placeholder, no overlaid copy)
2. **Marquee** strip
3. **Shop a Collection** — 4 products + Shop All CTA
4. **About Us** — paper section with manifesto copy
5. **Why Riders Choose Loam Co.** — numbered features
6. **Trail Notes** (Journal)
7. **What the Riders Say** (Reviews)
8. **Ambassadors** — full sign-up flow with commission stats (15% / 10% / £0), benefits list, and a working application form (name, email, handle, region, audience size, why you)
9. **Join Loam Co.** (Newsletter)
10. **Footer**

The nav now reads: Shop · About · Why Loam · Journal · Reviews · Ambassadors. Section paddings and headlines were dialled down throughout so the page reads compact rather than cinematic.

**Next?** A few obvious follow-ups:
- Want me to wire up an actual `/ambassadors` standalone page (full hero + FAQ + tiered commission table)?
- Build a dedicated **Ambassador dashboard mock** (your link, sales count, payout history)?
- Convert this homepage into Shopify Liquid sections for the Ride theme?

## User

yes please write up an ambassadors standalone page with FAQs and commition table, and a ambassador dashboard

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

Now let me build the Ambassador Dashboard.

_[tool: write_file]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: snip]_

_[tool: done]_

Two new pieces shipped:

**`ui_kits/website/ambassadors.html`** — standalone `/ambassadors` page:
- Hero with side-stat block (15% / £0 / 7d / 30d)
- "How it works" — 4 numbered steps
- **Commission table** with three tiers: ROOTS (15%), BERMS (18%), DESCENT (22%) — quarterly sales bands, audience discount, perks
- **8-question FAQ** with expand/collapse interaction
- Full application form with terms checkbox

**`ui_kits/website/ambassador-dashboard.html`** — logged-in portal:
- Sidebar nav (Overview / Sales / Payouts / Links / Kit / Profile) with rider tier badge
- 4 stat cards: month commission, sales count, lifetime earnings, click conversion
- **Tier progress bar** (Berms → Descent, £ to go)
- 12-month sales bar chart
- **Copyable referral link + discount code**
- Recent sales table (date / order / product / customer / total / your cut)
- Top products bar list
- Payout history with PAID / PENDING badges

Both are registered as cards in the Design System tab and linked from the website kit folder.

