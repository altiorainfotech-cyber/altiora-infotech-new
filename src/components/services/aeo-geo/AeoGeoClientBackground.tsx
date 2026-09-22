"use client";

import dynamic from "next/dynamic";

const AeoGeoBackground = dynamic(() => import("@/components/services/aeo-geo/AeoGeoBackground"), { ssr: false });

export function AeoGeoClientBackground() {
  return <AeoGeoBackground />;
}
