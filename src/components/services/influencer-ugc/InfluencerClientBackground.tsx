"use client";

import dynamic from "next/dynamic";

const InfluencerBackground = dynamic(
  () => import("@/components/services/influencer-ugc/InfluencerBackground"),
  { ssr: false }
);

export function InfluencerClientBackground() {
  return <InfluencerBackground />;
}
