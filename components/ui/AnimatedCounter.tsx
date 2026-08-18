"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ target, prefix = "", suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasStarted(true);
    }
  }, [isInView]);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  useEffect(() => {
    if (hasStarted) {
      spring.set(target);
    }
  }, [hasStarted, spring, target]);

  const display = useTransform(spring, (current) => {
    const value = Math.round(current);
    // Format number with dots (e.g., 12.000)
    return new Intl.NumberFormat("pt-BR").format(value);
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-pactual-blue mb-2 flex justify-center items-center">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
}
