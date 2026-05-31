import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Globe, Cpu, Zap } from "lucide-react";
function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Global Clients", value: "20+" },
    { label: "Awards Won", value: "12" }
  ];
  const cards = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Frontend Engineering",
      desc: "Crafting pixel-perfect, accessible, and highly interactive user interfaces using React and modern CSS."
    },
    {
      icon: <Cpu className="w-6 h-6 text-secondary" />,
      title: "Backend Systems",
      desc: "Building robust, scalable, and secure server-side architectures and APIs with Node.js and Go."
    },
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: "Web3 & Blockchain",
      desc: "Exploring decentralized web technologies and smart contract integration for next-gen apps."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Performance Optimization",
      desc: "Tuning applications for lightning-fast load times and smooth 60fps animations."
    }
  ];
  return <section className="py-32 relative z-10 bg-[#050505]" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {
    /* Image Side */
  }
          <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="w-full md:w-5/12 relative"
  >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <ImageWithFallback
    src="https://images.unsplash.com/photo-1580046939256-c377c5b099f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Nzk2MzE4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    alt="Nitish Kumar"
    className="w-full h-full object-cover rounded-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
  />
            </div>
            {
    /* Floating badge */
  }
            <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
  >
              <div className="text-4xl font-bold text-gradient">8+</div>
              <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Years<br />Coding</div>
            </motion.div>
          </motion.div>

          {
    /* Content Side */
  }
          <div className="w-full md:w-7/12">
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
              <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Bridging the gap between <span className="text-white/50">design</span> and <span className="text-white/50">engineering</span>.
              </h3>
              <p className="text-lg text-white/60 font-light mb-10 leading-relaxed">
                I am a passionate software engineer specializing in building exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products that live on the internet.
                My approach combines deep technical knowledge with a keen eye for aesthetics.
              </p>
            </motion.div>

            {
    /* Stats */
  }
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    className="flex flex-col"
  >
                  <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</span>
                </motion.div>)}
            </div>

            {
    /* Service Cards */
  }
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
    className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group interactive"
  >
                  <div className="mb-4 p-3 glass inline-block rounded-xl group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export {
  AboutSection
};
