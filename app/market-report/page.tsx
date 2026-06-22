import type { Metadata } from "next";
import { MarketReport } from "@/components/sections/MarketReport";
import { getMarketData, type MarketData } from "@/lib/market/getMarketData";
import { absoluteUrl } from "@/lib/site-config";

// Data key: the value the rows are stored under in laurelwood_listings /
// laurelwood_commentary. Used ONLY for the DB query, never shown to users.
const NEIGHBORHOOD = "Fryman Estates";
// Display name: what users see everywhere on the page.
const DISPLAY_NAME = "Fryman Canyon Estates";
const DESCRIPTION =
  "Active listings, pending sales, and recent sales for Fryman Canyon Estates.";

export const metadata: Metadata = {
  title: "Fryman Canyon Estates Market Overview",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/market-report") },
  openGraph: {
    title: "Fryman Canyon Estates Market Overview",
    description: DESCRIPTION,
    url: absoluteUrl("/market-report"),
  },
};

// Render at request time so the market data is in the server HTML (crawlable),
// not baked at build (which would also need DB creds at build time).
export const dynamic = "force-dynamic";

export default async function MarketReportPage() {
  // Fetch server-side via the shared module. On a Supabase failure, render the
  // page shell gracefully instead of crashing.
  let data: MarketData | null = null;
  try {
    data = await getMarketData(NEIGHBORHOOD);
  } catch (err) {
    console.error("market report page data error:", err);
  }
  return <MarketReport displayName={DISPLAY_NAME} data={data} />;
}
