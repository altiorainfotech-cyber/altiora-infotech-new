"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";

type CarouselProps = {
  slides: ReactNode[];
  ariaLabel: string;
  options?: EmblaOptionsType;
  autoplayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  slideClassName?: string;
  className?: string;
  arrowTone?: "light" | "dark";
  onSelect?: (index: number) => void;
};

export function Carousel({
  slides,
  ariaLabel,
  options,
  autoplayMs,
  showArrows = true,
  showDots = true,
  slideClassName,
  className,
  arrowTone = "light",
  onSelect,
}: CarouselProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const autoplayRef = useRef(
    autoplayMs
      ? Autoplay({ delay: autoplayMs, stopOnInteraction: false, stopOnMouseEnter: true })
      : undefined
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", ...options },
    autoplayMs && !prefersReducedMotion && autoplayRef.current ? [autoplayRef.current] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelectHandler = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onSelect?.(index);
    };
    onSelectHandler();
    emblaApi.on("select", onSelectHandler);
    emblaApi.on("reInit", onSelectHandler);
    return () => {
      emblaApi.off("select", onSelectHandler);
      emblaApi.off("reInit", onSelectHandler);
    };
  }, [emblaApi, onSelect]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const handleFocus = useCallback(() => {
    autoplayRef.current?.stop();
  }, []);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      autoplayRef.current?.play();
    }
  }, []);

  const arrowClasses =
    arrowTone === "light"
      ? "border-ink/15 bg-white text-ink hover:border-ink/40"
      : "border-white/25 bg-black/40 text-white hover:border-white/60 backdrop-blur";

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn("min-w-0 shrink-0 grow-0", slideClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              aria-hidden={selectedIndex !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing slide {selectedIndex + 1} of {slides.length}
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            className={cn(
              "focus-ring flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              arrowClasses
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={cn(
              "focus-ring flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
              arrowClasses
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {showDots && (
            <div className="ml-2 flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "focus-ring h-2 rounded-full transition-all",
                    index === selectedIndex
                      ? "w-6 bg-gold-500"
                      : arrowTone === "light"
                        ? "w-2 bg-ink/20 hover:bg-ink/40"
                        : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
