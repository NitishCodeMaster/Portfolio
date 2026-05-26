import { motion } from "motion/react";
import { ArrowRight, Braces, Download, Layers3, Orbit, Sparkle } from "lucide-react";
import { Hero3D } from "./Hero3D";

const ProfileMark = () => (
  <div className="relative mb-8 h-36 w-36 md:h-44 md:w-44" aria-hidden="true">
    <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_58%)] blur-2xl" />
    <div className="absolute inset-0 rounded-full border border-white/[0.14] bg-white/[0.035] shadow-[0_24px_85px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md" />
    <div className="absolute inset-3 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.2),rgba(255,255,255,0.04)_42%,rgba(0,0,0,0.14)_72%)]" />
    <div className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f0eee6] to-[#9fa6b2] shadow-[0_0_30px_rgba(255,255,255,0.18)] md:top-10 md:h-20 md:w-20" />
    <div className="absolute bottom-7 left-1/2 h-16 w-28 -translate-x-1/2 rounded-[999px_999px_34px_34px] bg-gradient-to-b from-[#c9c7c0] to-[#646b76] opacity-95 md:bottom-8 md:h-20 md:w-36" />
    <div className="absolute bottom-11 left-1/2 h-11 w-20 -translate-x-1/2 rounded-full bg-[#020203]/38 blur-sm md:bottom-14" />
    <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 translate-y-1 place-items-center rounded-full border border-white/12 bg-black/[0.42] backdrop-blur-sm md:h-14 md:w-14">
      <Braces className="h-6 w-6 text-[#f1eee5]" />
    </div>
    <div className="absolute -right-2 top-9 h-5 w-5 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.85)]" />
    <div className="absolute -left-3 bottom-12 h-2.5 w-2.5 rounded-full bg-[#dbe9ff] shadow-[0_0_18px_rgba(160,200,255,0.9)]" />
    <div className="absolute inset-0 rounded-full ring-1 ring-[#b8a4ff]/20" />
  </div>
);

export const Hero = () => {
  const tech = ["React", "Node", "TS", "Three", "API"];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#020203] text-white">
      <Hero3D />

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_42%,rgba(74,78,95,0.18),rgba(2,2,3,0.22)_34%,rgba(2,2,3,0.9)_74%)] pointer-events-none" />
      <div className="absolute left-1/2 top-[43%] z-[1] h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035] bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_64%)] pointer-events-none" />
      <div className="absolute left-1/2 top-[45%] z-[1] h-[34rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-white/[0.035] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,2,3,0.1)_0%,rgba(2,2,3,0.16)_48%,rgba(2,2,3,0.82)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black via-black/58 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-black via-black/66 to-transparent pointer-events-none" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 36, 0], y: [0, 18, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-12 top-28 z-[2] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(216,211,198,0.14),rgba(184,164,255,0.06)_42%,transparent_68%)] blur-sm"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -28, 0], y: [0, 24, 0], opacity: [0.25, 0.58, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-14 bottom-24 z-[2] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(159,200,255,0.1),rgba(255,255,255,0.055)_38%,transparent_70%)] blur-sm"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-32 text-center md:pt-28 lg:grid-cols-[1fr_minmax(520px,760px)_1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="hidden justify-self-start text-left lg:block"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white/80">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.07]">
                <Layers3 className="h-4 w-4 text-[#d8d3c6]" />
              </span>
              Flowing Stack
            </div>
            <div className="space-y-3">
              {["Design systems", "Realtime APIs", "3D interfaces"].map((item, index) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-white/[0.08] bg-black/[0.24] px-4 py-3 text-sm text-zinc-400"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.aside>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <ProfileMark />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-sm font-medium tracking-wide text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
              <Sparkle className="h-4 w-4 text-[#d8d3c6]" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mb-6 max-w-5xl font-display text-5xl font-bold leading-[0.96] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="pointer-events-none absolute inset-x-0 -top-8 -z-10 text-[7rem] font-black uppercase leading-none text-white/[0.035] md:text-[10rem] lg:text-[12rem]">
              Nitish
            </span>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white via-[#d8d3c6] to-[#b8a4ff] bg-clip-text text-transparent">
              Nitish
            </span>
            <br />
            <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Full Stack Engineer
            </span>
          </motion.h1>

          <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            Crafting ultra-modern, scalable, and highly interactive web experiences.
            Bridging the gap between design and robust engineering.
          </motion.p>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-[#f1eee5] px-8 py-4 font-semibold text-zinc-950 shadow-[0_18px_60px_rgba(0,0,0,0.42)] transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <button className="group flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-8 py-4 font-medium text-white/85 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/20 hover:bg-white/[0.075] active:scale-95">
              <Download className="w-5 h-5" />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="hidden justify-self-end lg:block"
        >
          <div className="relative h-72 w-64">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/[0.08]" />
            <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-white/[0.055] shadow-[0_0_55px_rgba(255,255,255,0.12)] backdrop-blur-xl">
              <Orbit className="h-8 w-8 text-[#d8d3c6]" />
            </div>
            {tech.map((item, index) => {
              const positions = [
                "left-4 top-8",
                "right-1 top-16",
                "left-2 bottom-20",
                "right-8 bottom-8",
                "left-1/2 top-0 -translate-x-1/2",
              ];
              return (
                <motion.div
                  key={item}
                  animate={{ y: [0, -10, 0], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 3.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${positions[index]} rounded-full border border-white/10 bg-black/[0.32] px-3 py-2 text-xs font-semibold text-white/75 backdrop-blur-xl`}
                >
                  {item}
                </motion.div>
              );
            })}
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-zinc-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
