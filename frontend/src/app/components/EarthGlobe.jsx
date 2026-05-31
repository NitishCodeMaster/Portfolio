import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";

function Globe() {

    const ref = useRef();

    const texture = useLoader(
        TextureLoader,
        "/earth.jpg"
    );

    useFrame(() => {

        if (ref.current) {

            ref.current.rotation.y += 0.0008;

        }

    });

    return (

        <Sphere
            ref={ref}
            args={[6, 128, 128]}
            position={[0, -5.2, 0]}
        >

            <meshStandardMaterial

                map={texture}

                emissive={"#5b21b6"}

                emissiveIntensity={0.4}

            />

        </Sphere>

    )

}

export default function EarthGlobe() {

    return (

        <div className="absolute bottom-[-650px] left-0 w-full h-[1200px] pointer-events-none">

            <Canvas camera={{ position: [0, 0, 7] }}>

                <ambientLight intensity={1.5} />

                <pointLight position={[5, 5, 5]} intensity={3} />

                <Globe />

            </Canvas>

        </div>

    )

}