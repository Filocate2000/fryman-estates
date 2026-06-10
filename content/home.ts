// content/home.ts
// Render-ready copy for the home page (kept out of the components per the
// architecture rule). NO em dashes.

export type Testimonial = {
  id: string;
  clientName: string;
  property: string | null;
  body: string;
};

export type WhyPoint = { title: string; body: string };

export const homeContent = {
  hero: {
    wordmark: "Fryman Estates",
    tagline: "Studio City",
    italicLine: "Country living, city convenience.",
  },

  intro: {
    eyebrow: "Welcome",
    heading: "One of Studio City's most cherished neighborhoods.",
    body: [
      "Fryman Estates sits in the hills of Studio City, above the San Fernando Valley. More about the neighborhood is on the way.",
      "This site is the work of Misraje Real Estate Partners, a mother-and-son team who live and work in Studio City.",
    ],
  },

  why: {
    eyebrow: "Why Misraje",
    heading: "The advantage of working with neighbors.",
    points: [
      {
        title: "Unmatched local expertise",
        body: "Karen and Jack know Studio City's homes, its streets, and often its owners. No one knows this area better.",
      },
      {
        title: "Local residents",
        body: "We do not just sell here, we live here. That daily, on-the-ground familiarity informs every recommendation and every negotiation.",
      },
      {
        title: "Quiet, off-market listings",
        body: "Through cultivated relationships and an exclusive coming-soon database, we offer access to private, off-market opportunities that never appear on the MLS.",
      },
    ] as WhyPoint[],
  },

  testimonials: [
    {
      id: "vega",
      clientName: "Charleen & Rafael Vega",
      property: "Casa Vega",
      body: "Karen and Jack's background in the real estate industry made the sale of our home a stress-free experience. They designed a home selling business plan that was beyond successful. Their talent in marketing our home was a streamlined presentation that attracted many prospective buyers.",
    },
    {
      id: "doryon",
      clientName: "Jeremiah & Christine Doryon",
      property: null,
      body: "Jack and Karen are pros. They guided us through everything, staging, pricing, negotiations, and their advice really paid off. Our old home got multiple offers and sold for way more than we expected. The whole escrow process was seamless.",
    },
  ] as Testimonial[],

  // YOUTUBE: no video link for this build. When a link is supplied, set `video`
  // to { id, title, subject } and the home page can render a lazy embed.
  video: null as { id: string; title: string; subject: string } | null,
};
