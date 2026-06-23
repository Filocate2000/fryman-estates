import type { Metadata } from "next";
import { getPastTransactions } from "@/lib/past-transactions";
import { PageHero } from "@/components/layout/PageHero";
import { PastTransactionsExplorer } from "@/components/sections/PastTransactionsExplorer";
import { absoluteUrl } from "@/lib/site-config";

export const revalidate = 3600;

const DESCRIPTION =
  "A record of homes closed across Los Angeles and the South Bay by Misraje Real Estate Partners.";

export const metadata: Metadata = {
  title: "Past Transactions",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/past-transactions") },
  openGraph: { title: "Past Transactions", description: DESCRIPTION, url: absoluteUrl("/past-transactions") },
};

export default async function PastTransactionsPage() {
  const all = await getPastTransactions();

  return (
    <div className="bg-navy-950 text-white">
      <PageHero
        image="/images/fryman/past-transactions.jpg"
        alt="A pool and flagstone patio framed by mature greenery in Fryman Estates, Studio City."
        scrim="dark"
        eyebrow="Track Record"
        title="Past Transactions"
        subtitle="A record of recent work in and around Fryman."
      />
      <PastTransactionsExplorer transactions={all} />
    </div>
  );
}
