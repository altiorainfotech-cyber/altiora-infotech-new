"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { results } from "@/data/homepage";

export function ResultsCarousel() {
  if (results.length === 0) return null;

  const slides = results.map((result) => (
    <div key={result.title} className="pr-5">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-ink/10 lg:grid-cols-2">
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image
            src={result.image}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 bg-white p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
            {result.category}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-ink">{result.title}</h3>
          <p className="line-clamp-4 text-sm leading-relaxed text-muted">{result.description}</p>
          {result.metrics && (
            <dl className="flex flex-wrap gap-6">
              {result.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs text-muted">{metric.label}</dt>
                  <dd className="text-lg font-bold text-ink">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {result.href && (
            <Link
              href={result.href}
              className="focus-ring group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View Case Study
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="results-heading">
      <Container>
        <SectionHeading
          headingId="results-heading"
          eyebrow="Results"
          title="Proof in the Work We Deliver"
        />
        <div className="mt-10">
          <Carousel
            slides={slides}
            ariaLabel="Client results"
            slideClassName="basis-full"
          />
        </div>
      </Container>
    </section>
  );
}
