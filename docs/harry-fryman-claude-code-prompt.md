# Claude Code prompt — Build the "Harry C. Fryman" page

> Run this from inside `C:\Users\filoc\Projects\fryman-estates` (run `claude`, then paste).

---

Build a new page for **Harry C. Fryman** in this Next.js (App Router) project. This is a migration of an existing page from our old Wix site — keep the text and image associations exactly as specified below.

## 1. Match the existing design system

Before writing anything, inspect how this site and our two sibling sites are styled, and reuse the same design tokens — do NOT invent new colors or fonts:

- This project: read `tailwind.config.ts`, the global stylesheet in `app/`, and an existing page + the layout to learn the current color palette, fonts, and section/container conventions.
- Sibling reference projects for the exact look and feel I want to match:
  - `C:\Users\filoc\Projects\misraje-site`
  - `C:\Users\filoc\Projects\laurelwood-site`

Match those: same color palette, same fonts, and the pattern where **content sections alternate background color** down the page. Reuse whatever shared layout, header/footer, and section components already exist rather than building new ones from scratch.

## 2. Routing

Create the page at the route that matches our menu's "Historical Information → Harry C Fryman" link (old Wix slug was `/harrycfryman`). Follow this project's existing routing conventions for where the file and any components live.

## 3. Images

Photos are already in `public/images/harry-fryman/`. List that folder to get the exact filenames (they contain spaces and capital letters). Either reference each `src` with the exact filename or rename the files to lowercase-hyphenated and update references — your call, just keep them working. Use the `next/image` component, with descriptive `alt` text.

Place images by section as follows:

- **Hero / page header:** a Hayward Hotel exterior photo (`Hayward Hotel.jpg` or `Hayward Hotel 3.jpg`).
- **About Harry C. Fryman:** the portrait — `Harry Fryman Picture.jpg`.
- **Hayward Hotel Annex Opening, 1910:** three images —
  1. the hotel advertisement/photo — `Hotel Hayward 07_09_1929.jpeg`
  2. the original Ralphs grocery store — `Ralphs Bros Grocers ...jpg` (with caption below)
  3. the Hayward Hotel built after Ralphs relocated — `Hayward Hotel.jpg` (with caption below)
- **Fryman Ranch and Film Industry Ties:** the barbecue photo — `BBQ Seating.jpg` (with caption below).
- **Lasting Legacy:** the police commission photo — `Harry Fryman Police Board ...jpg`.
- **Real Estate Ventures:** no image.

## 4. Exact page content (use verbatim)

**Page title:** Harry C. Fryman
**Subtitle:** A Legacy in Hospitality, Real Estate, and Civic Leadership

---

### Section: About Harry C. Fryman
*(image: Harry Fryman Picture.jpg)*

Harry C. Fryman (1876–1946) played a defining role in shaping early Los Angeles through his work in the hospitality industry and his contributions to real estate development. Born in Ohio, Fryman moved to Los Angeles in 1893, beginning his career as a bellboy at the Mount Lowe Hotel. With persistence and a keen business sense, he rose through the ranks and eventually managed several of the city's most prominent hotels, including:

- Hollenbeck Café
- Hotel Vincent (later renamed Hotel Palms)
- Gordon Arms Hotel (later renamed Brighton Beach Hotel at Terminal Island)
- Van Nuys Hotel on Broadway
- Lankershim Hotel

In 1900, Fryman married Mae A. Fox. By 1905, he had made a significant mark on downtown Los Angeles by building the Hotel Hayward at 6th and Spring Street, the former location of the original Ralphs grocery store. The hotel was an early success, leading to expansions in the late 1910s and again in the mid-1920s. Fryman's nephews worked closely with him, including Russell H. Wagener, who managed Hotel Hayward for many years.

---

### Section: Hayward Hotel Annex Opening, 1910
*(image: Hotel Hayward 07_09_1929.jpeg)*

The Hayward Hotel at 6th and Spring Street was already a major downtown destination when, in 1910, Harry Fryman announced the opening of its new annex. The addition, driven by rapid growth in Los Angeles, officially opened on **Wednesday, September 28, 1910**.

To mark the occasion, Mr. Fryman invited all newspaper men in the city to be his guests for a private preview of the new space. While the exact hour for the press gathering was never publicly recorded, the event was considered significant at the time, drawing strong interest from the local newspaper community.

