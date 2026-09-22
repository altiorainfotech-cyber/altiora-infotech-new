import type { Metadata } from "next";
import { BrandingClientBackground } from "@/components/services/branding/BrandingClientBackground";
import { BrandingHero } from "@/components/services/branding/BrandingHero";
import { BrandingOverview } from "@/components/services/branding/BrandingOverview";
import { BrandingSolutions } from "@/components/services/branding/BrandingSolutions";
import { BrandingMetrics } from "@/components/services/branding/BrandingMetrics";
import { BrandingServicesGrid } from "@/components/services/branding/BrandingServicesGrid";
import { BrandingWhyChoose } from "@/components/services/branding/BrandingWhyChoose";
import { BrandingProcess } from "@/components/services/branding/BrandingProcess";
import { BrandingWhyWorkWithUs } from "@/components/services/branding/BrandingWhyWorkWithUs";
import { BrandingCTA } from "@/components/services/branding/BrandingCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Branding Services | ${SITE_NAME}`,
  description:
    "Strategic branding services — brand strategy, visual identity, messaging, brand guidelines, positioning, and brand relaunch — built to shape perception, build authority, and drive business growth.",
  alternates: {
    canonical: "/services/branding",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/branding`,
    siteName: SITE_NAME,
    title: `Branding Services | ${SITE_NAME}`,
    description: "Shape Perception, Build Authority & Drive Business Growth.",
  },
};

export default function BrandingPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <BrandingClientBackground />
      <div className="relative z-10">
        <BrandingHero />
        <BrandingOverview />
        <BrandingSolutions />
        <BrandingMetrics />
        <BrandingServicesGrid />
        <BrandingWhyChoose />
        <BrandingProcess />
        <BrandingWhyWorkWithUs />
        <BrandingCTA />
      </div>
    </main>
  );
}
