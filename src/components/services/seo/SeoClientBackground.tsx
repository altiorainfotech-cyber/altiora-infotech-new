"use client";

import dynamic from "next/dynamic";

const SeoBackground = dynamic(() => import("@/components/services/seo/SeoBackground"), { ssr: false });

export function SeoClientBackground() {
  return <SeoBackground />;
}
