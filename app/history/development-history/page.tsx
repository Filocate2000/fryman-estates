import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { developmentHistoryContent as c } from "@/content/development-history";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Discover the history of Fryman Estates, a secluded Studio City neighborhood known for its custom homes, scenic canyon setting, and ties to Hollywood's past. Originally marketed in 1939 as Briarcliff Manor Estates.";

export const metadata: Metadata = {
  title: "Development History",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/history/development-history") },
  openGraph: {
    title: "Development History",
    description: DESCRIPTION,
    url: absoluteUrl("/history/development-history"),
  },
};

// Internal routes the migrated Wix copy links to. West Laurelwood is the sibling
// neighborhood site (external).
const HOME = "/";
const HARRY = "/history/harry-c-fryman";
const RANCH = "/history/fryman-ranch";
const CONTACT = "/contact";
const WEST_LAURELWOOD = "https://www.laurelwoodestates.com";

const DIR = "/images/development-history/";

// Inline link styles for the two band tones (mirrors the Harry C. Fryman page).
const linkOnWhite =
  "text-gold-600 hover:text-gold-500 underline underline-offset-2 transition-colors";
const linkOnNavy =
  "text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors";

type GalleryPhoto = { src: string; alt: string; caption: string };

// Build a caption from the filename (the file on disk keeps its real name):
//   - strip the extension; fix the "Rach" -> "Ranch" typo in the text
//   - KEEP a leading street number (addresses show)
//   - KEEP a trailing 4-digit year, set off with a comma ("... Road 1941" ->
//     "... Road, 1941")
//   - STRIP a trailing 1-2 digit dedupe/sequence suffix, whether space-separated
//     ("Fryman Road 5" -> "Fryman Road") or attached ("Briarvale2" -> "Briarvale")
const cleanName = (file: string) => {
  let name = file.replace(/\.[^.]+$/, "").replace(/Rach/g, "Ranch");
  if (/\s\d{4}$/.test(name)) {
    name = name.replace(/\s(\d{4})$/, ", $1"); // trailing year -> ", YYYY"
  } else if (/\s\d{1,2}$/.test(name)) {
    name = name.replace(/\s\d{1,2}$/, ""); // " 2", " 5" sequence suffix
  } else if (/\D\d{1,2}$/.test(name)) {
    name = name.replace(/(\D)\d{1,2}$/, "$1"); // attached suffix: Briarvale2
  }
  return name;
};

const buildPhotos = (files: readonly string[]): GalleryPhoto[] =>
  files.map((file) => {
    const name = cleanName(file);
    return {
      // encodeURI preserves the path slashes while escaping the spaces in the
      // original filenames.
      src: encodeURI(DIR + file),
      alt: `${name}: Fryman Estates (formerly Briarcliff Manor Estates), Studio City.`,
      caption: name,
    };
  });

/** Framed-photo gallery: cream plate, fixed 4:3 image, italic caption beneath.
 *  Matches the Harry C. Fryman page's photo treatment. Three columns on large
 *  screens, two on small, one on mobile. */
