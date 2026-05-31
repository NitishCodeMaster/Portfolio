import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
function MainLayout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("a") || target.closest("button") || target.classList.contains("interactive")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return <div className="min-h-screen bg-black text-white relative selection:bg-purple-500/30">
      {
    /* Custom Cursor */
  }
      <motion.div
    className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[100] mix-blend-difference hidden md:block"
    animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovering ? 2 : 1,
      backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"
    }}
    transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
  />
      <motion.div
    className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
    animate={{
      x: mousePosition.x - 4,
      y: mousePosition.y - 4
    }}
    transition={{ type: "spring", stiffness: 1e3, damping: 40, mass: 0.1 }}
  />

      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>;
}
export {
  MainLayout
};
