import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Achievements } from "./components/Achievements";
import { CodingProfiles } from "./components/CodingProfiles";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import StarsCanvas from "./components/StarBackground";
import { BackgroundEffects } from "./components/BackgroundEffects";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [liveGithubMap, setLiveGithubMap] = useState({});

  const handleNavigate = (sectionId) => {
    // 1. If currently inside a project detail page, close it cleanly
    setSelectedProject(null);

    // 2. Smoothly scroll to the requested section with comfortable navbar clearance
    setTimeout(() => {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const navbarOffset = -96; // 96px clearance for comfortable space below fixed navbar
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + navbarOffset;
          window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" });
        }
      }
    }, 40);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020204] text-white antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      {/* Global Three.js Rotating Star Background Canvas */}
      <StarsCanvas />
      <BackgroundEffects />

      {/* Global Dashboard Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Single Page Layout Sections */}
      <main className="relative w-full z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          liveGithubMap={liveGithubMap}
          setLiveGithubMap={setLiveGithubMap}
        />
        <Achievements />
        <CodingProfiles />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* System Footer Integration */}
      <Footer />
    </div>
  );
}

export default App;
