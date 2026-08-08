"use client";

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
        <p className="mb-2 text-xs font-medium tracking-widest uppercase text-secondary sm:mb-3 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-3 text-sm text-muted leading-relaxed sm:mt-4 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
