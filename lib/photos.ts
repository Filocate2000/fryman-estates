// lib/photos.ts
//
// Photo manifest stub. The local photo pipeline (sharp + scripts/process-photos.mjs
// + source-photos/) was removed for this shell, so the manifest is intentionally
// empty: every accessor returns null / [] and pages fall back to their gradient
// hero. Populate PHOTOS (and add images under public/images/) when Fryman photos
// are ready.

export type PhotoPage =
  | "home"
  | "history"
  | "homeowners"
  | "about"
  | "what-we-do"
  | "contact"
  | "buying"
  | "selling";

export type PhotoSection = "hero" | "feature" | "gallery" | "team";

export type PhotoCategory =
  | "archival-ads"
  | "documents"
  | "street-signs"
  | "period-photos"
  | "renderings"
  | "highway-shields"
  | "vista";

export type Photo = {
  /** Stable id (the output slug, no path/extension). Used by photo(id). */
  id: string;
  /** Public path under /images. */
  src: string;
  /** Accessibility alt text. */
  alt: string;
  /** Italic caption shown beneath framed artifacts (date where known). */
  caption?: string;
  category: PhotoCategory;
  /** Primary page placement. Pages may reference any id. */
  page: PhotoPage | null;
  section: PhotoSection;
  width: number;
  height: number;
  /** True for landscape shots suitable for a full-bleed hero. */
  wide?: boolean;
};

// Empty until Fryman photos are processed and committed under public/images/.
export const PHOTOS: Photo[] = [];

// Self-hosted video map, empty in the shell.
export const VIDEOS: Record<string, { src: string; caption: string }> = {};

// --- Accessors (safe on the empty manifest) ---------------------------------

/** Look up a photo by its stable id. Returns null if missing. */
export function photo(id: string): Photo | null {
  return PHOTOS.find((p) => p.id === id) ?? null;
}

/** All photos in a category, in manifest order. */
export function byCategory(category: PhotoCategory): Photo[] {
  return PHOTOS.filter((p) => p.category === category);
}

/** The hero image for a page, or null (caller falls back to the gradient). */
export function heroFor(page: PhotoPage): Photo | null {
  return PHOTOS.find((p) => p.page === page && p.section === "hero") ?? null;
}

/** All photos whose primary placement is this page. */
export function photosFor(page: PhotoPage): Photo[] {
  return PHOTOS.filter((p) => p.page === page);
}

/** The best wide landscape photo for a full-bleed hero, or null. */
export function bestWideHero(): Photo | null {
  return (
    PHOTOS.find((p) => p.section === "hero" && p.wide) ??
    PHOTOS.find((p) => p.wide) ??
    null
  );
}

/** Photos with no confident page placement. Empty in the shell. */
export function unplacedPhotos(): Photo[] {
  return PHOTOS.filter((p) => p.page === null);
}