function Gallery({
  photos,
  tone,
}: {
  photos: GalleryPhoto[];
  tone: "navy" | "white";
}) {
  const captionColor = tone === "navy" ? "text-ink-300" : "text-navy-950/60";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
      {photos.map((p) => (
        <figure key={p.src}>
          <div className="bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption
            className={`mt-3 text-sm italic leading-relaxed ${captionColor}`}
          >
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function DevelopmentHistoryPage() {
  const galleryA = buildPhotos(c.galleryA.files);
  const galleryB = buildPhotos(c.galleryB.files);
  const tractSrc = encodeURI(DIR + c.launch.tract.file);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${c.hero.titleLines.join(" ")} | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: absoluteUrl("/history/development-history"),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    about: {
      "@type": "Place",
      name: "Fryman Estates (Briarcliff Manor Estates)",
      description:
        "A secluded hillside neighborhood in Studio City, Los Angeles, first marketed in 1939 as Briarcliff Manor Estates.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO (image): a representative early home */}
      <PageHero
        image={encodeURI(DIR + c.hero.image)}
        alt={c.hero.alt}
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.titleLines[0]}
            <br />
            {c.hero.titleLines[1]}
          </>
        }
        subtitle={c.hero.subtitle}
        objectPosition="center top"
        scrim="dark"
      />

      {/* INTRO + SPANISH ORIGINS (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <p className="text-xl md:text-2xl text-navy-950/80 leading-relaxed mb-12 md:mb-16">
            {c.intro.lead}
            <Link href={HOME} className={linkOnWhite}>
              {c.intro.homeText}
            </Link>
            {c.intro.rest}
          </p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.spanish.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <p className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            {c.spanish.lead}
            <Link href={HARRY} className={linkOnWhite}>
              {c.spanish.harryText}
            </Link>
            {c.spanish.rest}
          </p>
        </div>
      </section>

      {/* 1939 LAUNCH (NAVY): prose, featured tract image, then Gallery A */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.launch.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <div className="text-lg md:text-xl text-ink-100 leading-relaxed">
            <p className="mb-6">{c.launch.body[0]}</p>
            <p className="mb-0">{c.launch.body[1]}</p>
          </div>

          {/* Featured tract-agent photo, centered, caption beneath */}
          <figure className="mt-12 mx-auto max-w-2xl">
            <div className="bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={tractSrc}
                  alt={c.launch.tract.alt}
                  fill
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-sm italic leading-relaxed text-ink-300">
              {c.launch.tract.caption}
            </figcaption>
          </figure>

          {/* Lead-in + Gallery A: the land before it was built */}
          <p className="mt-16 text-lg md:text-xl text-ink-100 leading-relaxed">
            {c.launch.galleryLeadIn.lead}
            <Link href={RANCH} className={linkOnNavy}>
              {c.launch.galleryLeadIn.ranchText}
            </Link>
            {c.launch.galleryLeadIn.rest}
          </p>
          <h3 className="mt-10 mb-8 eyebrow text-gold-500">
            {c.galleryA.label}
          </h3>
          <Gallery photos={galleryA} tone="navy" />
        </div>
      </section>

      {/* 1940s-50s GROWTH (WHITE): prose, then Gallery B */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.growth.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <p className="mb-6">{c.growth.intro}</p>
            <p className="mb-6">
              {c.growth.chapmanLead}
              <a
                href={WEST_LAURELWOOD}
                target="_blank"
                rel="noopener noreferrer"
                className={linkOnWhite}
              >
                {c.growth.westLaurelwoodText}
              </a>
              {c.growth.chapmanRest}
            </p>
            <p className="mb-0">{c.growth.closing}</p>
          </div>

          <h3 className="mt-14 mb-8 eyebrow text-gold-600">
            {c.galleryB.label}
          </h3>
          <Gallery photos={galleryB} tone="white" />
        </div>
      </section>

      {/* TODAY (NAVY) */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.today.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <div className="text-lg md:text-xl text-ink-100 leading-relaxed">
            <p className="mb-6">{c.today.body[0]}</p>
            <p className="mb-0">{c.today.body[1]}</p>
          </div>
        </div>
      </section>

      {/* INTERESTED IN BUYING OR SELLING (WHITE): the page's verbatim closing
          CTA, with the agent contact link and a button to /contact. */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.cta.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed">
            <p className="mb-6">{c.cta.body}</p>
            <p className="mb-10">
              {c.cta.closingLead}
              <Link href={CONTACT} className={linkOnWhite}>
                {c.cta.contactText}
              </Link>
              {c.cta.closingRest}
            </p>
          </div>
          <Link
            href={CONTACT}
            className="inline-flex items-center justify-center bg-navy-950 hover:bg-gold-600 text-white px-10 py-4 text-[12px] uppercase transition-colors duration-300"
            style={{ letterSpacing: "0.25em" }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
