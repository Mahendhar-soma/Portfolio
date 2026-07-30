"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".impact-stat", {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 65%",
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div className="container-premium">
        <AnimateIn>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've made an impact"
            description="Software Engineer at Innisoft Pvt Ltd since 2018 — shipping enterprise platforms with 99.5%+ uptime."
          />
        </AnimateIn>

        <div ref={timelineRef} className="relative mx-auto max-w-3xl">
          <div className="timeline-line absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-8" />

          <ol className="space-y-10">
            {experiences.map((exp) => (
              <li key={exp.id} className="relative pl-12 md:pl-20">
                <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(99,102,241,0.6)] md:left-8">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                <article className="timeline-item glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.15)] md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold md:text-xl">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-secondary">{exp.company}</p>
                    </div>
                    <div className="space-y-1 text-sm text-muted md:text-right">
                      <p className="font-medium text-foreground/80">
                        {exp.duration}
                      </p>
                      <p className="flex items-center gap-1.5 md:justify-end">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                    {exp.description}
                  </p>

                  {exp.impacts && exp.impacts.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {exp.impacts.map((impact) => (
                        <div
                          key={impact.label}
                          className="impact-stat rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                        >
                          <p className="font-display text-lg font-bold text-gradient">
                            {impact.value}
                          </p>
                          <p className="mt-0.5 text-[11px] text-muted">
                            {impact.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}

            <li className="relative pl-12 md:pl-20">
              <div className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-secondary bg-background shadow-[0_0_12px_rgba(6,182,212,0.5)] md:left-8">
                <GraduationCap className="h-3.5 w-3.5 text-secondary" />
              </div>

              <article className="timeline-item glass rounded-2xl p-6 transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.12)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium tracking-widest text-secondary uppercase">
                      Education
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold">
                      {siteConfig.education.degree}
                    </h3>
                    <p className="mt-1 text-muted">
                      {siteConfig.education.school}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    {siteConfig.education.year}
                  </p>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Languages: {siteConfig.languages.join(" · ")}
                </p>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
