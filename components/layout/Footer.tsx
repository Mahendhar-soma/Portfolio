"use client";

import { Heart, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { navItems, siteConfig, socialLinks } from "@/data/portfolio";
import { Magnetic } from "@/components/shared/Magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";

type IconComponent = ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  twitter: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="container-premium px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Magnetic strength={0.15}>
              <a href="#home" className="font-display text-2xl font-bold">
                <span className="text-gradient">{siteConfig.shortName}</span>
                <span className="text-primary">.</span>
              </a>
            </Magnetic>
            <p className="mt-3 max-w-xs text-sm text-muted leading-relaxed">
            Available for freelance and full-time opportunities. Based in{" "}
            {siteConfig.location}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Magnetic key={link.name} strength={0.3}>
                    <a
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-all hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                );
              })}
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-block text-sm text-muted hover:text-secondary transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-muted hover:text-secondary transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          {/* <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-accent" aria-hidden /> and Next.js
          </p> */}
        </div>
      </div>
    </footer>
  );
}
