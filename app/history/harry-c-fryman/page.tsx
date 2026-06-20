import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FloatFigure } from "@/components/FloatFigure";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { harryFrymanContent as c } from "@/content/harry-fryman";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import type { Photo } from "@/lib/photos";

const DESCRIPTION =
  "Explore the legacy of Harry C. Fryman, the influential developer behind Fryman Estates in Studio City. Discover his impact on local real estate, community development, and Los Angeles history.";

export const metadata: Metadata = {
  title: "Harry C. Fryman",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/history/harry-c-fryman") },
  openGraph: {
    title: "Harry C. Fryman",
    description: DESCRIPTION,
    url: absoluteUrl("/history/harry-c-fryman"),
  },
};

// Internal routes the migrated Wix copy links to.
const HOME = "/";
const RANCH = "/history/fryman-ranch";
const DEV_HISTORY = "/history/development-history";
const CONTACT = "/contact";

// Build a Photo object for the shared editorial image components (FloatFigure /
// FramedArtifact). These photos are not in lib/photos.ts (that manifest is the
// empty shell stub); they live under public/images/harry-fryman/ and are wired
// here directly. Dimensions are the real pixel sizes so next/image reserves the
// correct aspect ratio.
const mk = (
  file: string,
  alt: string,
  width: number,
  height: number
): Photo => ({
  id: file,
  src: `/images/harry-fryman/${file}`,
  alt,
  category: "period-photos",
  page: null,
  section: "feature",
  width,
  height,
});

const portrait = mk("harry-fryman-portrait.jpg", c.about.portraitAlt, 4844, 6000);
const annexAd = mk("hotel-hayward-1929.jpeg", c.annex.adAlt, 532, 1585);
const ralphs = mk("ralphs-bros-grocers.jpg", c.annex.ralphsAlt, 497, 331);
const haywardHotel = mk("hayward-hotel.jpg", c.annex.hotelAlt, 6600, 5100);
const bbq = mk("bbq-seating.jpg", c.ranch.bbqAlt, 2284, 1468);
const policeBoard = mk("harry-fryman-police-board.jpg", c.legacy.policeAlt, 532, 391);

// Inline link styles for the two band tones (no .editorial-prose wrapper here,
// since these are hand-laid bands rather than a single prose blob).
const linkOnWhite =
  "text-gold-600 hover:text-gold-500 underline underline-offset-2 transition-colors";
const linkOnNavy =
  "text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors";

