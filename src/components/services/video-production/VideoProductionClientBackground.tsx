"use client";

import dynamic from "next/dynamic";

const VideoProductionBackground = dynamic(
  () => import("@/components/services/video-production/VideoProductionBackground"),
  { ssr: false }
);

export function VideoProductionClientBackground() {
  return <VideoProductionBackground />;
}
