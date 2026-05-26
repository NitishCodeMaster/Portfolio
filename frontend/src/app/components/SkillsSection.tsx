import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Database", "Tools"];
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillsData = {
    Frontend: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 70 },
      { name: "Vue.js", level: 80 },
    ],
    Backend: [
      { name: "Node.js", level: 90 },
      { name: "Python / Django", level: 85 },
      { name: "Go", level: 75 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
    Database: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma ORM", level: 90 },
      { name: "Supabase", level: 85 },
    ],
    Tools: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Jest / Cypress", level: 80 },
    ],
  };

  return (
    <section className="py-32 relative z-10 bg-[#0a0a0a]" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-secondary tracking-widest uppercase mb-2"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Skills & <span className="text-white/50">Technologies</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all interactive ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="glass-card p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16"
              >
                {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
