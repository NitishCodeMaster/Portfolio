import { useEffect, useState } from "react";
import { motion } from "motion/react";
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "button" || target.tagName.toLowerCase() === "a" || target.closest("button") || target.closest("a")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return <div className="hidden md:block">
      <motion.div
    className="fixed top-0 left-0 w-4 h-4 bg-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    animate={{
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: isHovering ? 2 : 1
    }}
    transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
  />
      <motion.div
    className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
    animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovering ? 1.5 : 1
    }}
    transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
  />
    </div>;
};
export {
  CustomCursor
};
