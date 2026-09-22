"use client";

import dynamic from "next/dynamic";

const InfluencerHeroVisual = dynamic(
  () => import("@/components/services/influencer-ugc/InfluencerHeroVisual"),
  { ssr: false }
);

export function InfluencerHeroVisualClient() {
  return <InfluencerHeroVisual />;
}
