import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Sparkles, MapPin, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import EarthGlobe from "./EarthGlobe";
import { portfolioData } from "../../data/portfolioData";
import { ResumeModal } from "./ResumeModal";
import { SkillsMarquee } from "./SkillsMarquee";

const Hero = () => {
  const { personal, resume } = portfolioData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPhotoActive, setIsPhotoActive] = useState(false);
  const coreTech = ["React", "TypeScript", "Node.js", "Next.js", "Java", "PostgreSQL"];

  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-transparent text-white flex flex-col justify-between pt-24 pb-0 md:pt-28">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Professional Introduction & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Subtle Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span>{personal.availability}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="text-zinc-100">{personal.name}</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-400 mt-2">
                  {personal.role}
                </span>
              </h1>
            </motion.div>

            {/* Professional Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-7 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed font-light"
            >
              {personal.bio}
            </motion.p>

            {/* Core Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-9 flex-wrap"
            >
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="btn-sand-primary w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-xs font-bold interactive group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="btn-sand-dark w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-xs font-medium interactive group"
              >
                <FileText className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span>View Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Clean Portrait / Profile Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle ambient lighting behind portrait */}
              <div className="absolute inset-0 bg-purple-500/10 rounded-3xl blur-2xl -z-10" />

              {/* Portrait Container Frame */}
              <div className="relative rounded-3xl p-3 bg-[#0a0a0e]/90 border border-white/[0.09] shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
                
                {/* Photo Frame */}
                <div
                  onClick={() => setIsPhotoActive((prev) => !prev)}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/[0.06] cursor-pointer select-none"
                  title="Click/tap to toggle color"
                >
                  <ImageWithFallback
                    src={personal.portraitImage}
                    alt={`${personal.name} - ${personal.role}`}
                    className={`w-full h-full object-cover filter contrast-105 transition-all duration-700 ease-out ${
                      isPhotoActive ? "grayscale-0" : "grayscale group-hover:grayscale-0 group-hover:scale-102"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Card Bottom Meta */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white font-display">{personal.name}</span>
                      <span className="text-[11px] text-zinc-400">{personal.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#130b24]/90 border border-purple-500/35 backdrop-blur-md text-[10px] font-medium text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      <span>{personal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle Floating Highlight Badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 rounded-2xl bg-[#111116]/95 border border-purple-500/25 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl hidden sm:flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Sparkles className="w-4 h-4 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Full Stack Architecture</div>
                    <div className="text-[10px] text-zinc-400">Frontend • Backend • Cloud</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Dynamic Moving Skills Strip Marquee */}
      <SkillsMarquee />

      <EarthGlobe />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
};

export { Hero };
