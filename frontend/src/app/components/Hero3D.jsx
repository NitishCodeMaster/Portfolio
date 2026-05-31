import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
function FlowingStars() {
  const deepRef = useRef(null);
  const brightRef = useRef(null);
  const glowRef = useRef(null);
  const [deepPositions, deepCount] = useMemo(() => {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const sideBias = Math.random() < 0.48 ? Math.sign(Math.random() - 0.5) * (4 + Math.random() * 7) : 0;
      positions[i * 3] = sideBias || (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 11.5;
      positions[i * 3 + 2] = -1.2 - Math.random() * 4.8;
    }
    return [positions, count];
  }, []);
  const flowingStars = useMemo(() => {
    return Array.from({ length: 310 }, () => ({
      x: (Math.random() - 0.5) * 24,
      y: Math.random() * 12 - 6,
      z: -1.2 - Math.random() * 4.1,
      speed: 0.07 + Math.random() * 0.2,
      drift: 0.06 + Math.random() * 0.18,
      twinkle: 0.45 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2
    }));
  }, []);
  const brightPositions = useMemo(() => new Float32Array(flowingStars.length * 3), [flowingStars.length]);
  const glowPositions = useMemo(() => new Float32Array(flowingStars.length * 3), [flowingStars.length]);
  useFrame((state, delta) => {
    if (deepRef.current) {
      deepRef.current.rotation.z += delta * 6e-3;
      deepRef.current.rotation.y += delta * 4e-3;
    }
    const time = state.clock.elapsedTime;
    for (let i = 0; i < flowingStars.length; i += 1) {
      const star = flowingStars[i];
      const wave = Math.sin(time * 0.55 + star.phase + star.y * 0.4) * 0.16;
      star.x += (star.drift + wave * 0.08) * delta;
      star.y -= star.speed * delta;
      if (star.y < -6.4 || star.x > 11.8) {
        star.x = -11.4 + Math.random() * 22.8;
        star.y = 5.4 + Math.random() * 2.9;
        star.z = -1.2 - Math.random() * 4.1;
        star.speed = 0.07 + Math.random() * 0.2;
      }
      const pulse = 1 + Math.sin(time * (1.1 + star.twinkle) + star.phase) * 0.11;
      const base = i * 3;
      brightPositions[base] = star.x + wave;
      brightPositions[base + 1] = star.y;
      brightPositions[base + 2] = star.z;
      glowPositions[base] = star.x + wave * pulse;
      glowPositions[base + 1] = star.y;
      glowPositions[base + 2] = star.z;
    }
    if (brightRef.current) {
      brightRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (glowRef.current) {
      glowRef.current.geometry.attributes.position.needsUpdate = true;
      glowRef.current.rotation.z = Math.sin(time * 0.08) * 0.025;
    }
  });
  return <>
      <points ref={deepRef}>
        <bufferGeometry>
          <bufferAttribute
    attach="attributes-position"
    count={deepCount}
    array={deepPositions}
    itemSize={3}
  />
        </bufferGeometry>
        <pointsMaterial
    size={0.013}
    color="#dbe9ff"
    transparent
    opacity={0.82}
    sizeAttenuation
    depthWrite={false}
    blending={THREE.AdditiveBlending}
  />
      </points>

      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute
    attach="attributes-position"
    count={flowingStars.length}
    array={glowPositions}
    itemSize={3}
  />
        </bufferGeometry>
        <pointsMaterial
    size={0.034}
    color="#9fc8ff"
    transparent
    opacity={0.24}
    sizeAttenuation
    depthWrite={false}
    blending={THREE.AdditiveBlending}
  />
      </points>

      <points ref={brightRef}>
        <bufferGeometry>
          <bufferAttribute
    attach="attributes-position"
    count={flowingStars.length}
    array={brightPositions}
    itemSize={3}
  />
        </bufferGeometry>
        <pointsMaterial
    size={0.017}
    color="#ffffff"
    transparent
    opacity={0.96}
    sizeAttenuation
    depthWrite={false}
    blending={THREE.AdditiveBlending}
  />
      </points>
    </>;
}
const Hero3D = () => {
  return <div className="absolute inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 4.5], fov: 58 }} dpr={[1, 1.25]} gl={{ antialias: true, powerPreference: "high-performance" }}>
          <color attach="background" args={["#020203"]} />
          <fog attach="fog" args={["#020203", 4, 10]} />
          <FlowingStars />
        </Canvas>
      </Suspense>
    </div>;
};
export {
  Hero3D
};
