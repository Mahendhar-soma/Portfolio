"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/shared/BrandIcons";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const q = query.toLowerCase();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-labelledby="projects-heading"
    >
      <div className="section-divider" aria-hidden />
      <div className="container-premium">
        <AnimateIn type="blurUp">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="Selected products spanning SaaS, ERP, village platforms, AI tools, and monitoring — each built for real users."
          />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="touch-scroll-x sm:flex-wrap sm:overflow-visible"
              role="group"
              aria-label="Filter projects"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "shrink-0 rounded-xl px-3.5 py-1.5 text-sm transition-all",
                    filter === cat
                      ? "bg-primary/20 border border-primary/40 text-foreground"
                      : "border border-white/10 text-muted hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="pl-10"
                aria-label="Search projects"
              />
            </div>
          </div>
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl glass card-interactive shine"
                onMouseMove={(e) => {
                  if (window.matchMedia("(pointer: coarse)").matches) return;
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setSelected(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, rgba(99,102,241,0.35), rgba(6,182,212,0.2), rgba(17,24,39,1))`,
                    }}
                  >
                    <ProjectVisual title={project.title} category={project.category} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                    <span className="absolute left-3 top-3 rounded-lg border border-white/15 bg-black/40 px-2.5 py-1 text-xs backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
                {/* <div className="flex gap-2 px-5 pb-5">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div> */}
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted">No projects match your search.</p>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative z-10 max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-surface p-5 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 rounded-lg p-2 text-muted hover:bg-white/5 hover:text-foreground sm:right-4 sm:top-4"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className="mb-5 aspect-video overflow-hidden rounded-2xl sm:mb-6"
                style={{
                  background: `linear-gradient(135deg, rgba(99,102,241,0.4), rgba(6,182,212,0.25))`,
                }}
              >
                <ProjectVisual title={selected.title} category={selected.category} large />
              </div>
              <p className="text-sm text-secondary">{selected.category}</p>
              <h3
                id="project-modal-title"
                className="mt-1 pr-8 font-display text-xl font-bold sm:text-2xl"
              >
                {selected.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed sm:mt-4 sm:text-base">
                {selected.longDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {selected.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)] sm:mt-8 sm:flex-row sm:flex-wrap">
                {/* {selected.github && (
                  // <Button className="w-full sm:w-auto" asChild>
                  //   <a href={selected.github} target="_blank" rel="noopener noreferrer">
                  //     <GithubIcon className="h-4 w-4" />
                  //     View on GitHub
                  //   </a>
                  // </Button>
                )} */}
                {selected.liveDemo && (
                  <Button variant="outline" className="w-full sm:w-auto" asChild>
                    <a href={selected.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectVisual({
  title,
  category,
  large,
}: {
  title: string;
  category: string;
  large?: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <span
        className={cn(
          "font-display font-bold text-white/90 text-center px-2 break-words",
          large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
        )}
      >
        {title.split(" ").slice(0, 2).join(" ")}
      </span>
      <span className="mt-2 text-xs uppercase tracking-widest text-white/50">
        {category}
      </span>
    </div>
  );
}
