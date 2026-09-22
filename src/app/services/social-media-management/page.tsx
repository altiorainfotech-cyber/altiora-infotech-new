import type { Metadata } from "next";
import { SocialMediaClientBackground } from "@/components/services/social-media/SocialMediaClientBackground";
import { SocialMediaHero } from "@/components/services/social-media/SocialMediaHero";
import { SocialMediaOverview } from "@/components/services/social-media/SocialMediaOverview";
import { SocialMediaServicesGrid } from "@/components/services/social-media/SocialMediaServicesGrid";
import { SocialMediaWhyChoose } from "@/components/services/social-media/SocialMediaWhyChoose";
import { SocialMediaProcess } from "@/components/services/social-media/SocialMediaProcess";
import { SocialMediaCTA } from "@/components/services/social-media/SocialMediaCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Social Media Management Services | ${SITE_NAME}`,
  description:
    "Strategic social media management across Instagram, Facebook, LinkedIn, TikTok, YouTube, and X — content strategy, creation, community management, and analytics built to grow your brand.",
  alternates: {
    canonical: "/services/social-media-management",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/social-media-management`,
    siteName: SITE_NAME,
    title: `Social Media Management Services | ${SITE_NAME}`,
    description:
      "Build a recognizable brand, grow your audience, and generate meaningful engagement across Instagram, Facebook, LinkedIn, TikTok, and YouTube.",
  },
};

export default function SocialMediaManagementPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <SocialMediaClientBackground />
      <div className="relative z-10">
        <SocialMediaHero />
        <SocialMediaOverview />
        <SocialMediaServicesGrid />
        <SocialMediaWhyChoose />
        <SocialMediaProcess />
        <SocialMediaCTA />
      </div>
    </main>
  );
}
