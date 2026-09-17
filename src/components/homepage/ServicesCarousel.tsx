"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/homepage";

export function ServicesCarousel() {
  const slides = services.map((service) => (
    <div key={service.slug} className="h-full pr-4 sm:pr-5">
      <ServiceCard service={service} />
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            headingId="services-heading"
            eyebrow="Core Services"
            title="A Full Digital Growth Engine"
            description="Eleven services, one connected strategy — built to move traffic, leads, and revenue forward."
            tone="light"
          />
        </Reveal>

        <div className="mt-12">
          <Carousel
            slides={slides}
            ariaLabel="Core services"
            options={{ align: "start", containScroll: "trimSnaps" }}
            slideClassName="basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3"
            showDots={false}
            arrowTone="light"
          />
        </div>
      </Container>
    </section>
  );
}
