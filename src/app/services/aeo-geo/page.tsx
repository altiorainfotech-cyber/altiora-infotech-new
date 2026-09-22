import type { Metadata } from "next";
import { AeoGeoClientBackground } from "@/components/services/aeo-geo/AeoGeoClientBackground";
import { AeoGeoHero } from "@/components/services/aeo-geo/AeoGeoHero";
import { AeoGeoOverview } from "@/components/services/aeo-geo/AeoGeoOverview";
import { AeoGeoPlatforms } from "@/components/services/aeo-geo/AeoGeoPlatforms";
import { AeoGeoServicesGrid } from "@/components/services/aeo-geo/AeoGeoServicesGrid";
import { AeoGeoWhyChoose } from "@/components/services/aeo-geo/AeoGeoWhyChoose";
import { AeoGeoProcess } from "@/components/services/aeo-geo/AeoGeoProcess";
import { AeoGeoCTA } from "@/components/services/aeo-geo/AeoGeoCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `AEO & GEO Services | ${SITE_NAME}`,
  description:
    "Answer Engine Optimization and Generative Engine Optimization services — get found across ChatGPT, Google AI Overviews, Perplexity, Bing Copilot, and voice search.",
  alternates: {
    canonical: "/services/aeo-geo",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/aeo-geo`,
    siteName: SITE_NAME,
    title: `AEO & GEO Services | ${SITE_NAME}`,
    description:
      "Improve your visibility across ChatGPT, Google AI Overviews, Perplexity, Bing Copilot, and voice search.",
  },
};

export default function AeoGeoServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <AeoGeoClientBackground />
      <div className="relative z-10">
        <AeoGeoHero />
        <AeoGeoOverview />
        <AeoGeoPlatforms />
        <AeoGeoServicesGrid />
        <AeoGeoWhyChoose />
        <AeoGeoProcess />
        <AeoGeoCTA />
      </div>
    </main>
  );
}
