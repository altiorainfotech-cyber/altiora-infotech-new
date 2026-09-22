"use client";

import dynamic from "next/dynamic";

const PaidAdsBackground = dynamic(
  () => import("@/components/services/paid-advertising/PaidAdsBackground"),
  { ssr: false }
);

export function PaidAdsClientBackground() {
  return <PaidAdsBackground />;
}
