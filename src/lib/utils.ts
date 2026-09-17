import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseMetricValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}
