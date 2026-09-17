"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-b from-white/90 via-slate-50/80 to-amber-50/40 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(20,21,26,0.12)]">
      {/* Ambient Radial Flaring */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-400/15 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[80px]" />

      {/* Centerpiece Logo without background container */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-95">
        <Image
          src="/altiora-logo.png"
          alt="Altiora Infotech"
          width={64}
          height={64}
          className="drop-shadow-[0_6px_20px_rgba(211,172,60,0.45)]"
        />
      </div>

      <Suspense fallback={<div className="h-full w-full bg-transparent" />}>
        <HeroCanvas />
      </Suspense>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
    </div>
  );
}
