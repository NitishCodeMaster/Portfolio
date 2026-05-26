import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Engineer",
    company: "TechNova Inc.",
    date: "2021 - Present",
    description: "Lead developer for a high-traffic SaaS platform. Architected microservices, reduced server costs by 30%, and mentored junior developers.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    date: "2019 - 2021",
    description: "Built award-winning interactive websites using React, GSAP, and Three.js. Improved core web vitals by 40% across all client projects.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "State University",
    date: "2015 - 2019",
    description: "Graduated with honors. Specialized in Artificial Intelligence and Human-Computer Interaction.",
    icon: GraduationCap,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">Journey</h2>
          <p className="text-zinc-400">My professional path and education.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-zinc-950 border border-white/20 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <exp.icon className="w-5 h-5 text-zinc-300" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 text-indigo-400 text-sm font-semibold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-zinc-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
