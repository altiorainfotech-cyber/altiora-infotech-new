import type { Metadata } from "next";
import { WebDevClientBackground } from "@/components/services/web-development/WebDevClientBackground";
import { WebDevHero } from "@/components/services/web-development/WebDevHero";
import { WebDevOverview } from "@/components/services/web-development/WebDevOverview";
import { WebDevServicesGrid } from "@/components/services/web-development/WebDevServicesGrid";
import { WebDevWhyChoose } from "@/components/services/web-development/WebDevWhyChoose";
import { WebDevProcess } from "@/components/services/web-development/WebDevProcess";
import { WebDevCTA } from "@/components/services/web-development/WebDevCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Website Development Services | ${SITE_NAME}`,
  description:
    "Custom website development — business websites, e-commerce stores, landing pages, SaaS & web apps, and WordPress sites, built fast, secure, and conversion-focused.",
  alternates: {
    canonical: "/services/website-development",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/website-development`,
    siteName: SITE_NAME,
    title: `Website Development Services | ${SITE_NAME}`,
    description:
      "Create fast, modern, secure websites designed to strengthen your online presence, engage visitors, and drive business growth.",
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <WebDevClientBackground />
      <div className="relative z-10">
        <WebDevHero />
        <WebDevOverview />
        <WebDevServicesGrid />
        <WebDevWhyChoose />
        <WebDevProcess />
        <WebDevCTA />
      </div>
    </main>
  );
}
