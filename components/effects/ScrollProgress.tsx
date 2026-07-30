"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Top-of-page scroll progress bar */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ scaleX: progress, width: "100%" }}
      aria-hidden
    />
  );
}
