import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Code, Home, Mail, Menu, Send, Sparkles, Trophy, User, X } from "lucide-react";
import { cn } from "../utils/cn";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "experience", icon: Trophy, label: "Experience" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:top-6"
    >
      <nav
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025) 55%, rgba(148,163,184,0.035))",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 22px 70px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.16)",
        }}
        className="relative mx-auto flex w-full max-w-7xl items-center justify-between overflow-hidden rounded-full px-4 py-3 backdrop-blur-2xl md:px-6"
      >
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(circle_at_18%_35%,rgba(255,255,255,0.16)_0_1px,transparent_2px),radial-gradient(circle_at_68%_55%,rgba(184,164,255,0.18)_0_1px,transparent_2px)]" />

        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-3 rounded-full pr-2 text-left"
          aria-label="Go to home"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <Sparkles className="h-5 w-5 text-[#d8d3c6] transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute inset-0 rounded-full ring-1 ring-[#b8a4ff]/20" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-lg font-bold tracking-tight text-white">
              Nitish<span className="text-[#b8a4ff]">.</span>
            </span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-white/40">
              Full Stack
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === item.id || hovered === item.id ? "text-white" : "text-white/60 hover:text-white/85"
              )}
            >
              {active === item.id && (
                <>
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.11] shadow-[0_0_24px_rgba(216,211,198,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                  <motion.span
                    layoutId="nav-star"
                    className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#f1eee5] shadow-[0_0_14px_rgba(255,255,255,0.95)]"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  />
                </>
              )}
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="h-4 w-4 text-current opacity-70" />
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-white/20 hover:bg-white/[0.09] md:flex"
        >
          <Send className="h-4 w-4 text-[#d8d3c6]" />
          Let's Connect
        </button>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 grid w-[calc(100%-1rem)] max-w-md gap-1 rounded-3xl border border-white/12 bg-black/80 p-3 text-white shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-white/75 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
                <item.icon className="h-4 w-4 text-white/40" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
