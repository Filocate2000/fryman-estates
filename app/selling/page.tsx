import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/Prose";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { loadDoc } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Selling in Fryman Estates: how Misraje Real Estate Partners positions and markets homes in this Studio City neighborhood for the strongest possible result.";

export const metadata: Metadata = {
  title: "Selling in Fryman Estates",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/selling") },
  openGraph: { title: "Selling in Fryman Estates", description: DESCRIPTION, url: absoluteUrl("/selling") },
};

export default function SellingPage() {
  const body = loadDoc("selling");
  return (
    <>
      <PageHero
        eyebrow="Experience Fryman Estates"
        title="Selling in Fryman Estates"
        subtitle="A strategy built around the neighborhood's specific buyers."
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
