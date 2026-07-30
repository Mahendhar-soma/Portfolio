import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { SkillsSection } from "@/sections/Skills";
import { ExperienceSection } from "@/sections/Experience";
import { ProjectsSection } from "@/sections/Projects";
import { ServicesSection } from "@/sections/Services";
// import { TestimonialsSection } from "@/sections/Testimonials";
// import { BlogSection } from "@/sections/Blog";
import { ContactSection } from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  );
}
