"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/homepage";

export function ServicesCarousel() {
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

        {/* Asymmetric bento grid: the lead service gets a wider, taller tile
            so the section reads as art-directed rather than a repeated card
            template. */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const featured = index === 0;
            return (
              <Reveal
                key={service.slug}
                delay={(index % 6) * 0.06}
                className={featured ? "sm:col-span-2" : ""}
              >
                <ServiceCard service={service} featured={featured} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
