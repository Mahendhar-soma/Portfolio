"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Command } from "lucide-react";
import { navItems, siteConfig } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useThemeStore, useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/Magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navItems.map((n) => n.id);
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useThemeStore();
  const { isMobileMenuOpen, setMobileMenuOpen, setCommandOpen, setActiveSection } =
    useUIStore();

  useEffect(() => {
    setActiveSection(active);
  }, [active, setActiveSection]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
        )}
      >
        <nav
          className="container-premium flex items-center justify-between px-5 md:px-8"
          aria-label="Primary"
        >
          <Magnetic strength={0.2}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="font-display text-xl font-bold tracking-tight"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="text-gradient">{siteConfig.shortName}</span>
              <span className="text-primary">.</span>
            </a>
          </Magnetic>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    active === item.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              aria-label="Open command palette"
              onClick={() => setCommandOpen(true)}
              className="hidden sm:inline-flex"
            >
              <Command className="h-4 w-4" />
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col glass-strong p-6 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-gradient">
                  {siteConfig.shortName}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base transition-colors",
                        active === item.id
                          ? "bg-primary/15 text-foreground"
                          : "text-muted hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
