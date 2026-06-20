// content/buying.ts
// Render-ready copy for the Buying page (kept out of the component per the
// architecture rule, mirroring content/home.ts). STARTER COPY: neighborhood
// flavor without invented hard facts (no prices, counts, school names, or
// stats). Review and correct anything neighborhood-specific.
//
// Image filenames live under public/images/looking-to-buy/. The page builds the
// final URL with encodeURI on the file segment (the files retain spaces and
// capitals), so reference them here by their real on-disk names.

export type BuyPoint = { title: string; body: string };
export type BuyPhoto = { file: string; alt: string; caption?: string };

export const buyingContent = {
  hero: {
    image: "Front of House.jpg",
    eyebrow: "Experience Fryman Canyon Estates",
    title: "Buying in Fryman Canyon Estates",
    subtitle: "What you need to know about a competitive, sought-after market.",
  },

  welcome: {
    eyebrow: "Buying in Fryman Estates",
    heading: "A neighborhood worth the wait.",
    body: [
      "Fryman Canyon Estates is a small, private enclave in the Studio City hills, and homes here rarely come to market in large numbers. For buyers, that scarcity is part of the appeal: an address behind the gates and mature oaks of Fryman carries a sense of seclusion that is hard to find this close to the city.",
      "Most of the homes sit on hillside lots shaped by the terrain, with architecture that ranges from the neighborhood's original ranch-style residences to Mid-Century Modern and Contemporary rebuilds. No two streets feel quite the same, yet the canyon setting, the landscaping, and the privacy carry through the whole neighborhood.",
      "Because so little trades in any given year, buying well here is as much about timing and relationships as it is about the search itself. The earlier you are positioned and ready, the better your odds when the right home appears.",
    ],
    featureImage: {
      file: "oakdell_residence_assembledge_lo.jpg",
      alt: "Architect-designed contemporary residence in Fryman Canyon Estates",
      caption: "Architect-designed homes are a hallmark of the neighborhood.",
    } as BuyPhoto,
  },

  market: {
    eyebrow: "The Market",
    heading: "What to expect as a buyer here.",
    body: [
      "Inventory in Fryman is limited, and the best homes often move quickly and quietly. Some never reach the open market at all, changing hands through the relationships that hold a small neighborhood together.",
      "That makes preparation the single biggest advantage a buyer can have. Knowing what you are looking for, understanding how a hillside lot lives, and being ready to act with confidence all matter more here than in a higher-volume market.",
      "It also means a local guide is worth a great deal. Having someone who knows the streets, the architecture, and the owners can be the difference between hearing about a home in time and learning it sold after the fact.",
    ],
    image: {
      file: "Front Gate Main.jpg",
      alt: "Private gated entrance to a Fryman Canyon Estates property",
      caption: "Gated, private drives are common throughout Fryman.",
    } as BuyPhoto,
  },

  gallery: {
    eyebrow: "Inside the Homes",
    heading: "A look at how these homes live.",
    intro:
      "A sense of the interiors, outdoor spaces, and canyon settings buyers find across the neighborhood.",
    photos: [
      { file: "Living Room.jpg", alt: "Light-filled living room in a Fryman Canyon Estates home" },
      { file: "Kitchen.jpg", alt: "Updated kitchen in a Fryman Canyon Estates home" },
      { file: "Backyard Pool.jpg", alt: "Backyard pool framed by canyon landscaping" },
      { file: "Den.jpg", alt: "Comfortable den with warm natural light" },
      { file: "Backyard Full View.jpg", alt: "Full view of a private backyard and hillside setting" },
      { file: "Dinning Table.jpg", alt: "Dining area open to the main living space" },
    ] as BuyPhoto[],
  },

  approach: {
    eyebrow: "How We Help Buyers",
    heading: "Representation built on local knowledge.",
    points: [
      {
        title: "Quiet, off-market access",
        body: "Through long-standing relationships with owners and local agents, we often hear about Fryman homes before they reach the MLS, which matters where so little trades and privacy is the norm.",
      },
      {
        title: "A neighbor's read on value",
        body: "Karen and Jack have known this area since the 1970s. That familiarity shapes how we read a hillside lot, an architectural style, and what a given street can command.",
      },
      {
        title: "Steady in a competitive offer",
        body: "When the right home appears it can draw real competition. We help you move with confidence, structure a strong offer, and negotiate calmly with your interests first.",
      },
    ] as BuyPoint[],
  },
};
