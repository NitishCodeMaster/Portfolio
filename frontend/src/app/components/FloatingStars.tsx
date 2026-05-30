import { motion } from "framer-motion";

export const FloatingStars = () => {
  const stars = Array.from({ length: 45 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
      {stars.map((_, i) => {
        const size = Math.random() * 3 + 2;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px #fff, 0 0 20px #a855f7, 0 0 35px #6366f1",
            }}
            animate={{
              y: [0, Math.random() * -150 - 50, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};