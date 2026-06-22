# Market report: Fryman naming (data key vs display name)

Reference for the `/market-report` feature and how Fryman is named.

## Data source

The market report pulls from two shared Supabase tables:

- `laurelwood_listings`
- `laurelwood_commentary`

These are shared across all neighborhoods (West Laurelwood, East Laurelwood,
Fryman). `neighborhood` is a column, not a separate table. The report page reads
whatever rows exist for its neighborhood key.

## The intentional name split

- **Data key (query): `"Fryman Estates"`** — what is stored in the `neighborhood`
  column for Fryman rows.
- **Display name (UI): `"Fryman Canyon Estates"`** — what every user-visible
  surface shows.

Query by `"Fryman Estates"`, display `"Fryman Canyon Estates"`. This split is
deliberate, not a bug.

### Why the key must stay "Fryman Estates"

The AWS Lambdas (`parseCMAPdf` / `generateMarketReportCommentary`) write the
neighborhood value, driven by street-name detection inside those functions. They
emit exactly `"Fryman Estates"`. **Do NOT rename the key in the data or in the
website query** — it must match what the Lambdas write, or the report reads zero
rows.

## Where each name lives in this repo

Data key (`"Fryman Estates"`), query-only, never shown to users:

- `app/market-report/page.tsx` — the `NEIGHBORHOOD` const (passed to
  `getMarketData(NEIGHBORHOOD)`).
- `lib/market/getMarketData.ts` — `ALLOWED_NEIGHBORHOODS`.

Display name (`"Fryman Canyon Estates"`):

- `app/market-report/page.tsx` — the `DISPLAY_NAME` const, passed as the
  `displayName` prop to `<MarketReport>`.
- `components/sections/MarketReport.tsx` and `components/sections/MarketCharts.tsx`
  render `displayName` everywhere the neighborhood appears (hero, eyebrows, CTAs,
  alt text). Page `<title>` / meta also read the display name.

## How data gets in

1. Email a CSV of Fryman addresses to the MLS report email address.
2. The Lambda parses the CSV, routes rows by street name, and dual-writes to
   `laurelwood_listings` + `laurelwood_commentary` under `"Fryman Estates"`, then
   triggers the commentary Lambda.
3. The report page reads whatever is in the tables. The CSV export carries ~46
   Fryman listings with sold history back to 2000, but as of this writing only ~13
   recent rows are in `laurelwood_listings` under `"Fryman Estates"` — the
   historical rows had not yet been ingested. The report charts only span the
   quarters present in the table, so full history depends on the historical CSV
   being processed through the email -> Lambda pipeline.

## AWS side (not in this repo)

The Lambda source (`parseCMAPdf`, `generateMarketReportCommentary`) is **not** in
this repo. It is maintained in the AWS console (us-east-2). For that side, see the
comp-audit docs in the `realestategpa` repo (`realestategpa/docs/`,
e.g. `STATE-comp-audit-integration.md` and
`comp-audit-assignment-integration-design.md`).
