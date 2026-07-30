"use client";

import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SplashScreen } from "@/components/effects/SplashScreen";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { ScrollToTop } from "@/components/effects/ScrollToTop";
import { FloatingBlobs } from "@/components/effects/FloatingBlobs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";

/** Client-side shell wrapping providers, chrome, and effects */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <SplashScreen />
      <CustomCursor />
      <ScrollProgress />
      <FloatingBlobs />
      <Navbar />
      <CommandPalette />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </SmoothScroll>
  );
}
