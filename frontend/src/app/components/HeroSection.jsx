import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";
import gsap from "gsap";
import { ArrowDown, Code2 } from "lucide-react";
function ParticleField() {
  const ref = useRef(null);
  const particles = useMemo(() => {
    const count = 800;
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 14;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 6;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return temp;
  }, []);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
    transparent
    color="#f8f7f5"
    size={0.01}
    sizeAttenuation={true}
    depthWrite={false}
    opacity={0.7}
    blending={THREE.AdditiveBlending}
  />
      </Points>
    </group>;
}
function HeroSection() {
  const titleRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, rotationX: 20 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "power4.out", delay: 0.2 }
      );
    }
  }, []);
  return <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {
    /* 3D Background */
  }
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </div>

      {
    /* Radial Gradient Overlay */
  }
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,1)_100%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-14">
        <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="mb-8"
  >
          <div className="relative w-40 h-40 rounded-full flex items-center justify-center">
            <div
    aria-hidden
    className="absolute inset-0 rounded-full"
    style={{
      background: "radial-gradient(circle at 30% 20%, rgba(197,168,115,0.12), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12))",
      padding: 6,
      boxShadow: "0 8px 30px rgba(181,143,73,0.06)",
      borderRadius: "9999px"
    }}
  />
            <div className="relative w-36 h-36 rounded-full bg-[linear-gradient(180deg,#0b1220,#071028)] flex items-center justify-center overflow-hidden">
              <div
    className="absolute w-full h-full rounded-full"
    style={{
      boxShadow: "inset 0 0 0 3px rgba(197,168,115,0.12), 0 6px 18px rgba(0,0,0,0.6)"
    }}
  />
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-[rgba(197,168,115,0.06)] to-transparent flex items-center justify-center text-xl font-semibold text-[var(--color-pearl)]">
                {
    /* Placeholder initials */
  }
                <span className="select-none">NK</span>
              </div>
            </div>
          </div>
        </motion.div>

        <h1
    ref={titleRef}
    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05] opacity-0"
  >
          Hi, I'm <span className="text-[var(--color-gold)]">Nitish Kumar</span>
          <br />
          <span className="text-white/85 font-light">Full Stack Engineer</span>
        </h1>

        <motion.p
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="max-w-2xl text-md md:text-lg text-white/60 mb-8 font-light"
  >
          I design and build premium, high-performance web experiences — refined UI, subtle motion, and production-grade engineering.
        </motion.p>

        <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.35 }}
    className="flex flex-col sm:flex-row items-center gap-4"
  >
          <a
    href="#projects"
    className="relative px-8 py-3 rounded-full font-semibold text-black bg-[var(--color-pearl)] shadow-[0_8px_30px_rgba(11,18,32,0.45)] flex items-center gap-3 overflow-hidden"
  >
            <span>View Projects</span>
            <Code2 className="w-4 h-4 text-[var(--color-navy-900)]" />
          </a>
          <a
    href="#contact"
    className="px-6 py-3 rounded-full border border-[rgba(181,143,73,0.14)] text-white font-medium transition-colors"
    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }}
  >
            Contact Me
          </a>
        </motion.div>
      </div>

      {
    /* Scroll Indicator */
  }
      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
  >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>;
}
export {
  HeroSection
};
