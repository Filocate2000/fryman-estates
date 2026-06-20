// content/harry-fryman.ts
// Render-ready copy for /history/harry-c-fryman (kept out of components per the
// architecture rule). Migrated from the old Wix page (/harrycfryman). Text is
// VERBATIM from docs/harry-fryman-claude-code-prompt.md section 4 (the client's
// approved migration copy), not the softened rewrite note in
// content/source/fryman-history-content.md. In-text links (home, Fryman Ranch,
// Development History, Contact) are wired in the page component, where the
// {LINK} tokens below mark where they go.
//
// The year range "1876–1946" uses an en dash (a numeric range, allowed by the
// no-em-dash rule). There are no em dashes in this copy.

export const harryFrymanContent = {
  hero: {
    eyebrow: "Historical Information",
    title: "Harry C. Fryman",
    subtitle: "A Legacy in Hospitality, Real Estate, and Civic Leadership",
  },

  about: {
    heading: "About Harry C. Fryman",
    intro:
      "Harry C. Fryman (1876–1946) played a defining role in shaping early Los Angeles through his work in the hospitality industry and his contributions to real estate development. Born in Ohio, Fryman moved to Los Angeles in 1893, beginning his career as a bellboy at the Mount Lowe Hotel. With persistence and a keen business sense, he rose through the ranks and eventually managed several of the city's most prominent hotels, including:",
    hotels: [
      "Hollenbeck Café",
      "Hotel Vincent (later renamed Hotel Palms)",
      "Gordon Arms Hotel (later renamed Brighton Beach Hotel at Terminal Island)",
      "Van Nuys Hotel on Broadway",
      "Lankershim Hotel",
    ],
    closing:
      "In 1900, Fryman married Mae A. Fox. By 1905, he had made a significant mark on downtown Los Angeles by building the Hotel Hayward at 6th and Spring Street, the former location of the original Ralphs grocery store. The hotel was an early success, leading to expansions in the late 1910s and again in the mid-1920s. Fryman's nephews worked closely with him, including Russell H. Wagener, who managed Hotel Hayward for many years.",
    portraitAlt:
      "Portrait of Harry C. Fryman, the developer and hotelier behind Fryman Estates.",
  },

  annex: {
    heading: "Hayward Hotel Annex Opening, 1910",
    // Paragraph carrying the bold date; the page renders **Wednesday, September
    // 28, 1910** as <strong>.
    body: [
      "The Hayward Hotel at 6th and Spring Street was already a major downtown destination when, in 1910, Harry Fryman announced the opening of its new annex. The addition, driven by rapid growth in Los Angeles, officially opened on Wednesday, September 28, 1910.",
      "To mark the occasion, Mr. Fryman invited all newspaper men in the city to be his guests for a private preview of the new space. While the exact hour for the press gathering was never publicly recorded, the event was considered significant at the time, drawing strong interest from the local newspaper community.",
      "One of the annex's most distinctive features was the Pompeiian gentleman's buffet, a richly designed room that Fryman proudly described as having no equal in the United States. He personally oversaw the design and execution of the space's decor. The three-story annex also included modern sample rooms, each outfitted with a private bath and the latest amenities, catering to commercial travelers visiting the booming city.",
    ],
    boldDate: "Wednesday, September 28, 1910",
    adAlt:
      "1929 newspaper advertisement for the Hotel Hayward at 6th and Spring Street, downtown Los Angeles.",
    ralphsAlt:
      "The original Ralphs Bros. Grocers store with a horse-drawn delivery wagon, on the site where the Hayward Hotel was later built.",
    ralphsCaption:
      "The original Ralphs Bros. Grocers store (opened in 1873) stood on the present site of the Hayward Hotel. It operated until 1901 before moving north to allow hotel construction. Delivery wagons like the one pictured were essential when nearly 90% of customers had their goods delivered.",
    hotelAlt:
      "The Hayward Hotel at 6th and Spring Street, built on the former site of the Ralphs Bros. Grocers store.",
    hotelCaption:
      "The Hayward Hotel, was built on the former site of the original Ralphs Bros. Grocers store. The development symbolized downtown Los Angeles' transition from horse-drawn commerce to a burgeoning urban center.",
  },

  realEstate: {
    heading: "Real Estate Ventures",
    intro:
      "While growing his hospitality career, Fryman became deeply involved in real estate development across the Los Angeles region. His work helped shape several communities, and his development projects included:",
    // The final entry links "Fryman Estates" to the site home page; the page
    // renders that bullet with the {HOME} link.
    projects: [
      "Commonwealth Home Builders in Watts",
      "Cudahy Walnut Land Company in Huntington Park",
      "Washington Square Land Company",
      "Sunnybrook Land Company, near Culver City",
      "Development in Lytle Creek",
      "Development in Calabasas",
    ],
    finalProjectLead:
      "Briarcliff Manor Estates in Studio City, known today as ",
    finalProjectLinkText: "Fryman Estates",
  },

  ranch: {
    heading: "Fryman Ranch and Film Industry Ties",
    // "Fryman Ranch" links to the Fryman Ranch page; page renders {RANCH}.
    introLead: "One of Fryman's most iconic properties was ",
    introLinkText: "Fryman Ranch",
    introRest:
      ", located in the hills near Laurel Canyon and Mulholland Drive. During the silent film era, this picturesque ranch was often rented out as a filming location. Productions shot at the ranch include:",
    productions: [
      "The Tower of Lies (1925)",
      "Annie Laurie (1927)",
      "The Enemy (1927)",
      "The Cossacks (1928)",
      "Several early Westerns",
    ],
    actors:
      "Actors featured in scenes filmed at Fryman Ranch include Lillian Gish, John Gilbert, Norma Shearer, Ralph Forbes, Renee Adorée, Nils Asther, Bill Haines, and Lon Chaney.",
    // Second paragraph also links "Fryman Ranch" to the Fryman Ranch page.
    civicLead: "In the 1920s, ",
    civicLinkText: "Fryman Ranch",
    civicRest:
      " was more than just a film location. It became a gathering place for civic, professional, and charitable events. Harry C. Fryman opened the ranch to a wide range of causes, including community celebrations and gatherings supporting local veterans. One notable event was a large barbecue hosted by the Southern California Businessmen's Association, which welcomed newspaper editors, publishers, and writers from across Los Angeles County. The event recognized the press for its support in opposing restrictive legislation that threatened personal freedoms. At the time, Fryman had recently been appointed to the Los Angeles Police Commission and was referred to as the \"boss of the Rancho\" for the day. He helped lead the event alongside key civic organizers. His decision to make his private property available for public benefit reflected his strong commitment to community involvement and civic leadership.",
    bbqAlt:
      "Picnic tables set with seating at a Fryman Ranch barbecue gathering.",
    bbqCaption:
      "Fryman Ranch picnic tables where guests would enjoy barbecue food.",
  },

  legacy: {
    heading: "Lasting Legacy",
    first:
      "Harry Fryman retired in 1943 following the sale of the Hotel Hayward and passed away in 1946. In addition to his business achievements, he remained civically active throughout his life. He served on both the Los Angeles Civil Service Commission and the Police Commission, holding leadership roles and contributing to public service in meaningful ways.",
    // Final paragraph carries three links: Fryman Estates (home), Development
    // History page, and Contact page. The page renders the {HOME}, {DEVHISTORY}
    // and {CONTACT} tokens inline.
    closingLead: "Fryman's legacy lives on in the neighborhoods he helped shape and the institutions he helped build. From the heart of downtown Los Angeles to the tranquil hills of ",
    closingHomeText: "Fryman Estates",
    closingMid: ", his influence is woven into the fabric of the city. To learn more, visit our ",
    closingDevHistoryText: "development history",
    closingMid2: " or reach out on our ",
    closingContactText: "contact page",
    closingEnd: ".",
    policeAlt:
      "Harry Fryman pictured with the Los Angeles Police Commission, 1933.",
  },
} as const;
