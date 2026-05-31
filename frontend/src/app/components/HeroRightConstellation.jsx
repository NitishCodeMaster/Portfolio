import { motion } from "motion/react";
import { Box, Users } from "lucide-react";

// Vertical faceted crystal geometry (tall gem) — occupies most of the right column height.
const nodes = [
  [250, 70],   // 0 top apex
  [140, 220],  // 1 upper left
  [370, 250],  // 2 upper right
  [250, 200],  // 3 upper interior
  [90, 430],   // 4 mid left
  [410, 400],  // 5 mid right
  [260, 420],  // 6 center
  [160, 600],  // 7 lower left
  [360, 610],  // 8 lower right
  [250, 745]   // 9 bottom apex
];

// Thin wireframe edges connecting the nodes.
const edges = [
  "M250 70 L140 220",
  "M250 70 L370 250",
  "M250 70 L250 200",
  "M140 220 L250 200",
  "M370 250 L250 200",
  "M140 220 L90 430",
  "M370 250 L410 400",
  "M250 200 L260 420",
  "M90 430 L260 420",
  "M410 400 L260 420",
  "M140 220 L260 420",
  "M370 250 L260 420",
  "M90 430 L160 600",
  "M410 400 L360 610",
  "M260 420 L160 600",
  "M260 420 L360 610",
  "M160 600 L250 745",
  "M360 610 L250 745",
  "M260 420 L250 745",
  "M160 600 L360 610"
];

// Subtle translucent facets that give the crystal volume.
const facets = [
  "M250 70 L140 220 L250 200 Z",
  "M250 70 L370 250 L250 200 Z",
  "M140 220 L90 430 L260 420 L250 200 Z",
  "M370 250 L410 400 L260 420 L250 200 Z",
  "M90 430 L160 600 L260 420 Z",
  "M410 400 L360 610 L260 420 Z",
  "M160 600 L250 745 L260 420 Z",
  "M360 610 L250 745 L260 420 Z"
];

function SignalPanel({ icon: Icon, title, text, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute w-52 rounded-lg border border-purple-300/20 bg-black/25 px-4 py-3 text-left shadow-[0_18px_55px_rgba(0,0,0,0.38),0_0_34px_rgba(88,28,135,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl z-30 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-md border border-purple-300/15 bg-purple-500/[0.06] text-purple-300">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <div>
          <div className="text-[11px] font-bold tracking-wide text-zinc-100">{title}</div>
          <p className="mt-1 max-w-[9.5rem] text-[9px] leading-relaxed text-zinc-500">{text}</p>
          <div className="mt-3 h-px w-8 bg-gradient-to-r from-purple-400 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

function HeroRightConstellation() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-[4] hidden w-[31vw] min-w-[430px] max-w-[620px] overflow-hidden xl:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(168,85,247,0.13),transparent_34%),linear-gradient(270deg,rgba(2,2,4,0.72)_0%,rgba(2,2,4,0.34)_58%,transparent_100%)]" />

      {/* Purple ambient glow behind the crystal */}
      <div className="absolute right-[-6%] top-1/2 h-[78%] w-[78%] -translate-y-1/2 rounded-full blur-[90px] bg-[radial-gradient(circle_at_55%_45%,rgba(168,85,247,0.20),rgba(99,102,241,0.07)_45%,transparent_70%)]" />

      {/* The crystal geometry — full height, sits behind the cards */}
      <motion.div
        className="absolute inset-y-6 right-[2%] left-[6%] z-10"
        animate={{ y: [0, -14, 0], x: [0, -5, 0], rotate: [0, 0.6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 500 800"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="crystalLine" x1="90" y1="70" x2="410" y2="745" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#cdb7ff" stopOpacity="0.9" />
              <stop offset="0.45" stopColor="#9f7cff" stopOpacity="0.6" />
              <stop offset="1" stopColor="#5b21b6" stopOpacity="0.32" />
            </linearGradient>
            <radialGradient id="crystalFill" cx="52%" cy="42%" r="62%">
              <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.22" />
              <stop offset="0.6" stopColor="#6d28d9" stopOpacity="0.08" />
              <stop offset="1" stopColor="#020204" stopOpacity="0" />
            </radialGradient>
            <filter id="crystalGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Translucent facets */}
          {facets.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="url(#crystalFill)"
              animate={{ opacity: [0.22, 0.5, 0.22] }}
              transition={{ duration: 6.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Thin glowing edges */}
          {edges.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="url(#crystalLine)"
              strokeWidth={0.7}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.28, 0.8, 0.32] }}
              transition={{
                pathLength: { duration: 1.6, delay: index * 0.06, ease: "easeOut" },
                opacity: { duration: 5 + index * 0.15, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}

          {/* Glowing pulsing nodes */}
          {nodes.map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={index % 3 === 0 ? 3.8 : 2.6}
              fill={index % 4 === 0 ? "#e9ddff" : "#d6c9ff"}
              filter="url(#crystalGlow)"
              animate={{
                opacity: [0.55, 1, 0.55],
                r: [2.4, index % 3 === 0 ? 4.6 : 3.4, 2.4]
              }}
              transition={{ duration: 3.4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </motion.div>

      <SignalPanel
        icon={Box}
        title="Scalable"
        text="Building solutions that grow with you."
        className="right-[18%] top-[22.5%]"
      />
      <SignalPanel
        icon={Users}
        title="User Focused"
        text="Designing experiences users love."
        className="right-[19%] bottom-[18%]"
      />
    </div>
  );
}

export {
  HeroRightConstellation
};
