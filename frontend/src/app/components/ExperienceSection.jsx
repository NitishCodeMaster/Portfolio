import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section className="py-16 md:py-20 relative z-10 bg-transparent border-t border-white/[0.04]" id="experience">
      {/* Background ambient subtle glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Progression</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Experience & <span className="text-zinc-500 font-normal">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-xl mx-auto text-zinc-400 text-sm sm:text-base font-light"
          >
            A chronological timeline of roles, engineering leadership, and academic milestones.
          </motion.p>
        </div>

        {/* Experience Pathway Layout */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative">
          
          {/* Subtle Left Connected Track */}
          <div className="absolute left-4 sm:left-6 top-8 bottom-8 w-px bg-gradient-to-b from-white/20 via-purple-500/20 to-transparent hidden sm:block" />

          {experience.map((item, index) => {
            const isWork = item.type === "work";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-16 group"
              >
                {/* Milestone Node Badge (Desktop / Tablet) */}
                <div className="absolute left-4 sm:left-6 top-7 -translate-x-1/2 w-8 h-8 rounded-xl bg-[#111118] border border-white/12 shadow-[0_4px_12px_rgba(0,0,0,0.6)] hidden sm:flex items-center justify-center text-zinc-300 group-hover:border-purple-400/40 group-hover:text-white transition-colors z-10">
                  {isWork ? (
                    <Briefcase className="w-3.5 h-3.5" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
                  )}
                </div>

                {/* Main Experience Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#09090e]/80 p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-white/20 hover:bg-[#0e0e16]/90 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Subtle top sheen */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Title, Company, Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                          {item.title}
                        </h3>
                        {item.status === "Current" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-zinc-300">{item.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                          <MapPin className="w-3 h-3 text-purple-400 shrink-0" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Date Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-xs font-medium text-zinc-300 self-start sm:self-auto shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  {item.tech.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.05]">
                      <span className="text-[11px] font-medium text-zinc-400 mr-1">Technologies:</span>
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] font-medium text-zinc-300 hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export { ExperienceSection };
