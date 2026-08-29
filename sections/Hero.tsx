"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import {
  heroSpecializations,
  siteConfig,
  floatingTechIcons,
} from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/Magnetic";
import { Typewriter } from "@/components/shared/Typewriter";
import { ParticleField } from "@/components/effects/ParticleField";
import { TechScene3DLazy } from "@/components/effects/TechScene3DLazy";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      <ParticleField className="absolute inset-0 h-full w-full opacity-50 sm:opacity-70" />

      {/* Floating tech labels — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {floatingTechIcons.map((tech, i) => (
          <motion.span
            key={tech}
            className="absolute rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted backdrop-blur-sm"
            style={{
              left: `${12 + (i % 3) * 28}%`,
              top: `${18 + Math.floor(i / 3) * 55}%`,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="container-premium relative z-10 grid w-full items-center gap-8 px-4 sm:gap-10 sm:px-5 md:gap-12 md:px-8 lg:grid-cols-2">
        <div className="min-w-0 text-center lg:text-left">
          <motion.p
            className="mb-3 text-xs font-medium tracking-widest uppercase text-secondary sm:mb-4 sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-display text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.shortName}</span>
          </motion.h1>

          <motion.p
            className="mt-3 text-lg text-muted sm:mt-4 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {siteConfig.role}
          </motion.p>

          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:mt-6 sm:text-base md:text-lg lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <span className="text-muted">Specialized in</span>
            <Typewriter
              words={heroSpecializations}
              className="font-semibold text-secondary"
            />
          </motion.div>

          <motion.p
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-6 sm:text-base lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <Magnetic className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Hire me — go to contact"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href={siteConfig.resumeUrl}
                  download="Mahendharsoma-Resume.docx"
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-8 rounded-full bg-primary/20 blur-3xl animate-pulse-glow"
            aria-hidden="true"
          />
          <TechScene3DLazy className="relative h-full w-full" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden
      >
        <span className="text-xs tracking-widest uppercase text-muted">Scroll</span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
