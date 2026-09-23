import type { Metadata } from "next";
import { VideoProductionClientBackground } from "@/components/services/video-production/VideoProductionClientBackground";
import { VideoProductionHero } from "@/components/services/video-production/VideoProductionHero";
import { VideoProductionOverview } from "@/components/services/video-production/VideoProductionOverview";
import { VideoProductionServicesGrid } from "@/components/services/video-production/VideoProductionServicesGrid";
import { VideoProductionWhyChoose } from "@/components/services/video-production/VideoProductionWhyChoose";
import { VideoProductionProcess } from "@/components/services/video-production/VideoProductionProcess";
import { VideoProductionCTA } from "@/components/services/video-production/VideoProductionCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Video Production Services | ${SITE_NAME}`,
  description:
    "Video production services — brand films, social media reels, explainer animation, testimonial videos, product demos, and corporate films built to captivate and convert.",
  alternates: {
    canonical: "/services/video-production",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/video-production`,
    siteName: SITE_NAME,
    title: `Video Production Services | ${SITE_NAME}`,
    description:
      "Create engaging, professional videos that build brand awareness, connect with your audience, and drive business results.",
  },
};

export default function VideoProductionPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <VideoProductionClientBackground />
      <div className="relative z-10">
        <VideoProductionHero />
        <VideoProductionOverview />
        <VideoProductionServicesGrid />
        <VideoProductionWhyChoose />
        <VideoProductionProcess />
        <VideoProductionCTA />
      </div>
    </main>
  );
}
