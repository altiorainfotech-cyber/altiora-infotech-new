"use client";

import dynamic from "next/dynamic";

const BrandingHeroVisual = dynamic(() => import("@/components/services/branding/BrandingHeroVisual"), {
  ssr: false,
});

export function BrandingHeroVisualClient() {
  return <BrandingHeroVisual />;
}
