import { Clock, MapPin, UserCheck, Home } from "lucide-react";

export default function BenefitsBar() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-current mb-3" />,
      title: "Assistência 24h",
      description: "Suporte e monitoramento em tempo integral para resolver imprevistos a qualquer hora.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-current mb-3" />,
      title: "Cobertura Nacional",
      description: "Você protegido em qualquer lugar do Brasil, para viajar com total tranquilidade.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-current mb-3" />,
      title: "Sem Análise de Perfil",
      description: "Proteção garantida sem consulta ao SPC/Serasa ou restrições por idade e CEP.",
    },
    {
      icon: <Home className="w-8 h-8 text-current mb-3" />,
      title: "Assistência Residencial",
      description: "Benefício estendido para sua casa, garantindo suporte muito além do seu veículo.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 relative z-20 shadow-sm border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="group flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pactual-blue/30"
            >
              <div className="bg-pactual-blue/10 p-3 rounded-xl mb-4 text-pactual-blue group-hover:bg-pactual-blue group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-pactual-graphite mb-2">{benefit.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
