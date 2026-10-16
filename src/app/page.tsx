import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
