import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Aura AI Dashboard",
    category: "AI-Powered App",
    description: "An intelligent analytics dashboard that uses machine learning to predict user behavior and optimize conversion rates in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Nzk2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "Python", "TensorFlow", "Tailwind"]
  },
  {
    id: 2,
    title: "Lumina E-Commerce",
    category: "Full-Stack E-Commerce",
    description: "A high-performance headless e-commerce platform with 3D product previews and instant checkout flow.",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzc5NjMxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "Stripe", "Three.js"]
  },
  {
    id: 3,
    title: "Sync Realtime Chat",
    category: "Realtime Application",
    description: "A blazingly fast team communication tool with end-to-end encryption, voice channels, and AI summarization.",
    image: "https://images.unsplash.com/photo-1662974770404-468fd9660389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsdGltZSUyMGNoYXQlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc5NjMxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Vue", "Socket.io", "Redis", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Nexus SaaS UI",
    category: "SaaS Platform",
    description: "A dark-themed developer toolkit featuring a web-based code editor, live collaboration, and built-in CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1776702701448-36220108225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZSUyMHNhYXMlMjB3ZWIlMjBhcHB8ZW58MXx8fHwxNzc5NjMxODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Supabase", "Tailwind", "Monaco Editor"]
  }
];
const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    onMouseMove={handleMouseMove}
    className="group relative rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden"
  >
      <motion.div
    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
    style={{
      background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `
    }}
  />
      
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950/20 z-10" />
        <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
  />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
      </div>

      <div className="relative z-20 p-8 -mt-12">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-400 bg-indigo-400/10 rounded-full backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => <span key={tech} className="text-xs font-medium text-zinc-500">
              #{tech}
            </span>)}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-zinc-950 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors">
            <Github className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>;
};
const Projects = () => {
  return <section id="projects" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <motion.h2
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
  >
              Selected Work
            </motion.h2>
            <motion.p
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="text-zinc-400 text-lg"
  >
              A showcase of my finest creations. From complex SaaS platforms to stunning interactive marketing sites.
            </motion.p>
          </div>
          
          <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mt-8 md:mt-0 flex gap-2"
  >
            {["All", "Full Stack", "AI", "Frontend"].map((filter, i) => <button
    key={filter}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-white text-zinc-950" : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"}`}
  >
                {filter}
              </button>)}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>;
};
export {
  Projects
};
