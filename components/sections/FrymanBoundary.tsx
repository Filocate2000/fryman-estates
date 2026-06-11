import { homeContent } from "@/content/home";

// Single-enclave boundary band. Fryman has no sub-neighborhoods and no boundary
// polygon asset yet, so this is a gradient placeholder with one outline, in
// place of laurelwood's two-tone Google Maps overlay. Swap in a real map when a
// boundary asset exists.
export function FrymanBoundary() {
  const b = homeContent.boundary;
  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="w-full px-6 md:px-16">
        <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5">
          {b.heading}
        </h2>
        <span className="gold-rule mb-10" />
        <p className="text-lg text-ink-100 leading-relaxed mb-10 max-w-4xl">{b.body}</p>
        <div
          className="relative overflow-hidden border-2 border-gold-500/70"
          style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.35)" }}
        >
          <div
            className="relative w-full"
            style={{
              height: "clamp(360px, 52vh, 540px)",
              background:
                "radial-gradient(ellipse 80% 80% at 50% 40%, #1a3a66 0%, #0F2547 55%, #07172e 100%)",
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 400 260"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M70 150 C70 95 130 60 205 62 C285 64 340 100 335 150 C330 200 270 220 195 216 C120 212 70 200 70 150 Z"
                fill="rgba(200,167,90,0.06)"
                stroke="rgba(200,167,90,0.55)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="eyebrow text-ink-300">Boundary map coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
