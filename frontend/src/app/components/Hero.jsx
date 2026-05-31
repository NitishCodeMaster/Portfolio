import { motion } from "motion/react";
import { ArrowRight, Download, Sparkle } from "lucide-react";
import { Orb } from "./Orb";
import { FloatingStars } from "./FloatingStars";
import { BackgroundEffects } from "./BackgroundEffects";
import EarthGlobe from "./EarthGlobe";

const Hero = () => {
  const skills = ["Java", "React", "Full Stack"];
  return <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#020204] text-white flex flex-col items-center justify-center">

    <BackgroundEffects />
    <FloatingStars />

    <div className="relative z-10 mx-auto w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center h-full pt-16">

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <Orb />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.03] px-3.5 py-1 text-[10px] font-bold tracking-wider text-purple-300 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          <Sparkle className="h-3 w-3 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
          OPEN FOR PRODUCTION CONTRACTS
        </span>
      </motion.div>


      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative mb-5 w-full select-none">

        <span className="pointer-events-none absolute inset-x-0 -top-8 -z-10 text-[4.5rem] font-black uppercase leading-none text-white/[0.01] md:text-[7.5rem] lg:text-[8.5rem] tracking-[0.25em] block">
          NITISH
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]">
          <span className="block whitespace-nowrap bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Hi, I'm Nitish
          </span>
          <span className="block bg-gradient-to-r from-purple-300 via-indigo-400 to-zinc-500 bg-clip-text text-transparent font-medium mt-1">
            Full Stack Engineer
          </span>
        </h1>
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-6 max-w-2xl text-zinc-400 text-xs md:text-sm leading-relaxed font-light tracking-wide">
        Crafting ultra-modern, scalable, and highly interactive web experiences.
        Bridging the gap between creative design languages and production-grade software architecture.
      </motion.p>


      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.38 }} className="flex items-center gap-2 mb-8 flex-wrap md:justify-start justify-center">
        {skills.map((skill) => <span key={skill} className="rounded-full border border-white/[0.05] bg-white/[0.02] px-3.5 py-1 text-[10px] font-semibold tracking-wider text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-md">
          {skill}
        </span>)}
      </motion.div>


      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3.5">
        <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-white px-7 py-3.5 text-xs font-bold text-neutral-950 shadow-xl transition-transform hover:scale-[1.02] active:scale-95">
          <span>Explore Systems</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button className="group flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.01] px-7 py-3.5 text-xs font-semibold text-zinc-300 backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/[0.04]">
          <Download className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          <span>Secure Resume</span>
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 select-none pointer-events-none">
        <span className="text-[8px] text-zinc-600 uppercase tracking-[0.25em] font-bold animate-pulse">SCROLL TO EXPLORE</span>
        <div className="relative h-7 w-4 rounded-full border border-zinc-700 flex justify-center p-1">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-purple-400" />
        </div>
        <div className="h-8 w-[1px] bg-gradient-to-b from-zinc-700 to-transparent" />
      </motion.div>

    </div>
    <EarthGlobe />
  </section>;
};

export {
  Hero
};
