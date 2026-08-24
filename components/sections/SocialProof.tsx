"use client";
import { useEffect, useRef, useState } from "react";
import { CheckCheck, Shield, Play } from "lucide-react";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <Reveal delay={0}>
            <AnimatedCounter target={15} prefix="+" label="anos de mercado" />
          </Reveal>
          <Reveal delay={0.2}>
            <AnimatedCounter target={12000} prefix="+" label="famílias protegidas" />
          </Reveal>
          <Reveal delay={0.4}>
            <AnimatedCounter target={100} suffix="%" label="abrangência nacional" />
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-pactual-blue font-semibold text-sm border border-blue-100">
              <Shield className="w-4 h-4" />
              HISTÃ“RIA REAL
            </div>
            
            <h3 className="text-3xl md:text-5xl font-extrabold text-pactual-graphite leading-tight">
              Recuperamos o veículo dele em <span className="text-pactual-blue">2 dias.</span>
            </h3>
            
            <p className="text-lg text-slate-600">
              Essa é a história real de um dos nossos associados.
            </p>

            <div className="bg-[#0f172a] text-white rounded-2xl p-6 md:p-8 mt-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <blockquote className="text-xl font-medium mb-6">
                  "Você me paga para resolver o seu problema. <br />
                  <span className="text-pactual-blue">E eu resolvo.</span>"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                    DF
                  </div>
                  <div>
                    <p className="font-bold text-white">Douglas Farias</p>
                    <p className="text-xs text-slate-400">Presidente, Pactual Benefícios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] shadow-2xl border-[8px] border-black overflow-hidden flex-shrink-0 group">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-3xl w-40 mx-auto pointer-events-none"></div>
              
              <video 
                ref={videoRef}
                src="/videos/recuperacao.mp4" 
                controls={isPlaying} 
                className="w-full h-full object-cover rounded-[32px]"
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              ></video>

              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/30"
                  onClick={handlePlayVideo}
                >
                  <div className="w-20 h-20 bg-pactual-blue rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(14,160,248,0.6)] transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 ml-2" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-pactual-graphite">
            O que dizem nossos associados
          </h2>
        </div>

        {/* Real Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Pr Eliel Lima",
              location: "Freguesia / RJ",
              text: "Eu e minha família tivemos um acidente horrível há um tempo atrás, nosso carro capotou várias vezes e pela mão de Deus todos nós sobrevivemos. Ao acionar a PACTUAL Abm eu e minha família tivemos a assistência que merecíamos, tive meu veículo indenizado por perda total sem burocracia, por isso indicamos os benefícios da PACTUAL.",
              image: "/images/testimonials/eliel.jpg"
            },
            {
              name: "Arnaldo Crispim",
              location: "Nova Iguaçu / RJ",
              text: "Me envolvi em um acidente quando um caminhão colidiu com meu veículo, e ao acionar a PACTUAL Abm pode contar com uma assistência que foi fundamental na resolução do meu problema. Tem Pactual? Ã‰ bom ter.",
              image: "/images/testimonials/arnaldo.jpg"
            },
            {
              name: "José Adilson",
              location: "Diadema / SP",
              text: "Tive meu carro envolvido em uma colisão, acionei a PACTUAL Abm que prontamente agilizou o reparo do meu veículo.",
              image: "/images/testimonials/adilson.jpg"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col relative">
              <div className="absolute top-8 right-8 text-slate-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <blockquote className="text-slate-600 italic flex-1 relative z-10 mb-8 pt-4">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-pactual-blue"
                />
                <div>
                  <h4 className="text-pactual-graphite font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