export default function HarryCFrymanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${c.hero.title} | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: absoluteUrl("/history/harry-c-fryman"),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: {
      "@type": "Person",
      name: "Harry C. Fryman",
      birthDate: "1876",
      deathDate: "1946",
      description:
        "Los Angeles hotelier and real estate developer; namesake of Fryman Estates in Studio City.",
    },
  };

  // Split the bold date out of the first annex paragraph so it can render as
  // <strong>, matching the source emphasis.
  const annexLead = c.annex.body[0];
  const [annexBeforeDate, annexAfterDate] = annexLead.split(c.annex.boldDate);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (image): Hayward Hotel exterior */}
      <PageHero
        image={haywardHotel.src}
        alt="The Hayward Hotel at 6th and Spring Street, downtown Los Angeles, built by Harry C. Fryman."
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        objectPosition="center 30%"
        scrim="dark"
      />

      {/* ABOUT (WHITE): portrait floated beside the prose */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="editorial">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.about.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <FloatFigure
              photo={portrait}
              float="right"
              width="md:w-[34%]"
              caption=""
            />
            <p className="mb-6">{c.about.intro}</p>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-gold-600 mb-6">
              {c.about.hotels.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mb-0">{c.about.closing}</p>
            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* HAYWARD HOTEL ANNEX OPENING, 1910 (NAVY): ad floats beside the prose;
          the Ralphs + Hayward Hotel plates follow in a captioned row. */}
      <section className="bg-navy-950 py-20 md:py-28 overflow-hidden">
        <div className="editorial">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.annex.heading}
          </h2>
          <span className="gold-rule mb-8" />
          {/* Top row: body copy (left) + the tall 1929 advertisement (right),
              tops aligned. The ad is height-capped so it tracks the text block
              instead of overflowing; width scales proportionally. Stacks to a
              single centered column on mobile. */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div className="text-lg md:text-xl text-ink-100 leading-relaxed">
              <p className="mb-6">
                {annexBeforeDate}
                <strong className="font-semibold text-white">
                  {c.annex.boldDate}
                </strong>
                {annexAfterDate}
              </p>
              <p className="mb-6">{c.annex.body[1]}</p>
              <p className="mb-0">{c.annex.body[2]}</p>
            </div>
            <figure className="mx-auto md:mx-0 w-fit bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
              <Image
                src={annexAd.src}
                alt={annexAd.alt}
                width={annexAd.width}
                height={annexAd.height}
                sizes="(min-width: 768px) 16rem, 60vw"
                className="block h-auto w-auto max-h-[360px] md:max-h-[460px]"
              />
            </figure>
          </div>

          {/* Bottom: the two historical photos in an even two-column grid. Both
              images fill matching cream frames at the same 4:3 size (no empty
              padding), with italic captions directly beneath each frame. Stacks
              to a single column on mobile. */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            {[
              { photo: ralphs, caption: c.annex.ralphsCaption },
              { photo: haywardHotel, caption: c.annex.hotelCaption },
            ].map(({ photo, caption }) => (
              <figure key={photo.id}>
                <div className="bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-sm italic leading-relaxed text-ink-300">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REAL ESTATE VENTURES (WHITE): no image */}
      <section className="bg-white py-20 md:py-28">
        <div className="editorial">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.realEstate.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <p className="mb-6">{c.realEstate.intro}</p>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-gold-600 mb-0">
              {c.realEstate.projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
              <li>
                {c.realEstate.finalProjectLead}
                <Link href={HOME} className={linkOnWhite}>
                  {c.realEstate.finalProjectLinkText}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FRYMAN RANCH AND FILM INDUSTRY TIES (NAVY): BBQ photo floated beside
          the prose, with its caption. */}
      <section className="bg-navy-950 py-20 md:py-28 overflow-hidden">
        <div className="editorial">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.ranch.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <div className="text-lg md:text-xl text-ink-100 leading-relaxed">
            <FloatFigure
              photo={bbq}
              float="right"
              width="md:w-[42%]"
              caption={c.ranch.bbqCaption}
            />
            <p className="mb-6">
              {c.ranch.introLead}
              <Link href={RANCH} className={linkOnNavy}>
                {c.ranch.introLinkText}
              </Link>
              {c.ranch.introRest}
            </p>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-gold-500 mb-6">
              {c.ranch.productions.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mb-6">{c.ranch.actors}</p>
            <p className="mb-0">
              {c.ranch.civicLead}
              <Link href={RANCH} className={linkOnNavy}>
                {c.ranch.civicLinkText}
              </Link>
              {c.ranch.civicRest}
            </p>
            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* LASTING LEGACY (WHITE): police commission photo floated beside the
          prose; closing paragraph carries the home / dev-history / contact
          links. */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="editorial">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.legacy.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <FloatFigure
              photo={policeBoard}
              float="right"
              width="md:w-[34%]"
              caption=""
            />
            <p className="mb-6">{c.legacy.first}</p>
            <p className="mb-0">
              {c.legacy.closingLead}
              <Link href={HOME} className={linkOnWhite}>
                {c.legacy.closingHomeText}
              </Link>
              {c.legacy.closingMid}
              <Link href={DEV_HISTORY} className={linkOnWhite}>
                {c.legacy.closingDevHistoryText}
              </Link>
              {c.legacy.closingMid2}
              <Link href={CONTACT} className={linkOnWhite}>
                {c.legacy.closingContactText}
              </Link>
              {c.legacy.closingEnd}
            </p>
            <div className="clear-both" />
          </div>
        </div>
      </section>

      {/* Closing CTA (NAVY) so the band run stays alternating after the white
          Lasting Legacy band. */}
      <ContactCTA tone="navy" />
    </>
  );
}
