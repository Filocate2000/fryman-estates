import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/Prose";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { loadDoc } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Buying in Fryman Canyon Estates with Misraje Real Estate Partners. A guide to this competitive, sought-after Studio City market.";

export const metadata: Metadata = {
  title: "Buying in Fryman Canyon Estates",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/buying") },
  openGraph: { title: "Buying in Fryman Canyon Estates", description: DESCRIPTION, url: absoluteUrl("/buying") },
};

export default function BuyingPage() {
  const body = loadDoc("buying");
  return (
    <>
      <PageHero
        eyebrow="Experience Fryman Canyon Estates"
        title="Buying in Fryman Canyon Estates"
        subtitle="What you need to know about a competitive, sought-after market."
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
