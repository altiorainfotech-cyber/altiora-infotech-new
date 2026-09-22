"use client";

import dynamic from "next/dynamic";

const SocialMediaHeroVisual = dynamic(
  () => import("@/components/services/social-media/SocialMediaHeroVisual"),
  { ssr: false }
);

export function SocialMediaHeroVisualClient() {
  return <SocialMediaHeroVisual />;
}
