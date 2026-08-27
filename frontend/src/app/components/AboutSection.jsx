import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Layers,
  Server,
  Database,
  Cloud,
  Sparkles,
  GraduationCap,
  FolderGit2,
  Award,
  Trophy
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const statIconMap = {
  "B.Tech CSE": GraduationCap,
  "Projects Built": FolderGit2,
  "Certifications": Award,
  "Hackathon": Trophy
};

function AboutSection() {
  const { personal } = portfolioData;

  const cards = [
    {
      icon: <Layers className="w-5 h-5 text-zinc-300 group-hover:text-purple-300 transition-colors" />,
      title: "Full Stack Architecture",
      desc: "Architecting end-to-end web platforms with responsive React frontends and structured component hierarchies."
    },
    {
      icon: <Server className="w-5 h-5 text-zinc-300 group-hover:text-purple-300 transition-colors" />,
      title: "Backend & REST APIs",
      desc: "Developing robust server-side logic, secure JWT authentication, and high-performance RESTful APIs."
    },
    {
      icon: <Database className="w-5 h-5 text-zinc-300 group-hover:text-purple-300 transition-colors" />,
      title: "Databases & Algorithms",
      desc: "Designing efficient MongoDB and MySQL schemas with strong foundations in Java DSA and problem solving."
    },
    {
      icon: <Cloud className="w-5 h-5 text-zinc-300 group-hover:text-purple-300 transition-colors" />,
      title: "Cloud & Dev Tools",
      desc: "Streamlined version control with Git/GitHub, Postman API testing, and continuous deployment on Vercel."
    }
  ];

  return (
    <section className="py-16 md:py-20 relative z-10 bg-transparent border-t border-white/[0.04]" id="about">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Image Side (Shown on Desktop, Hidden on Mobile to prevent duplicate photo) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-full lg:w-5/12 relative max-w-md lg:max-w-none mx-auto"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-3 group border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <ImageWithFallback
                src={personal.portraitImage}
                alt={personal.name}
                className="w-full h-full object-cover rounded-2xl filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 sm:-right-6 glass p-5 sm:p-6 rounded-2xl border border-white/12 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div className="text-3xl sm:text-4xl font-bold font-display text-gradient">{personal.yearsExperience}</div>
              </div>
              <div className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mt-1 leading-tight">
                Years<br />Coding Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>About Me</span>
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                {personal.aboutHeading}
              </h3>
              <p className="text-base sm:text-lg text-zinc-400 font-light mb-10 leading-relaxed max-w-2xl">
                {personal.aboutBio}
              </p>
            </motion.div>

            {/* Stats Grid with Clean Top-Aligned Minimal Icons */}
            {personal?.stats && personal.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-10">
                {personal.stats.map((stat, i) => {
                  const StatIcon = statIconMap[stat.label] || Sparkles;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="flex flex-col p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
                    >
                      {/* Top Row: Clean Icon Badge */}
                      <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-purple-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 mb-3 shrink-0">
                        <StatIcon className="w-4 h-4" />
                      </div>

                      {/* Stat Metric Value */}
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-1">
                        {stat.value}
                      </span>

                      {/* Stat Label */}
                      <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Service Cards Grid with Refined Minimal Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="glass p-6 rounded-2xl hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-300 group interactive"
                >
                  <div className="mb-4 p-2.5 bg-white/[0.03] border border-white/[0.08] inline-block rounded-xl group-hover:scale-105 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300">
                    {card.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-zinc-100 group-hover:text-white transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export { AboutSection };
