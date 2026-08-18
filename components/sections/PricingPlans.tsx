"use client";
import { Check, Shield, Plus } from "lucide-react";
import Link from "next/link";
import { pushToDataLayer } from "@/lib/analytics";
import { Reveal } from "@/components/Reveal";

export default function PricingPlans() {
  const plans = [
    {
      name: "BRONZE",
      subtitle: "Proteção essencial",
      icon: <Shield className="w-6 h-6 text-[#cd7f32] fill-[#cd7f32]/20" />,
      iconColor: "text-[#cd7f32]",
      features: [
        { text: "Roubo e Furto", isUpgrade: false },
        { text: "Reboque 400 km (4 por evento)", isUpgrade: false },
        { text: "Chaveiro", isUpgrade: false },
        { text: "Assistência Residencial", isUpgrade: false },
        { text: "Assistência 24h + Monitoramento", isUpgrade: false },
        { text: "Indenização em até 90 dias", isUpgrade: false },
        { text: "Cobertura Nacional", isUpgrade: false }
      ],
      highlight: false
    },
    {
      name: "PRATA",
      subtitle: "Mais cobertura e conforto",
      icon: <Shield className="w-6 h-6 text-[#94a3b8] fill-[#94a3b8]/20" />,
      iconColor: "text-[#94a3b8]",
      features: [
        { text: <span>Roubo, Furto e <strong className="text-pactual-graphite">Colisão</strong></span>, isUpgrade: true },
        { text: <strong className="text-pactual-graphite">Danos a terceiros até R$ 20 mil</strong>, isUpgrade: true },
        { text: <span>Reboque 400 km + <strong className="text-pactual-graphite">Carro reserva 7 dias</strong></span>, isUpgrade: true },
        { text: <strong className="text-pactual-graphite">Cobertura Kit Gás até R$ 2 mil</strong>, isUpgrade: true },
        { text: "Chaveiro + Assistência Residencial", isUpgrade: false },
        { text: "Assistência 24h + Monitoramento", isUpgrade: false },
        { text: "Cobertura Nacional", isUpgrade: false }
      ],
      highlight: false
    },
    {
      name: "OURO",
      subtitle: "A proteção mais completa",
      icon: <Shield className="w-6 h-6 text-[#ffd700] fill-[#ffd700]/20" />,
      iconColor: "text-[#ffd700]",
      features: [
        { text: "Roubo, Furto e Colisão", isUpgrade: false },
        { text: <strong className="text-pactual-graphite">Danos a terceiros até R$ 30 mil</strong>, isUpgrade: true },
        { text: <span><strong className="text-pactual-graphite">Reboque 800 km</strong> + Carro reserva 7 dias</span>, isUpgrade: true },
        { text: <strong className="text-pactual-graphite">Cobertura Kit Gás até R$ 3 mil</strong>, isUpgrade: true },
        { text: "Chaveiro + Assistência Residencial", isUpgrade: false },
        { text: "Assistência 24h + Monitoramento", isUpgrade: false },
        { text: "Cobertura Nacional", isUpgrade: false }
      ],
      highlight: true
    }
  ];

  const handlePlanClick = (planName: string) => {
    pushToDataLayer("click_plan", {
      plan_name: planName
    });
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-pactual-blue/10 text-pactual-blue font-bold text-sm">
            NOSSOS PLANOS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-pactual-graphite tracking-tight mb-4">
            Escolha o seu <span className="text-pactual-blue">nível de proteção.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Do essencial ao mais completo. Bronze, Prata e Ouro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.1}>
              <div 
                className={`h-full relative rounded-3xl overflow-hidden border flex flex-col ${
                  plan.highlight 
                    ? 'border-pactual-blue shadow-2xl scale-100 md:scale-105 z-10' 
                    : 'border-slate-200 shadow-sm hover:shadow-lg'
                } transition-all duration-300 bg-white`}
              >
              {plan.highlight && (
                <div className="bg-[#cd9a32] text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest">
                  MAIS COMPLETO
                </div>
              )}
              
              <div className={`p-8 text-center ${plan.highlight ? 'bg-pactual-navy text-white' : 'bg-slate-50'}`}>
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${plan.highlight ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                  {plan.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-white' : plan.iconColor}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-slate-500'}`}>{plan.subtitle}</p>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 flex-grow mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      {feature.isUpgrade ? (
                        <Plus className={`w-5 h-5 flex-shrink-0 mt-0.5 font-bold ${plan.highlight ? 'text-[#cd9a32]' : 'text-pactual-blue'}`} />
                      ) : (
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 opacity-60 text-slate-400`} />
                      )}
                      <span className={`text-sm font-medium leading-tight text-slate-600`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Link
                    href="#cota-agora"
                    onClick={() => handlePlanClick(plan.name)}
                    className={`block w-full py-4 rounded-xl text-center font-bold text-sm transition-colors ${
                      plan.highlight 
                        ? 'bg-pactual-blue text-white hover:bg-pactual-institutional border-2 border-transparent' 
                        : 'bg-transparent text-pactual-blue border-2 border-pactual-blue hover:bg-pactual-blue/5'
                    }`}
                  >
                    Fazer Cotação deste Plano
                  </Link>
                  <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                    Sem fidelidade. Cancele quando quiser.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
