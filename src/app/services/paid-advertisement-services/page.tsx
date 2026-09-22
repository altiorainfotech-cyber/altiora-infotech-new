import type { Metadata } from "next";
import { PaidAdsClientBackground } from "@/components/services/paid-advertising/PaidAdsClientBackground";
import { PaidAdsHero } from "@/components/services/paid-advertising/PaidAdsHero";
import { PaidAdsOverview } from "@/components/services/paid-advertising/PaidAdsOverview";
import { PaidAdsPlatforms } from "@/components/services/paid-advertising/PaidAdsPlatforms";
import { PaidAdsServicesGrid } from "@/components/services/paid-advertising/PaidAdsServicesGrid";
import { PaidAdsWhyChoose } from "@/components/services/paid-advertising/PaidAdsWhyChoose";
import { PaidAdsProcess } from "@/components/services/paid-advertising/PaidAdsProcess";
import { PaidAdsCTA } from "@/components/services/paid-advertising/PaidAdsCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Paid Advertising Services | ${SITE_NAME}`,
  description:
    "Performance-driven paid advertising across Google, Meta, LinkedIn, TikTok, and Microsoft — campaign strategy, ad creation, audience targeting, and continuous optimization built for measurable growth.",
  alternates: {
    canonical: "/services/paid-advertisement-services",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/paid-advertisement-services`,
    siteName: SITE_NAME,
    title: `Paid Advertising Services | ${SITE_NAME}`,
    description:
      "Reach the right audience, generate qualified leads, and increase conversions with targeted paid advertising campaigns across Google, Meta, LinkedIn, TikTok, and Microsoft.",
  },
};

export default function PaidAdvertisementServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <PaidAdsClientBackground />
      <div className="relative z-10">
        <PaidAdsHero />
        <PaidAdsOverview />
        <PaidAdsPlatforms />
        <PaidAdsServicesGrid />
        <PaidAdsWhyChoose />
        <PaidAdsProcess />
        <PaidAdsCTA />
      </div>
    </main>
  );
}
