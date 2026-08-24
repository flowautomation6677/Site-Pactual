"use client";

import { useEffect, useRef, useState } from "react";

/**
 * VideoScrollScrubber
 * Vincula o currentTime de um <video> ao progresso de scroll de um
 * contêiner alto (`h-[300vh]`), com interpolação via requestAnimationFrame.
 */
export default function VideoScrollScrubber({
  desktopSrc,
  mobileSrc,
  poster,
}: {
  desktopSrc: string;
  mobileSrc: string;
  poster: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Respeita prefers-reduced-motion: usuário sensível a movimento
  // recebe o poster estático, sem scrubbing.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || reducedMotion) return;

    let unlocked = false;

    function unlockIOSSeek() {
      // iOS costuma só responder a mudanças de currentTime depois de um
      // play()/pause() programático inicial, mesmo com o vídeo mudo.
      if (unlocked) return;
      unlocked = true;
      video!
        .play()
        .then(() => video!.pause())
        .catch(() => {
          /* autoplay bloqueado é esperado aqui; seguimos mesmo assim */
        });
    }

    function onLoadedMetadata() {
      setReady(true);
      unlockIOSSeek();
    }

    function onScroll() {
      if (!video || video.readyState < video.HAVE_FUTURE_DATA) return;
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
      targetTimeRef.current = progress * (video.duration || 0);
    }

    // Loop de interpolação: evita saltos bruscos de currentTime
    function tick() {
      if (video) {
        const delta = targetTimeRef.current - video.currentTime;
        if (Math.abs(delta) > 0.01) {
          video.currentTime += delta * 0.08; // lerp mais suave para "peso" cinemático
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] bg-black">
        {reducedMotion ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt="Pactual Proteção Veicular"
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            poster={poster}
            className="h-full w-full object-cover"
          >
            {/* Abordagem 1: Usando media queries dentro da tag video */}
            <source src={desktopSrc} type="video/mp4" media="(min-width: 768px)" />
            <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
          </video>
        )}
        {!ready && !reducedMotion && (
          <div className="absolute inset-0 bg-black/20" aria-hidden />
        )}
    </div>
  );
}
