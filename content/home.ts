// content/home.ts
// Render-ready copy for the Fryman Estates home page (kept out of components per
// the architecture rule). Home body copy is the original Fryman Wix wording,
// restored verbatim (lush/prestige voice) per the client's direction.

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
    heading: "Prestige, Privacy, and Proximity",
    body: [
      "As local Studio City real estate experts, we understand that location is everything when buying or selling a home. Fryman Estates real estate offers an exceptional opportunity to live in one of the most exclusive and private neighborhoods in Los Angeles. With its rare combination of seclusion, luxury homes, and proximity to top LA destinations, Fryman Estates stands out as a coveted hillside enclave.",
      "Located just minutes from Beverly Hills, Hollywood, and the Sunset Strip, this scenic neighborhood blends the peaceful charm of canyon living with easy access to city life. Residents enjoy gated drives, spacious estate properties, and direct access to Fryman Canyon Park, a favorite spot for hiking and outdoor recreation.",
      "Tucked behind Mulholland Drive and surrounded by mature trees and lush canyon terrain, Fryman Estates homes for sale are known for their architectural significance, privacy, and natural beauty. Whether you're seeking a secluded retreat or an investment in Studio City luxury real estate, Fryman offers a unique opportunity to own in one of LA's most desirable neighborhoods.",
      "Scroll down to view real-time commute data from Fryman Estates to key Los Angeles destinations and see how conveniently connected this hillside sanctuary truly is.",
    ],
  },

  history: {
    heading: "A Hillside Neighborhood Shaped by Its History",
    body: [
      "Nestled along Mulholland Drive and surrounded by the natural beauty of Fryman Canyon, Fryman Estates is one of the most prestigious and desirable hillside neighborhoods in Los Angeles. With a history dating back nearly a century, this area is recognized for its architectural excellence, deep sense of privacy, and preserved environment. Towering oak trees line the winding streets, and Fryman Canyon Park offers scenic hiking trails just steps from many homes.",
      "The long-standing appeal of Fryman Estates real estate lies in its thoughtful neighborhood planning, commitment to preservation, and collection of custom-built homes. Architectural styles include Mid-Century Modern, Contemporary, and other distinguished designs. Many properties offer gated entrances, expansive views, and lush landscaping that reflect the pride of ownership found throughout the community.",
      "Whether you are looking to purchase a home in Fryman Estates or want to learn more about the history of this iconic Studio City neighborhood, Fryman offers a rare combination of timeless character, modern comfort, and unmatched privacy. It remains one of the most respected and exclusive addresses in all of Studio City.",
    ],
  },

  boundary: {
    heading: "Explore the Fryman Estates Boundaries",
    body: [
      "Fryman Estates occupies a clearly defined pocket of hillside terrain in Studio City, shaped by both geography and long-standing community preservation efforts. The boundaries shown on the map below reflect the area long recognized for its architectural continuity, mature landscaping, and commitment to maintaining the neighborhood's identity.",
      "With winding roads, limited access points, and natural canyon borders, Fryman Estates offers a secluded setting that provides privacy while remaining closely connected to the fabric of Studio City and greater Los Angeles. This balance between thoughtful planning and preserved natural surroundings is part of what makes the community so enduringly desirable.",
      "To better understand the layout and landscape of Fryman Estates, see the map below. It illustrates how the area's topography, accessibility, and long-standing design contribute to the neighborhood's exclusivity and lasting appeal.",
    ],
  },

  architecture: {
    eyebrow: "Architecture",
    heading: "Architectural Highlights: Evolving Homes Rooted in Ranch Design",
    body: "Many Fryman Estates homes began as ranch-style residences laid out to follow the contours of the hillside. Over the years they have been expanded and rebuilt into a range of styles, from Mid-Century Modern to Traditional to Contemporary, while keeping a consistent feel across the neighborhood. Large lots, mature oak trees, and layouts shaped by the terrain carry through the variety, so the homes read as distinct without feeling unrelated.",
  },

  heritage: {
    eyebrow: "Heritage",
    title: "Where Heritage Lives Beneath the Trees",
    body: [
      "Fryman Estates is known for its peaceful setting, mature landscaping, and enduring sense of character. Tree-lined streets wind through the hills, with homes often tucked behind gates and framed by native vegetation. Towering oak and sycamore trees, some more than 400 years old, create a natural canopy that defines the neighborhood's visual identity and contributes to its timeless appeal.",
      "This lush hillside environment, combined with architectural variety and a strong sense of privacy, makes Fryman Estates one of the most treasured residential enclaves in Studio City. The result is a neighborhood that feels secluded yet deeply rooted in the broader landscape of Los Angeles real estate.",
    ],
    oakCaption: "This 400-year-old oak tree in Fryman Estates stood on the property of Hollywood elite, including former owners Mickey Rooney and Drew Barrymore. One of its branches held a swing that Judy Garland and other guests were known to enjoy.",
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
