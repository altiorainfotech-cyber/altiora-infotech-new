import type { Metadata } from "next";
import { AboutClientBackground } from "@/components/about/AboutClientBackground";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { VisionMission } from "@/components/about/VisionMission";
import { HowWeWork } from "@/components/about/HowWeWork";
import { ExperienceImpact } from "@/components/about/ExperienceImpact";
import { WhyAltioraSection } from "@/components/about/WhyAltioraSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description:
    "Altiora Infotech is a growth-focused digital marketing and technology company helping Canadian businesses build, scale, and compete in today's digital landscape.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    title: `About Us | ${SITE_NAME}`,
    description:
      "A growth-focused digital marketing and technology company helping Canadian businesses build, scale, and compete in today's digital landscape.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <AboutClientBackground />
      <div className="relative z-10">
        <AboutHero />
        <AboutMetrics />
        <WhatWeDo />
        <VisionMission />
        <HowWeWork />
        <ExperienceImpact />
        <WhyAltioraSection />
        <AboutCTA />
      </div>
    </main>
  );
}
