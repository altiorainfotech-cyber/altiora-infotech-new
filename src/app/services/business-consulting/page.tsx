import type { Metadata } from "next";
import { BusinessConsultingClientBackground } from "@/components/services/business-consulting/BusinessConsultingClientBackground";
import { BusinessConsultingHero } from "@/components/services/business-consulting/BusinessConsultingHero";
import { BusinessConsultingOverview } from "@/components/services/business-consulting/BusinessConsultingOverview";
import { BusinessConsultingServicesGrid } from "@/components/services/business-consulting/BusinessConsultingServicesGrid";
import { BusinessConsultingWhyChoose } from "@/components/services/business-consulting/BusinessConsultingWhyChoose";
import { BusinessConsultingProcess } from "@/components/services/business-consulting/BusinessConsultingProcess";
import { BusinessConsultingCTA } from "@/components/services/business-consulting/BusinessConsultingCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Business Consulting Services | ${SITE_NAME}`,
  description:
    "Business consulting services — strategic planning, operational improvement, financial consulting, growth strategy, digital transformation, and performance analytics.",
  alternates: {
    canonical: "/services/business-consulting",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/business-consulting`,
    siteName: SITE_NAME,
    title: `Business Consulting Services | ${SITE_NAME}`,
    description:
      "Build a clearer strategy, improve operations, and identify growth opportunities with practical business consulting tailored to your goals.",
  },
};

export default function BusinessConsultingPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <BusinessConsultingClientBackground />
      <div className="relative z-10">
        <BusinessConsultingHero />
        <BusinessConsultingOverview />
        <BusinessConsultingServicesGrid />
        <BusinessConsultingWhyChoose />
        <BusinessConsultingProcess />
        <BusinessConsultingCTA />
      </div>
    </main>
  );
}
