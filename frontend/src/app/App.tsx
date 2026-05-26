import { useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Add smooth scrolling using standard behavior or basic setup
  useEffect(() => {
    // Custom smooth scroll logic if needed, but CSS smooth scroll is usually fine
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020203] text-white font-sans selection:bg-white/20 selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
