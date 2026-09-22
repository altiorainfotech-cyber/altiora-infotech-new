"use client";

import dynamic from "next/dynamic";

const SeoHeroVisual = dynamic(() => import("@/components/services/seo/SeoHeroVisual"), { ssr: false });

export function SeoHeroVisualClient() {
  return <SeoHeroVisual />;
}
