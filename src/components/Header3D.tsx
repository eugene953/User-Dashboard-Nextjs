"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function ImageBox() {
  const texture = useLoader(THREE.TextureLoader, "/images/bitsec-logo.jpg"); 

  return (
    <mesh rotation={[0, 0.8, 0]}>
      <boxGeometry args={[3, 3, 0.3]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function Header3D() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative h-48 sm:h-64 w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-lg"
    >
      <Canvas camera={{ position: [3, 3, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <ImageBox />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.0} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="font-semibold mt-36 text-slate-900 tracking-wider uppercase text-sm sm:text-base">
            BITSEC
          </div>
        </div>
      </div>
    </motion.div>
  );
}
