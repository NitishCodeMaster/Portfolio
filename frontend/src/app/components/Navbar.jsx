import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Send,
  ArrowUpRight,
  Home,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  Mail,
  Code
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

import { BrandLogo } from "./BrandLogo";

const Navbar = ({ onNavigate, activeSectionOverride }) => {
  const { personal } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", href: "#hero", icon: Home, id: "hero" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Skills", href: "#skills", icon: Cpu, id: "skills" },
    { name: "Projects", href: "#projects", icon: Briefcase, id: "projects" },
    { name: "Profiles", href: "#coding-profiles", icon: Code, id: "coding-profiles" },
    { name: "Experience", href: "#experience", icon: GraduationCap, id: "experience" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" }
  ];

  useEffect(() => {
    if (activeSectionOverride) {
      setActiveSection(activeSectionOverride);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSectionOverride]);

  const handleItemClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const navbarOffset = -96; // 96px clearance for comfortable space below fixed navbar
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + navbarOffset;
          window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 md:px-6 md:pt-5"
    >
      {/* Refined Dock Frame */}
      <div className="relative flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#09090d]/85 px-5 sm:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
        
        {/* LEFT BRANDING LOGO */}
        <a
          href="#hero"
          onClick={(e) => handleItemClick(e, "hero")}
          className="shrink-0 interactive cursor-pointer"
        >
          <BrandLogo size="sm" showSubtitle={true} />
        </a>

        {/* CENTER TABS */}
        <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-6">
          <div className="flex items-center justify-between w-full">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item.id)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative rounded-xl px-3 py-2 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-2 interactive ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {/* Active Indicator Slide */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-bg"
                      className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}

                  {/* Hover Slide Element */}
                  <AnimatePresence>
                    {hoveredIndex === index && !isActive && (
                      <motion.span
                        layoutId="navbar-hover-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-xl bg-white/[0.035]"
                      />
                    )}
                  </AnimatePresence>

                  <IconComponent className={`h-3.5 w-3.5 relative z-10 ${isActive ? "text-white" : "text-zinc-400 opacity-70"}`} />
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* RIGHT ACTION CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleItemClick(e, "contact")}
            className="btn-sand-dark flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold interactive group"
          >
            <span>Let's Connect</span>
            <Send className="h-3 w-3 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 lg:hidden interactive"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-white/[0.08] bg-[#09090d]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleItemClick(e, item.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium interactive ${
                      isActive ? "bg-white/[0.08] text-white border border-white/10" : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-4 w-4 ${isActive ? "text-white" : "text-zinc-400"}`} />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export { Navbar };
