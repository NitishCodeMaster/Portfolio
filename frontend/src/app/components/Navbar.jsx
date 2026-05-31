import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Terminal,
  Send,
  ArrowUpRight,
  Home,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  Mail
} from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const navItems = [
    { name: "Home", href: "#hero", icon: Home, id: "hero" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Skills", href: "#skills", icon: Cpu, id: "skills" },
    { name: "Projects", href: "#projects", icon: Briefcase, id: "projects" },
    { name: "Experience", href: "#experience", icon: GraduationCap, id: "experience" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 md:px-6 md:pt-5"
  >
      {
    /* Squarish Bento Dock Frame with sharp corners & Cyber-Grid Accents */
  }
      <div className="relative flex h-14 items-center justify-between rounded-xl border border-white/[0.08] bg-neutral-950/60 px-5 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl overflow-hidden">

        {
    /* Corner Neon Cyber Nodes for Tricky Visual Vibe */
  }
        <div className="absolute left-0 top-0 h-[2px] w-8 bg-gradient-to-r from-purple-500 to-transparent" />
        <div className="absolute right-0 bottom-0 h-[2px] w-8 bg-gradient-to-l from-indigo-500 to-transparent" />

        {
    /* LEFT BRAND LOGO */
  }
        <a href="#hero" className="group flex items-center gap-2.5 text-sm tracking-wider font-bold text-white shrink-0">
          <div className="relative grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-colors group-hover:border-purple-500/30">
            <Terminal className="h-3.5 w-3.5 text-purple-300 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans uppercase font-extrabold tracking-[0.12em] text-xs text-zinc-100">Nitish.</span>
            <span className="text-[8px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mt-0.5 group-hover:text-purple-400 transition-colors">Full Stack</span>
          </div>
        </a>

        {
    /* CENTER TABS: Spacious Squarish Hover Matrices */
  }
        <nav className="hidden items-center gap-1 lg:flex mx-4">
          {navItems.map((item, index) => {
    const IconComponent = item.icon;
    const isActive = activeSection === item.id;
    return <a
      key={item.name}
      href={item.href}
      onClick={() => setActiveSection(item.id)}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative rounded-lg px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"}`}
    >
                {
      /* Active Element - Sharp Refractive Panel */
    }
                {isActive && <motion.span
      layoutId="navbar-active-bg"
      className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/[0.06] to-white/[0.01] border-t border-x border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />}

                {
      /* Hover Glass Slide Element */
    }
                <AnimatePresence>
                  {hoveredIndex === index && !isActive && <motion.span
      layoutId="navbar-hover-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 rounded-lg bg-white/[0.03] border border-white/5"
    />}
                </AnimatePresence>

                <IconComponent className={`h-3.5 w-3.5 ${isActive ? "text-purple-400" : "opacity-60 text-zinc-400"}`} />
                <span className="text-[12px] font-medium">{item.name}</span>
              </a>;
  })}
        </nav>

        {
    /* RIGHT CONNECT ACTUATOR */
  }
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <div className="flex items-center gap-2 rounded-md bg-purple-500/5 border border-purple-500/10 px-2.5 py-1 text-[9px] text-purple-400/90 font-mono tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-ping" />
            <span>SYS_ONLINE</span>
          </div>

          <a
    href="#contact"
    className="group relative flex items-center gap-1.5 overflow-hidden rounded-lg border border-purple-500/30 bg-purple-500/[0.03] px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 transition-all hover:border-purple-400/50 hover:bg-purple-500/[0.06] hover:text-white"
  >
            <span>Let's Connect</span>
            <Send className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {
    /* MOBILE MENU ACTUATOR */
  }
        <button
    onClick={() => setIsOpen(!isOpen)}
    className="grid h-8 w-8 place-items-center rounded-lg border border-white/5 bg-white/[0.02] text-zinc-400 lg:hidden"
  >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {
    /* MOBILE PANEL */
  }
      <AnimatePresence>
        {isOpen && <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute inset-x-4 top-16 z-50 rounded-xl border border-white/[0.06] bg-neutral-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
  >
            <div className="space-y-1">
              {navItems.map((item) => {
    const IconComponent = item.icon;
    const isActive = activeSection === item.id;
    return <a
      key={item.name}
      href={item.href}
      onClick={() => {
        setActiveSection(item.id);
        setIsOpen(false);
      }}
      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium ${isActive ? "bg-purple-500/10 text-white" : "text-zinc-400 hover:bg-white/[0.02]"}`}
    >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="h-3.5 w-3.5" />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight className="h-3 w-3 opacity-35" />
                  </a>;
  })}
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export {
  Navbar
};
