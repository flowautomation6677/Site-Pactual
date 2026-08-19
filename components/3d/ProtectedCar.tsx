"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, OrbitControls, Sphere, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function CarModel() {
  const { scene } = useGLTF("/models/mercedes.glb");
  // Reduced scale to fit perfectly inside the sphere and canvas
  return <primitive object={scene} scale={0.45} position={[0, -0.4, 0]} rotation={[0, -Math.PI / 4, 0]} />;
}

export default function ProtectedCar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] z-20 pointer-events-auto flex items-center justify-center overflow-visible">
      <Canvas camera={{ position: [6, 2, 9], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            {/* The Car */}
            <CarModel />
            
            {/* The Energy Shield - Made lighter, more transparent, less refractive */}
            <Sphere args={[2.8, 64, 64]} position={[0, -0.1, 0]}>
              <MeshTransmissionMaterial 
                transmission={1} 
                color="#8ecae6" 
                thickness={0.1} 
                roughness={0} 
                ior={1.1}
                clearcoat={1}
                clearcoatRoughness={0}
                transparent={true}
                opacity={0.3}
              />
            </Sphere>
          </Float>

          {/* Environment reflection (essential for glass materials) */}
          <Environment preset="city" />
          
          {/* Shadow underneath */}
          <ContactShadows position={[0, -2.8, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Suspense>
        
        {/* Interaction controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1} 
          maxPolarAngle={Math.PI / 2 + 0.1} 
          minPolarAngle={Math.PI / 3} 
        />
      </Canvas>
    </div>
  );
}
