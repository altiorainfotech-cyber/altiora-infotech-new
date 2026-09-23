"use client";

import dynamic from "next/dynamic";

const BusinessConsultingClientBackground = dynamic(
  () => import("./BusinessConsultingClientBackground").then((mod) => mod.BusinessConsultingClientBackground),
  { ssr: false }
);

export function BusinessConsultingBackground() {
  return <BusinessConsultingClientBackground />;
}
