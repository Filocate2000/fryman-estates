// content/fryman-ranch.ts
// Copy for /history/fryman-ranch, ported VERBATIM from the live Wix page
// (https://www.frymanestates.com/frymanranch). Departures required by repo rules:
//   - The hero subtitle's en dash and the stills-gallery em dashes become a colon
//     / commas (CLAUDE.md no-em-dash rule). Wording is otherwise unchanged.
// Image paths are local (public/images/fryman-ranch); the video is the renamed
// clean-path mp4. Alt text preserves the live page's SEO descriptions.
//
// KNOWN SOURCE CONFLICT: the live body lists "The Little Minister (1921)", but the
// only on-disk still for it is labeled 1934 (Katharine Hepburn). Body text kept
// verbatim (1921); the image uses a neutral caption.
export const frymanRanchContent = {
  hero: {
    eyebrow: "Historical Information",
    title: "Fryman Ranch",
    subtitle:
      "The Roots of Fryman Estates in Studio City: A Historic Location for Film and Community Events",
    image: "tower-of-lies-fryman-ranch.jpg",
    alt: "A couple embracing in a field at Fryman Ranch in a scene from Tower of Lies (1925), Studio City.",
  },

  civic: {
    heading: "A Place for Civic and Community Events",
    body: [
      "During the 1920s and 1930s, Fryman Ranch in Studio City was a well-known venue for barbecues, veterans' gatherings, and press appreciation days. Community leaders and civic organizations regularly gathered in the canyon, drawn by the ranch's natural beauty and expansive layout.",
      "Archival photographs capture the vibrant social life hosted at Fryman Ranch and reflect the area's early role in shaping the local Studio City community.",
    ],
    photos: [
      { file: "BBQ Cooking.jpg", caption: "Barbecue cooking at a Fryman Ranch gathering", alt: "Cooking at a Fryman Ranch barbecue, Studio City." },
      { file: "BBQ Tables.jpg", caption: "Tables set for a Fryman Ranch gathering", alt: "Tables laid out for a Fryman Ranch community gathering." },
      { file: "BBQ Seating.jpg", caption: "Picnic seating under the oaks at Fryman Ranch", alt: "Picnic seating beneath oak trees at a Fryman Ranch barbecue." },
      { file: "BBQ Map.jpg", caption: "Event map for a Fryman Ranch gathering", alt: "Hand-drawn event map for a Fryman Ranch gathering." },
    ],
  },

  film: {
    heading: "A Location for Early Film Productions",
    intro:
      "Fryman Ranch became a popular filming location during Hollywood's silent and early sound eras. Its scenic hills, oak groves, and open terrain made it ideal for period dramas, war films, and adventure stories set in European or rural landscapes.",
    films: [
      {
        title: "The Little Minister",
        year: "1921",
        desc: "An adaptation of J.M. Barrie's novel, this film used Fryman Ranch to portray the Scottish countryside.",
        file: "the-little-minister-poster.jpg",
        alt: "Movie poster for The Little Minister.",
      },
      {
        title: "Tower of Lies",
        year: "1925",
        desc: "Starring Norma Shearer and Lon Chaney, filmed in Fryman's wooded canyon backdrops.",
        file: "tower-of-lies-poster.jpg",
        alt: "Movie poster for Tower of Lies (1925), starring Norma Shearer and Lon Chaney.",
      },
      {
        title: "The Enemy",
        year: "1927",
        desc: "Anti-war film starring Lillian Gish, with scenes shot on location at Fryman Ranch.",
        file: "the-enemy-poster.jpg",
        alt: "Movie poster for The Enemy (1927), starring Lillian Gish.",
      },
      {
        title: "Annie Laurie",
        year: "1927",
        desc: "Set in 18th-century Scotland, Lillian Gish filmed Highland scenes on Fryman Ranch.",
        file: "annie-laurie-poster.jpg",
        alt: "Movie poster for Annie Laurie (1927), starring Lillian Gish.",
      },
      {
        title: "Cossacks",
        year: "1928",
        desc: "Filmed across the rugged hillsides of Fryman Ranch for horseback battle sequences.",
        file: "cossacks-poster.jpg",
        alt: "Movie poster for The Cossacks (1928).",
      },
      {
        title: "Bonnie Scotland",
        year: "1935",
        desc: "Laurel and Hardy's comedy captured panoramic shots of Fryman Ranch in this preserved film.",
        file: "bonnie-scotland-poster.jpg",
        alt: "Movie poster for Bonnie Scotland (1935), the Laurel and Hardy comedy.",
      },
    ],
  },

  bonnie: {
    heading: "Bonnie Scotland Scene: Laurel and Hardy at Fryman Ranch",
    body:
      "Filmed in 1935, this classic comedy features Laurel and Hardy marching through Fryman Ranch. The rustic scenery and rolling landscape provided the ideal backdrop for depicting colonial India in Bonnie Scotland.",
    video: "bonnie-scotland-laurel-hardy.mp4",
    videoCaption: "Laurel and Hardy marching through Fryman Ranch in Bonnie Scotland (1935).",
  },

  chaplin: {
    body:
      "On December 22, 1939, the Charles Chaplin Film Corporation made a $1,000 rental payment to use Fryman Ranch for a production scheduled on January 15, 1940. This surviving document affirms Fryman Ranch's value as a Hollywood filming destination.",
    file: "Charles Chaplin Rental Receiipt.jpg",
    caption: "Historic receipt for Fryman Ranch rental by Chaplin's production company.",
    alt: "Receipt confirming Charlie Chaplin's company rented Fryman Ranch for a 1940 film.",
  },

  colorized: {
    heading: "From Black and White to Color",
    body:
      "These archival black-and-white photos of Fryman Ranch have been digitally colorized to offer a richer understanding of the location's visual character and setting during its most active decades.",
    pairs: [
      {
        original: "On Location/Fryman Ranch Set Black and White.jpg",
        colorized: "Color Rendering Western Set.jpg",
        alt: "A Fryman Ranch film set, shown in original black and white and digitally colorized.",
      },
      {
        original: "fryman-ranch-person-in-field-bw.jpg",
        colorized: "Color Rendering Empty Field.jpg",
        alt: "A figure in the open field at Fryman Ranch, shown in original black and white and digitally colorized.",
      },
    ],
  },

  stills: {
    heading: "Historic Film Productions at Fryman Ranch",
    intro:
      "This curated gallery of stills and behind-the-scenes photos highlights Fryman Ranch's history as a movie location. Its use across genres, from silent-era dramas to slapstick comedies, underscores its role in shaping Studio City's early ties to Hollywood.",
    photos: [
      { file: "filming-stand-fryman-ranch-bw-2.jpg", caption: "Filming stand at Fryman Ranch", alt: "A filming stand erected on location at Fryman Ranch." },
      { file: "filming-trolley-bw.jpg", caption: "Camera trolley on location at Fryman Ranch", alt: "A camera trolley set up for filming on location at Fryman Ranch." },
      { file: "fryman-ranch-bulls-bw.jpg", caption: "Livestock on the Fryman Ranch set", alt: "Bulls on the Fryman Ranch set during a production." },
      { file: "fryman-ranch-field-with-people-bw.jpg", caption: "A gathering in the open field at Fryman Ranch", alt: "People gathered in the open field at Fryman Ranch during filming." },
      { file: "fryman-ranch-movie-scene-bw.jpg", caption: "A movie scene filmed at Fryman Ranch", alt: "A movie scene being filmed on location at Fryman Ranch." },
      { file: "fryman-ranch-person-in-field-bw-1.jpg", caption: "A figure in the open field at Fryman Ranch", alt: "A lone figure standing in the open field at Fryman Ranch." },
      { file: "fryman-ranch-photo.jpg", caption: "Fryman Ranch", alt: "A view of Fryman Ranch in Studio City." },
      { file: "fryman-ranch-set-bw.jpg", caption: "A film set at Fryman Ranch", alt: "A constructed film set on location at Fryman Ranch." },
      { file: "horse-and-buggy-bw.jpg", caption: "Horse and buggy at Fryman Ranch", alt: "A horse and buggy staged for a production at Fryman Ranch." },
      { file: "horse-caravan-bw.jpg", caption: "Horse caravan staged at Fryman Ranch", alt: "A horse-drawn caravan staged for a production at Fryman Ranch." },
      { file: "scene-bw.jpg", caption: "A scene filmed at Fryman Ranch", alt: "A film scene captured on location at Fryman Ranch." },
      // NOTE: staged-confrontation source carries a MISRAJE watermark (only
      // receipt-free version on disk); swap for an unwatermarked crop if desired.
      { file: "staged-confrontation-fryman-ranch.jpg", caption: "Staged confrontation scene at Fryman Ranch", alt: "A staged scene of soldiers confronting a caravan, filmed at Fryman Ranch." },
      { file: "tower-of-lies-fryman-ranch.jpg", caption: "A scene from Tower of Lies (1925) at Fryman Ranch", alt: "A couple embracing in a field at Fryman Ranch in a scene from Tower of Lies (1925)." },
    ],
  },
} as const;
