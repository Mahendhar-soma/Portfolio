"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Count-up number that triggers when scrolled into view */
export function AnimatedCounter({
  value,
  suffix = "",
  className,
  duration = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useAnimatedCounter(value, isInView, duration);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count}
      {suffix}
    </span>
  );
}
