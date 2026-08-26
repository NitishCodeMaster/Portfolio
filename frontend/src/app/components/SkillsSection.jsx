import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  Boxes,
  Code2,
  GitBranch
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { getRepoData, aggregateProjectTech } from "../../services/githubService";

const iconMap = {
  frontend: Layout,
  backend: Server,
  database: Database,
  devops: Terminal
};

function SkillsSection() {
  const { skillsDomains, projects } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [detectedTech, setDetectedTech] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function scanRepoTech() {
      const repoMap = {};
      for (const proj of projects) {
        if (proj.githubRepo) {
          const data = await getRepoData(proj.githubRepo);
          if (data && isMounted) {
            repoMap[proj.id] = data;
          }
        }
      }
      if (isMounted) {
        const aggregated = aggregateProjectTech(projects, repoMap);
        setDetectedTech(aggregated);
      }
    }

    scanRepoTech();

    return () => {
      isMounted = false;
    };
  }, [projects]);

  return (
    <section className="py-16 md:py-20 relative z-10 bg-transparent border-t border-white/[0.04]" id="skills">
      {/* Background ambient subtle glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
          >
            <Boxes className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Skills & <span className="text-zinc-500 font-normal">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 max-w-lg mx-auto text-zinc-400 text-xs sm:text-sm font-light"
          >
            Engineering domains and stack capabilities dynamically verified with active project repositories.
          </motion.p>
        </div>

        {/* 4-Domain Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto mb-8">
          {skillsDomains.map((domain, index) => {
            const Icon = iconMap[domain.id] || Layout;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setSelectedDomain(domain.id)}
                onMouseLeave={() => setSelectedDomain(null)}
                className="group relative rounded-3xl border border-white/[0.08] bg-[#09090e]/85 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden interactive"
              >
                {/* Subtle Ambient Radial Gradient in Card Background */}
                <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-purple-600/10 blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-200 group-hover:border-purple-400/40 group-hover:text-white transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                          {domain.title}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          Domain {`0${index + 1}`}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-zinc-400 px-2 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      {domain.skills.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-5">
                    {domain.subtitle}
                  </p>
                </div>

                {/* Interactive Skill Badges Container */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {domain.skills.map((skill) => {
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`relative flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                            skill.highlight
                              ? "bg-white/[0.06] border border-white/14 text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-purple-400/40 hover:bg-white/[0.09]"
                              : "bg-white/[0.02] border border-white/[0.06] text-zinc-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          <span className="font-semibold text-xs">{skill.name}</span>
                          <span className="font-mono text-[9px] text-zinc-400 px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
                            {skill.role}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Bottom Insight Bar */}
                  <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Zap className="w-3 h-3 text-zinc-400 group-hover:text-purple-300 transition-colors" />
                      <span className="font-medium text-zinc-400 text-xs">{domain.coreFocus}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Live Detected Technologies from Projects */}
        {detectedTech.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <GitBranch className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Repository-Detected Technologies:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {detectedTech.slice(0, 10).map((item) => (
                <span
                  key={item.name}
                  className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                >
                  {item.name} <span className="text-zinc-500 text-[9px]">({item.count})</span>
                </span>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export { SkillsSection };
