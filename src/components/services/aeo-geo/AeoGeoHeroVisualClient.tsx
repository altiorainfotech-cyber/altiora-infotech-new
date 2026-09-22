"use client";

import dynamic from "next/dynamic";

const AeoGeoHeroVisual = dynamic(() => import("@/components/services/aeo-geo/AeoGeoHeroVisual"), { ssr: false });

export function AeoGeoHeroVisualClient() {
  return <AeoGeoHeroVisual />;
}
