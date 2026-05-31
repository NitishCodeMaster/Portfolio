import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully! (Simulated)");
    }, 1500);
  };
  return <section className="py-32 relative z-10 bg-[#050505] overflow-hidden" id="contact">
      {
    /* Background Elements */
  }
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          {
    /* Info Side */
  }
          <div className="w-full md:w-5/12">
            <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-sm font-medium text-primary tracking-widest uppercase mb-2"
  >
              Get In Touch
            </motion.h2>
            <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="text-4xl md:text-5xl font-bold mb-6"
  >
              Let's build something <span className="text-gradient">amazing</span> together.
            </motion.h3>
            <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="text-white/60 mb-10"
  >
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that needs some creative magic, I'd love to hear about it.
            </motion.p>

            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="flex flex-col gap-6"
  >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Mail className="w-5 h-5 text-white/70 group-hover:text-primary" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <a href="mailto:hello@nitish.dev" className="text-lg font-medium interactive">hello@nitish.dev</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <MapPin className="w-5 h-5 text-white/70 group-hover:text-primary" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Location</div>
                  <div className="text-lg font-medium">San Francisco, CA</div>
                </div>
              </div>
            </motion.div>

            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="flex gap-4 mt-12"
  >
              {[Github, Linkedin, Twitter].map((Icon, i) => <a
    key={i}
    href="#"
    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all interactive"
  >
                  <Icon className="w-4 h-4" />
                </a>)}
            </motion.div>
          </div>

          {
    /* Form Side */
  }
          <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full md:w-7/12"
  >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                  <input
    type="text"
    id="name"
    required
    value={formState.name}
    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all interactive"
    placeholder="John Doe"
  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                  <input
    type="email"
    id="email"
    required
    value={formState.email}
    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all interactive"
    placeholder="john@example.com"
  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                <textarea
    id="message"
    required
    rows={5}
    value={formState.message}
    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none interactive"
    placeholder="Tell me about your project..."
  />
              </div>
              <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-white text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all interactive disabled:opacity-50 group overflow-hidden relative"
  >
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>;
}
export {
  ContactSection
};
