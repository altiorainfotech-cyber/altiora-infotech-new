"use client";

import dynamic from "next/dynamic";

const VideoProductionHeroVisualClient = dynamic(
  () => import("./VideoProductionHeroVisualClient").then((mod) => mod.VideoProductionHeroVisualClient),
  { ssr: false }
);

export function VideoProductionHeroVisual() {
  return <VideoProductionHeroVisualClient />;
}
