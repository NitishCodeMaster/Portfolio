import { motion } from "motion/react";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(circle_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* LEFT SIDE: Subtle Glowing Ambient Space Orb */}
      <div className="absolute -left-44 top-[20%] w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/10 via-indigo-950/20 to-transparent blur-2xl border border-purple-500/5 shadow-[0_0_100px_rgba(168,85,247,0.08)]" />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-[35%] w-56 h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_70%)] blur-3xl"
      />

      {/* RIGHT SIDE: Ambient Subtle Indigo Glow */}
      <div className="absolute -right-40 top-[50%] w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] blur-3xl" />

      {/* Ambient Space Core Vignette Shield */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(2,2,4,0.85)_70%,#020204_100%)]" />
    </div>
  );
};

export { BackgroundEffects };
