import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Star,
  GitFork,
  Calendar,
  Layers,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Code2,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectModal({ project, liveGithubData, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const githubUrl = liveGithubData?.htmlUrl || (project.githubRepo ? `https://github.com/${project.githubRepo}` : null);
  const demoUrl = project.demoUrl || project.link;
  const languages = liveGithubData?.languages || [];
  const combinedTech = Array.from(new Set([
    ...(project.manualTech || []),
    ...(liveGithubData?.topics || [])
  ]));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#020204]/96 backdrop-blur-3xl">
        
        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-20 sm:pt-10 sm:pb-24"
        >
          
          {/* 1. TOP BREADCRUMB & BACK ACTION BAR */}
          <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0e0e16] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-200 interactive shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Projects</span>
              </button>

              {/* Breadcrumb path (Desktop) */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                <span className="text-zinc-400 truncate max-w-[220px]">{project.title}</span>
              </div>
            </div>

            {/* Right Meta Badges */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-zinc-300">
                {project.category}
              </span>
              {liveGithubData && (
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              )}
            </div>
          </div>

          {/* 2. PROJECT HERO HEADER & CTA TOOLBAR */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]">
                Project Case Study
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {liveGithubData?.description || project.description}
              </p>
            </div>

            {/* Quick Action Toolbar */}
            <div className="flex items-center gap-3 shrink-0">
              {demoUrl && demoUrl !== "#" && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sand-primary flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold interactive shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sand-dark flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium interactive"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* 3. HERO IMAGE SHOWCASE CANVAS */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-950 border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.8)] mb-6 group">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom In-Image Badge */}
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between pointer-events-none">
              <span className="text-xs font-semibold text-white font-mono bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                Production Ready
              </span>
            </div>
          </div>

          {/* 4. REPOSITORY METRICS & LIVE DATA STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#09090e]/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)] mb-6">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Stars</span>
                <span className="text-sm font-bold text-white font-mono">
                  {liveGithubData ? liveGithubData.stars.toLocaleString() : "Verified"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                <GitFork className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Forks</span>
                <span className="text-sm font-bold text-white font-mono">
                  {liveGithubData ? liveGithubData.forks.toLocaleString() : "Active"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Primary Stack</span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono truncate block">
                  {liveGithubData?.primaryLanguage || "Full Stack"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Release Date</span>
                <span className="text-xs font-semibold text-zinc-300 font-mono truncate block">
                  {liveGithubData?.updatedAt || "2026"}
                </span>
              </div>
            </div>
          </div>

          {/* 5. LANGUAGE COMPOSITION BAR (If available) */}
          {languages.length > 0 && (
            <div className="rounded-2xl border border-white/[0.08] bg-[#09090e]/85 p-5 mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-3">
                <span className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Repository Language Breakdown</span>
                </span>
                <span className="font-mono text-[11px] text-zinc-500">{languages.length} Detected Languages</span>
              </div>
              
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden flex gap-0.5 mb-3">
                {languages.map((l, i) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.percentage}%` }}
                    className={`h-full ${
                      i === 0 ? "bg-purple-500" : i === 1 ? "bg-indigo-400" : i === 2 ? "bg-sky-400" : "bg-zinc-600"
                    }`}
                    title={`${l.name}: ${l.percentage}%`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                {languages.map((l, i) => (
                  <span key={l.name} className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${
                      i === 0 ? "bg-purple-400" : i === 1 ? "bg-indigo-400" : i === 2 ? "bg-sky-400" : "bg-zinc-500"
                    }`} />
                    {l.name} <strong className="text-zinc-200 font-bold">{l.percentage}%</strong>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 6. MAIN CONTENT: BALANCED 2-COLUMN STRUCTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            
            {/* Left Column: Overview & Applied Tech Stack */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#09090e]/85 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Architecture & Overview</span>
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Applied */}
              {combinedTech.length > 0 && (
                <div className="rounded-2xl border border-white/[0.08] bg-[#09090e]/85 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>Tech Stack & Integration Tools</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {combinedTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Key Feature Highlights */}
            <div className="lg:col-span-5">
              {project.features && project.features.length > 0 && (
                <div className="rounded-2xl border border-white/[0.08] bg-[#09090e]/85 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.4)] h-full">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Engineering Features</span>
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* 7. BOTTOM NAVIGATION BAR */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={onClose}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all interactive"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Projects</span>
            </button>

            <span className="text-xs text-zinc-500 font-mono">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">Esc</kbd> to close
            </span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
