import { motion } from "motion/react";
import { Box, Users } from "lucide-react";

const particles = Array.from({ length: 24 }, (_, index) => {
  const phase = index * 1.37;
  return {
    left: 6 + Math.abs(Math.sin(phase)) * 88,
    top: 3 + Math.abs(Math.cos(phase * 0.9)) * 92,
    size: index % 5 === 0 ? 3 : 1.5,
    delay: (index % 8) * 0.42,
    duration: 5.6 + index % 6
  };
});

const nodes = [
  [340, 20],
  [205, 130],
  [375, 186],
  [165, 236],
  [265, 204],
  [358, 382],
  [272, 382],
  [86, 186],
  [126, 82],
  [248, 292]
];

const connectionPaths = [
  "M340 20 L205 130 L375 186 Z",
  "M340 20 L126 82 L86 186 L205 130 Z",
  "M86 186 L165 236 L248 292 L205 130 Z",
  "M165 236 L272 382 L248 292 Z",
  "M205 130 L358 382 L272 382 L248 292 Z",
  "M375 186 L358 382 L205 130",
  "M86 186 L272 382 L358 382 L375 186",
  "M126 82 L248 292 L340 20"
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

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-purple-200"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 10px rgba(198,171,255,0.95), 0 0 28px rgba(134,60,241,0.45)",
            opacity: 0.9
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.16, 0.9, 0.16],
            scale: [0.75, 1.25, 0.75]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

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

      <motion.div
        className="absolute right-[-128px] top-[38%] h-[430px] w-[430px] origin-center z-10"
        animate={{
          x: [0, -6, 0],
          y: [0, -10, 0],
          scale: [1, 1.018, 1],
          rotate: [0, 0.8, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-[radial-gradient(circle_at_32%_32%,rgba(168,85,247,0.16),rgba(99,102,241,0.045),transparent_45%)]" />
        <svg viewBox="0 0 420 420" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="leftConstellationLine" x1="86" y1="20" x2="375" y2="382" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#cdb7ff" stopOpacity="0.88" />
              <stop offset="0.42" stopColor="#9f7cff" stopOpacity="0.62" />
              <stop offset="1" stopColor="#5b21b6" stopOpacity="0.34" />
            </linearGradient>
            <radialGradient id="leftConstellationFill" cx="68%" cy="46%" r="62%">
              <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.32" />
              <stop offset="0.58" stopColor="#6d28d9" stopOpacity="0.12" />
              <stop offset="1" stopColor="#020204" stopOpacity="0" />
            </radialGradient>
            <filter id="leftConstellationGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M340 20 L375 186 L358 382 L272 382 L165 236 L86 186 L126 82 Z"
            fill="url(#leftConstellationFill)"
            animate={{ opacity: [0.28, 0.56, 0.28] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {connectionPaths.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke="url(#leftConstellationLine)"
              strokeWidth={index === 0 ? 0.75 : 0.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.22, 0.78, 0.28] }}
              transition={{
                pathLength: { duration: 1.4, delay: index * 0.12, ease: "easeOut" },
                opacity: { duration: 4.8 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}

          {nodes.map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={index % 3 === 0 ? 3.6 : 2.4}
              fill={index % 4 === 0 ? "#e9ddff" : "#d6c9ff"}
              filter="url(#leftConstellationGlow)"
              animate={{ opacity: [0.56, 1, 0.56], r: [2.2, index % 3 === 0 ? 4.4 : 3.2, 2.2] }}
              transition={{ duration: 3.2 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <motion.circle
            cx="340"
            cy="20"
            r="82"
            fill="none"
            stroke="#c084fc"
            strokeWidth="0.5"
            strokeOpacity="0.18"
            animate={{ scale: [0.96, 1.08, 0.96], opacity: [0.12, 0.36, 0.12] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "340px 20px" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export {
  HeroRightConstellation
};
