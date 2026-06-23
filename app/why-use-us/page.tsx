import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/Prose";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { loadDoc } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Why work with Misraje Real Estate Partners in Fryman: strategy, marketing, off-market access, and decades of proven results for buyers and sellers in the Studio City canyon.";

export const metadata: Metadata = {
  title: "Why Use Us",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/why-use-us") },
  openGraph: { title: "Why Use Us", description: DESCRIPTION, url: absoluteUrl("/why-use-us") },
};

export default function WhyUseUsPage() {
  const body = loadDoc("why-use-us");
  return (
    <>
      <PageHero
        image="/images/fryman/why-use-us.jpg"
        alt="A covered patio opening to a pool and hillside garden in Fryman Estates, Studio City."
        scrim="dark"
        eyebrow="Our Practice"
        title="Why Use Us"
        subtitle="Representation built for the Fryman market."
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
