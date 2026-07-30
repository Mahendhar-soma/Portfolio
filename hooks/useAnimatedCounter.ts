"use client";

import { useEffect, useState } from "react";

/** Animate a number from 0 to target when triggered */
export function useAnimatedCounter(
  target: number,
  enabled: boolean,
  duration = 1800
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, duration]);

  return count;
}
