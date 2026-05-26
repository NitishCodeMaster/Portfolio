import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Award, Trophy, Star, Target } from "lucide-react";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 20
  });
  
  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const achievements = [
  { icon: Trophy, label: "Hackathons Won", value: 12 },
  { icon: Star, label: "GitHub Stars", value: 4500 },
  { icon: Target, label: "LeetCode Solved", value: 850 },
  { icon: Award, label: "Certifications", value: 8 },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 text-indigo-400">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2 flex items-center">
                <Counter value={item.value} />
                <span className="text-indigo-400">+</span>
              </div>
              <div className="text-sm text-zinc-400 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
