import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Senior Full-Stack Engineer",
      company: "TechNova Inc.",
      date: "2021 - Present",
      description: "Leading a team of 5 developers to build scalable microservices. Improved system performance by 40% and reduced cloud costs by 20%.",
      tech: ["React", "Node.js", "Kubernetes", "AWS"]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Creative Digital",
      date: "2018 - 2021",
      description: "Developed award-winning marketing sites and interactive web applications for Fortune 500 clients.",
      tech: ["Vue.js", "Three.js", "GSAP", "Tailwind"]
    },
    {
      type: "education",
      title: "M.S. Computer Science",
      company: "Stanford University",
      date: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Published 2 papers on UI/UX optimization.",
      tech: []
    },
    {
      type: "work",
      title: "Junior Web Developer",
      company: "StartupX",
      date: "2015 - 2016",
      description: "Built and maintained the core MVP product. Implemented responsive designs and integrated RESTful APIs.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  return (
    <section className="py-32 relative z-10 bg-[#0a0a0a]" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary tracking-widest uppercase mb-2"
          >
            Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Experience & <span className="text-white/50">Education</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] hidden md:flex">
                  {item.type === "work" ? <Briefcase className="w-5 h-5 text-primary" /> : <GraduationCap className="w-5 h-5 text-secondary" />}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <div className="glass-card p-8 hover:bg-[#111] transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`flex items-center gap-2 mb-4 text-white/50 text-sm font-medium ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                    <h5 className="text-primary font-medium mb-4">{item.company}</h5>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {item.tech.length > 0 && (
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
