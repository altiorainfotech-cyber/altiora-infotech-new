"use client";

import dynamic from "next/dynamic";

const MobileAppHeroVisual = dynamic(() => import("@/components/services/mobile-app/MobileAppHeroVisual"), {
  ssr: false,
});

export function MobileAppHeroVisualClient() {
  return <MobileAppHeroVisual />;
}
