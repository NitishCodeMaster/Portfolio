import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#020204] text-white antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      {/* Premium Ambient Micro-Interactions */}
      <CustomCursor />

      {/* Global Dashboard Navigation Header */}
      <Navbar />

      {/* Main Single Page Layout Sections */}
      <main className="relative w-full">
        {/* Viewport-Locked Hero Shield */}
        <Hero />

        {/* Subsequent Structured Page Blocks */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* System Footer Integration */}
      <Footer />
    </div>
  );
}

export default App;