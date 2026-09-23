"use client";

import dynamic from "next/dynamic";

const VideoProductionClientBackground = dynamic(
  () => import("./VideoProductionClientBackground").then((mod) => mod.VideoProductionClientBackground),
  { ssr: false }
);

export function VideoProductionBackground() {
  return <VideoProductionClientBackground />;
}