One of the annex's most distinctive features was the **Pompeiian gentleman's buffet**, a richly designed room that Fryman proudly described as having no equal in the United States. He personally oversaw the design and execution of the space's decor. The three-story annex also included modern sample rooms, each outfitted with a private bath and the latest amenities, catering to commercial travelers visiting the booming city.

*(image: Ralphs Bros Grocers ...jpg — with this italic caption directly below it:)*
> The original Ralphs Bros. Grocers store (opened in 1873) stood on the present site of the Hayward Hotel. It operated until 1901 before moving north to allow hotel construction. Delivery wagons like the one pictured were essential when nearly 90% of customers had their goods delivered.

*(image: Hayward Hotel.jpg — with this italic caption directly below it:)*
> The Hayward Hotel, was built on the former site of the original Ralphs Bros. Grocers store. The development symbolized downtown Los Angeles' transition from horse-drawn commerce to a burgeoning urban center.

---

### Section: Real Estate Ventures
*(no image)*

While growing his hospitality career, Fryman became deeply involved in real estate development across the Los Angeles region. His work helped shape several communities, and his development projects included:

- Commonwealth Home Builders in Watts
- Cudahy Walnut Land Company in Huntington Park
- Washington Square Land Company
- Sunnybrook Land Company, near Culver City
- Development in Lytle Creek
- Development in Calabasas
- Briarcliff Manor Estates in Studio City, known today as Fryman Estates *(link this to the site home page)*

---

### Section: Fryman Ranch and Film Industry Ties
*(image: BBQ Seating.jpg)*

One of Fryman's most iconic properties was Fryman Ranch *(link to the Fryman Ranch page)*, located in the hills near Laurel Canyon and Mulholland Drive. During the silent film era, this picturesque ranch was often rented out as a filming location. Productions shot at the ranch include:

- The Tower of Lies (1925)
- Annie Laurie (1927)
- The Enemy (1927)
- The Cossacks (1928)
- Several early Westerns

Actors featured in scenes filmed at Fryman Ranch include Lillian Gish, John Gilbert, Norma Shearer, Ralph Forbes, Renee Adorée, Nils Asther, Bill Haines, and Lon Chaney.

In the 1920s, Fryman Ranch *(link to the Fryman Ranch page)* was more than just a film location. It became a gathering place for civic, professional, and charitable events. Harry C. Fryman opened the ranch to a wide range of causes, including community celebrations and gatherings supporting local veterans. One notable event was a large barbecue hosted by the Southern California Businessmen's Association, which welcomed newspaper editors, publishers, and writers from across Los Angeles County. The event recognized the press for its support in opposing restrictive legislation that threatened personal freedoms. At the time, Fryman had recently been appointed to the Los Angeles Police Commission and was referred to as the "boss of the Rancho" for the day. He helped lead the event alongside key civic organizers. His decision to make his private property available for public benefit reflected his strong commitment to community involvement and civic leadership.

*(image caption below BBQ Seating.jpg:)* Fryman Ranch picnic tables where guests would enjoy barbecue food.

---

### Section: Lasting Legacy
*(image: Harry Fryman Police Board ...jpg)*

Harry Fryman retired in 1943 following the sale of the Hotel Hayward and passed away in 1946. In addition to his business achievements, he remained civically active throughout his life. He served on both the Los Angeles Civil Service Commission and the Police Commission, holding leadership roles and contributing to public service in meaningful ways.

Fryman's legacy lives on in the neighborhoods he helped shape and the institutions he helped build. From the heart of downtown Los Angeles to the tranquil hills of Fryman Estates *(link to home)*, his influence is woven into the fabric of the city. To learn more, visit our development history *(link to the Development History page)* or reach out on our contact page *(link to the Contact page)*.

## 5. Links

Update all in-text links to point to this new site's internal routes (home, Fryman Ranch, Development History, Contact) — not the old Wix/wixstudio URLs. If a target page doesn't exist yet, use the intended route path as a placeholder so it works once those pages are built.

## 6. Wire up navigation + verify

- Make sure the "Historical Information → Harry C Fryman" item in the site menu links to this new page.
- Run the lint/build to confirm there are no errors, and fix any that come up.
- Show me the route the page is served at when you're done.
