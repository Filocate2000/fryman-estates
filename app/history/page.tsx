import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "The history of Fryman Canyon Estates in Studio City. This page is in progress.";

export const metadata: Metadata = {
  title: "History",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/history") },
  openGraph: { title: "History", description: DESCRIPTION, url: absoluteUrl("/history") },
};

export default function HistoryPage() {
  // Minimal WebPage JSON-LD from siteConfig (stub; expand when history ships).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `History | ${siteConfig.name}`,
    description: DESCRIPTION,
    url: absoluteUrl("/history"),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={siteConfig.name}
        title="History"
        subtitle="The story of the Fryman Canyon Estates neighborhood."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="editorial">
          <p className="text-navy-950/70 leading-relaxed">
            Fryman history content is in progress.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
