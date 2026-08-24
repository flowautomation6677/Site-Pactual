import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import StepsLine from "@/components/ui/StepsLine";

export default function HowItWorks() {
  const steps = [
    {
      title: "Cotação em 1 minuto",
      description: "Preencha a placa e receba a tabela exata pelo WhatsApp sem compromisso.",
    },
    {
      title: "Vistoria Digital",
      description: "Faça as fotos do seu veículo pelo celular, de onde estiver.",
    },
    {
      title: "Proteção Imediata",
      description: "Assine digitalmente e seu patrimônio já está protegido no mesmo instante.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pactual-graphite">
            Como funciona a contratação?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Processo 100% online, sem burocracia e sem enrolação. Do primeiro clique Ã  proteção ativada em minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Connecting line using GSAP ScrollTrigger */}
            <StepsLine />

            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <Reveal key={step.title} delay={idx * 0.2}>
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 z-10 w-12 h-12 rounded-full bg-pactual-blue text-white font-extrabold text-xl flex items-center justify-center border-4 border-slate-50">
                      {idx + 1}
                    </div>
                    <div className="ml-6 mt-1">
                      <h3 className="text-xl font-bold text-pactual-graphite mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image 
              src="/images/vistoria.jpg" 
              alt="Vistoria Digital pelo Celular" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

