import { ClientBackground } from "@/components/homepage/ClientBackground";
import { HeroSlider } from "@/components/homepage/HeroSlider";
import { QuickAnswer } from "@/components/homepage/QuickAnswer";
import { GrowthMetrics } from "@/components/homepage/GrowthMetrics";
import { ServicesCarousel } from "@/components/homepage/ServicesCarousel";
import { WhyAltiora } from "@/components/homepage/WhyAltiora";
import { ServiceEcosystem } from "@/components/homepage/ServiceEcosystem";
import { ProcessTimeline } from "@/components/homepage/ProcessTimeline";
import { ResultsCarousel } from "@/components/homepage/ResultsCarousel";
import { IndustriesCarousel } from "@/components/homepage/IndustriesCarousel";
import { TestimonialsCarousel } from "@/components/homepage/TestimonialsCarousel";
import { AeoGeoSection } from "@/components/homepage/AeoGeoSection";
import { FinalCTA } from "@/components/homepage/FinalCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink">
      <ClientBackground />
      <div className="relative z-10">
        <HeroSlider />
        <GrowthMetrics />
        <QuickAnswer />
        <ServicesCarousel />
        <WhyAltiora />
        <ServiceEcosystem />
        <ProcessTimeline />
        <ResultsCarousel />
        <IndustriesCarousel />
        <TestimonialsCarousel />
        <AeoGeoSection />
        <FinalCTA />
      </div>
    </main>
  );
}
