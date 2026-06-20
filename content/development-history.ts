// content/development-history.ts
// Render-ready copy for /history/development-history (kept out of components per
// the architecture rule). Migrated from the old Wix page (/development-history).
// Body prose is VERBATIM from docs/development-history-claude-code-prompt.md
// section 4. Two deliberate departures from a literal paste, both required by
// project rules:
//   - Section headings that used an em dash ("1939 — The Launch...") use a colon
//     instead, per the CLAUDE.md no-em-dash rule. Body text is unchanged.
//   - "West Laurelwood" is legitimate Fryman historical content here (the
//     neighboring development) and is linked out to the laurelwood site; this is
//     the one place "laurelwood" appears in the codebase by design.
//
// In-text links (home, Harry C. Fryman, Fryman Ranch, West Laurelwood, Contact)
// are wired in the page component; paragraphs that carry a link are split into
// lead / linkText / rest segments below.

export const developmentHistoryContent = {
  hero: {
    eyebrow: "Historical Information",
    // Hero H1, hard-broken into exactly two lines; joined for metadata/JSON-LD.
    titleLines: ["Development History of", "Briarcliff Manor Estates"],
    subtitle: "Now Commonly Known as Fryman Canyon Estates in Studio City",
    image: "3240 Fryman Road.jpg",
    alt: "3240 Fryman Road, an early estate home in Briarcliff Manor Estates, now Fryman Estates, Studio City.",
  },

  // Intro lede, rendered above the first section heading. Links the first
  // "Fryman Estates" to the home page.
  intro: {
    lead:
      "If you're searching for luxury homes in a centrally located hillside neighborhood near both the San Fernando Valley and Hollywood/Westside, ",
    homeText: "Fryman Estates",
    rest:
      " in Studio City stands out as one of the most desirable areas. Originally known as Briarcliff Manor Estates, this secluded enclave was first marketed in 1939 as the \"Beverly Hills of the Valley,\" a vision that continues to define the area's identity and appeal.",
  },

  spanish: {
    heading: "Spanish Origins and Early Land Ownership",
    // Links "Harry C. Fryman" to the Harry C. Fryman page.
    lead:
      "The story of Briarcliff Manor Estates begins with California's Spanish land grant era. The land was part of the original Rancho de San Fernando, later acquired by the Lankershim Ranch Land and Water Company, and ultimately subdivided under the direction of ",
    harryText: "Harry C. Fryman",
    rest: ", who owned over 1,000 acres in the hills above Ventura Boulevard.",
  },

  launch: {
    heading: "1939: The Launch of Briarcliff Manor Estates",
    body: [
      "In 1939, Beverly Crest Realty introduced the development of Briarcliff Manor Estates with Arthur M. Kelley serving as general sales manager. The area featured one- to five-acre estate lots nestled among rolling hills, mature oak and sycamore groves, and scenic ridgelines. Located just minutes from Ventura Boulevard and Mulholland Drive, the development offered an unbeatable mix of seclusion, natural beauty, and accessibility.",
      "Promoted as the ideal location for buyers seeking estate-sized parcels and country living near the city, Briarcliff Manor Estates quickly attracted a prestigious clientele. Among its early residents were entertainment industry icons like Myrna Loy, Ray Milland, Ginger Rogers, and George Brent, adding to the area's reputation as a hidden gem for luxury homes in Studio City.",
    ],
    tract: {
      file: "Fryman Rach Information Center and Home Sales Office 3399 Laurel Canyon.jpg",
      alt: "The original Fryman Ranch Information Center and Home Sales Office at 3399 Laurel Canyon, where buyers inquired about Briarcliff Manor Estates lots.",
      caption:
        "Original tract agent location where buyers would inquire about purchasing a lot in Briarcliff Manor Estates, now known as Fryman Estates, during the 1940s.",
    },
    // Lead-in directly above Gallery A. Links "Fryman Ranch" to its page.
    galleryLeadIn: {
      lead:
        "Below are early photos of Fryman Estates, capturing the raw landscape before any development began. This land was once part of ",
      ranchText: "Fryman Ranch",
      rest:
        ", where Harry C. Fryman hosted picnics, veterans' gatherings, and civic events during the 1930s.",
    },
  },

  galleryA: {
    label: "The Land Before It Was Built",
    // Filenames without a street number (the road, lot, landscape, and
    // tract shots). Captions are derived from the filename in the page.
    files: [
      "Trails Being Developed Into Roads.jpg",
      "Road Being Developed Fryman Estates.jpg",
      "Land to Build a Home Fryman Estates.jpg",
      "Fryman Estates Lot for Sale.jpg",
      "Fryman Road.jpg",
      "Fryman Road 2.jpg",
      "Fryman Road 3.jpg",
      "Fryman Road 4.jpg",
      "Fryman Road 5.jpg",
      "Fryman Road 6.jpg",
      "Fryman Road Island.jpg",
      "Fryman Road at Briarvale Lane.jpg",
      "Oakdell Road.jpg",
      "Iredell.jpg",
    ],
  },

  growth: {
    heading: "1940s to 1950s: Growth and Development",
    intro:
      "Throughout the 1940s, construction activity increased, with homes ranging from Colonial to French and Farmhouse styles. Many were designed by noted architects and built with large lots and custom features that set the tone for the neighborhood's character.",
    // Chapman College paragraph; links "West Laurelwood" to the laurelwood site.
    chapmanLead:
      "In 1949, Chapman College purchased 134 acres within the area from the Fryman heirs with the intention of building a San Fernando Valley campus. However, the project never came to fruition. The college later sold the land to Home Savings & Loan Association, which began development of what is now known as ",
    westLaurelwoodText: "West Laurelwood",
    chapmanRest: " in 1958.",
    closing:
      "The 290-home project extended the Briarcliff Manor Estates vision further into the hills. While an early traffic plan proposed a direct route from Laurel Canyon to Fryman as a potential cut-through, community intervention led to a redesign. The final layout featured winding roads and cul-de-sacs, preserving the area's natural character and limiting through traffic.",
  },

  galleryB: {
    label: "The First Homes (1940s to 1950s)",
    // Filenames named by street address (the built homes). The hero shot,
    // 3240 Fryman Road.jpg, is intentionally omitted here to avoid showing it
    // twice. Captions are derived from the filename in the page.
    files: [
      "3201 Oakdell Road 1941.jpg",
      "3226 Fryman Road.jpg",
      "3255 Fryman Road.jpg",
      "3255 Fryman Road Backyard.jpg",
      "3255 Fryman Road with Island in Picture.jpg",
      "3255 Fryman Road No Trees Island.jpg",
      "3264 Oakdell Road.jpg",
      "3274 Oakdell Road.jpg",
      "3280 Fryman Road.jpg",
      "3280 Fryman Road 2.jpg",
      "3280 Fryman Road 3.jpg",
      "3280 Fryman Road 4.jpg",
      "3280 Fryman Road No Trees Island.jpg",
      "3300 Fryman Road.jpg",
      "3351 Oakdell Road.jpg",
      "11900 Briarvale Lane.jpg",
      "11922 Iredell Street.jpg",
      // Houses (not raw land), moved here from the land gallery.
      "Briarvale.jpg",
      "Briarvale2.jpg",
      "Iredell2.jpg",
    ],
  },

  today: {
    heading: "Today: Fryman Estates Carries on the Briarcliff Legacy",
    body: [
      "While the name Briarcliff Manor Estates is no longer widely used, its spirit lives on in what locals now refer to as Fryman Estates. This neighborhood remains one of the most exclusive enclaves in Studio City. With its historic roots, large private lots, rustic trails, and architectural diversity, Fryman Estates continues to attract discerning buyers looking for timeless beauty and enduring value in Studio City real estate.",
      "As real estate agents who specialize in this area, we know every trail, street, and story behind the properties that make Fryman Estates special. Understanding its development gives our clients an edge when buying or selling in this unique hillside community.",
    ],
  },

  cta: {
    heading: "Interested in Buying or Selling in Fryman Estates or West Laurelwood?",
    body:
      "Whether you're looking to purchase a home in Fryman Estates or thinking about selling your property there, we offer a level of insight that only comes from direct experience. We have successfully represented multiple buyers and sellers in Fryman Estates and know how to position these properties for maximum value. From the layout of each street to the architectural nuances and buyer expectations, we understand what it takes to close in this exclusive neighborhood. Let us guide you through the process with the confidence that comes from truly knowing the area.",
    // Closing line; links "Contact Jack Misraje and Karen Misraje" to /contact.
    closingLead: "Ready to explore Fryman Estates or learn more about available homes? ",
    contactText: "Contact Jack Misraje and Karen Misraje",
    closingRest: " for a private tour or personalized insights.",
  },
} as const;
