"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
// import { GithubIcon } from "@/components/shared/BrandIcons";

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
            <div className="glass rounded-3xl p-5 sm:p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold sm:text-xl">Get in touch</h3>
              <ul className="mt-5 space-y-4 sm:mt-6">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-muted">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="break-all font-medium transition-colors hover:text-secondary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
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
                  <div className="min-w-0">
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium">
                      {siteConfig.location} 
                    </p>
                  </div>
                </li>
                {/* GitHub link kept as a commented reference for future restoration
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <GithubIcon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-muted">GitHub</p>
                    <a
                      href="https://github.com/Mahendhar-soma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium transition-colors hover:text-secondary"
                    >
                      github.com/Mahendhar-soma
                    </a>
                  </div>
                </li>
                */}
              </ul>
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
