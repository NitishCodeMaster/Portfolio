import { portfolioData } from "../../data/portfolioData";
import {
  Code2,
  FileCode,
  Globe,
  Sparkles,
  Boxes,
  Activity,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Radio,
  Binary,
  Database,
  HardDrive,
  Layers,
  GitMerge,
  GitBranch,
  Send,
  Cloud,
  Terminal
} from "lucide-react";

const skillIconMap = {
  "React.js": Code2,
  "JavaScript (ES6+)": FileCode,
  "Next.js": Globe,
  "Tailwind CSS": Sparkles,
  "Shadcn UI": Boxes,
  "Recharts": Activity,
  "Node.js": Server,
  "Express.js": Cpu,
  "REST APIs": Network,
  "JWT Auth": ShieldCheck,
  "Socket.IO": Radio,
  "Java": Binary,
  "MongoDB": Database,
  "MySQL": HardDrive,
  "Redis": Layers,
  "Data Structures & Algorithms": GitMerge,
  "Git / GitHub": GitBranch,
  "Postman": Send,
  "Vercel / Render": Cloud,
  "VS Code / IntelliJ": Terminal,
  "Razorpay / Cloudinary": Layers
};

export function SkillsMarquee() {
  const { skillsDomains } = portfolioData;

  // Flatten the skills dynamically from the central data repository
  const allSkills = skillsDomains.flatMap((domain) =>
    domain.skills.map((skill) => ({
      ...skill,
      domainId: domain.id
    }))
  );

  // Duplicate items for a seamless, continuous infinite loop without gaps
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[#050508]/60 py-3 mt-10 md:mt-14 backdrop-blur-md">
      {/* Edge gradient masks for smooth fade-in/fade-out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#020204] via-[#020204]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#020204] via-[#020204]/90 to-transparent z-10" />

      {/* Marquee Track with hover-pause functionality */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-skills-marquee flex items-center gap-3 sm:gap-4 pl-4 select-none">
          {marqueeItems.map((item, index) => {
            const Icon = skillIconMap[item.name] || Code2;
            return (
              <div
                key={`${item.name}-${index}`}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/35 hover:bg-white/[0.05] transition-all duration-200 group/pill shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              >
                <div className="w-5 h-5 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover/pill:text-purple-300 group-hover/pill:border-purple-500/30 transition-colors">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-zinc-300 group-hover/pill:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-black/40 border border-white/[0.04]">
                  {item.role}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
