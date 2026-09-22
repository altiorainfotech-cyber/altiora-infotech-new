import type { Metadata } from "next";
import { InfluencerClientBackground } from "@/components/services/influencer-ugc/InfluencerClientBackground";
import { InfluencerHero } from "@/components/services/influencer-ugc/InfluencerHero";
import { InfluencerOverview } from "@/components/services/influencer-ugc/InfluencerOverview";
import { InfluencerServicesGrid } from "@/components/services/influencer-ugc/InfluencerServicesGrid";
import { InfluencerWhyChoose } from "@/components/services/influencer-ugc/InfluencerWhyChoose";
import { InfluencerProcess } from "@/components/services/influencer-ugc/InfluencerProcess";
import { InfluencerCTA } from "@/components/services/influencer-ugc/InfluencerCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Influencer & UGC Marketing | ${SITE_NAME}`,
  description:
    "Influencer and UGC marketing services — creator discovery, campaign management, UGC production, content licensing, and performance tracking built to drive trust, reach, and revenue.",
  alternates: {
    canonical: "/services/influencer-ugc-marketing",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/influencer-ugc-marketing`,
    siteName: SITE_NAME,
    title: `Influencer & UGC Marketing | ${SITE_NAME}`,
    description:
      "Connect your brand with relevant creators and authentic content that builds trust, expands reach, and drives measurable results.",
  },
};

export default function InfluencerUgcMarketingPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <InfluencerClientBackground />
      <div className="relative z-10">
        <InfluencerHero />
        <InfluencerOverview />
        <InfluencerServicesGrid />
        <InfluencerWhyChoose />
        <InfluencerProcess />
        <InfluencerCTA />
      </div>
    </main>
  );
}
