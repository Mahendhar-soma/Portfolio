"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Top-of-page scroll progress bar */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_rgba(99,102,241,0.45)]"
      style={{ scaleX: progress, width: "100%" }}
      aria-hidden="true"
    />
  );
}
