import { motion } from "framer-motion";

export const BackgroundEffects = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
            {/* Cyber Technical Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(circle_at_50%_50%,#000_60%,transparent_100%)]" />

            {/* LEFT SIDE: Large Glowing Planet Reflection from edge */}
            <div className="absolute -left-44 top-[20%] w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/20 via-indigo-950/40 to-transparent blur-xl border border-purple-500/10 shadow-[0_0_100px_rgba(168,85,247,0.15)]" />
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-[35%] w-56 h-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_70%)] blur-3xl"
            />

            {/* RIGHT SIDE: Abstract Futuristic Geometry Network Structure */}
            <div className="absolute right-[-50px] top-[15%] w-96 h-96 opacity-40 hidden lg:block">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        d="M50 200 L150 100 L250 150 L350 50 M150 100 L200 280 L350 200 M50 200 L200 280"
                        stroke="url(#neonGlow)"
                        strokeWidth="1.5"
                    />
                    <circle cx="150" cy="100" r="4" fill="#a855f7" className="animate-ping" />
                    <circle cx="200" cy="280" r="4" fill="#6366f1" />
                    <circle cx="350" cy="200" r="3" fill="#fff" />
                    <defs>
                        <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Ambient Space Core Vignette Shield */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(2,2,4,0.8)_60%,#020204_100%)]" />
        </div>
    );
};