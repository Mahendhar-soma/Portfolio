"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header with eyebrow + title + description */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 max-w-2xl px-1 sm:mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          className="mb-2 text-xs font-medium tracking-widest uppercase text-secondary sm:mb-3 sm:text-sm"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <motion.span
        className={cn(
          "mt-4 block h-px w-16 bg-gradient-to-r from-primary via-secondary to-transparent sm:w-20",
          align === "center" && "mx-auto"
        )}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
        aria-hidden
      />
      {description && (
        <p className="mt-3 text-sm text-muted leading-relaxed sm:mt-4 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
