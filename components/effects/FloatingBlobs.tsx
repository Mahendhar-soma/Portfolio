"use client";

import { motion } from "framer-motion";

/** Ambient floating gradient blobs */
export function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="blob left-[-10%] top-[-5%] h-[420px] w-[420px] bg-primary"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob right-[-8%] top-[30%] h-[360px] w-[360px] bg-secondary"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob bottom-[10%] left-[30%] h-[300px] w-[300px] bg-accent"
        animate={{ x: [0, 25, 0], y: [0, -35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
}
