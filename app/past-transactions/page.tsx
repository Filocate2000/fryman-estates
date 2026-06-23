import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PastTransactionsList } from "@/components/sections/PastTransactionsList";
import { SITE_TRANSACTIONS } from "@/lib/site-transactions";
import { absoluteUrl } from "@/lib/site-config";

const DESCRIPTION =
  "Recent and notable homes sold and leased in and around Fryman Estates and Studio City by Misraje Real Estate Partners.";

export const metadata: Metadata = {
  title: "Past Transactions",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/past-transactions") },
  openGraph: { title: "Past Transactions", description: DESCRIPTION, url: absoluteUrl("/past-transactions") },
};

export default function PastTransactionsPage() {
  return (
    <>
      <PageHero
        image="/images/fryman/past-transactions.jpg"
        alt="A pool and flagstone patio framed by mature greenery in Fryman Estates, Studio City."
        scrim="dark"
        eyebrow="Track Record"
        title="Past Transactions"
        subtitle="A record of recent work in and around Fryman."
      />
      <PastTransactionsList transactions={SITE_TRANSACTIONS} area="Fryman Estates" />
      <ContactCTA />
    </>
  );
}
