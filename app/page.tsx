import { Hero } from "@/components/sections/Hero";
import { CommuteWidget } from "@/components/sections/CommuteWidget";
import { FrymanBoundary } from "@/components/sections/FrymanBoundary";
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

      {/* 1. Welcome (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <p className="eyebrow text-gold-600 mb-4">{c.welcome.eyebrow}</p>
          <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-6 leading-tight">
            {c.welcome.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <p className="text-lg md:text-xl text-navy-950/75 leading-relaxed max-w-4xl">
            {c.welcome.body}
          </p>
        </div>
      </section>

      {/* 2. Commute widget (NAVY) */}
      <CommuteWidget />

      {/* 3. History narrative (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
          <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-5">
            {c.history.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <div className="text-lg md:text-xl text-navy-950/75 leading-relaxed space-y-5 max-w-4xl">
            {c.history.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fryman boundary (NAVY) - single enclave, gradient placeholder */}
      <FrymanBoundary />

      {/* 5. Architectural highlights (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16 max-w-4xl">
          <p className="eyebrow text-gold-600 mb-4">{c.architecture.eyebrow}</p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-navy-950 mb-5">
            {c.architecture.heading}
          </h2>
          <span className="gold-rule-dark mb-8" />
          <p className="text-lg text-navy-950/75 leading-relaxed">
            {c.architecture.body}
          </p>
        </div>
      </section>

      {/* 6. Heritage / the oaks (NAVY) */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-16 max-w-4xl">
          <p className="eyebrow text-gold-500 mb-4">{c.heritage.eyebrow}</p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
            {c.heritage.title}
          </h2>
          <span className="gold-rule mb-8" />
          <p className="text-lg text-ink-100 leading-relaxed mb-10">{c.heritage.body}</p>
          <figure className="border-l-2 border-gold-500/60 pl-6">
            <p className="text-lg text-ink-100/90 italic leading-relaxed">
              {c.heritage.oakCaption}
            </p>
          </figure>
        </div>
      </section>

      {/* 7. Why Misraje (WHITE) */}
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-16">
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

      {/* 8. Testimonials */}
      <TestimonialsSection testimonials={c.testimonials} />

      {/* 9. Contact CTA */}
      <ContactCTA />
    </>
  );
}
