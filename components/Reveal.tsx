"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function Reveal({ children, delay = 0, direction = "up", duration = 0.5 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40, opacity: 0 };
      case "down": return { y: -40, opacity: 0 };
      case "left": return { x: 40, opacity: 0 };
      case "right": return { x: -40, opacity: 0 };
      default: return { y: 40, opacity: 0 };
    }
  };

  return (
    <div ref={ref} className="h-full">
      <motion.div
        variants={{
          hidden: getInitialPosition(),
          visible: { opacity: 1, x: 0, y: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
