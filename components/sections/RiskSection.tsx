import { AlertTriangle, ShieldOff, Home } from "lucide-react";

export default function RiskSection() {
  const risks = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />,
      title: "25.235",
      subtitle: "carros roubados no Rio em 2025",
      description: "O estado lidera o ranking do país há anos, e mais da metade aconteceu na Baixada Fluminense.",
    },
    {
      icon: <ShieldOff className="w-8 h-8 text-orange-500 mb-4" />,
      title: "7 em 10",
      subtitle: "veículos sem nenhuma proteção",
      description: "A maioria roda sem cobertura. Quando o pior acontece, o prejuízo fica todo com o dono.",
    },
    {
      icon: <Home className="w-8 h-8 text-rose-500 mb-4" />,
      title: "quase 9 mil",
      subtitle: "famílias perderam o patrimônio",
      description: "Anos de esforço para construir um bem. Tudo perdido num só dia, por um descuido.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-wider text-sm mb-4">
            <AlertTriangle className="w-4 h-4" />
            O PROBLEMA
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-pactual-graphite tracking-tight mb-4">
            O risco é real.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            O que os números do Rio de Janeiro dizem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {risks.map((risk, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {risk.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
                {risk.title}
              </div>
              <div className="text-lg font-bold text-pactual-graphite mb-4 leading-tight">
                {risk.subtitle}
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
