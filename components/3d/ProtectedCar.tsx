"use client";
import React, { useEffect, useState } from "react";

export default function ProtectedCar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      {/* @ts-expect-error - model-viewer is a web component */}
      <model-viewer
        src="/teste/models/mercedes.glb"
        alt="Carro protegido pela Pactual, em 3D"
        auto-rotate
        rotation-per-second="12deg"
        camera-orbit="-25deg 75deg 105%"
        field-of-view="30deg"
        shadow-intensity="1"
        shadow-softness="0.8"
        disable-zoom
        interaction-prompt="none"
        loading="lazy"
        style={{ width: "100%", height: "500px", maxWidth: "800px", zIndex: 10 }}
      />
    </div>
  );
}
