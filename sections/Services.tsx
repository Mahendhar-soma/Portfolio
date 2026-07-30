"use client";

import type { ComponentType } from "react";
import {
  Globe,
  Bot,
  Network,
  Database,
  LayoutTemplate,
  Zap,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";

type IconComponent = ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  globe: Globe,
  bot: Bot,
  api: Network,
  database: Database,
  layout: LayoutTemplate,
  zap: Zap,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative"
      aria-labelledby="services-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            description="End-to-end engineering — from architecture and APIs to polished interfaces and AI features."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <AnimateIn key={service.id} delay={0.06 * i} type="scale">
                <article className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_0_32px_rgba(6,182,212,0.15)]">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
