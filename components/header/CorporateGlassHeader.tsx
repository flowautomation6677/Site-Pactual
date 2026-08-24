"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CorporateGlassHeader() {
  const [isScrolledState, setIsScrolledState] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setIsScrolledState(window.scrollY > 30);
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledState
          ? "bg-white/90 backdrop-blur-lg border-b border-pactual-slate/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image 
              src={isScrolledState ? "/images/logos/logo-horizontal-normal.png" : "/images/logos/logo-horizontal-white.png"} 
              alt="Pactual Associação de Benefícios Mútuos" 
              width={140} 
              height={40} 
              className="object-contain transition-opacity hover:opacity-80"
              priority
            />
          </Link>
          
          <nav className={`hidden lg:flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${isScrolledState ? 'text-slate-600' : 'text-white'}`}>
            <Link href="#como-funciona" className="hover:opacity-80 transition-opacity">Como Funciona</Link>
            <Link href="#coberturas" className="hover:opacity-80 transition-opacity">Coberturas</Link>
            <Link href="#depoimentos" className="hover:opacity-80 transition-opacity">Depoimentos</Link>
            <Link href="#faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center space-x-2 bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-200 shadow-sm ring-2 ring-green-500/10">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-600" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-green-800">
              Assistência 24h <span className="hidden lg:inline">operando</span>
            </span>
          </div>

          <Link
            href="#cota-agora"
            className={`inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm font-bold transition-all focus:outline-none ${
              isScrolledState
                ? "text-pactual-blue bg-pactual-blue/10 hover:bg-pactual-blue/20"
                : "text-white bg-white/20 hover:bg-white/30"
            }`}
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

