import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buyingContent as c } from "@/content/buying";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Buying in Fryman Canyon Estates with Misraje Real Estate Partners. A guide to this competitive, sought-after Studio City market.";

export const metadata: Metadata = {
  title: "Buying in Fryman Canyon Estates",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/buying") },
  openGraph: { title: "Buying in Fryman Canyon Estates", description: DESCRIPTION, url: absoluteUrl("/buying") },
};

// Files under public/images/looking-to-buy/ still carry spaces and capitals, so
// encode the file segment (the folder itself is now clean kebab-case). Matches
// the history pages' approach.
const DIR = "/images/looking-to-buy/";
const pic = (file: string) => encodeURI(DIR + file);

// Cream plate matching FloatFigure / the history-page galleries.
const FRAME =
  "bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]";

export default function BuyingPage() {
  return (
    <>
      <PageHero
        image={pic(c.hero.image)}
        alt="Front exterior of a home in Fryman Canyon Estates"
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        scrim="dark"
      />

      {/* 1. Welcome (WHITE) — copy + architectural feature image */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-600 mb-4">{c.welcome.eyebrow}</p>
              <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-6 leading-tight">
                {c.welcome.heading}
              </h2>
              <span className="gold-rule-dark mb-8" />
              <div className="text-lg text-navy-950/75 leading-relaxed space-y-5">
                {c.welcome.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <figure>
              <div className={FRAME}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={pic(c.welcome.featureImage.file)}
                    alt={c.welcome.featureImage.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {c.welcome.featureImage.caption && (
                <figcaption className="mt-3 text-sm italic leading-relaxed text-navy-950/60">
                  {c.welcome.featureImage.caption}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </section>

      {/* 2. The market (NAVY) — image + copy */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <figure className="lg:order-2">
              <div className={FRAME}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={pic(c.market.image.file)}
                    alt={c.market.image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {c.market.image.caption && (
                <figcaption className="mt-3 text-sm italic leading-relaxed text-ink-300">
                  {c.market.image.caption}
                </figcaption>
              )}
            </figure>
            <div className="lg:order-1 max-w-2xl">
              <p className="eyebrow text-gold-500 mb-4">{c.market.eyebrow}</p>
              <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-6">
                {c.market.heading}
              </h2>
              <span className="gold-rule mb-8" />
              <div className="text-lg text-ink-100 leading-relaxed space-y-5">
                {c.market.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gallery (WHITE) — full-width photo row */}
      <section className="bg-white pt-20 md:pt-28">
        <div className="w-full px-6 md:px-16">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow text-gold-600 mb-4">{c.gallery.eyebrow}</p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
              {c.gallery.heading}
            </h2>
            <span className="gold-rule-dark mb-6" />
            <p className="text-lg text-navy-950/75 leading-relaxed">{c.gallery.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
            {c.gallery.photos.map((p) => (
              <figure key={p.file}>
                <div className={FRAME}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={pic(p.file)}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                {p.caption && (
                  <figcaption className="mt-3 text-sm italic leading-relaxed text-navy-950/60">
                    {p.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How we help buyers (NAVY) — 3-column, mirrors home "Why Misraje" */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <div className="mb-16 max-w-4xl">
            <p className="eyebrow text-gold-500 mb-4">{c.approach.eyebrow}</p>
            <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1]">
              {c.approach.heading}
            </h2>
            <span className="gold-rule mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {c.approach.points.map((p, i) => (
              <div key={p.title} className="group">
                <div
                  className="text-gold-500 font-display text-sm mb-4"
                  style={{ letterSpacing: "0.25em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-light text-2xl text-white mb-4 group-hover:text-gold-500 transition-colors">
                  {p.title}
                </h3>
                <p className="text-ink-100 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
