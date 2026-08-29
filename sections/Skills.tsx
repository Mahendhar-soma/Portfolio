"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { TechOrbit } from "@/components/effects/TechOrbit";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="section-divider" aria-hidden />
      <TechOrbit className="hidden opacity-30 sm:flex" />

      <div className="container-premium relative z-10">
        <AnimateIn type="blurUp">
          <SectionHeading
            eyebrow="Skills"
            title="Tools of the craft"
            description="A curated stack spanning frontend, backend, databases, and AI — sharpened through real production work."
          />
        </AnimateIn>

        {/* Category tabs */}
        <AnimateIn delay={0.1}>
          <div
            className="touch-scroll-x mb-8 justify-start sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 sm:px-4",
                  active === i
                    ? "bg-primary/20 text-foreground shadow-[0_0_20px_rgba(99,102,241,0.25)] border border-primary/40"
                    : "border border-white/10 text-muted hover:border-white/20 hover:text-foreground"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </AnimateIn>

        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          role="tabpanel"
        >
          {category.skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group glass card-interactive rounded-2xl p-4 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display font-semibold">{skill.name}</h3>
                <span
                  className="text-sm font-medium tabular-nums"
                  style={{ color: category.color }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                    boxShadow: `0 0 12px ${category.color}66`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
