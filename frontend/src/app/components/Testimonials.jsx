import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    content: "Nitish is hands down one of the most talented engineers I've worked with. He doesn't just write code; he crafts experiences. Our product's performance increased by 200% after he joined.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwxfHx8fDE3Nzk2MzE4OTR8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    name: "David Chen",
    role: "Founder @ Lumina",
    content: "We hired Nitish for a complete rebuild of our e-commerce platform. The attention to detail, smooth animations, and flawless architecture blew our minds. Highly recommended!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwxfHx8fDE3Nzk2MzE4OTR8MA&ixlib=rb-4.1.0&q=80&w=400"
  },
  {
    name: "Elena Rodriguez",
    role: "Design Lead @ StudioX",
    content: "It's rare to find an engineer who truly understands design. Nitish bridges the gap perfectly. He translated our complex Figma files into a pixel-perfect reality.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwxfHx8fDE3Nzk2MzE4OTR8MA&ixlib=rb-4.1.0&q=80&w=400"
  }
];
const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  return <section id="testimonials" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Client <span className="text-indigo-400">Love</span>
          </h2>
          <p className="text-zinc-400">What people are saying about my work.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10" />
                    
                    <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8 italic relative z-10">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img
    src={testimonial.image}
    alt={testimonial.name}
    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/50"
  />
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-zinc-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
    onClick={scrollPrev}
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
  >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
    onClick={scrollNext}
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
  >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export {
  Testimonials
};
