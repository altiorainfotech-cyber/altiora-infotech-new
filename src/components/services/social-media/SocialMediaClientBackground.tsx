"use client";

import dynamic from "next/dynamic";

const SocialMediaBackground = dynamic(
  () => import("@/components/services/social-media/SocialMediaBackground"),
  { ssr: false }
);

export function SocialMediaClientBackground() {
  return <SocialMediaBackground />;
}
