import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Code, Trophy, Target, Award, Star, RefreshCw } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { fetchLeetCodeStats, fetchCodeChefStats } from "../../services/codingService";

// Official Brand Icons
const LeetCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeChefIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .44-.1.85-.28 1.22.75.47 1.28 1.3 1.28 2.28 0 1.48-1.2 2.68-2.68 2.68-.34 0-.67-.06-.97-.18-.3.12-.63.18-.97.18-1.48 0-2.68-1.2-2.68-2.68 0-.98.53-1.81 1.28-2.28A2.97 2.97 0 0 1 9 8c0-1.66 1.34-3 3-3zm-3 12v-1.5h6V17H9zm8-3H7v-1.5h10V14z" />
  </svg>
);

const CodingProfiles = () => {
  const { codingProfiles } = portfolioData;
  const leetcodeUser = codingProfiles.leetcode.username;
  const codechefUser = codingProfiles.codechef.username;

  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codechefData, setCodechefData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      setLoading(true);

      const [lc, cc] = await Promise.all([
        fetchLeetCodeStats(leetcodeUser),
        fetchCodeChefStats(codechefUser)
      ]);

      if (isMounted) {
        if (lc) setLeetcodeData(lc);
        if (cc) setCodechefData(cc);
        setLoading(false);
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, [leetcodeUser, codechefUser]);

  return (
    <section id="coding-profiles" className="py-14 md:py-18 relative z-10 bg-transparent border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
          >
            <Code className="w-3.5 h-3.5 text-purple-400" />
            <span>Competitive Programming</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
          >
            Coding <span className="text-zinc-500 font-normal">Profiles</span>
          </motion.h2>

          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light max-w-md mx-auto">
            Live public metrics fetched dynamically from active coding platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          
          {/* 1. LEETCODE PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl border border-white/[0.08] bg-[#09090e]/80 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-white/20 hover:bg-[#0e0e15]/90 transition-all duration-300 flex flex-col justify-between overflow-hidden interactive"
          >
            {/* Top edge subtle sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:border-amber-400/40 group-hover:scale-105 transition-all">
                    <LeetCodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      LeetCode
                    </h3>
                    <span className="text-xs text-zinc-400 font-mono">
                      @{leetcodeUser}
                    </span>
                  </div>
                </div>

                <a
                  href={codingProfiles.leetcode.profileUrl || `https://leetcode.com/u/${leetcodeUser}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all shrink-0"
                >
                  <span>Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Solved
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-display">
                    {loading ? "..." : (leetcodeData?.totalSolved ?? "Active")}
                  </span>
                </div>

                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Global Rank
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-200 font-mono mt-0.5 block truncate">
                    {loading ? "..." : (leetcodeData?.ranking ?? "Verified")}
                  </span>
                </div>

                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Platform
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-amber-400/90 font-display mt-0.5 block">
                    DSA Core
                  </span>
                </div>
              </div>

              {/* Difficulty Breakdown Badges */}
              {leetcodeData?.easySolved !== undefined && (
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-3 py-2 rounded-xl bg-black/40 border border-white/[0.04] mb-4">
                  <span className="text-emerald-400">Easy: {leetcodeData.easySolved}</span>
                  <span className="text-amber-400">Medium: {leetcodeData.mediumSolved}</span>
                  <span className="text-rose-400">Hard: {leetcodeData.hardSolved}</span>
                </div>
              )}
            </div>

            {/* Footer Direct CTA */}
            <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Data Synchronized
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">leetcode.com</span>
            </div>
          </motion.div>

          {/* 2. CODECHEF PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl border border-white/[0.08] bg-[#09090e]/80 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-white/20 hover:bg-[#0e0e15]/90 transition-all duration-300 flex flex-col justify-between overflow-hidden interactive"
          >
            {/* Top edge subtle sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 group-hover:border-purple-400/40 group-hover:scale-105 transition-all">
                    <CodeChefIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                      CodeChef
                    </h3>
                    <span className="text-xs text-zinc-400 font-mono">
                      @{codechefUser}
                    </span>
                  </div>
                </div>

                <a
                  href={codingProfiles.codechef.profileUrl || `https://www.codechef.com/users/${codechefUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all shrink-0"
                >
                  <span>Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Rating
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-display">
                    {loading ? "..." : (codechefData?.currentRating ?? "Active")}
                  </span>
                </div>

                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Division
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-purple-300 font-display mt-0.5 block">
                    {loading ? "..." : (codechefData?.stars ?? "Contests")}
                  </span>
                </div>

                <div className="rounded-xl bg-white/[0.025] border border-white/[0.05] p-3 text-center">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-medium mb-1">
                    Rank
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-200 font-mono mt-0.5 block truncate">
                    {loading ? "..." : (codechefData?.globalRank ?? "Competitive")}
                  </span>
                </div>
              </div>

              {/* Summary Pill */}
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-3 py-2 rounded-xl bg-black/40 border border-white/[0.04] mb-4">
                <span className="text-zinc-300">Competitive Programming</span>
                <span className="text-purple-300 font-semibold">{codechefData?.highestRating ? `Peak: ${codechefData.highestRating}` : "Active"}</span>
              </div>
            </div>

            {/* Footer Direct CTA */}
            <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                Live Data Synchronized
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">codechef.com</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export { CodingProfiles };
