"use client";

import dynamic from "next/dynamic";

const BrandingBackground = dynamic(() => import("@/components/services/branding/BrandingBackground"), {
  ssr: false,
});

export function BrandingClientBackground() {
  return <BrandingBackground />;
}
