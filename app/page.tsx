import { Hero } from "@/components/sections/Hero";
import { CommuteWidget } from "@/components/sections/CommuteWidget";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { homeContent } from "@/content/home";

export const metadata = {
  description:
    "Fryman Estates: the hyperlocal guide to the Fryman Canyon neighborhood of Studio City, presented by Misraje Real Estate Partners.",
};

export default function HomePage() {
  const c = homeContent;

  return (
    <>
      <Hero />

      {/* Intro band (navy) */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="editorial max-w-4xl">
          <p className="eyebrow text-gold-500 mb-4">{c.intro.eyebrow}</p>
          <h2 className="font-display font-light text-display text-white mb-6 leading-tight">
            {c.intro.heading}
          </h2>
          <span className="gold-rule mb-8" />
          <div className="space-y-5 text-lg text-ink-100 leading-relaxed">
            {c.intro.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Misraje (white) */}
      <section className="bg-white py-20 md:py-28">
        <div className="editorial">
          <div className="mb-16 max-w-4xl">
            <p className="eyebrow text-gold-600 mb-4">{c.why.eyebrow}</p>
            <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-navy-950 leading-[1.1]">
              {c.why.heading}
            </h2>
            <span className="gold-rule-dark mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {c.why.points.map((p, i) => (
              <div key={p.title} className="group">
                <div
                  className="text-gold-600 font-display text-sm mb-4"
                  style={{ letterSpacing: "0.25em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-light text-2xl text-navy-950 mb-4 group-hover:text-gold-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-navy-950/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commute times (navy) */}
      <CommuteWidget />

      {/* Testimonials (white) */}
      <TestimonialsSection testimonials={c.testimonials} />

      {/* Contact CTA (white) */}
      <ContactCTA />
    </>
  );
}
