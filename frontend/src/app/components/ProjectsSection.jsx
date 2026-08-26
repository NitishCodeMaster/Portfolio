import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowRight, Layers, Star, GitFork, Eye } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { getRepoData } from "../../services/githubService";
import { ProjectModal } from "./ProjectModal";

function ProjectCard({ project, liveGithubData, index, onSelect }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const displayedTech = liveGithubData?.languages?.length > 0
    ? liveGithubData.languages.slice(0, 4).map(l => l.name)
    : project.manualTech.slice(0, 4);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative w-full rounded-3xl border border-white/[0.08] bg-[#09090e]/85 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:border-white/20 hover:bg-[#0e0e15]/90 transition-all duration-300 flex flex-col justify-between overflow-hidden interactive cursor-pointer"
    >
      {/* Top subtle sheen */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Project Thumbnail Image Frame */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.06] mb-6 shadow-inner">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Top Category Badge & GitHub Stats */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-[11px] font-semibold text-zinc-200 backdrop-blur-md">
              {project.category}
            </span>

            {liveGithubData && (
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400" />
                  {liveGithubData.stars}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3 text-purple-400" />
                  {liveGithubData.forks}
                </span>
              </div>
            )}
          </div>

          {/* Click to inspect overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-neutral-950 text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5" />
              <span>View Case Study</span>
            </span>
          </div>
        </div>

        {/* Title and Short Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-2">
          {liveGithubData?.description || project.description}
        </p>
      </div>

      {/* Tech Tags & Footer */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {displayedTech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-400">
          <span className="text-zinc-400 group-hover:text-white transition-colors font-medium flex items-center gap-1">
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-mono text-[11px] text-zinc-500">
            {project.features?.length || 4} milestones
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection({
  selectedProject: externalSelectedProject,
  setSelectedProject: externalSetSelectedProject,
  liveGithubMap: externalLiveGithubMap,
  setLiveGithubMap: externalSetLiveGithubMap
}) {
  const { projects, socials } = portfolioData;
  const [internalGithubMap, setInternalGithubMap] = useState({});
  const [internalSelectedProject, setInternalSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const selectedProject = externalSelectedProject !== undefined ? externalSelectedProject : internalSelectedProject;
  const setSelectedProject = externalSetSelectedProject || setInternalSelectedProject;
  const liveGithubMap = externalLiveGithubMap !== undefined ? externalLiveGithubMap : internalGithubMap;
  const setLiveGithubMap = externalSetLiveGithubMap || setInternalGithubMap;

  useEffect(() => {
    let isMounted = true;

    async function loadGithubData() {
      const map = {};
      for (const proj of projects) {
        if (proj.githubRepo) {
          const data = await getRepoData(proj.githubRepo);
          if (data && isMounted) {
            map[proj.id] = data;
          }
        }
      }
      if (isMounted) {
        setLiveGithubMap(map);
      }
    }

    loadGithubData();

    return () => {
      isMounted = false;
    };
  }, [projects, setLiveGithubMap]);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 md:py-20 relative z-10 bg-transparent border-t border-white/[0.04]" id="projects">
      {/* Background ambient subtle glow */}
      <div className="absolute left-1/3 top-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Selected Works</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            >
              Featured <span className="text-zinc-500 font-normal">Projects</span>
            </motion.h2>
          </div>

          <motion.a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <span>View Full GitHub Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 interactive ${
                activeCategory === cat
                  ? "bg-white text-neutral-950 font-semibold shadow-md"
                  : "bg-[#09090e]/80 text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              liveGithubData={liveGithubMap[project.id]}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        liveGithubData={selectedProject ? liveGithubMap[selectedProject.id] : null}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export { ProjectsSection };
