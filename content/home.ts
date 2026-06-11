// content/home.ts
// Render-ready copy for the Fryman Estates home page (kept out of components per
// the architecture rule). NO em dashes.

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
    italicLine: "Canyon living, minutes from the city.",
  },

  welcome: {
    eyebrow: "Why Location Matters in Fryman Estates, Studio City",
    heading: "Welcome to Fryman Estates in Studio City",
    body: "Fryman Estates sits in the Studio City hills, a few minutes from Beverly Hills, Hollywood, and the Sunset Strip. The streets are quiet and the lots are large, with gated drives and estate-scale properties set back from the road. Fryman Canyon Park is close enough to reach on foot, so its trails are part of daily life here. Tucked behind Mulholland Drive among mature trees and canyon terrain, the neighborhood keeps its distance from the city while staying a short drive from it.",
  },

  history: {
    heading: "A Hillside Neighborhood Shaped by Its History",
    body: [
      "Fryman Estates runs along Mulholland Drive, wrapped by the open space of Fryman Canyon. Its story reaches back close to a century, and the neighborhood still carries that history in its streets, its trees, and its homes.",
      "Much of what defines the area is the result of deliberate choices: careful planning, a long record of preservation, and a preference for custom-built homes that work with the hillside rather than against it. Towering oaks shade the winding streets, and the canyon around them has been kept largely intact.",
      "The homes range from Mid-Century Modern to Contemporary, with privacy and a connection to the landscape common to nearly all of them. It is a hillside neighborhood that has held onto its character as the rest of Los Angeles grew around it.",
    ],
  },

  boundary: {
    heading: "Explore the Fryman Estates Boundaries",
    body: "Fryman Estates occupies a defined pocket of hillside in Studio City, bordered by canyon terrain and a handful of winding access roads. The shape of the neighborhood follows the land and a long effort to keep it intact, private while staying close to the rest of Studio City and Los Angeles.",
  },

  architecture: {
    eyebrow: "Architecture",
    heading: "Architectural Highlights: Evolving Homes Rooted in Ranch Design",
    body: "Many Fryman Estates homes began as ranch-style residences laid out to follow the contours of the hillside. Over the years they have been expanded and rebuilt into a range of styles, from Mid-Century Modern to Traditional to Contemporary, while keeping a consistent feel across the neighborhood. Large lots, mature oak trees, and layouts shaped by the terrain carry through the variety, so the homes read as distinct without feeling unrelated.",
  },

  heritage: {
    eyebrow: "Heritage",
    title: "Where Heritage Lives Beneath the Trees",
    body: "Tree-lined streets and mature landscaping run through Fryman Estates, with many homes set behind gates and framed by native growth. Oak and sycamore trees, some of them centuries old, form a canopy that gives the neighborhood much of its character.",
    oakCaption: "One oak here is thought to be around 400 years old. It stood on a property whose former owners included Mickey Rooney and Drew Barrymore, and one of its branches once held a swing that Judy Garland and other guests were known to use.",
  },

  why: {
    eyebrow: "Why Misraje",
    heading: "The advantage of working with neighbors.",
    points: [
      {
        title: "Unmatched local expertise",
        body: "Karen and Jack have been part of this area since the 1970s, with decades of firsthand knowledge of Fryman Estates and Studio City: its topography, its architecture, and how the neighborhood came to be.",
      },
      {
        title: "A neighbor's read on the market",
        body: "That long familiarity shapes every recommendation and negotiation, from how a hillside lot lives to what a given street commands.",
      },
      {
        title: "Quiet, off-market access",
        body: "Through long-standing relationships with owners and local agents, we often hear about homes before they reach the MLS, which matters in a small neighborhood where privacy is the norm.",
      },
    ] as WhyPoint[],
  },

  testimonials: [
    {
      id: "sprecher",
      clientName: "Jill Sprecher",
      property: "Seller · Iredell Street",
      body: "I had several in-depth conversations with Karen and Jack about how best to bring my home to market. After weighing a few strategies, I followed their recommendation to price just below market value for the conditions at the time, and it worked exactly as they predicted. We received eight offers, and they walked me through the pros and cons of each. Their calm, confident handling of the negotiations gave me peace of mind, and the home sold for significantly more than the asking price.",
    },
    {
      id: "hyndman",
      clientName: "Leanna Hyndman",
      property: "Buyer · Oakdell Road",
      body: "Working with Karen and Jack made a real difference during a tough negotiation. They were clear, communicative, and patient, explained the process thoroughly, and kept me informed at every step. Their negotiating was calm and strategic and always focused on my best interest, even during contentious moments. I felt fully supported throughout and could not have asked for a better team to guide me through the purchase of my home on Oakdell Road.",
    },
    {
      id: "vega",
      clientName: "Charleen & Rafael Vega",
      property: "Casa Vega · Fryman Road",
      body: "We purchased our home with Karen and Jack and later returned to them to handle the sale. Their background in the industry made the process stress-free, and their marketing was a streamlined presentation that drew many prospective buyers. They generated a strong offer shortly after the home came to market and negotiated terms that served our particular needs. Best of all, the home sold at the full asking price. This is our sixth transaction with them.",
    },
  ] as Testimonial[],

  video: null as { id: string; title: string; subject: string } | null,
};
