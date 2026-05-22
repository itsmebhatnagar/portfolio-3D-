import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExtraSection } from './components/sections/ExtraSection';

export default function App() {
  return (
    <main className="w-full bg-[#0C0C0C] min-h-screen font-sans text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExtraSection />
    </main>
  );
}

