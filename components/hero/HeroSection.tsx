import InteractiveConversionForm from "./InteractiveConversionForm";
import { ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import ProtectedCar from "@/components/3d/ProtectedCar";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/30"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-[0.03] pointer-events-none">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-hero)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center relative">
          
          <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mb-12 lg:mb-0 relative z-20 flex flex-col">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-bold mb-6 border border-green-200 shadow-sm w-fit mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4" />
              Associação regulamentada • LC 15.040/2024
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-pactual-graphite sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1]">
              Sua tranquilidade levada a sério. <span className="text-pactual-blue block mt-2">Proteção veicular de verdade.</span>
            </h1>
            <p className="mt-6 mb-10 text-base text-slate-600 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Há mais de 15 anos protegendo famílias e veículos comerciais. <strong>Preço justo, sem análise de crédito e atendimento humano 24h.</strong>
            </p>

            <div className="w-full">
              <InteractiveConversionForm />
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-pactual-blue" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-pactual-blue fill-pactual-blue" />
                <span>5.0 no Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-pactual-blue" />
                <span>+10.000 Protegidos</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative z-20 flex justify-center items-center w-full">
            <ProtectedCar />
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-pactual-blue" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-hero)" />
        </svg>
      </div>
    </section>
  );
}
