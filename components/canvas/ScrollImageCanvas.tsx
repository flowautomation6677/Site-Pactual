"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollImageCanvasProps {
  frameCount?: number;
  imagePrefix?: string;
  imageExtension?: string;
}

export default function ScrollImageCanvas({
  frameCount = 102,
  imagePrefix = "/teste/Imagens_Scrool_Mouse/frame_",
  imageExtension = ".webp",
}: ScrollImageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedFirst, setLoadedFirst] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>(Array(frameCount).fill(null));
  
  // Variables to manage the smooth scroll transition
  const scrollRef = useRef({
    currentFrame: 0,
    targetFrame: 0,
  });

  const requestRef = useRef<number | null>(null);

  // Helper to format frame numbers (e.g. 0 -> "000", 12 -> "012")
  const getFramePath = (index: number) => {
    return `${imagePrefix}${index.toString().padStart(3, "0")}${imageExtension}`;
  };

  useEffect(() => {
    // 1. Preload the first image immediately to paint the canvas fast
    const img0 = new Image();
    img0.src = getFramePath(0);
    img0.onload = () => {
      imagesRef.current[0] = img0;
      setLoadedFirst(true);
      
      // 2. Carrega o resto em blocos pequenos (Chunking) para não estrangular a rede (otimização 3G)
      let currentPreloadIndex = 1;
      const chunkSize = 5; // Apenas 5 requests paralelos por vez

      const loadNextChunk = () => {
        if (currentPreloadIndex >= frameCount) return;
        
        const endIndex = Math.min(currentPreloadIndex + chunkSize, frameCount);
        let loadedInThisChunk = 0;
        const imagesToLoad = endIndex - currentPreloadIndex;

        for (let i = currentPreloadIndex; i < endIndex; i++) {
          const img = new Image();
          img.src = getFramePath(i);
          // Otimização: Forçar decodificação em background para GPU (evita stutter)
          img.decode().catch(() => {});
          img.onload = () => {
            imagesRef.current[i] = img;
            loadedInThisChunk++;
            if (loadedInThisChunk === imagesToLoad) {
              currentPreloadIndex = endIndex;
              // Aguarda 50ms antes de pedir o próximo lote para dar respiro ao main thread
              setTimeout(loadNextChunk, 50);
            }
          };
          img.onerror = () => {
             // Mesmo com erro, prosseguir para não travar a fila
             loadedInThisChunk++;
             if (loadedInThisChunk === imagesToLoad) {
               currentPreloadIndex = endIndex;
               setTimeout(loadNextChunk, 50);
             }
          }
        }
      };

      // Inicia a fila
      setTimeout(loadNextChunk, 100);
    };
  }, [frameCount, imagePrefix, imageExtension]);

  useEffect(() => {
    if (!loadedFirst) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(scrollRef.current.currentFrame);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing

    // Calculate object-fit: cover drawing
    function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;
      
      let renderWidth = w;
      let renderHeight = h;
      let x = 0;
      let y = 0;

      if (canvasRatio > imgRatio) {
        // Canvas is wider than image (e.g. ultrawide screen)
        renderHeight = w / imgRatio;
        y = (h - renderHeight) / 2;
      } else {
        // Canvas is taller than image (e.g. mobile portrait)
        renderWidth = h * imgRatio;
        x = (w - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    }

    // Draw a specific frame index
    function drawFrame(frameValue: number) {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(frameValue)));
      const image = imagesRef.current[index];
      
      if (image && canvas) {
        drawImageCover(ctx!, image, canvas.width, canvas.height);
      }
    }

    // Scroll listener: just updates the targetFrame
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate fraction of scroll (0 to 1)
      const fraction = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      // Map fraction to a target frame
      scrollRef.current.targetFrame = fraction * (frameCount - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation Loop for smoothing using Lerp (Linear Interpolation)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      let { currentFrame, targetFrame } = scrollRef.current;
      
      // Move current frame 10% closer to the target frame for smooth easing
      currentFrame = lerp(currentFrame, targetFrame, 0.1);
      scrollRef.current.currentFrame = currentFrame;

      // Only draw if there's a meaningful difference to save resources
      if (Math.abs(targetFrame - currentFrame) > 0.01) {
        drawFrame(currentFrame);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [loadedFirst, frameCount]);

  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  );
}
