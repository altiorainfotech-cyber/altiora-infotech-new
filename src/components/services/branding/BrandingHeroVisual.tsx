"use client";

import dynamic from "next/dynamic";

const BrandingHeroVisualClient = dynamic(
  () => import("./BrandingHeroVisualClient").then((mod) => mod.BrandingHeroVisualClient),
  { ssr: false }
);

export function BrandingHeroVisual() {
  return <BrandingHeroVisualClient />;
}
