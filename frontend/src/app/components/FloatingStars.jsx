import { motion } from "motion/react";
const stars = Array.from({ length: 72 }, (_, i) => {
  const seed = Math.sin(i * 999) * 10000;
  const rand = seed - Math.floor(seed);
  const rand2 = Math.sin((i + 11) * 777) * 10000 % 1;
  const rand3 = Math.sin((i + 23) * 555) * 10000 % 1;
  return {
    size: 1.5 + Math.abs(rand) * 3.5,
    left: `${Math.abs(rand2) * 100}%`,
    top: `${Math.abs(rand3) * 100}%`,
    driftX: (Math.abs(rand3) - 0.5) * 56,
    driftY: -60 - Math.abs(rand2) * 160,
    duration: 6 + Math.abs(rand) * 8,
    delay: Math.abs(rand3) * 4
  };
});
const FloatingStars = () => {
  return <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      {stars.map((star, i) => {
    return <motion.div
      key={i}
      className="absolute rounded-full bg-white"
      style={{
        width: star.size,
        height: star.size,
        left: star.left,
        top: star.top,
        boxShadow: "0 0 12px rgba(255,255,255,0.95), 0 0 22px rgba(168,85,247,0.75), 0 0 42px rgba(99,102,241,0.55)"
      }}
      animate={{
        y: [0, star.driftY, 0],
        x: [0, star.driftX, 0],
        opacity: [0.28, 1, 0.28],
        scale: [0.85, 1.55, 0.85]
      }}
      transition={{
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />;
  })}
    </div>;
};
export {
  FloatingStars
};
