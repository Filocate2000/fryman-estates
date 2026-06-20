"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/home";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative bg-navy-900 border border-white/5 p-10 lg:p-12 group hover:border-gold-500/30 transition-colors duration-500 h-full">
      <span className="absolute top-6 right-8 font-serif text-gold-500/30 text-7xl leading-none">
        &ldquo;
      </span>
      <blockquote className="relative">
        <p className="text-lg md:text-xl font-light text-ink-100 leading-relaxed mb-8 italic">
          {t.body}
        </p>
        <span className="gold-rule mb-6" />
        <figcaption>
          <div className="font-display text-white text-lg">{t.clientName}</div>
          {t.property && (
            <div className="text-ink-300 text-sm mt-1" style={{ letterSpacing: "0.1em" }}>
              {t.property}
            </div>
          )}
        </figcaption>
      </blockquote>
    </figure>
  );
}

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = dir === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous reviews" : "Next reviews"}
      className="flex-none flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/15 disabled:hover:text-white"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isPrev ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function Header() {
  return (
    <div className="text-center mb-16">
      <p className="eyebrow text-gold-500 mb-4">Client Experiences</p>
      <h2 className="font-display font-light text-4xl md:text-5xl text-white">
        What our clients <span className="text-gold-500">say</span>
      </h2>
    </div>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const count = testimonials.length;

  // perView: 2 on desktop (>=768px), 1 on mobile. Tracked via matchMedia so the
  // index can be clamped when the breakpoint changes. Card widths themselves are
  // CSS-driven (basis-full md:basis-1/2), so SSR layout is correct regardless.
  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPerView(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const maxIndex = Math.max(0, count - perView);

  // Keep the index in range when perView (and thus maxIndex) changes on resize.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  if (count === 0) return null;

  // Arrows only when there are more than two reviews. With 2 or fewer there is
  // nothing to paginate, so fall back to the original static grid.
  const showArrows = count > 2;

  if (!showArrows) {
    return (
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <Header />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <Header />

        <div className="flex items-center gap-3 md:gap-4 max-w-6xl mx-auto">
          <ArrowButton
            dir="prev"
            disabled={atStart}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          />

          <div className="overflow-hidden flex-1">
            <div
              className="flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${(index * 100) / count}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="flex-none basis-full md:basis-1/2 px-4 box-border">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          <ArrowButton
            dir="next"
            disabled={atEnd}
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          />
        </div>
      </div>
    </section>
  );
}
