import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import {
  Blocks,
  Braces,
  Cloud,
  Code,
  Database,
  GitBranch,
  Layers,
  Server,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const orbitSkills = ["React", "TypeScript", "Node", "Three", "Next", "API", "Prisma", "AWS"];

const categories = [
  {
    title: "Front-End Development",
    icon: Layers,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    text: "Polished interfaces with responsive layouts, animation, and rich interaction.",
  },
  {
    title: "Back-End Systems",
    icon: Server,
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "WebSockets", "Microservices"],
    text: "Reliable server architecture for scalable products and clean data flows.",
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase", "Supabase"],
    text: "Structured storage, fast queries, and secure data foundations.",
  },
  {
    title: "Cloud & Delivery",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Linux", "Nginx"],
    text: "Deployments, automation, and production-friendly infrastructure.",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Reviews", "Testing", "Jest", "Playwright"],
    text: "Collaborative development with careful checks and maintainable releases.",
  },
  {
    title: "Creative Motion",
    icon: WandSparkles,
    skills: ["GSAP", "Motion", "Canvas", "3D UI", "Microcopy", "Systems"],
    text: "Subtle motion systems that feel fluid, intentional, and calm.",
  },
];

const iconForSkill = (skill: string) => {
  if (["React", "Three", "Next"].includes(skill)) return Blocks;
  if (["Node", "API", "Prisma"].includes(skill)) return Braces;
  if (skill === "AWS") return Cloud;
  return Code;
};

export const Skills = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const items = orbitRef.current.querySelectorAll<HTMLElement>(".orbit-item");

    items.forEach((item, index) => {
      const angle = (index / items.length) * Math.PI * 2;
      const radiusX = 245;
      const radiusY = 105;

      gsap.set(item, {
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
      });

      gsap.to(item, {
        y: `+=${index % 2 === 0 ? 14 : -14}`,
        duration: 3.4 + index * 0.12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 42,
      repeat: -1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    if (!bubbleRef.current) return;

    const bubbles = bubbleRef.current.querySelectorAll<HTMLElement>(".skill-bubble");
    bubbles.forEach((bubble, index) => {
      gsap.to(bubble, {
        x: 110 + Math.random() * 120,
        y: 70 + Math.random() * 150,
        opacity: 0,
        scale: 1.8 + Math.random() * 1.4,
        duration: 8 + index * 0.45,
        delay: index * 0.22,
        repeat: -1,
        ease: "sine.out",
      });
    });
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#020203] px-6 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(184,164,255,0.12),transparent_36%),linear-gradient(180deg,rgba(2,2,3,1),rgba(8,8,10,0.96),rgba(2,2,3,1))]" />
      <div className="absolute left-1/2 top-36 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-white/[0.035]" />
      <div ref={bubbleRef} className="pointer-events-none absolute left-0 top-8 h-72 w-72">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="skill-bubble absolute left-4 top-8 h-2 w-2 rounded-full bg-[#d8d3c6]/35 shadow-[0_0_18px_rgba(216,211,198,0.35)]"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#d8d3c6]" />
            Tech Stack
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Skills that orbit around{" "}
            <span className="bg-gradient-to-r from-white via-[#d8d3c6] to-[#b8a4ff] bg-clip-text text-transparent">
              clean execution
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            A calm, connected stack for building interactive interfaces, APIs, data systems, and production deployments.
          </p>
        </motion.div>

        <div className="mb-20 hidden h-[430px] items-center justify-center lg:flex">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute h-[230px] w-[620px] rounded-full border border-[#b8a4ff]/18" />
            <div className="absolute h-[315px] w-[760px] rounded-full border border-white/[0.055]" />
            <div className="absolute h-44 w-96 rounded-full bg-[radial-gradient(ellipse,rgba(184,164,255,0.24),transparent_68%)] blur-xl" />

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid h-32 w-32 place-items-center rounded-full border border-white/15 bg-white/[0.065] shadow-[0_0_80px_rgba(184,164,255,0.16),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl"
            >
              <span className="text-lg font-bold text-white">Skills</span>
              <span className="absolute inset-3 rounded-full border border-white/10" />
            </motion.div>

            <div ref={orbitRef} className="absolute left-1/2 top-1/2 h-0 w-0">
              {orbitSkills.map((skill, index) => {
                const SkillIcon = iconForSkill(skill);
                return (
                  <motion.div
                    key={skill}
                    className="orbit-item absolute -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/[0.55] px-4 py-2 text-sm font-semibold text-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                      <SkillIcon className="h-4 w-4 text-[#d8d3c6]" />
                      {skill}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-colors hover:border-white/20"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(216,211,198,0.14),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/[0.24]">
            <category.icon className="h-5 w-5 text-[#d8d3c6]" />
          </div>
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
          0{index + 1}
        </span>
      </div>

      <p className="mb-5 min-h-12 text-sm leading-6 text-zinc-400">{category.text}</p>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 + i * 0.035 }}
            className="rounded-full border border-white/[0.08] bg-black/[0.24] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:border-white/12 group-hover:text-white"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
