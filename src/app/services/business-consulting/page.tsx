import type { Metadata } from "next";
import { ConsultingClientBackground } from "@/components/services/business-consulting/ConsultingClientBackground";
import { ConsultingHero } from "@/components/services/business-consulting/ConsultingHero";
import { ConsultingOverview } from "@/components/services/business-consulting/ConsultingOverview";
import { ConsultingServicesGrid } from "@/components/services/business-consulting/ConsultingServicesGrid";
import { ConsultingWhyChoose } from "@/components/services/business-consulting/ConsultingWhyChoose";
import { ConsultingProcess } from "@/components/services/business-consulting/ConsultingProcess";
import { ConsultingCTA } from "@/components/services/business-consulting/ConsultingCTA";
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
      <ConsultingClientBackground />
      <div className="relative z-10">
        <ConsultingHero />
        <ConsultingOverview />
        <ConsultingServicesGrid />
        <ConsultingWhyChoose />
        <ConsultingProcess />
        <ConsultingCTA />
      </div>
    </main>
  );
}
