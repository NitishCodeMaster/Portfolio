import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Globe, Cpu, Zap, Sparkles } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

function AboutSection() {
  const { personal } = portfolioData;

  const cards = [
    {
      icon: <Code className="w-5 h-5 text-purple-400" />,
      title: "Frontend Engineering",
      desc: "Crafting pixel-perfect, accessible, and highly interactive user interfaces using React and modern CSS."
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Backend Systems",
      desc: "Building robust, scalable, and secure server-side architectures and APIs with Node.js and Go."
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "Web3 & Blockchain",
      desc: "Exploring decentralized web technologies and smart contract integration for next-gen apps."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance Optimization",
      desc: "Tuning applications for lightning-fast load times and smooth 60fps animations."
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
                About Me
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                {personal.aboutHeading}
              </h3>
              <p className="text-base sm:text-lg text-zinc-400 font-light mb-10 leading-relaxed max-w-2xl">
                {personal.aboutBio}
              </p>
            </motion.div>

            {/* Stats Grid */}
            {personal?.stats && personal.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
                {personal.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <span className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-display tracking-tight">{stat.value}</span>
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Service Cards Grid */}
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
                  <div className="mb-4 p-2.5 bg-white/[0.03] border border-white/8 inline-block rounded-xl group-hover:scale-110 group-hover:border-purple-500/30 transition-all">
                    {card.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-zinc-100 group-hover:text-white transition-colors">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
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
