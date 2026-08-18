import InteractiveConversionForm from "./InteractiveConversionForm";
import { ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-light.jpg" 
          alt="Proteção Veicular Premium" 
          fill 
          className="object-cover object-right lg:object-center animate-ken-burns"
          priority
        />
        {/* Gradient that is solid on the left and transparent on the right to reveal the image, just like the reference */}
        <div className="absolute inset-0 bg-white/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-bold mb-6 border border-green-200 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              Associação regulamentada • LC 15.040/2024
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-pactual-graphite sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1]">
              Sua tranquilidade levada a sério. <span className="text-pactual-blue block mt-2">Proteção veicular de verdade.</span>
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Há mais de 15 anos protegendo famílias e veículos comerciais com o poder do associativismo. <strong>Preço justo, sem análise de crédito e com atendimento humano 24 horas por dia.</strong>
            </p>
          </div>
          
          <div className="lg:col-span-6 relative">
            <InteractiveConversionForm />
            
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-600 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-pactual-blue" />
                <span>Ambiente 100% Seguro</span>
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
