import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef, Suspense } from "react";
import { SafeCanvasBoundary } from "./ErrorBoundary";

function Globe() {
    const ref = useRef();
    const texture = useLoader(
        TextureLoader,
        "/earth_night.jpg"
    );

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.0006;
        }
    });

    return (
        <Sphere
            ref={ref}
            args={[6, 64, 64]}
            position={[0, -5.4, 0]}
        >
            <meshStandardMaterial
                map={texture}
                emissive={"#1e1b4b"}
                emissiveIntensity={0.2}
                roughness={0.7}
                metalness={0.1}
            />
        </Sphere>
    );
}

export default function EarthGlobe() {
    return (
        <SafeCanvasBoundary>
            <div className="absolute bottom-[-680px] left-0 w-full h-[1200px] pointer-events-none opacity-85 z-0">
                <Canvas camera={{ position: [0, 0, 7] }}>
                    <ambientLight intensity={1.2} />
                    <pointLight position={[5, 5, 5]} intensity={2} />
                    <Suspense fallback={null}>
                        <Globe />
                    </Suspense>
                </Canvas>
            </div>
        </SafeCanvasBoundary>
    );
}