"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "./HeroVisual";
import { heroSlides } from "@/data/homepage";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = heroSlides.map((slide, index) => {
    const TitleTag = index === 0 ? "h1" : "h2";
    return (
      <div key={slide.title} className="max-w-[640px] pr-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-700">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>{slide.eyebrow}</span>
        </div>
        <TitleTag className="mt-5 text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-ink text-balance">
          {slide.title.includes("—") ? (
            <>
              {slide.title.split("—")[0]}—{" "}
              <span className="text-blue-gradient">{slide.title.split("—")[1]}</span>
            </>
          ) : (
            slide.title
          )}
        </TitleTag>
        <p className="mt-5 max-w-[560px] text-base leading-relaxed text-muted sm:text-lg">
          {slide.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={slide.primaryCta.href}>
            <span className="relative z-10 flex items-center gap-2 font-bold">
              {slide.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Button>
          {slide.secondaryCta && (
            <Button
              href={slide.secondaryCta.href}
              variant="secondary"
              className="border-ink/15 bg-white text-ink hover:bg-surface shadow-sm"
            >
              {slide.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="relative overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20" aria-label="Introduction">
      {/* Background Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(20,21,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,21,26,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* On mobile: 3D Animation FIRST (order-1), Slider SECOND (order-2). On Desktop: Slider LEFT (lg:order-1), 3D Animation RIGHT (lg:order-2) */}
          <div className="order-2 lg:order-1">
            <Carousel
              slides={slides}
              ariaLabel="Homepage highlights"
              autoplayMs={7000}
              arrowTone="light"
              showDots={false}
              slideClassName="basis-full w-full"
              onSelect={setActiveIndex}
            />

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold tracking-[0.14em] text-muted">
              <span className="text-blue-600 font-mono">
                0{activeIndex + 1} / 0{heroSlides.length}
              </span>
              <div className="h-px w-full max-w-[160px] bg-ink/10">
                <motion.div
                  className="h-px bg-blue-600 shadow-[0_0_8px_rgba(28,79,161,0.5)]"
                  animate={{ width: `${((activeIndex + 1) / heroSlides.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
