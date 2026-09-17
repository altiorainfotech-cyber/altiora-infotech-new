"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { industries, industryIcons } from "@/data/homepage";

export function IndustriesCarousel() {
  const slides = industries.map((industry) => {
    const Icon = industryIcons[industry.title];
    return (
      <div key={industry.title} className="pr-5">
        <Link
          href={industry.href ?? "#"}
          className="focus-ring group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-md"
        >
          <Image
            src={industry.image}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 320px, 70vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />
          <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
            {Icon && (
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-gold-400 backdrop-blur-md">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            )}
            <h3 className="text-lg font-bold tracking-tight text-white">{industry.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs text-white/80">{industry.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-300 transition-transform duration-200 group-hover:translate-x-1">
              <span>Explore</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="industries-heading">
      <Container>
        <Reveal>
          <SectionHeading
            headingId="industries-heading"
            eyebrow="Industries"
            title="Built for Global, Built for Yours"
            description="A digital growth partner across the industries that need it most."
            tone="light"
          />
        </Reveal>

        <div className="mt-12">
          <Carousel
            slides={slides}
            ariaLabel="Industries we serve"
            options={{ align: "start", containScroll: "trimSnaps" }}
            slideClassName="basis-[70%] sm:basis-[45%] md:basis-1/3 lg:basis-1/4"
            arrowTone="light"
            showDots={false}
          />
        </div>
      </Container>
    </section>
  );
}
