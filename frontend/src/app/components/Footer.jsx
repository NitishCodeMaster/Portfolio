import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";
import { BrandLogo } from "./BrandLogo";

const Footer = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent border-t border-white/[0.06] py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <BrandLogo size="sm" showSubtitle={true} />
          <p className="text-xs text-zinc-500 font-light mt-1">
            © {new Date().getFullYear()} {personal.name}. Built with React, Three.js & Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] border border-white/8 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all interactive"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] border border-white/8 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all interactive"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] border border-white/8 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all interactive"
          >
            <Twitter className="w-4 h-4" />
          </a>

          <a
            href={socials.email}
            aria-label="Send Email"
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] border border-white/8 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all interactive"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] border border-white/8 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all interactive ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
