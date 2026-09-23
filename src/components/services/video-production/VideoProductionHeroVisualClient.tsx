"use client";

import dynamic from "next/dynamic";

const VideoProductionHeroVisual = dynamic(
  () => import("@/components/services/video-production/VideoProductionHeroVisual"),
  { ssr: false }
);

export function VideoProductionHeroVisualClient() {
  return <VideoProductionHeroVisual />;
}
