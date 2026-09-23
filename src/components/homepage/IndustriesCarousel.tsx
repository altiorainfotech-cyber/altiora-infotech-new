"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import { industries, industryIcons } from "@/data/homepage";

export function IndustriesCarousel() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]?.title ?? "Healthcare");

  const slides = industries.map((industry) => {
    const Icon = industryIcons[industry.title];
    const isSelected = activeIndustry === industry.title;

    return (
      <div key={industry.title} className="pr-5">
        <Link
          href={industry.href ?? "#"}
          onMouseEnter={() => setActiveIndustry(industry.title)}
          className={`focus-ring group relative block aspect-[4/5] overflow-hidden rounded-2xl border transition-all duration-300 shadow-md ${
            isSelected
              ? "border-gold-400 ring-2 ring-gold-400/40 shadow-xl scale-[1.02]"
              : "border-ink/10 opacity-85 hover:opacity-100"
          }`}
        >
          <Image
            src={industry.image}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 320px, 70vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />
          <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
            {Icon && (
              <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md transition-colors ${
                isSelected ? "border-gold-400 bg-gold-500/20 text-gold-300" : "border-white/20 bg-white/10 text-white"
              }`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            )}
            <h3 className="text-lg font-bold tracking-tight text-white">{industry.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs text-white/80">{industry.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-300 transition-transform duration-200 group-hover:translate-x-1">
              <span>Explore Ecosystem</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24" aria-labelledby="industries-heading">
      {/* Ambient Adaptive Environment Backlight */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-700 bg-[radial-gradient(ellipse_at_center,rgba(61,114,201,0.08),transparent_75%)]" />

      <Container className="relative z-10">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            headingId="industries-heading"
            eyebrow="Adaptive Environments"
            title="Built for Global, Tailored for Yours"
            description="A digital growth partner adapting strategies across specialized sector environments."
            tone="light"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50/80 px-4 py-1.5 text-xs font-bold text-gold-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold-600" />
            <span>Active Sector: {activeIndustry}</span>
          </div>
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
