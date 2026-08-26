import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  FileText,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Maximize2
} from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export function ResumeModal({ isOpen, onClose }) {
  const { resume, personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl my-4 rounded-3xl border border-white/[0.12] bg-[#09090e]/98 p-5 sm:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Subtle Border Glow */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          {/* 1. TOP HEADER & CONTROL BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] shrink-0">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {personal.name}'s Resume
                </h2>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
                  <span>PDF Document</span>
                  <span>•</span>
                  <span>{resume.lastUpdated} Edition</span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex items-center gap-2.5 self-end sm:self-auto">
              <a
                href={resume.pdfUrl}
                download={resume.downloadFilename}
                className="btn-sand-primary flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold interactive shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={resume.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sand-dark flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium interactive"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden sm:inline">Open in Tab</span>
              </a>

              <button
                onClick={onClose}
                aria-label="Close resume viewer"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all interactive ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. IN-PORTFOLIO COMPLETE PDF VIEWER */}
          <div className="relative my-4 rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950 flex-1 min-h-[50vh] shadow-inner">
            <iframe
              src={`${resume.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title="Nitish Kumar Resume PDF"
              className="w-full h-full min-h-[52vh] sm:min-h-[60vh] border-0"
            />
          </div>

          {/* 3. RESUME HIGHLIGHT STRIP */}
          <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400 shrink-0">
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified: MERN Stack • Java DSA • B.Tech CSE (2022-2026)</span>
            </div>
            
            <div className="text-[11px] text-zinc-400 font-mono">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">Esc</kbd> to close
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
