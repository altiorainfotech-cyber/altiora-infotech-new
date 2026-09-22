import type { Metadata } from "next";
import { SeoClientBackground } from "@/components/services/seo/SeoClientBackground";
import { SeoHero } from "@/components/services/seo/SeoHero";
import { SeoOverview } from "@/components/services/seo/SeoOverview";
import { SeoWhyChoose } from "@/components/services/seo/SeoWhyChoose";
import { SeoProcess } from "@/components/services/seo/SeoProcess";
import { SeoCTA } from "@/components/services/seo/SeoCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Professional SEO Services | ${SITE_NAME}`,
  description:
    "Strategic SEO services — technical SEO, keyword research, on-page optimization, local SEO, link building, content strategy, and AEO & GEO — built to drive consistent organic traffic and qualified leads.",
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/seo`,
    siteName: SITE_NAME,
    title: `Professional SEO Services | ${SITE_NAME}`,
    description:
      "Drive consistent organic traffic and qualified leads with strategic SEO services built around your business goals.",
  },
};

export default function SeoServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <SeoClientBackground />
      <div className="relative z-10">
        <SeoHero />
        <SeoOverview />
        <SeoWhyChoose />
        <SeoProcess />
        <SeoCTA />
      </div>
    </main>
  );
}
