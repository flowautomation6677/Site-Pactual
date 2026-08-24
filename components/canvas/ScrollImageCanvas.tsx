"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollImageCanvasProps {
  frameCount?: number;
  startIndex?: number;
  imagePrefix?: string;
  mobileImagePrefix?: string;
  mobileBreakpoint?: number;
  imageExtension?: string;
  padLength?: number;
}

export default function ScrollImageCanvas({
  frameCount = 102,
  startIndex = 0,
  imagePrefix = "/Imagens_Scrool_Mouse/frame_",
  mobileImagePrefix,
  mobileBreakpoint = 768,
  imageExtension = ".webp",
  padLength = 3,
}: ScrollImageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedFirst, setLoadedFirst] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [activePrefix, setActivePrefix] = useState<string | null>(null);

  // Variáveis para interpolação suave do frame
  const scrollRef = useRef({
    currentFrame: 0,
    targetFrame: 0,
  });

  const requestRef = useRef<number | null>(null);

  // Detecta se é mobile (<= 768px) no carregamento/resize para selecionar as imagens otimizadas em 9:16
  useEffect(() => {
    const updateActivePrefix = () => {
      if (typeof window !== "undefined" && mobileImagePrefix) {
        const isMobile = window.innerWidth <= mobileBreakpoint;
        const newPrefix = isMobile ? mobileImagePrefix : imagePrefix;
        setActivePrefix((prev) => (prev !== newPrefix ? newPrefix : prev));
      } else {
        setActivePrefix(imagePrefix);
      }
    };

    updateActivePrefix();
    window.addEventListener("resize", updateActivePrefix);
    return () => window.removeEventListener("resize", updateActivePrefix);
  }, [imagePrefix, mobileImagePrefix, mobileBreakpoint]);

  // Formata o caminho do arquivo (ex: frame_001.webp)
  const getFramePath = (index: number, prefix: string) => {
    const frameNum = index + startIndex;
    return `${prefix}${frameNum.toString().padStart(padLength, "0")}${imageExtension}`;
  };

  useEffect(() => {
    if (!activePrefix) return;

    // Reseta imagens para o novo lote de resolução/orientação
    imagesRef.current = Array(frameCount).fill(null);
    setLoadedFirst(false);

    // 1. Carrega o primeiro frame imediatamente para pintar rápido o canvas
    const img0 = new Image();
    img0.src = getFramePath(0, activePrefix);
    img0.onload = () => {
      imagesRef.current[0] = img0;
      setLoadedFirst(true);

      // 2. Carregamento em lotes (Chunking) para não afogar a banda mobile/3G/4G
      let currentPreloadIndex = 1;
      const chunkSize = 5;

      const loadNextChunk = () => {
        if (currentPreloadIndex >= frameCount) return;

        const endIndex = Math.min(currentPreloadIndex + chunkSize, frameCount);
        let loadedInThisChunk = 0;
        const imagesToLoad = endIndex - currentPreloadIndex;

        for (let i = currentPreloadIndex; i < endIndex; i++) {
          const img = new Image();
          img.src = getFramePath(i, activePrefix);
          img.decode().catch(() => {});
          img.onload = () => {
            imagesRef.current[i] = img;
            loadedInThisChunk++;
            if (loadedInThisChunk === imagesToLoad) {
              currentPreloadIndex = endIndex;
              setTimeout(loadNextChunk, 40);
            }
          };
          img.onerror = () => {
            loadedInThisChunk++;
            if (loadedInThisChunk === imagesToLoad) {
              currentPreloadIndex = endIndex;
              setTimeout(loadNextChunk, 40);
            }
          };
        }
      };

      setTimeout(loadNextChunk, 80);
    };
  }, [activePrefix, frameCount, startIndex, imageExtension, padLength]);

  useEffect(() => {
    if (!loadedFirst) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(scrollRef.current.currentFrame);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Desenho com efeito cover
    function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;

      let renderWidth = w;
      let renderHeight = h;
      let x = 0;
      let y = 0;

      if (canvasRatio > imgRatio) {
        renderHeight = w / imgRatio;
        y = (h - renderHeight) / 2;
      } else {
        renderWidth = h * imgRatio;
        x = (w - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    }

    function drawFrame(frameValue: number) {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(frameValue)));
      const image = imagesRef.current[index];

      if (image && canvas) {
        drawImageCover(ctx!, image, canvas.width, canvas.height);
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parent = canvasRef.current?.parentElement?.parentElement;
      const containerHeight = parent ? parent.clientHeight : document.documentElement.scrollHeight;
      const maxScroll = containerHeight - window.innerHeight;
      const fraction = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      scrollRef.current.targetFrame = fraction * (frameCount - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      let { currentFrame, targetFrame } = scrollRef.current;
      currentFrame = lerp(currentFrame, targetFrame, 0.12);
      scrollRef.current.currentFrame = currentFrame;

      if (Math.abs(targetFrame - currentFrame) > 0.01) {
        drawFrame(currentFrame);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

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



