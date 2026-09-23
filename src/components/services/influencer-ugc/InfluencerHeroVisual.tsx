"use client";

import dynamic from "next/dynamic";

const InfluencerHeroVisualClient = dynamic(
  () => import("./InfluencerHeroVisualClient").then((mod) => mod.InfluencerHeroVisualClient),
  { ssr: false }
);

export function InfluencerHeroVisual() {
  return <InfluencerHeroVisualClient />;
}
