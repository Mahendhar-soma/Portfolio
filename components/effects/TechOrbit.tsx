"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ORBIT_TECH = [
  "PHP",
  "CI4",
  "Next.js",
  "MySQL",
  "REST",
  "AI",
  "Git",
  "API",
];

/** CSS 3D orbital tech ring — lightweight accent for Skills */
export function TechOrbit({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center opacity-40",
        className
      )}
      aria-hidden
      style={{ perspective: "900px" }}
    >
      <motion.div
        className="relative h-[280px] w-[280px] md:h-[360px] md:w-[360px]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360, rotateX: 12 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {/* Rings */}
        <div
          className="absolute inset-0 rounded-full border border-primary/25"
          style={{ transform: "rotateX(72deg)" }}
        />
        <div
          className="absolute inset-6 rounded-full border border-dashed border-secondary/20"
          style={{ transform: "rotateX(72deg) rotateZ(25deg)" }}
        />
        <div
          className="absolute inset-12 rounded-full border border-accent/15"
          style={{ transform: "rotateX(72deg) rotateZ(-35deg)" }}
        />

        {ORBIT_TECH.map((tech, i) => {
          const angle = (i / ORBIT_TECH.length) * Math.PI * 2;
          const radius = 130;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <motion.span
              key={tech}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-surface/70 px-2 py-0.5 text-[10px] font-medium text-muted backdrop-blur-sm"
              style={{
                transform: `translate3d(${x}px, 0px, ${z}px)`,
              }}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            >
              {tech}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}
