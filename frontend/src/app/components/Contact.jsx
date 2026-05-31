import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3e3);
    }, 1500);
  };
  return <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {
    /* Background elements */
  }
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Great</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative magic, I'd love to hear about it.
              </p>
            </div>

            <div className="space-y-6">
              {[
    { icon: Mail, label: "Email", value: "hello@nitishkumar.dev" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" }
  ].map((item, i) => <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>)}
            </div>
          </motion.div>

          <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
            <form onSubmit={handleSubmit} className="p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input
    type="text"
    required
    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all"
    placeholder="John Doe"
  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input
    type="email"
    required
    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all"
    placeholder="john@example.com"
  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Subject</label>
                <input
    type="text"
    required
    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all"
    placeholder="Project Inquiry"
  />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea
    required
    rows={4}
    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all resize-none"
    placeholder="Tell me about your project..."
  />
              </div>

              <button
    type="submit"
    disabled={isSubmitting || submitted}
    className="w-full py-4 bg-white text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-70"
  >
                {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full" />
                  </motion.div> : submitted ? "Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>;
};
export {
  Contact
};
