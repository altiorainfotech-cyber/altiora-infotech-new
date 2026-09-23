import type { Metadata } from "next";
import { MobileAppClientBackground } from "@/components/services/mobile-app/MobileAppClientBackground";
import { MobileAppHero } from "@/components/services/mobile-app/MobileAppHero";
import { MobileAppOverview } from "@/components/services/mobile-app/MobileAppOverview";
import { MobileAppServicesGrid } from "@/components/services/mobile-app/MobileAppServicesGrid";
import { MobileAppWhyChoose } from "@/components/services/mobile-app/MobileAppWhyChoose";
import { MobileAppProcess } from "@/components/services/mobile-app/MobileAppProcess";
import { MobileAppCTA } from "@/components/services/mobile-app/MobileAppCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mobile App Development | ${SITE_NAME}`,
  description:
    "Mobile app development services — iOS, Android, React Native, and Flutter apps with backend & API integration and research-driven UI/UX design.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/mobile-app-development`,
    siteName: SITE_NAME,
    title: `Mobile App Development | ${SITE_NAME}`,
    description:
      "Design and develop powerful mobile apps for iOS, Android, and cross-platform platforms with seamless UX, scalable technology, and reliable performance.",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <MobileAppClientBackground />
      <div className="relative z-10">
        <MobileAppHero />
        <MobileAppOverview />
        <MobileAppServicesGrid />
        <MobileAppWhyChoose />
        <MobileAppProcess />
        <MobileAppCTA />
      </div>
    </main>
  );
}
