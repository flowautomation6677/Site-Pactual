"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StepsLine() {
  const lineRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Return early if we are not on client
    if (typeof window === "undefined" || !lineRef.current) return;

    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const path = lineRef.current!;
      const length = path.getTotalLength();
      
      // Set initial state
      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length 
      });
      
      // Animate line based on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 60%", 
          end: "bottom 50%", 
          scrub: 1 // Smooth scrub
        },
      });
    });

    // Mobile fallback (no scrub, just simple animation)
    mm.add("(max-width: 767px)", () => {
      const path = lineRef.current!;
      const length = path.getTotalLength();
      
      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length 
      });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top 70%",
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 bottom-0 left-6 w-1 z-0 pointer-events-none">
      <svg 
        className="w-full h-full text-pactual-blue" 
        preserveAspectRatio="none" 
        viewBox="0 0 4 1000" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          ref={lineRef} 
          d="M 2,0 L 2,1000" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeDasharray="10 10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
