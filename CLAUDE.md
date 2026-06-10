# fryman-estates

Public marketing site for **frymanestates.com**, the hyperlocal guide to the
Fryman Canyon neighborhood of Studio City, presented by Misraje Real Estate
Partners. It is the third site in the Misraje family (after `misraje-site`, the
firm flagship, and `laurelwood-site`, the first neighborhood site).

This repo was forked from `laurelwood-site` as a **lean shell**: the shared
structure, design system, and Misraje firm identity were kept; all Laurelwood
neighborhood content and the local photo pipeline were removed. Most page copy
is a Fryman-branded placeholder ("content TBD") pending real neighborhood
material. Do not invent Fryman facts (history, streets, stats); leave them TBD
until verified.

## Architecture (single sources of truth)

- **`lib/site-config.ts`** holds everything site-specific: `siteKey` (`fryman`),
  name, tagline, domain, description, office, agents, brokerage, and legal text.
  Components and pages read from `siteConfig`; they never hardcode a site name,
  domain, phone, address, license, or brokerage detail.
- **`content/`** holds page copy. `content/source/*.md` is loaded at runtime by
  `lib/content.ts` (`loadDoc(slug)`); `content/home.ts` holds the structured
  home copy. No site-specific prose lives in a component.
- **`lib/photos.ts`** is an empty manifest stub. The local photo pipeline
  (`sharp`, `scripts/process-photos.mjs`, `source-photos/`) was removed, so all
  accessors (`photo`, `heroFor`, `byCategory`, `bestWideHero`) return `null`/`[]`
  and image slots fall back to the gradient hero. To add images: drop files under
  `public/images/`, populate `PHOTOS`, and pages will pick them up.

## Routes

Kept: `/`, `/history` (TBD stub with PageHero + siteConfig + JSON-LD),
`/homeowners` (+ `community-news`, `emergency-contacts`, `neighborhood-watch`),
`/about`, `/what-we-do`, `/buying`, `/selling`, `/contact`, `/accessibility`,
`/privacy`, and `/api/contact`. Blog and LARE Report are COMING LATER
(hub-and-spoke distribution from realestategpa.com; not rendered yet).

Dropped from the laurelwood template: `/west-laurelwood`, `/east-laurelwood`,
`/dona-streets`, and the `/history/{development,land-acquisition}` sub-tree.

## Design canon (inherited from misraje-site, do not restyle)

- Fonts via `next/font`: **DM Sans** (`--font-display`), **Cormorant Garamond**
  (`--font-serif`), **Inter Tight** (`--font-sans`).
- Palette: `navy-950` (#0A1F3D), `gold-500` (#C8A75B), plus the `gold`/`ink`
  ramps in `tailwind.config.ts`.
- Utilities: `.eyebrow`, `.gold-rule`, `.gold-rule-dark`, `.editorial`.
- Band canon: `py-20 md:py-28`, navy/white alternation, gold-600 eyebrows on
  white bands and gold-500 on navy, DM Sans `font-display font-light` headings,
  serif PageHero titles.

## Content style

- **No em dashes** anywhere (rewrite with comma, period, or colon). Numeric-range
  hyphens (K-5, 9-12) are fine.
- **Do not use the word "boutique."**
- Quiet, first-person editorial voice.
- `grep -rin laurelwood` across `app/`, `components/`, `lib/`, `content/` must
  return nothing.

## Backend

Shared Supabase backend across the Misraje family. Contact leads are attributed
by `siteConfig.domain` (frymanestates.com) so they are distinguished from sibling
sites. There are two Google Maps keys with different restrictions.

## Working notes

- `npm run dev` / `npm run build` / `npm run lint` / `npm run type-check`.
- A passing build is not the same as working; verify in the browser.
- `next dev` reads config/env only at startup: after editing `.env.local` or
  `next.config.mjs`, do a full dev-server restart, not a hot reload.
- Verify data claims (counts, license numbers, addresses) with your own checks;
  never fabricate values.
