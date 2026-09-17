"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/8 bg-[radial-gradient(circle_at_30%_20%,rgba(211,172,60,0.12),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(61,114,201,0.14),transparent_55%),linear-gradient(160deg,#fafaf8,#f2f1ec)]">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
      <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </div>
  );
}
