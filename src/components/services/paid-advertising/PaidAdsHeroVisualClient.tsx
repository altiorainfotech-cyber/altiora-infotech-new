"use client";

import dynamic from "next/dynamic";

const PaidAdsHeroVisual = dynamic(
  () => import("@/components/services/paid-advertising/PaidAdsHeroVisual"),
  { ssr: false }
);

export function PaidAdsHeroVisualClient() {
  return <PaidAdsHeroVisual />;
}
