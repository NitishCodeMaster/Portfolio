import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Sparkles } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

function ContactSection() {
  const { personal, socials } = portfolioData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section className="py-16 md:py-20 relative z-10 bg-transparent border-t border-white/[0.04] overflow-hidden" id="contact">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* Info Side */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#130b24]/90 border border-purple-500/40 text-[#d8b4fe] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Get In Touch</span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight leading-tight"
            >
              Let's build something <span className="text-gradient">exceptional</span> together.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-zinc-400 text-sm sm:text-base font-light mb-8 leading-relaxed"
            >
              Open to Full Stack Developer opportunities, engineering collaborations, and technical discussions. Feel free to reach out anytime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3.5"
            >
              <div className="flex items-center gap-3.5 group p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-[#130b24]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/25 text-purple-300 group-hover:border-purple-400/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                  <Mail className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Direct Email</div>
                  <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors interactive">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-[#130b24]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/25 text-purple-300 group-hover:border-purple-400/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                  <Phone className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Phone</div>
                  <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors interactive">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 hover:bg-[#130b24]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/25 text-purple-300 group-hover:border-purple-400/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
                  <MapPin className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-sm font-semibold text-zinc-200">{personal.location}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex gap-2.5 mt-6"
            >
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300 interactive shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300 interactive shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#09090e]/90 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col gap-4">
              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium text-center">
                  ✨ Message transmitted successfully! Thank you for getting in touch.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[11px] font-semibold text-zinc-300 tracking-wide uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-all interactive"
                    placeholder="Nitish Kumar"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-semibold text-zinc-300 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-all interactive"
                    placeholder="yourname@gmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[11px] font-semibold text-zinc-300 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-all resize-none interactive"
                  placeholder="Hello Nitish, I'd like to discuss a project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-sand-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2.5 interactive disabled:opacity-50 text-xs font-bold tracking-wider uppercase group shadow-[0_10px_25px_rgba(168,85,247,0.25)] mt-2"
              >
                <span>{isSubmitting ? "Transmitting Signal..." : "Send Message"}</span>
                {!isSubmitting && (
                  <div className="grid h-5 w-5 place-items-center rounded-md bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export { ContactSection };
