"use client";

import dynamic from "next/dynamic";

const MobileAppBackground = dynamic(() => import("@/components/services/mobile-app/MobileAppBackground"), {
  ssr: false,
});

export function MobileAppClientBackground() {
  return <MobileAppBackground />;
}
