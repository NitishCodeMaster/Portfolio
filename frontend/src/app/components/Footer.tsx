import { Github, Twitter, Linkedin, Dribbble } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold font-display text-white">NK.</h2>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Nitish Kumar. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          {[Github, Twitter, Linkedin, Dribbble].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};
