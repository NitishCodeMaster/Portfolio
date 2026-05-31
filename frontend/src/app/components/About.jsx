import { motion } from "motion/react";
const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Open Source Commits", value: "1.2k" }
];
const About = () => {
  return <section id="about" className="py-32 relative bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto"
  >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Decoding the
            </span>{" "}
            Matrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a senior full-stack engineer passionate about building scalable SaaS applications, 
                interactive 3D experiences, and AI-powered tools. My journey started when I built my 
                first calculator app, and since then, I've been obsessed with turning complex problems 
                into elegant solutions.
              </p>
              <p>
                Currently, I specialize in the React ecosystem (Next.js, Vite), Node.js, and cloud 
                infrastructure. I believe in writing clean, maintainable code and creating user 
                interfaces that feel like magic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => <motion.div
    key={stat.label}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
  >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export {
  About
};
