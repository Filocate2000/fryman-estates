import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/Prose";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { loadDoc } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Misraje Real Estate Partners, the practice of Karen and Jack Misraje, representing buyers and sellers in Fryman Estates and Studio City. The #1 Two-Member Team in Coldwell Banker Global Luxury.";

export const metadata: Metadata = {
  title: "Who We Are",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/who-we-are") },
  openGraph: { title: "Who We Are", description: DESCRIPTION, url: absoluteUrl("/who-we-are") },
};

export default function WhoWeArePage() {
  const body = loadDoc("who-we-are");
  return (
    <>
      <PageHero
        image="/images/fryman/who-we-are.jpg"
        alt="A mid-century home with a fire feature and landscaped grounds in Fryman Estates, Studio City."
        scrim="dark"
        eyebrow="The Firm"
        title="Who We Are"
        subtitle="A two-principal practice working the Fryman canyon streets of Studio City."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="editorial">
          <Prose variant="light">{body}</Prose>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
