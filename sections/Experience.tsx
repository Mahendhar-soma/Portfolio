"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/portfolio";
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
          <div className="timeline-line absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <li
                key={exp.id}
                className={cnTimeline(i)}
              >
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(99,102,241,0.6)] md:left-1/2" />

                <article className="timeline-item glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.15)]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-secondary">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
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
          </ol>
        </div>
      </div>
    </section>
  );
}

function cnTimeline(index: number) {
  const base = "relative pl-12 md:pl-0 md:w-[calc(50%-1.5rem)]";
  return index % 2 === 0
    ? `${base} md:mr-auto md:pr-0`
    : `${base} md:ml-auto`;
}
