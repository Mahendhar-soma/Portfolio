"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animated gradient orb for the hero.
 * CSS + Framer Motion (no WebGL) so it always renders reliably.
 */
export function GradientSphere({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center",
        className
      )}
      aria-hidden
    >
      {/* Outer glow */}
      <div className="absolute inset-[8%] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute inset-[18%] rounded-full bg-secondary/20 blur-2xl" />

      {/* Orbit ring */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-primary/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_16px_rgba(6,182,212,0.8)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[14%] rounded-full border border-dashed border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
      </motion.div>

      {/* Core sphere */}
      <motion.div
        className="relative h-[62%] w-[62%] overflow-hidden rounded-full shadow-[0_0_60px_rgba(99,102,241,0.45),inset_0_0_40px_rgba(255,255,255,0.12)]"
        animate={{
          scale: [1, 1.04, 1],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 30% 28%, #a5b4fc 0%, #6366F1 32%, #4f46e5 55%, #06B6D4 78%, #0e7490 100%)",
        }}
      >
        {/* Moving highlight */}
        <motion.div
          className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-white/25 blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary color wash */}
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 h-[65%] w-[65%] rounded-full bg-accent/35 blur-2xl"
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft specular */}
        <div className="absolute left-[18%] top-[16%] h-[22%] w-[28%] rounded-full bg-white/40 blur-md" />
      </motion.div>

      {/* Floating code chips */}
      {[
        { label: "CI4", top: "12%", left: "8%", delay: 0 },
        { label: "MySQL", top: "70%", left: "4%", delay: 0.4 },
        { label: "Next.js", top: "18%", right: "6%", delay: 0.8 },
        { label: "PHP", bottom: "14%", right: "10%", delay: 1.2 },
      ].map((chip) => (
        <motion.span
          key={chip.label}
          className="absolute rounded-full border border-white/15 bg-surface/80 px-2.5 py-1 text-[10px] font-medium text-muted backdrop-blur-md sm:text-xs"
          style={{
            top: chip.top,
            left: chip.left,
            right: chip.right,
            bottom: chip.bottom,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: chip.delay,
          }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
