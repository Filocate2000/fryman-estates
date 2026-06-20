import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SelfHostedVideo } from "@/components/SelfHostedVideo";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { frymanRanchContent as c } from "@/content/fryman-ranch";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Fryman Ranch in Studio City: a 1920s-30s community gathering place and silent-era Hollywood filming location that helped give Fryman Estates its name.";

export const metadata: Metadata = {
  title: "Fryman Ranch",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/history/fryman-ranch") },
  openGraph: {
    title: "Fryman Ranch",
    description: DESCRIPTION,
    url: absoluteUrl("/history/fryman-ranch"),
  },
};

const DIR = "/images/fryman-ranch/";
// encodeURI preserves the path slashes while escaping spaces in the original
// (archival) filenames.
const url = (file: string) => encodeURI(DIR + file);

const FRAME =
  "bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]";

type Pic = { file: string; caption: string; alt: string };

/** Cream-frame photo gallery: fixed 4:3 image, italic caption beneath. Matches
 *  the Development History / Harry C. Fryman treatment. 3/2/1 responsive cols. */
function Gallery({
  photos,
  tone,
}: {
  photos: readonly Pic[];
  tone: "navy" | "white";
}) {
  const captionColor = tone === "navy" ? "text-ink-300" : "text-navy-950/60";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
      {photos.map((p) => (
        <figure key={p.file}>
          <div className={FRAME}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={url(p.file)}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className={`mt-3 text-sm italic leading-relaxed ${captionColor}`}>
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function FrymanRanchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${c.hero.title} | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: absoluteUrl("/history/fryman-ranch"),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: {
      "@type": "Place",
      name: "Fryman Ranch",
      description:
        "A historic ranch in the Studio City hills used for civic gatherings and as a silent-era Hollywood filming location.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (image) */}
      <PageHero
        image={url(c.hero.image)}
        alt={c.hero.alt}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        objectPosition="center 50%"
        scrim="dark"
      />

      {/* A PLACE FOR CIVIC AND COMMUNITY EVENTS (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.civic.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <p className="mb-6">{c.civic.body[0]}</p>
            <p className="mb-0">{c.civic.body[1]}</p>
          </div>
          <div className="mt-12">
            <Gallery photos={c.civic.photos} tone="white" />
          </div>
        </div>
      </section>

      {/* A LOCATION FOR EARLY FILM PRODUCTIONS (NAVY): intro + film cards */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.film.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <p className="text-lg md:text-xl text-ink-100 leading-relaxed">
            {c.film.intro}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {c.film.films.map((f) => (
              <div key={f.title} className="flex gap-4 sm:gap-5">
                {/* Small portrait movie-poster thumbnail (~120px wide) */}
                <div className="w-[120px] shrink-0">
                  <div className="bg-[#f6f3ec] border border-gold-500/50 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                    <div className="relative aspect-[2/3] w-full overflow-hidden">
                      <Image
                        src={url(f.file)}
                        alt={f.alt}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Title (bold), year, short description */}
                <div>
                  <h3 className="font-display text-lg text-white font-semibold leading-snug">
                    {f.title}{" "}
                    <span className="font-light text-gold-500">({f.year})</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-100/80">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONNIE SCOTLAND SCENE (WHITE): prose + self-hosted video */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.bonnie.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <p className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            {c.bonnie.body}
          </p>
          <div className="mt-10 mx-auto max-w-3xl">
            <SelfHostedVideo
              src={url(c.bonnie.video)}
              caption={c.bonnie.videoCaption}
              tone="onWhite"
            />
          </div>
        </div>
      </section>

      {/* CHAPLIN RENTAL RECEIPT (NAVY): prose + featured document */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <p className="text-lg md:text-xl text-ink-100 leading-relaxed max-w-3xl">
            {c.chaplin.body}
          </p>
          <figure className="mt-12 mx-auto max-w-2xl">
            <div className={FRAME}>
              {/* The receipt is a landscape scan; fill the frame (object-cover)
                  so no empty field shows around it. */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={url(c.chaplin.file)}
                  alt={c.chaplin.alt}
                  fill
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-sm italic leading-relaxed text-ink-300">
              {c.chaplin.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FROM BLACK AND WHITE TO COLOR (WHITE): original/colorized pairs */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.colorized.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <p className="text-lg md:text-xl text-navy-950/75 leading-relaxed max-w-3xl">
            {c.colorized.body}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-12">
            {c.colorized.pairs.map((pair, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Original (black and white) */}
                <figure>
                  <div className={FRAME}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      {pair.original ? (
                        <Image
                          src={url(pair.original)}
                          alt={`${pair.alt} Original black-and-white version.`}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        // TODO: drop in the original B&W photo for this pair.
                        // alt: "Open field at Fryman Ranch, original black-and-white photograph."
                        <div className="absolute inset-0 flex items-center justify-center border border-dashed border-navy-950/30 bg-navy-950/[0.03] px-4 text-center">
                          <span className="text-xs italic text-navy-950/50">
                            Original black-and-white photo to be supplied
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-navy-950/60">
                    Original
                  </figcaption>
                </figure>

                {/* Colorized */}
                <figure>
                  <div className={FRAME}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={url(pair.colorized)}
                        alt={`${pair.alt} Digitally colorized version.`}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-navy-950/60">
                    Colorized
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIC FILM PRODUCTIONS AT FRYMAN RANCH (NAVY): curated stills */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.stills.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <p className="text-lg md:text-xl text-ink-100 leading-relaxed max-w-3xl">
            {c.stills.intro}
          </p>
          <div className="mt-12">
            <Gallery photos={c.stills.photos} tone="navy" />
          </div>
        </div>
      </section>

      {/* Closing CTA (WHITE) so the band run stays alternating. */}
      <ContactCTA tone="white" />
    </>
  );
}
