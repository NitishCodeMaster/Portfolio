import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Award, Trophy, Code2, GraduationCap } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const num = typeof value === "number" ? value : parseInt(value, 10);
  const isNaNNum = isNaN(num);

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 55,
    damping: 20
  });
  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    if (inView && !isNaNNum) {
      spring.set(num);
    }
  }, [inView, spring, num, isNaNNum]);

  if (isNaNNum) return <span>{value}</span>;

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Achievements = () => {
  const { personal, certifications } = portfolioData;

  const realMetrics = [
    {
      icon: GraduationCap,
      label: "B.Tech CSE",
      value: 2026,
      suffix: "",
      sub: "Haridwar University"
    },
    {
      icon: Code2,
      label: "Projects Built",
      value: 12,
      suffix: "+",
      sub: "MERN & Java Stack"
    },
    {
      icon: Award,
      label: "Certifications",
      value: certifications?.length || 3,
      suffix: "",
      sub: "Meta & Coursera"
    },
    {
      icon: Trophy,
      label: "Hackathon Finalist",
      value: 2025,
      suffix: "",
      sub: "Tech Sangram 48h"
    }
  ];

  return (
    <section id="achievements" className="py-12 md:py-14 bg-transparent border-y border-white/[0.04] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {realMetrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.06] hover:border-purple-500/20 group interactive"
            >
              <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-3 text-purple-300 group-hover:scale-105 transition-transform">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 flex items-center tracking-tight font-display">
                <Counter value={item.value} />
                {item.suffix && <span className="text-purple-400 font-light">{item.suffix}</span>}
              </div>
              <div className="text-xs text-zinc-300 font-semibold">{item.label}</div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Achievements };
