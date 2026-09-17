"use client";

import { useCountUp } from "@/lib/hooks";
import { parseMetricValue, cn } from "@/lib/utils";

export function AnimatedMetric({ value, className }: { value: string; className?: string }) {
  const { prefix, number, suffix } = parseMetricValue(value);
  const { ref, value: animated } = useCountUp(number);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={cn("tabular-nums", className)}>
      {prefix}
      {animated}
      {suffix}
    </span>
  );
}
