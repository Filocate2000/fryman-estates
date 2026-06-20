# Claude Code prompt — Fix the Development History page

> Save in `docs/` (or paste directly). Run `claude` from inside `C:\Users\filoc\Projects\fryman-estates`, then paste:
>
> ```
> Read docs/development-history-fixes-prompt.md and apply the fixes to the existing /development-history page. Don't rebuild from scratch — edit in place. Re-read ../laurelwood-site for the width. When done, run lint/build and tell me it's clean.
> ```

---

The `/development-history` page is already built. Make these corrections **in place** — don't rebuild it.

## 1. Page width — match the Laurelwood site

The content on this page is narrower than our Laurelwood site. Open the equivalent page/section container in `../laurelwood-site` (e.g. the "Introduction to East Laurelwood" page) and match its content **max-width and horizontal padding exactly** on every section here — hero text, history sections, both galleries, and the CTA. This page should be the same width as Laurelwood.

## 2. Hero image — stop the watermark showing behind the title

The hero photo has a MISRAJE watermark baked into it, and right now it sits behind the headline. **Do not add an overlay or try to mask it.** Instead, reposition the image's crop so more of the **top of the house and the sky** is visible — set the hero image `object-position` to `center top` (anchor to the top of the image). That pushes the watermark down, below the headline, so it's no longer behind the text. Nudge the vertical position further toward the top if the watermark is still under the title.

## 3. Captions — keep them, with this naming rule

We're keeping captions in **both** galleries (the earlier "remove all labels" note is reversed). Build each caption from the filename with these rules:

- **Keep** a leading street number — addresses should show. → `3240 Fryman Road.jpg` → **"3240 Fryman Road"**
- **Strip** a trailing 1–2 digit sequence number (the dedupe suffixes like 2, 3, 5). → `3280 Fryman Road 2.jpg` → **"3280 Fryman Road"**, and `Fryman Road 5.jpg` → **"Fryman Road"** (so several land photos will simply read "Fryman Road" — that's expected and fine).
- **Keep** 4-digit years. → `3201 Oakdell Road 1941.jpg` → **"3201 Oakdell Road, 1941"**
- `Briarvale2.jpg` → **"Briarvale"**, `Iredell2.jpg` → **"Iredell"**
- Fix the typo: any "Rach" → **"Ranch"** in the caption text (keep the real filename as-is when referencing the file).

Net effect: the homes section shows real addresses; the land section shows street names with no numbers.

## 4. Move 3 house photos from the land gallery down to the homes gallery

These three are houses, not raw land — move them out of **Gallery A** (the land / before-development gallery) and into **Gallery B** (the 1940s–50s homes gallery):

- `Briarvale.jpg`
- `Briarvale2.jpg`
- `Iredell2.jpg`

Leave the road, landscape, lot, and tract-office shots in the land gallery — e.g. the various `Fryman Road` photos, `Fryman Road Island.jpg`, `Fryman Estates Lot for Sale.jpg`, `Iredell.jpg`, and the Fryman Ranch information-center photo.

---

When done, run lint/build, fix any errors, and confirm it's clean.
