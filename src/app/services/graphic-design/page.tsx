import type { Metadata } from "next";
import { GraphicDesignClientBackground } from "@/components/services/graphic-design/GraphicDesignClientBackground";
import { GraphicDesignHero } from "@/components/services/graphic-design/GraphicDesignHero";
import { GraphicDesignOverview } from "@/components/services/graphic-design/GraphicDesignOverview";
import { GraphicDesignServicesGrid } from "@/components/services/graphic-design/GraphicDesignServicesGrid";
import { GraphicDesignWhyChoose } from "@/components/services/graphic-design/GraphicDesignWhyChoose";
import { GraphicDesignProcess } from "@/components/services/graphic-design/GraphicDesignProcess";
import { GraphicDesignCTA } from "@/components/services/graphic-design/GraphicDesignCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Graphic Design Services | ${SITE_NAME}`,
  description:
    "Graphic design services — logo and brand identity, social media graphics, marketing collateral, UI/UX, print, and packaging design built to keep your brand consistent and memorable.",
  alternates: {
    canonical: "/services/graphic-design",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/graphic-design`,
    siteName: SITE_NAME,
    title: `Graphic Design Services | ${SITE_NAME}`,
    description:
      "Build a premium, consistent visual identity with creative designs that attract attention, communicate your message, and strengthen your brand.",
  },
};

export default function GraphicDesignPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden">
      <GraphicDesignClientBackground />
      <div className="relative z-10">
        <GraphicDesignHero />
        <GraphicDesignOverview />
        <GraphicDesignServicesGrid />
        <GraphicDesignWhyChoose />
        <GraphicDesignProcess />
        <GraphicDesignCTA />
      </div>
    </main>
  );
}
