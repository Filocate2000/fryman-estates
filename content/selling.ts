// content/selling.ts
// Render-ready copy for the Selling page (kept out of the component, mirroring
// content/buying.ts). Seller-voice parallel to content/buying.ts. NO em dashes
// per the content style guide.
//
// Images live under public/images/looking-to-sell/ and are referenced by their
// real on-disk filenames (the page encodeURI-encodes the file segment).

export type SellPoint = { title: string; body: string };
export type SellPhoto = { file: string; alt: string; caption?: string };

export const sellingContent = {
  hero: {
    image: "44.jpg",
    eyebrow: "Experience Fryman Canyon Estates",
    title: "Selling in Fryman Canyon Estates",
    subtitle: "What you need to know about a discreet, high-demand market.",
  },

  welcome: {
    eyebrow: "Selling in Fryman Estates",
    heading: "A neighborhood buyers wait for.",
    body: [
      "Fryman Canyon Estates is a small, private enclave in the Studio City hills, and homes here rarely come to market in large numbers. For sellers, that scarcity works in your favor: an address behind the gates and mature oaks of Fryman carries a seclusion that buyers actively seek out and are willing to wait for.",
      "Most of the homes sit on hillside lots shaped by the terrain, with architecture that ranges from the neighborhood's original ranch-style residences to Mid-Century Modern and Contemporary rebuilds. That variety means each home tells its own story, and presenting that story well is what separates a good result from an exceptional one.",
      "Because so little trades in any given year, selling well here is as much about positioning and relationships as it is about the listing itself. The right buyer is often already waiting. The work is reaching them at the right moment, on the right terms.",
    ],
    featureImage: {
      file: "12141_Iredell_Ave_13-1636149775.jpg",
      alt: "Home in Fryman Canyon Estates",
    } as SellPhoto,
  },

  market: {
    eyebrow: "The Market",
    heading: "What to expect as a seller here.",
    body: [
      "Inventory in Fryman is limited, and the best homes often move quickly and quietly. Some never reach the open market at all, changing hands through the relationships that hold a small neighborhood together, which gives you real choice in how, and how publicly, you sell.",
      "That makes preparation the single biggest advantage a seller can have. Pricing a hillside property correctly, knowing which improvements buyers here actually value, and timing your entry to the market all matter more than in a higher-volume area.",
      "It also means a local guide is worth a great deal. Having someone who knows the streets, the architecture, and a roster of qualified buyers can be the difference between a slow listing and a confident, well-negotiated sale.",
    ],
    image: {
      file: "12141_Iredell_Ave_36-1636149937.jpg",
      alt: "Home in Fryman Canyon Estates",
    } as SellPhoto,
  },

  gallery: {
    eyebrow: "Inside the Homes",
    heading: "A look at how these homes show.",
    intro:
      "A sense of the interiors, outdoor spaces, and canyon settings that draw buyers to the neighborhood, and a feel for how we position a Fryman home to show its strongest self.",
    photos: [
      { file: "23.jpg", alt: "Home in Fryman Canyon Estates" },
      { file: "3280_Fryman_Rd_017-1542056973.jpg", alt: "Interior of a Fryman Canyon Estates home" },
      { file: "3280_Fryman_Rd_028-1542057127.jpg", alt: "Interior of a Fryman Canyon Estates home" },
      { file: "3280_Fryman_Rd_039-1542057297.jpg", alt: "Outdoor space at a Fryman Canyon Estates home" },
      { file: "3280_Fryman_Rd_042-1542057372.jpg", alt: "Outdoor space at a Fryman Canyon Estates home" },
      { file: "9.jpg", alt: "Home in Fryman Canyon Estates" },
    ] as SellPhoto[],
  },

  approach: {
    eyebrow: "How We Help Sellers",
    heading: "Representation built on local knowledge.",
    points: [
      {
        title: "Quiet, off-market reach",
        body: "Through long-standing relationships with owners and local agents, we can introduce your home to qualified buyers before it ever reaches the MLS, valuable when privacy is the norm and discretion is the goal.",
      },
      {
        title: "A neighbor's read on value",
        body: "Karen and Jack have known this area since the 1970s. That familiarity shapes how we price a hillside lot, position an architectural style, and identify what a given street can command.",
      },
      {
        title: "Steady through every offer",
        body: "When the right home appears it can draw real competition. We help you weigh offers clearly, hold firm where it counts, and negotiate calmly with your interests first.",
      },
    ] as SellPoint[],
  },

  cta: {
    eyebrow: "Confidential Seller List",
    heading: "Join the Fryman Estates Seller List",
    body: "Not every Fryman homeowner is ready to sell, and many would only consider it for the right buyer, with complete privacy. Our confidential Seller List lets you explore what your home could command, stay close to neighborhood demand, and be introduced to vetted buyers quietly, before anything reaches the MLS. No obligation, no public exposure.",
    buttonLabel: "Join the Seller List",
    buttonHref: "/seller-list",
  },
};
