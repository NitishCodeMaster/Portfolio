import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
const projects = [
  {
    title: "Aura Dashboard",
    category: "SaaS UI",
    description: "A comprehensive analytics dashboard with real-time data visualization, dark mode, and customizable widgets. Built for enterprise performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZSUyMG1vZGVybiUyMGRhc2hib2FyZCUyMHVpfGVufDF8fHx8MTc3OTYzMTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Tailwind", "Recharts", "Supabase"],
    link: "#",
    github: "#"
  },
  {
    title: "NeonCart",
    category: "E-Commerce",
    description: "A futuristic e-commerce platform featuring 3D product viewers, seamless checkout flows, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1588007374946-c79543903e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmVvbiUyMGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MXx8fHwxNzc5NjMxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "Stripe", "Prisma", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "SynthAI",
    category: "AI Tool",
    description: "An AI text-to-image generator interface with complex state management, history tracking, and prompt optimization features.",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc3OTYzMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  }
];
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      rotateX,
      rotateY,
      transformStyle: "preserve-3d"
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group relative w-full rounded-3xl glass-card border border-white/10 overflow-visible cursor-pointer"
  >
      <div
    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"
    style={{ transform: "translateZ(-50px)" }}
  />
      
      <div className="relative p-2 h-full flex flex-col rounded-3xl overflow-hidden bg-[#0c0c0c]">
        {
    /* Image Container */
  }
        <div
    className="relative h-64 w-full overflow-hidden rounded-2xl"
    style={{ transform: "translateZ(30px)" }}
  >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <ImageWithFallback
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
  />
          
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {
    /* Content */
  }
        <div
    className="p-6 flex flex-col flex-grow"
    style={{ transform: "translateZ(40px)" }}
  >
          <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
          <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                {t}
              </span>)}
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <div className="flex gap-4">
              <a href={project.github} className="text-white/50 hover:text-white interactive">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.link} className="text-white/50 hover:text-white interactive">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white group/btn interactive">
              View Case Study 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>;
}
function ProjectsSection() {
  return <section className="py-32 relative z-10 bg-[#050505]" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-sm font-medium text-accent tracking-widest uppercase mb-2"
  >
              Selected Work
            </motion.h2>
            <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="text-4xl md:text-5xl font-bold max-w-lg"
  >
              Featured <span className="text-white/50">Projects</span>
            </motion.h3>
          </div>
          
          <motion.a
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    href="#"
    className="text-sm font-medium text-white/70 hover:text-white flex items-center gap-2 interactive group"
  >
            View Full Archive 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>
      </div>
    </section>;
}
export {
  ProjectsSection
};
