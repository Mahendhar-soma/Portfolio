"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/** Custom cursor + glow follower for fine pointer devices */
export function CustomCursor() {
  const isFine = useMediaQuery("(pointer: fine)");
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    if (!isFine || isReduced) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
    };
  }, [isFine, isReduced, mouseX, mouseY]);

  if (!isFine || isReduced) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[1] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
    </>
  );
}
