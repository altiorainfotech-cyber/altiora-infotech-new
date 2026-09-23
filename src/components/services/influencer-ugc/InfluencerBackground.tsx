"use client";

import dynamic from "next/dynamic";

const InfluencerClientBackground = dynamic(
  () => import("./InfluencerClientBackground").then((mod) => mod.InfluencerClientBackground),
  { ssr: false }
);

export function InfluencerBackground() {
  return <InfluencerClientBackground />;
}
