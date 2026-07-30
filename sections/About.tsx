"use client";

import type { ComponentType } from "react";
import {
  Briefcase,
  FolderKanban,
  Code2,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { aboutHighlights, aboutStats, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

type IconComponent = ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  briefcase: Briefcase,
  folder: FolderKanban,
  code: Code2,
  sparkles: Sparkles,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative"
      aria-labelledby="about-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="About"
            title="Full-stack ownership, production focus"
            description="8+ years building ERP, SaaS, and CMS platforms — from requirements to secure Linux/cPanel deployment."
          />
        </AnimateIn>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn type="fadeLeft">
            <div className="relative mx-auto w-full max-w-md">
              <div className="glow-border overflow-hidden rounded-3xl p-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-surface to-secondary/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-primary to-secondary font-display text-4xl font-bold shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                      MS
                    </div>
                    <h3 className="font-display text-2xl font-bold">
                      {siteConfig.name}
                    </h3>
                    <p className="mt-1 text-secondary">{siteConfig.role}</p>
                    <p className="mt-4 text-sm text-muted">{siteConfig.location}</p>
                    <p className="mt-1 text-xs text-muted">
                      Works from {siteConfig.workLocation}
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[10px] text-secondary/80 backdrop-blur-sm sm:text-xs">
                    <span className="text-muted">const</span> stack = [
                    <br />
                    &nbsp;&nbsp;<span className="text-accent">&quot;CI4&quot;</span>,{" "}
                    <span className="text-primary">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-secondary">&quot;MySQL&quot;</span>
                    <br />
                    ];
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div>
            <AnimateIn type="fadeRight">
              <p className="text-muted leading-relaxed md:text-lg">
                {siteConfig.description}
              </p>
            </AnimateIn>

            <AnimateIn type="fadeRight" delay={0.1}>
              <div className="mt-6 flex items-start gap-3 rounded-2xl glass p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold">
                    {siteConfig.education.degree}
                  </p>
                  <p className="text-sm text-muted">
                    {siteConfig.education.school} · {siteConfig.education.year}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Languages: {siteConfig.languages.join(" · ")}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Code2;
                return (
                  <AnimateIn key={item.title} delay={0.1 * i} type="scale">
                    <article className="group glass rounded-2xl p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </article>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {aboutStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={0.08 * i}>
              <div className="glass rounded-2xl p-6 text-center transition-all hover:border-secondary/30">
                <p className="font-display text-3xl font-bold text-gradient md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
