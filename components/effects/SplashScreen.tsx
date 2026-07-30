"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/store";
import { siteConfig } from "@/data/portfolio";

/** Premium splash / loading screen */
export function SplashScreen() {
  const { isLoading, setLoading } = useUIStore();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            className="font-display text-4xl font-bold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient">{siteConfig.shortName}</span>
          </motion.div>

          <motion.div
            className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting experiences…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
