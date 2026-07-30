"use client";

import type { ComponentType } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";

type IconComponent = ComponentType<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  twitter: Mail,
};

export function ContactSection() {
  // Contact form + Google Map intentionally disabled for now.
  // Re-enable by restoring the form/EmailJS block and map iframe below.

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something great"
            description="Have a project in mind or a role to fill? Reach out — I usually reply within 24 hours."
          />
        </AnimateIn>

        <AnimateIn type="fadeUp">
          <div className="mx-auto max-w-xl">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium transition-colors hover:text-secondary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="font-medium transition-colors hover:text-secondary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium">
                      {siteConfig.location} · Remote-friendly
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-all hover:border-primary/40 hover:text-foreground hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact form (disabled)
            <form>...</form>
            */}

            {/* Google Map (disabled)
            <iframe src="https://www.google.com/maps?q=Mahabubabad,Telangana,India&output=embed" />
            */}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
