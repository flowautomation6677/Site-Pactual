"use client";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const criteria = [
    {
      name: "Consulta ao SPC/Serasa",
      pactual: "Sem consulta restritiva (aceitação garantida)",
      traditional: "Recusa imediata ou burocracia para negativados",
    },
    {
      name: "Formação do Preço",
      pactual: "Preço justo, baseado apenas no valor do veículo (Tabela FIPE)",
      traditional: "Varia pela sua idade, gênero, CEP e se tem garagem",
    },
    {
      name: "Burocracia na Adesão",
      pactual: "Processo simplificado e ágil, com foco na sua proteção",
      traditional: "Longo processo de análise de risco e aprovação",
    },
    {
      name: "Foco do Atendimento",
      pactual: "Mutualismo: todos se ajudam para resolver o problema rápido",
      traditional: "Lucratividade corporativa acima das necessidades do cliente",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pactual-graphite">
            Por que a Pactual é diferente?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Compare o nosso modelo de proteção veicular com os seguros tradicionais e entenda onde você ganha.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-pactual-institutional text-white">
            <div className="p-6 hidden md:block">
              <h3 className="font-bold text-lg">Critério Avaliado</h3>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-l border-white/10 bg-pactual-blue/10">
              <h3 className="font-bold text-xl text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                <Check className="w-5 h-5 text-pactual-blue" />
                Proteção Pactual
              </h3>
            </div>
            <div className="p-6 md:border-l border-white/10 opacity-90">
              <h3 className="font-bold text-xl text-center md:text-left text-white/80 flex items-center justify-center md:justify-start gap-2">
                <X className="w-5 h-5 text-red-400" />
                Seguro Tradicional
              </h3>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {criteria.map((item) => (
              <div key={item.name} className="grid grid-cols-1 md:grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-4 md:p-6 flex items-center bg-slate-50/50 md:bg-transparent">
                  <span className="font-semibold text-pactual-graphite text-sm md:text-base">
                    {item.name}
                  </span>
                </div>
                <div className="p-4 md:p-6 md:border-l border-pactual-blue/20 bg-pactual-blue/5">
                  <p className="text-pactual-graphite font-medium text-sm md:text-base">
                    {item.pactual}
                  </p>
                </div>
                <div className="p-4 md:p-6 md:border-l border-slate-100">
                  <p className="text-slate-500 text-sm md:text-base">
                    {item.traditional}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
