import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Achievements } from "./components/Achievements";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
function App() {
  return <div className="relative min-h-screen w-full bg-[#020204] text-white antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      {
    /* Premium Ambient Micro-Interactions */
  }
      <CustomCursor />

      {
    /* Global Dashboard Navigation Header */
  }
      <Navbar />

      {
    /* Main Single Page Layout Sections */
  }
      <main className="relative w-full">
        {
    /* Viewport-Locked Hero Shield */
  }
        <Hero />

        {
    /* Subsequent Structured Page Blocks */
  }
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Achievements />
        <ExperienceSection />
        <Testimonials />
        <ContactSection />
      </main>

      {
    /* System Footer Integration */
  }
      <Footer />
    </div>;
}
var stdin_default = App;
export {
  stdin_default as default
};
