import React from "react";

/**
 * BRAND LOGO MARK (NITISH KUMAR)
 * ----------------------------------------------------------------------------
 * A geometric, architectural "N" monogram with interactive stretch/spread
 * typography on hover, matching the Artify Studio dynamic interaction.
 */

export function BrandSymbol({ className = "w-8 h-8", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className} shrink-0`}>
      {/* Dynamic Ambient Back-Glow */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-md opacity-30 group-hover:opacity-90 group-hover:blur-lg group-hover:scale-115 transition-all duration-500 pointer-events-none" />
      )}

      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:rotate-[1.5deg] transition-transform duration-500 ease-out"
      >
        <defs>
          {/* Primary Left Pillar Gradient */}
          <linearGradient id="nkPillarLeft" x1="6" y1="6" x2="16" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e4e4e7" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>

          {/* Dynamic Diagonal Nexus Gradient */}
          <linearGradient id="nkDiagonal" x1="10" y1="6" x2="30" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="45%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          {/* Right Pillar Gradient */}
          <linearGradient id="nkPillarRight" x1="24" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f4f4f5" />
            <stop offset="50%" stopColor="#a1a1aa" />
            <stop offset="100%" stopColor="#3f3f46" />
          </linearGradient>
        </defs>

        {/* Outer Hex-Shield / Architectural Frame */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          className="fill-[#08080d]/90 stroke-white/12 group-hover:stroke-purple-400/40 transition-colors duration-500"
          strokeWidth="1.2"
        />

        {/* Precision Architectural "N" Monogram */}
        {/* 1. Left Vertical Strut */}
        <path
          d="M10 10H15.5V30H10V10Z"
          fill="url(#nkPillarLeft)"
        />
        <path
          d="M10 10H15.5V11.5H10V10Z"
          fill="#ffffff"
        />

        {/* 2. Central High-Tech Diagonal Crossbeam */}
        <path
          d="M14 10L26 30H20.5L8.5 10H14Z"
          fill="url(#nkDiagonal)"
          className="opacity-95"
        />

        {/* 3. Right Vertical Strut */}
        <path
          d="M24.5 10H30V30H24.5V10Z"
          fill="url(#nkPillarRight)"
        />
        <path
          d="M24.5 10H30V11.5H24.5V10Z"
          fill="#ffffff"
        />

        {/* 4. Center Micro Core Node */}
        <circle
          cx="20"
          cy="20"
          r="1.8"
          fill="#ffffff"
          className="drop-shadow-[0_0_6px_rgba(192,132,252,0.9)]"
        />
      </svg>
    </div>
  );
}

export function BrandLogo({ size = "md", showSubtitle = true, glow = true, className = "" }) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";

  return (
    <div className={`inline-flex items-center gap-3 group select-none cursor-pointer transition-all duration-500 ease-out ${className}`}>
      {/* Dynamic Geometric Symbol */}
      <BrandSymbol
        className={isSmall ? "w-8 h-8" : isLarge ? "w-11 h-11" : "w-9 h-9"}
        glow={glow}
      />

      {/* Structured Wordmark Lockup with Smooth Stretch / Spread on Hover */}
      <div className="flex flex-col text-left transition-all duration-500 ease-out">
        <span
          className={`font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-white transition-all duration-500 ease-out uppercase leading-none tracking-[0.06em] group-hover:tracking-[0.18em] ${
            isSmall ? "text-xs" : isLarge ? "text-base tracking-[0.08em] group-hover:tracking-[0.2em]" : "text-sm"
          }`}
        >
          Nitish Kumar
        </span>

        {showSubtitle && (
          <span
            className={`font-mono text-zinc-400 group-hover:text-purple-300/90 font-medium uppercase mt-1 leading-none tracking-[0.2em] group-hover:tracking-[0.34em] transition-all duration-500 ease-out ${
              isSmall ? "text-[8px]" : isLarge ? "text-[10px]" : "text-[9px]"
            }`}
          >
            Full Stack Engineer
          </span>
        )}
      </div>
    </div>
  );
}
