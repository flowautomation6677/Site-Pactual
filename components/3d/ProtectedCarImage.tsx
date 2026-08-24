"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function ProtectedCarImage() {
  return (
    <div className="z-20 w-full max-w-[800px] pointer-events-auto">
      <Tilt 
        tiltMaxAngleX={10} 
        tiltMaxAngleY={10} 
        perspective={1000} 
        scale={1.05} 
        transitionSpeed={1500} 
        gyroscope={true} 
      >
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(74,144,226,0.3)] border border-white/20">
          <Image 
            src="/images/carro-escudo.webp" 
            alt="Carro com escudo de força translúcido"
            fill
            className="object-cover"
            priority 
          />
        </div>
      </Tilt>
    </div>
  );
}

