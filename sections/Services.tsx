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
import { AnimateIn, StaggerIn, StaggerItem } from "@/components/shared/AnimateIn";

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
      <div className="section-divider" aria-hidden />
      <div className="container-premium">
        <AnimateIn type="blurUp">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            description="End-to-end engineering — from architecture and APIs to polished interfaces and AI features."
          />
        </AnimateIn>

        <StaggerIn className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <StaggerItem key={service.id}>
                <article className="group relative h-full overflow-hidden rounded-2xl glass card-interactive shine p-5 sm:p-6">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerIn>
      </div>
    </section>
  );
}
