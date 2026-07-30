"use client";

import dynamic from "next/dynamic";
import { GradientSphere } from "@/components/effects/GradientSphere";

/** Client-only Three.js scene — avoids SSR WebGL issues */
export const TechScene3DLazy = dynamic(
  () =>
    import("@/components/effects/TechScene3D").then((m) => m.TechScene3D),
  {
    ssr: false,
    loading: () => <GradientSphere />,
  }
);
