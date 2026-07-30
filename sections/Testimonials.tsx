"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [total]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section-padding relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Feedback from founders, PMs, and engineering leads I've partnered with."
          />
        </AnimateIn>

        <AnimateIn type="scale">
          <div className="relative mx-auto max-w-3xl">
            <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
              <Quote
                className="absolute right-8 top-8 h-16 w-16 text-primary/15"
                aria-hidden
              />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="mb-4 flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground md:text-xl">
                    &ldquo;{current.content}&rdquo;
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold">
                      {current.avatar}
                    </div>
                    <div>
                      <cite className="not-italic font-semibold">
                        {current.name}
                      </cite>
                      <p className="text-sm text-muted">
                        {current.role} · {current.company}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous testimonial"
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-primary"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % total)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
