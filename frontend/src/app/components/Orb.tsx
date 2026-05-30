import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const Orb = () => {
    return (
        <div className="relative mb-6 h-40 w-40 md:h-44 md:w-44 flex items-center justify-center select-none" aria-hidden="true">
            {/* Concentric Multi-Ring Radiating System */}
            <div className="absolute -inset-5 rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: '6s' }} />
            <div className="absolute -inset-1 rounded-full border border-dashed border-indigo-500/30 animate-spin" style={{ animationDuration: '30s' }} />

            {/* Refractive Cyber Glass Center Frame */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-tr from-neutral-900 via-neutral-950 to-purple-950/30 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.1)] backdrop-blur-xl" />

            {/* Inner Screen Core */}
            <div className="absolute inset-3 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] flex items-center justify-center">
                <div className="text-center">
                    <Terminal className="h-5 w-5 text-purple-400 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono tracking-[0.25em] text-purple-300 block mt-1.5 font-bold">CORE_INIT</span>
                </div>
            </div>

            {/* Orbit High Intensity Glowing Satellite Nodes */}
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_#fff]" />
            <div className="absolute left-4 bottom-2 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
        </div>
    );
};