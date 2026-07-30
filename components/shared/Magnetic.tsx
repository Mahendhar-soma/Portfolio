"use client";

import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

interface MagneticProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  strength?: number;
}

/** Subtle magnetic pull toward cursor on hover */
export function Magnetic({
  children,
  strength = 0.35,
  className,
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      className={cn("magnetic will-change-transform", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  );
}
