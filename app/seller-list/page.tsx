import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SellerListForm } from "@/components/sections/SellerListForm";
import { absoluteUrl } from "@/lib/site-config";

// Files under public/images/looking-to-buy/ retain spaces/capitals, so encode
// the file segment (the folder is clean kebab-case). Matches the history pages.
const DIR = "/images/looking-to-buy/";
const pic = (file: string) => encodeURI(DIR + file);
const FRAME =
  "bg-[#f6f3ec] border border-gold-500/50 p-3 shadow-[0_8px_24px_rgba(0,0,0,0.22)]";

const DESCRIPTION =
  "Join the confidential Fryman Estates Seller List: discreet introductions to qualified, vetted buyers before a home ever reaches the MLS.";

export const metadata: Metadata = {
  title: "Join Confidential Sellers List",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/seller-list") },
  openGraph: {
    title: "Join Confidential Sellers List",
    description: DESCRIPTION,
    url: absoluteUrl("/seller-list"),
  },
};

// Copy ported verbatim from the live Wix page (frymanestates.com/seller-list).
// Stored as constants and rendered via {expressions} so apostrophes/quotes need
// no JSX entity escaping. NO em dashes (none in the source).
const INTRO_1 =
  "Not every Fryman Estates homeowner is ready to sell. Many would consider it if the right price or buyer came along. For others, privacy is critical. They do not want neighbors or the public to know their home is being offered. That is why we created our Seller List.";
const INTRO_2 =
  "By joining, you gain access to our exclusive network of qualified buyers who are actively searching for homes in Fryman Estates. These buyers are vetted, serious, and often willing to make compelling offers before a home ever appears on the MLS.";

const WHY_JOIN = [
  "Explore what your home could command in today's market without any obligation to sell",
  "Maintain complete privacy. Only qualified buyers are introduced when you are ready",
  "Gain insight into the types of homes our exclusive Buyer List is actively seeking",
  "Stay informed about neighborhood trends, private sales, and Fryman-specific buyer demand",
  "Quietly test the market without open houses or public exposure",
];

const WHAT_WE_PROVIDE = [
  "Exclusive updates on Fryman Estates buyer demand",
  "Private communication with serious, vetted buyers matched to your property profile",
  "Market insight into which features and locations are commanding premium prices",
  "Flexible options with no obligation to move forward unless the timing and offer are right for you",
];

const CLOSING =
  "Whether you're ready to sell soon or simply want to stay connected to the Fryman Estates market, joining our Seller List ensures you'll always have the inside track. We've lived and worked in this community since the 1970s, and no one understands Fryman Estates better than we do.";

export default function SellerListPage() {
  return (
    <>
      <PageHero
        image={pic("Front Gate.jpg")}
        alt="Private gated entrance to a Fryman Canyon Estates home"
        title="Join the Fryman Estates Seller List"
        subtitle="Discreet. Informed. Connected."
        scrim="dark"
      />

      {/* Intro + value sections (white band) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <div className="space-y-5 text-navy-950/75 leading-relaxed text-lg">
            <p>{INTRO_1}</p>
            <p>{INTRO_2}</p>
          </div>

          <div className="mt-14">
            <p className="eyebrow text-gold-600 mb-4">Why Join the Seller List</p>
            <span className="gold-rule-dark mb-6" />
            <ul className="space-y-2 text-navy-950/75 leading-relaxed list-disc pl-6">
              {WHY_JOIN.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <p className="eyebrow text-gold-600 mb-4">What We Provide</p>
            <span className="gold-rule-dark mb-6" />
            <ul className="space-y-2 text-navy-950/75 leading-relaxed list-disc pl-6">
              {WHAT_WE_PROVIDE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form (navy band) */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <div className="mx-auto max-w-2xl">
            {/* Framed image to warm the navy band (single-column layout kept). */}
            <figure className="mb-12">
              <div className={FRAME}>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={pic("Backyard Landscape.jpg")}
                    alt="Private backyard and canyon landscaping at a Fryman Canyon Estates home"
                    fill
                    sizes="(min-width: 768px) 42rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </figure>

            <p className="eyebrow text-gold-500 mb-4">Confidential Property Information</p>
            <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-6">
              Tell us about your home.
            </h2>
            <span className="gold-rule mb-8" />
            {/* TODO: supply the real intro line for the "Confidential Property
                Information" section. The live Wix page shows a placeholder
                ("Add paragraph text. Click 'Edit Text'...") here, which is a bug
                and is intentionally NOT reproduced. */}

            <SellerListForm closing={CLOSING} />
          </div>
        </div>
      </section>
    </>
  );
}
