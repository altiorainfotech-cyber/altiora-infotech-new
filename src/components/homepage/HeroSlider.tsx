"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "./HeroVisual";
import { heroSlides } from "@/data/homepage";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = heroSlides.map((slide, index) => {
    const TitleTag = index === 0 ? "h1" : "h2";
    return (
      <div key={slide.title} className="max-w-[640px] pr-1">
        <Eyebrow tone="gold">{slide.eyebrow}</Eyebrow>
        <TitleTag className="mt-4 text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-ink text-balance">
          {slide.title}
        </TitleTag>
        <p className="mt-5 max-w-[560px] text-base leading-relaxed text-muted sm:text-lg">
          {slide.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={slide.primaryCta.href}>{slide.primaryCta.label}</Button>
          {slide.secondaryCta && (
            <Button href={slide.secondaryCta.href} variant="secondary">
              {slide.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="relative overflow-hidden bg-white" aria-label="Introduction">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,21,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,21,26,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Carousel
              slides={slides}
              ariaLabel="Homepage highlights"
              autoplayMs={7000}
              arrowTone="light"
              showDots={false}
              slideClassName="basis-full w-full"
              onSelect={setActiveIndex}
            />

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold tracking-[0.14em] text-muted">
              <span>
                0{activeIndex + 1} / 0{heroSlides.length}
              </span>
              <div className="h-px w-full max-w-[140px] bg-ink/10">
                <motion.div
                  className="h-px bg-gold-500"
                  animate={{ width: `${((activeIndex + 1) / heroSlides.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
