"use client";

import { navItems, siteConfig } from "@/data/portfolio";
import { Magnetic } from "@/components/shared/Magnetic";

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
            {/* Social icons (GitHub / LinkedIn / Email) — hidden for now */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-sm text-muted hover:text-secondary transition-colors"
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
