"use client";

import { useEffect, useState, type ComponentType } from "react";
import { Command } from "cmdk";
import { Home, User, Code2, Briefcase, FolderKanban, Wrench, Mail, FileDown } from "lucide-react";
// MessageSquareQuote, Newspaper — reserved for Testimonials / Blog when re-enabled
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { navItems, siteConfig, socialLinks } from "@/data/portfolio";
import { useUIStore } from "@/lib/store";

type IconComponent = ComponentType<{ className?: string }>;

const iconById: Record<string, IconComponent> = {
  home: Home,
  about: User,
  skills: Code2,
  experience: Briefcase,
  projects: FolderKanban,
  services: Wrench,
  // testimonials: MessageSquareQuote,
  // blog: Newspaper,
  contact: Mail,
};

/** Ctrl/Cmd+K command palette for quick navigation */
export function CommandPalette() {
  const { isCommandOpen, setCommandOpen } = useUIStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen(!isCommandOpen);
      }
      if (e.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCommandOpen, setCommandOpen]);

  const navigate = (href: string) => {
    setCommandOpen(false);
    setSearch("");
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("http") || href.startsWith("mailto")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  if (!isCommandOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setCommandOpen(false)}
        aria-hidden
      />
      <Command
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-primary/10"
        label="Command palette"
      >
        <div className="flex items-center border-b border-white/10 px-4">
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Jump to section, download resume…"
            className="h-14 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-muted sm:inline">
            ESC
          </kbd>
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="py-8 text-center text-sm text-muted">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigate" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted">
            {navItems.map((item) => {
              const Icon = iconById[item.id] ?? Home;
              return (
                <Command.Item
                  key={item.id}
                  value={item.label}
                  onSelect={() => navigate(item.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted aria-selected:bg-primary/15 aria-selected:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Command.Item>
              );
            })}
          </Command.Group>

          <Command.Group heading="Actions" className="mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted">
            <Command.Item
              value="Download Resume"
              onSelect={() => navigate(siteConfig.resumeUrl)}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted aria-selected:bg-primary/15 aria-selected:text-foreground"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </Command.Item>
            {socialLinks.map((link) => (
              <Command.Item
                key={link.name}
                value={link.name}
                onSelect={() => navigate(link.href)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted aria-selected:bg-primary/15 aria-selected:text-foreground"
              >
                {link.icon === "github" && <GithubIcon className="h-4 w-4" />}
                {link.icon === "linkedin" && <LinkedinIcon className="h-4 w-4" />}
                {link.icon === "email" && <Mail className="h-4 w-4" />}
                {link.name}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
